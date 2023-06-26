 /*
 o primeiro conceito apresentando nessa refatoração é a extração de um trecho de código para uma função
 aqui nós estamos extraindo o trecho que realiza um switch/case para uma função. 
 */

 function statement(invoice, plays) {
    let totalAmount = 0;

    let volumeCredits = 0;

    let result = `Statement for ${invoice.customer}\n`;

    const format = new Intl.NumberFormat("en-US",
        {
            style: "currency", currency: "USD",
            minimumFractionDigits: 2
        }).format;

    for (let perf of invoice.performances) {
        const play = playFor(perf);

        let thisAmount = amountFor(perf, playFor(perf));

        // soma créditos por volume
        volumeCredits += Math.max(perf.audience - 30, 0);

        // soma um crédito extra para cada dez espectadores de comédia
        if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience /
            5);

        // exibe a linha para esta requisição
        result += ` ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`; totalAmount += thisAmount;

    }

    result += `Amount owed is ${format(totalAmount / 100)} \n`;
    result += `You earned ${volumeCredits} credits\n`;

    return result;

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance, play) {
        let result = 0;
    
            switch (playFor(aPerformance)) {
                case "tragedy":
                    result = 40000;
    
                    if (aPerformance.audience > 30) {
                        result += 1000 * (aPerformance.audience - 30);
                    }
    
                    break;
    
                case "comedy":
                    result = 30000;
    
                    if (aPerformance.audience > 20) {
                        result += 10000 + 500 * (aPerformance.audience - 20);
                    }
    
                    result += 300 * aPerformance.audience;
    
                    break;
                default:
                    throw new Error(`unknown type: ${playFor(aPerformance)}`);
            }
        
        return result;
    }
}

/*
nessa parte do livro ele comenta sobre a importância de realizar os testes, argumentando que é fácil de cometer
erros, por isso o ideal é testar a cada refatoração, pois quando o erro for cometido, teremos apenas uma pequena modificação
a ser considerada
*/