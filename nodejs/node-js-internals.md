- Nodejs é composto por algumas bibliotecas, que juntas formam o que é o node.
  - libuv
  - V8
  - C++ Bindings

O Node utiliza a V8 como Engine Javascript, para interpretar? compilar? código javascript

E utiliza a libuv para realizar I/O? chamadas de TCP, UDP?

Como o node acessa o Operation System?


Falando de Javascript, precisamos responder essas questões

- O que significa ser single-threaded?
- O que raios é um engine JS? E o que, de fato, é o V8?
- Como essas filas de callback funcionam? Existe apenas uma fila?
- O que é um event loop? Como funciona? Quem controla? Faz parte do JS?


Uma Engine JS

consiste em dois componentes
um HEAP DE MEMÓRIA onde acontece a alocação de memória
um CALL STACK onde o código é colocado em frames e empilhado para ser executado

a engine oferece Web APIs para consumo (DOM, AJAX, setTimeout)

Javascript ser single-threaded significa que só temos UMA call stack, ou seja, só podemos executar uma coisa de cada vez. (A CALL STACK NÃO FAZ PARTE DO JS, MAS SIM DO ENGINE)

### Sobre pilhas
Pilhas são um tipo de dado abstrato que serve como uma coleção de elementos. O nome "pilha" deriva da analogia de um conjunto de caixas empilhadas umas sobre as outras, embora seja fácil tirar uma caixa da parte superior da pilha, pegar uma caixa mais abaixo pode exigir que tiremos vários outros itens da pilha primeiro.

A pilha possui dois métodos principais:

push: adiciona outro elemento à coleção
pop: remove o elemento adicionado mais recentemente que ainda não foi removido da pilha e retorna seu valor
Uma coisa importante sobre as pilhas é que a ordem de como os elementos são enviados realmente importa. Nas pilhas, a ordem na qual os elementos saem é chamada LIFO, um acrônimo para Last In First Out, que é bastante autoexplicativo.

Além disso, podemos ter outro método chamado peek, que lê o item adicionado mais recentemente (o topo da pilha) sem removê-lo.

Tudo o que precisamos saber sobre pilhas é o seguinte:

Eles são uma estrutura de dados na qual cada item da pilha possui um valor, no nosso caso, uma instrução ou chamada
Novos itens (chamadas) são adicionados ao topo da pilha
Os itens removidos também saem do topo da pilha

Um erro de stack overflow ocorre quando atingimos o tamanho máximo da call stack. Pilhas são estruturas de dados, o que significa que estão alocadas na memória e a memória não é infinita; portanto, isso pode acontecer com bastante facilidade, especialmente em funções recursivas não tratadas

um engine JS nada mais é do que um ambiente de execução sob demanda para qualquer código JS, quer esse código funcione ou não.


O event loop tem uma única tarefa: Monitorar a call stack e o que é chamado de fila de callbacks. 
