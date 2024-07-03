Como eh feito um algoritmo de binary search
Pensa que temos um dicionario de 240.000 palavras, isso significa que ao utilizar uma busca simples (checando numero por numero) temos a possibilidade de percorrer esse dicionario 1x, se a palavra que estamos buscando é a primeira, ou 240000x. 
O Binary Search trás a lógica de começar uma pesquisa sempre pelo meio da lista. No caso do dicionário começariamos pela metade 120000. Se a palavra que estamos buscando está numa posição maior ou menos que 120000 já eliminamos metade das possibilidades. Digamos que seja menor. Então o algoritmo verificará se a palavra está posicionado maior ou menor que 60k, depois 30k, 15k, 7.5k, 3750, 938, 469, 235, 118, 59, 30, 15, 8, 4, 2, 1. Isso dá um total de 18 etapas de verificação, no pior cenário possível. Comparado com 240k da busca simples.

implementacao


```python
  def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) -1

    while baixo <= alto:
      meio = (baixo + alto) / 2

      chute = list[meio]

      if chute == item:
        return item
      if chute > item:
        alto = meio - 1
      else:
        baixo = meio - 1


    return None

```


### O que é a Notação Big O?
  Uma forma de medir a quantidade de operações executadas em um algoritmo.

  ** A notação big O estabelece o tempo de execução para a pior hipótese **
  
  Big O serve para medir a quantidade de operações, tanto em tempo de execucação como em crescimento de memória.
  
  Ajuda a quantificar e metrificar a eficiência de um algoritmo.

Exemplos de tempo de execucação, do mais rápido para o mais lento.
- O(log _n_). Tempo logarítmico, exemplo: binary search 
- O(_n_). Tempo LINEAR. Exemplo: pesquisa simples
- O (n * log n) ordenacao rapida
- O(n2) ordenacao lenta
- O(n!) algoritmo bem lento.

Como aplicar Big O Notation?
Aplicamos o Big O quando queremos medir alguma operação. Por exemplo: Q
