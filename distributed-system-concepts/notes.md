# Race Conditions
O mesmo recurso é alterado/acessado de forma simultaneamente, causando uma duplicidade para o usuário. 

**Exemplo**: Reserva de um voo em que dois clientes fazem a mesma solicitação para um mesmo acento. Se não houver um controle sobre a atualização do estado do acento, haverá uma duplicidade de atualização. 

**Formas de tratar**: se estivermos falando de uma aplicação que acessa um banco de dados relacional, faz sentido utilizar o próprio recurso do banco para controlar isso. Através do pessimist lock e do optimistic lock. 

**Pessimist Lock**: Ao iniciar a leitura de um dado, consideramos que aquela informação está bloqueada, por tanto, não é possível que outra conexão no banco faça a leitura. E a linha só é desbloqueada, após um commit.

**Optimistic Lock**: Ambos os recursos podem fazer a leitura, no entanto, os mesmos recebem uma versão daquela leitura e toda vez que aquele dado for atualizado, a versão também é atualizado. Exemplo: usuário 1 e 2 recebem a versão 0, usuário 1 atualiza o recurso, informando que a versão é 0, a recurso é atualizado e a versão é atualizada para 1, agora o usuário 2 tenta atualizar o recurso selecionado com a versão 0, porém, não consegue, pois a versão já está atualizada.

## Links
- https://www.youtube.com/live/80I5zv1sDHo?si=PSVm-RfmyreH1PWK

- https://ketanbhatt.com/db-concurrency-defects/

