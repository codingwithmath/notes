# Boas Práticas com Testes Unitários no JavaScript

### Por que criar testes de unidade?

Testes de unidades são LEVES
 - Rápidos
 - Consistentes
 - Fácil de escrever e fácil de Ler

Rápido Feedback (Confiança)
Como podemos saber que uma unidade de trabalho (features, fixes, chores, refactors...)
funciona de maneira adequada? Podemos escrever código o dia inteiro e não descobrir nenhum pequeno erro.

Flexibilidade
  - Corrigir bugs sem quebrar o que já existe
  - Melhorar o código existente
  - Refatorar um trecho de código
  - Adicionar uma feature sem quebrar o que já funciona hoje


Documentação
 Os testes de unidade detalham o comportamento de uma unidade de trabalho
  - use case
  - repository
  - services
  - integrações

### O Que é um Teste de Unidade 

Unidade = Unidade de trabalho 

Um teste de unidade deve testar o comportamento de uma unidade de trabalho: Dado um input, é esperando um resultado final. 

* Testes de unidade são isolados um do outro * 


## Boas Práticas com Testes de Unidades

### Sempre que Posível use TDD
  TDD é um processo de criação, não um processo de teste. Um processo com uma alta interação. Primeiro pensamos na feature, criamos o teste e assim o código. 
  
  O TDD funciona pois trabalhamos com passos pequenos, continuamente pensando no que estamos fazendo. Melhorando o design, algoritmo e a qualidade do código desenvolvido.


### Nomear os testes corretamente
Se partirmos do principio de que o teste serve como documentação, precisamos manter em mente que outras pessoas irão ler e que o output do test runner deve ser entendível! 

Os nomes devem ser
  - Coesos
  - Explicitos
  - Descritivos
  - De forma clara conforme a linguagem escolhida (en, pt...)

