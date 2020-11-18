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

**Recomendações de vídeos:**
[Código Fonte TV: React JS // Dicionário do programador](https://www.youtube.com/watch?v=NhUr8cwDiiM)
[Filipe Dechamps: Novo jeito de aprender React](https://www.youtube.com/watch?v=aJR7f45dBNs)


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

**Commits:**
- [Criando estrutura inicial da To Do List](https://github.com/exactaworks/exacta-labs-react-intro/commit/2f94f792d3e951ea9134051b0d4968d0f63080a8)

**Implementação:**
Apenas foi criada uma estrutura básica de um componente, contendo JavaScript (que monta o array de tasks) e a função `return` que retorna o JSX responsável por "montar" nossa tela inicial.

**Referências:**
- [Artigo: Virtual DOM](https://pt-br.reactjs.org/docs/faq-internals.html)
- [Artigo: JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)
- [Vídeo: Entendendo Virtual DOM](https://www.youtube.com/watch?v=Xf9BQCXHuNM)
- [Vídeo: Entendendo JSX](https://www.youtube.com/watch?v=7MWV5vQyrUU)

### 3 - Componentização

Os componentes basicamente são pequenos pedaços da interface. A ideia é separarmos a interface em partes independentes, reutilizáveis e isoladas, onde cada parte tenha de forma abstraída do resto do projeto sua estrutura, lógica e estilização.

Em questão de código, os componentes são basicamente funções javascript que aceitam parâmetros e retornam elementos React.

**Commits:**
- [Componentizando To Do List atual](https://github.com/exactaworks/exacta-labs-react-intro/commit/bca01924782c9f594b7c112f5bc391303b52e54a?branch=bca01924782c9f594b7c112f5bc391303b52e54a&diff=unified)

**Implementação:**
Antes toda nossa lógica e estrutura estava concentrada no `App.js`, agora o código foi refatorado e temos a página `Home.js`, que está componentizada, sendo formada pelos componentes:
- TaskForm: responsável por renderizar o input e o button.
- TaskList: responsável por renderizar a lista de tarefas, que utiliza em sua composição o próximo componente da lista.
  - TaskListItem: responsável por renderizar cada tarefa individualmente.

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

**Commits:**
- [Adiciona state referente as tasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/ff931c943d051faa5d13ca978711ed0e1dcc2a2d)

**Implementação:**
As `tasks` foram alteradas para serem um **estado** e não uma **variável**.

**Referências:**
- [React State Hook](https://pt-br.reactjs.org/docs/hooks-state.html)
- [React 16.8: Hooks](https://pt-br.reactjs.org/blog/2019/02/06/react-v16.8.0.html)

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

**Commits:**
- [Adiciona useEffect para controle de loading e lifecycle](https://github.com/exactaworks/exacta-labs-react-intro/commit/4d8aa8ab18c267da232867d6f4e23d2c7e1c2631)

**Implementação:**
- Alteramos o state `tasks` para ser iniciado como um array vazio. 
- Adicionado a const `TASKS_MOCK`, que é nosso mock que representa as tasks retornadas da API.
- Também foi adicionado o state `loading`, que representa o carregamento das tasks.
- Utilizamos o hook `useEffect` para iniciar o `loading` ao renderizar o componente e também preencher nossas `tasks` com o mock. 

**Referências:**
- [React Effect Hook](https://pt-br.reactjs.org/docs/hooks-effect.html)

### 6 - Atualizando e removendo tasks através de parâmetros

Como vimos anteriormente, os componentes são basicamente funções JavaScript que podem receber parâmetros e retornam elementos React. Esses parâmetros podem ser praticamente qualquer tipo de dado, desde valores básicos como `string` e `number`, até `objects` e `arrays`. 

Vimos alguns desses dados sendo passados como parâmetros anteriormente em outros commits, o que não vimos ainda foi uma `function` sendo passada como parâmetro. Isso é possível, e é muito útil quando queremos atualizar uma informação do componente `parent` através do componente `children`.

**Commits:**
- [Implementa adição e remoção de tasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/eaa8091c80553de96ffddbb36994866943343678)

**Implementação:**
A nossa página `Home.js` (que também é um componente) é responsável por controlar nosso estado `tasks`, então, foi ela que definiu os métodos `handleTaskSubmit` e `handleTaskRemove`. Para conseguirmos acionar esses métodos através dos componentes `children`, eles foram passandos como parâmetros:

- Home `handleTaskSubmit` `handleTaskRemove`
  - TaskForm onSubmit={`handleTaskSubmit`}
  - TaskList onRemove={`handleTaskRemove`}
    - TaskListItem onRemove={onRemove}

Perceba que no caso do método `handleTaskRemove` foi necessário descer 2 camadas (Home -> TaskList -> TaskListItem). Isso porque quem vai acionar esse método vai ser o componente `TaskListItem`. Foi possível atingir esse comportamento, porém realizamos uma prática ruim e bem comum, conhecida como "Prop Drilling".

Vamos resolver esse problema posteriormente, mas para entender melhor, deixei alguns links a baixo. 

**Referências**
- [StackOverflow: O que é Prop Drilling](https://pt.stackoverflow.com/questions/424755/o-que-%C3%A9-prop-drilling)
- [KentCDodds: Prop Drilling](https://kentcdodds.com/blog/prop-drilling)

### 7 - Refatorando e corrigindo "Prop Drilling"

Para resolver a questão do Prop Drilling mencionada no passo anterior, poderíamos utilizar uma [Context API](https://pt-br.reactjs.org/docs/context.html) ou até mesmo um estado global gerenciado pelo [Redux](https://redux.js.org/). Dessa forma conseguiríamos acessar e manipular o estado `tasks` sem precisar ficar passando funções como props para os componentes `children`.

Existem também algumas situações onde vamos nos deparar com a necessidade de compartilhar um estado com diversos componentes, às vezes, em componentes que nem possuem relação de `parent` e `children`. Nesses casos, a melhor abordagem seria definir um estado global com [Redux](https://pt-br.reactjs.org/docs/context.html).

Vou deixar algumas referências para entendermos mais sobre o assunto, porém há alguns cenários onde uma simples refatoração já resolve o problema da Prop Drilling, que é o caso do componente `TaskList` e `TaskListItem`.

Notamos que é possível componentizar e dividir a lista de tarefas nesses dois componentes, porém não significa que essa é a melhor abordagem. Por um lado, conseguimos isolar a estrutura e estilização de ambos, porém no passo anterior notamos que esses 2 componentes são muito acoplados, ou seja, dependem um do outro para obter o funcionamento completo. Se analisarmos, provavelmente sempre usaremos os dois componentes juntos, nunca de forma separada. Por esse motivo, foi feita a implementação a seguir:

**Commits:**
- [Move tag li para TaskList e remove TaskListItem](https://github.com/exactaworks/exacta-labs-react-intro/commit/91209bf82f7bda037e0f5a6b7d836fd8bd8ce8e0)

**Implementação:**
O componente `TaskListItem` foi excluído, e sua estrutura e lógica foram movidas para o componente `TaskList`.

**Referências:**
- [Redux](https://pt-br.reactjs.org/docs/context.html)
- [Context API](https://pt-br.reactjs.org/docs/context.html)
- [Coder: Entenda REDUX em um VÍDEO](https://www.youtube.com/watch?v=J0g1cv_03XQ)
- [Rocketseat: Desvendando Redux na prática](https://www.youtube.com/watch?v=u99tNt3TZf8&t=645s)
- [Guilherme Rodz: Como usar React Context](https://www.youtube.com/watch?v=FsCBw9X9U84)
