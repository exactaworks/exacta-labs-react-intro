# Exacta Labs - React Intro

Esse projeto tem como objetivo introduzir conceitos e práticas da biblioteca React.

## Executando o projeto

- Execute o comando `yarn` para instalar as dependências do projeto (ou `npm install`)
- Execute o comando `yarn start` (ou `npm start`).
- Abra [http://localhost:3000](http://localhost:3000) para ver o projeto executando.

## Conteúdo

### Introdução

O React é uma biblioteca para criação de interface e representa a camada de “View” em um modelo de projeto. Essa camada de visualização é criada a partir de componentes que representam funcionalidades isoladas em um sistema.

**Referência:** [https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/](https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/)

### 1 - Criando o projeto com Create React App (CRA)

O projeto foi criado utilizando o comando [Create React App](https://github.com/facebook/create-react-app).

Basta executar o comando: `npx create-react-app my-app`.

**Obs:** Podemos entender a diferença entre `npm` e `npx` neste [artigo](https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/). 

**Commits:**
- [Criando projeto inicial](https://github.com/exactaworks/exacta-labs-react-intro/commit/0ae43ff0b2bd8623d3d9624e46082d71f7df9ecf)
- [Excluindo arquivos desnecessários](https://github.com/exactaworks/exacta-labs-react-intro/commit/f461e5b536d59cfe1834028cfbdc3ab3b345ffaf)

### 2 - Criando a estrutura base da To Do List com JSX

Com o React, utlizamos a sintaxe JSX para construir nossas interfaces e componentes (vamos entender mais a frente o que é um componente). 

O JSX é uma sintaxe bem semelhante ao HTML, que possibilita a utilização do JavaScript para facilitar a manipulação e construção da interface.

Para entender melhor como funciona, precisamos entender o Virtual DOM utilizado no React.

**Referências:**
- [Artigo: Virtual DOM](https://pt-br.reactjs.org/docs/faq-internals.html)
- [Artigo: JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)
- [Vídeo: Entendendo Virtual DOM](https://www.youtube.com/watch?v=Xf9BQCXHuNM)
- [Vídeo: Entendendo JSX](https://www.youtube.com/watch?v=7MWV5vQyrUU)

**Commits:**
- [Criando estrutura inicial da To Do List](https://github.com/exactaworks/exacta-labs-react-intro/commit/2f94f792d3e951ea9134051b0d4968d0f63080a8)

### 3 - Componentização

Os componentes basicamente são pequenos pedaços da interface. A ideia é separarmos a interface em partes independentes, reutilizáveis e isoladas, onde cada parte tenha de forma abstraída do resto do projeto sua estrutura, lógica e estilização.

Em questão de código, os componentes são basicamente funções javascript que aceitam parâmetros e retornam elementos React.

**Commits:**
- [Componentizando To Do List atual](https://github.com/exactaworks/exacta-labs-react-intro/commit/bca01924782c9f594b7c112f5bc391303b52e54a?branch=bca01924782c9f594b7c112f5bc391303b52e54a&diff=unified)
