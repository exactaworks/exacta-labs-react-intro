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

### 4 - Criando um estado (state) com useState

O hook `useState` é uma função que recebe o valor inicial do estado como parâmetro e retorna um `array` contendo 2 posições:
- 0 -> Variável que representa o valor do estado atual.
- 1 -> Função que é utilizada para alterar o estado atual.

```javascript
// 1 - SEM DESESTRUTURAÇÃO
const counterState = useState(10); // valor inicial = 10
console.log(counterState); // [10, dispatchAction()]
console.log(counterState[0]); // 10
console.log(counterState[1]); // function dispatchAction()

// 2 - APLICANDO DESESTRUTURAÇÃO (IMPLEMENTAÇÃO IDEAL)
const [counter, setCounter] = useState(10); // valor inicial = 10
console.log(counter); // 10
console.log(setCounter); // function dispatchAction()
```

O `state` do componente representa o estado de determinada propriedade, possuindo um valor que pode ser alterado. É semelhante a uma variável, com a diferença de que todos os elementos relacionados ao estado reagem a suas mudanças.

Criei esse [trecho de código](https://codepen.io/guilhermekuni/pen/vYLzbQL?editors=0010) como exemplo. Observe que só é possível incrementar o valor do contador referente ao STATE COUNT. Isso acontece porque o elemento relacionado ao estado `stateCount` reage as suas mudanças, enquanto o elemento relacionado a variável `variableCount` não reage as suas mudanças (mas a variável está sim sendo incrementada).

**Obs:** o `useState`, junto ao `useEffect` (assunto abordado no próximo tópico) fazem parte dos Hooks, introduzidos no React na versão [16.8](https://pt-br.reactjs.org/blog/2019/02/06/react-v16.8.0.html), que mudaram completamente a forma como implementamos os componentes no React. Antes era comum utilizarmos a sintaxe de componentes de Classe ao invés de componentes Funcionais quando precisavamos controlar estado e ciclo de vida do componente (com os Hooks, hoje já é possível ter esses controles em componentes Funcionais). Nesse projeto **não** serão abordados componentes de classe, mas vale lembrar que apesar da sintaxe ser diferente, os conceitos são bem parecidos.

**Referências:**
- [React State Hook](https://pt-br.reactjs.org/docs/hooks-state.html)
- [React 16.8: Hooks](https://pt-br.reactjs.org/blog/2019/02/06/react-v16.8.0.html)

**Commits:**
- [Adiciona state referente as tasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/ff931c943d051faa5d13ca978711ed0e1dcc2a2d)

### 5 - Implementando ciclo de vida com useEffect

O hook `useEffect` é um método utilizado para controlar o ciclo de vida do componente. Ele recebe uma função `callback` e um array de dependências. Seu funcionamento é simples: toda vez que um dos elementos informados no array de dependências for atualizado, a função `callback` é executada. Exemplo:

```javascript
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count foi atualizado para ${count}`); 
  }, [count]);
```

Há casos em que precisamos executar uma função apenas no momento de renderização do componente, nesse caso, basta utilizar o `useEffect` e passar um array de dependências vazio. Exemplo:

```javascript
  useEffect(() => {
    console.log('Essa função é executada uma vez, quando o componente é renderizado.');
  }, []);
```
**Referências:**
- [React Effect Hook](https://pt-br.reactjs.org/docs/hooks-effect.html)

**Commits:**
- [Adiciona useEffect para controle de loading e lifecycle](https://github.com/exactaworks/exacta-labs-react-intro/commit/4d8aa8ab18c267da232867d6f4e23d2c7e1c2631)
