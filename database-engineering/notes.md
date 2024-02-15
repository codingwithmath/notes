# ANOTAÇÕES SOBRE DATABASE ENGINEERING


### O que é uma transaction?
Um conjunto de queries SQL. Pensamos nas transações como uma unidade de trabalho, separada por diversos “blocos”, que no final formam uma unidade.

Um exemplo de utilização de transação é uma transferência bancária, em que temos a verificação do saldo(`SELECT`), a atualização do saldo (`UPDATE`) e a atualização do saldo de quem está recebendo a transferência(`UPDATE`). Dessa forma, temos 3 blocos de trabalhos, que no final, formam uma unidade de trabalho.


### Como uma transaction funciona?
Como dito anteriormente, a transaction é uma unidade de trabalho, dessa forma, precisamos iniciar o trabalho e encerrá-lo.

todas as transações precisam começar (`BEGIN`).
todas as transações precisam encerrar (`COMMIT`).
caso haja algum problema durante a execução da unidade de trabalho, podemos cancelar (`ROLLBACK`).


### Por que utilizar transaction?
podemos realizar múltiplas ações, como uma única unidade de trabalho. Em cenários que em que uma ação, significa mais de um passo para ser realizada, faz sentido utilizar transactions. Um exemplo é em casos em que exista múltiplos UPDATEs.
Outro motivo para utilizar transaction é para obter `consistência e isolamento`. Ao iniciar uma transação, nós temos um snapshot do banco, para aquele determinado momento. Pensando num cenário em que é necessário fazer uma leitura, em um determinado período, faz sentido utilizar transaction.

## Pontos Importantes
- Alguns bancos de dados são otimizados para determinadas operações de uma transação, como commits e rollbacks. Eles estão preparados para fazerem COMMITs ou ROLLBACKs rapidamente.

- PostgreSQL faz COMMITs rápidos.

- A forma como eles trabalham é: 
    escrever em disco a transaction, e caso se houver `ROLLBACK`, essa seria a operação mais demorada. Já em outros casos, é feito a escrita em memória e caso haja o `ROLLBACK`, essa seria a operação mais rápida.

- consideramos pessimistas as operações que tem `ROLLBACK` rápido.

- consideramos otimista as operações que tem `ROLLBACK` mais demorado.


## Dúvidas 
**Como os bancos se comportam quando há uma falha durante um `COMMIT`?**

Geralmente o banco faz rollback de tudo aquilo que estava acontecendo antes de iniciar.

**Como os bancos se comportam quando há uma falha durante um `ROLLBACK`?**



### O que é atomicity? 

atomicity está relacionada com a garantia de que todas as queries de uma transaction sejam bem sucedidas.
Garante que se alguma query falhar, por qualquer motivo, o rollback aconteça
Garante que se o banco de dados falhar, o rollback aconteça

### Pontos Importantes
- **A falta de atomicidade produz inconsistência.**
    
    Por exemplo, se ao realizar uma transação, o banco falhar e um UPDATE não tiver sido revertido, isso significa falta de atomicidade e falta de consistência.

- Uma `atomic transaction` é uma transaction que vai dar rollback em todas as queries se uma query falhar.
