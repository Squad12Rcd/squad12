<h1>Modelo conceitual</h1>
<img src="https://github.com/Squad12Rcd/squad12/blob/main/img/conceitualConnectJob.png?raw=true">

<h1>Modelo lógico</h1>
<img src="https://github.com/Squad12Rcd/squad12/blob/main/img/logicoConnectJob.png?raw=true">
<h1>Explicação</h1>
<p>
<strong>empresa (1,1) oferece (0,n) vaga</strong> <br>
explicaçao: uma vaga pertence a uma unica empresa obrigatoriamente
e uma empresa nao precisa obrigatoriamente cadastrar uma vaga,
mas tambem pode cadastrar quantas quiser: N vezes. <br>
<strong>usuario (0,n) inscreve-se (0,n)</strong> vaga <br>
explicaçao: um usuario nao precisa se inscrever em alguma vaga
obrigatoriamente, mas pode se inscrever em quantas vagas quiser.
uma vaga nao precisa ter nenhum inscrito, nao pertencer a nenhum
usuario, mas pode ter varios inscritos, pertencer a varios
usuarios.<br>
<strong>candidatos(inscreve-se)</strong> entidade associativa que recebe
as chaves estrangeiras de vaga e usuario e armazena dados da 
inscrição.


</p>
