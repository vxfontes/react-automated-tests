#Bytebank
- Projeto simples de uma conta bancária com uma database hospedada pelo json server apenas para termos elementos na aplicação
- Criação de testes automatizados

<hr />
#iniciando primeiros testes
- podemos usar mais de um describe para separar nossos testes em etapas ou subcategorias
- precisa renderizar o componente onde se encontra o objeto de teste antes
- para realizarmos teste de funções, precisamos implementar as variáveis necessárias antes e colocar a função

#testando componentes react
- cria um arquivo .test.js na própria pasta do componente
- usar snapshot para conferencia de elementos dentro dos componentes
    - cria uma pasta de snapshots com codigos html que experamos ter na maquina
- usamos fireevent para simular eventos no banco de dados, testando assim o return de componentes