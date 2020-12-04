# Exacta Labs - React Intro

Esse projeto tem como objetivo introduzir conceitos e práticas do desenvolvimento com a biblioteca React.

## Executando o projeto

- Execute o comando `yarn` (ou `npm install`) para instalar as dependências do projeto.
- Execute o comand `yarn json` (ou `npm run json`) para subir a API Fake.
- Execute o comando `yarn start` (ou `npm start`) para iniciar o projeto.
- Abra [http://localhost:3000](http://localhost:3000) para ver o projeto executando.

## Conteúdo
0. [Introdução](#introdução)
1. [Criando o projeto com CRA](#1---criando-o-projeto-com-create-react-app-cra)
2. [Criando a estrutura base da To Do List com JSX](#2---criando-a-estrutura-base-da-to-do-list-com-jsx)
3. [Componentização](#3---componentização)
4. [Criando um estado com useState](#4---criando-um-estado-state-com-usestate)
5. [Implementando ciclo de vida com useEffect](#5---implementando-ciclo-de-vida-com-useeffect)
6. [Atualizando e removendo tasks através de parâmetros](#6---atualizando-e-removendo-tasks-através-de-parâmetros)
7. [Refatorando e corrigindo "Prop Drilling"](#7---refatorando-e-corrigindo-prop-drilling)
8. [Instalando e configurando JSON Server](#8---instalando-e-configurando-json-server)
9. [Consumindo API Fake com Fetch](#9---consumindo-api-fake-com-fetch)
10. [Estilizando a To Do List com Styled Components](#10---estilizando-a-to-do-list-com-styled-components)
11. [Criando componentes Input e Button](#11---criando-componentes-input-e-button)
12. [Adicionando comportamentos no Input e Button](#12---adicionando-comportamentos-no-input-e-button)
13. [Implementa paginação na consulta de Tasks](#13---implementa-paginação-na-consulta-de-tasks)

### Introdução

O React é uma biblioteca para criação de interface e representa a camada de “View” em um modelo de projeto. Essa camada de visualização é criada a partir de componentes que representam funcionalidades isoladas em um sistema.

**Referência:** [https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/](https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/)

**Recomendações de vídeos:**
- [Código Fonte TV: React JS // Dicionário do programador](https://www.youtube.com/watch?v=NhUr8cwDiiM)
- [Filipe Dechamps: Novo jeito de aprender React](https://www.youtube.com/watch?v=aJR7f45dBNs)


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

**Implementação:**
Apenas foi criada uma estrutura básica de um componente, contendo JavaScript (que monta o array de tasks) e a função `return` que retorna o JSX responsável por "montar" nossa tela inicial.

**Commits:**
- [Criando estrutura inicial da To Do List](https://github.com/exactaworks/exacta-labs-react-intro/commit/2f94f792d3e951ea9134051b0d4968d0f63080a8)

**Referências:**
- [Artigo: Virtual DOM](https://pt-br.reactjs.org/docs/faq-internals.html)
- [Artigo: JSX](https://pt-br.reactjs.org/docs/introducing-jsx.html)
- [Vídeo: Entendendo Virtual DOM](https://www.youtube.com/watch?v=Xf9BQCXHuNM)
- [Vídeo: Entendendo JSX](https://www.youtube.com/watch?v=7MWV5vQyrUU)

### 3 - Componentização

Os componentes basicamente são pequenos pedaços da interface. A ideia é separarmos a interface em partes independentes, reutilizáveis e isoladas, onde cada parte tenha de forma abstraída do resto do projeto sua estrutura, lógica e estilização.

Em questão de código, os componentes são basicamente funções javascript que aceitam parâmetros e retornam elementos React.

**Implementação:**
Antes toda nossa lógica e estrutura estava concentrada no `App.js`, agora o código foi refatorado e temos a página `Home.js`, que está componentizada, sendo formada pelos componentes:
- TaskForm: responsável por renderizar o input e o button.
- TaskList: responsável por renderizar a lista de tarefas, que utiliza em sua composição o próximo componente da lista.
  - TaskListItem: responsável por renderizar cada tarefa individualmente.

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

**Implementação:**
As `tasks` foram alteradas para serem um **estado** e não uma **variável**.

**Commits:**
- [Adiciona state referente as tasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/ff931c943d051faa5d13ca978711ed0e1dcc2a2d)

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

**Implementação:**
- Alteramos o state `tasks` para ser iniciado como um array vazio. 
- Adicionado a const `TASKS_MOCK`, que é nosso mock que representa as tasks retornadas da API.
- Também foi adicionado o state `loading`, que representa o carregamento das tasks.
- Utilizamos o hook `useEffect` para iniciar o `loading` ao renderizar o componente e também preencher nossas `tasks` com o mock. 

**Commits:**
- [Adiciona useEffect para controle de loading e lifecycle](https://github.com/exactaworks/exacta-labs-react-intro/commit/4d8aa8ab18c267da232867d6f4e23d2c7e1c2631)

**Referências:**
- [React Effect Hook](https://pt-br.reactjs.org/docs/hooks-effect.html)

### 6 - Atualizando e removendo tasks através de parâmetros

Como vimos anteriormente, os componentes são basicamente funções JavaScript que podem receber parâmetros e retornam elementos React. Esses parâmetros podem ser praticamente qualquer tipo de dado, desde valores básicos como `string` e `number`, até `objects` e `arrays`. 

Vimos alguns desses dados sendo passados como parâmetros anteriormente em outros commits, o que não vimos ainda foi uma `function` sendo passada como parâmetro. Isso é possível, e é muito útil quando queremos atualizar uma informação do componente `parent` através do componente `children`.

**Implementação:**
A nossa página `Home.js` (que também é um componente) é responsável por controlar nosso estado `tasks`, então, foi ela que definiu os métodos `handleTaskSubmit` e `handleTaskRemove`. Para conseguirmos acionar esses métodos através dos componentes `children`, eles foram passandos como parâmetros:

- Home `handleTaskSubmit` `handleTaskRemove`
  - TaskForm onSubmit={`handleTaskSubmit`}
  - TaskList onRemove={`handleTaskRemove`}
    - TaskListItem onRemove={onRemove}

Perceba que no caso do método `handleTaskRemove` foi necessário descer 2 camadas (Home -> TaskList -> TaskListItem). Isso porque quem vai acionar esse método vai ser o componente `TaskListItem`. Foi possível atingir esse comportamento, porém realizamos uma prática ruim e bem comum, conhecida como "Prop Drilling".

Vamos resolver esse problema posteriormente, mas para entender melhor, deixei alguns links a baixo. 

**Commits:**
- [Implementa adição e remoção de tasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/eaa8091c80553de96ffddbb36994866943343678)

**Referências**
- [StackOverflow: O que é Prop Drilling](https://pt.stackoverflow.com/questions/424755/o-que-%C3%A9-prop-drilling)
- [KentCDodds: Prop Drilling](https://kentcdodds.com/blog/prop-drilling)

### 7 - Refatorando e corrigindo "Prop Drilling"

Para resolver a questão do Prop Drilling mencionada no passo anterior, poderíamos utilizar uma [Context API](https://pt-br.reactjs.org/docs/context.html) ou até mesmo um estado global gerenciado pelo [Redux](https://redux.js.org/). Dessa forma conseguiríamos acessar e manipular o estado `tasks` sem precisar ficar passando funções como props para os componentes `children`.

Existem também algumas situações onde vamos nos deparar com a necessidade de compartilhar um estado com diversos componentes, às vezes, em componentes que nem possuem relação de `parent` e `children`. Nesses casos, a melhor abordagem seria definir um estado global com [Redux](https://pt-br.reactjs.org/docs/context.html).

Vou deixar algumas referências para entendermos mais sobre o assunto, porém há alguns cenários onde uma simples refatoração já resolve o problema da Prop Drilling, que é o caso do componente `TaskList` e `TaskListItem`.

Notamos que é possível componentizar e dividir a lista de tarefas nesses dois componentes, porém não significa que essa é a melhor abordagem. Por um lado, conseguimos isolar a estrutura e estilização de ambos, porém no passo anterior notamos que esses 2 componentes são muito acoplados, ou seja, dependem um do outro para obter o funcionamento completo. Se analisarmos, provavelmente sempre usaremos os dois componentes juntos, nunca de forma separada. Por esse motivo, foi feita a implementação a seguir:

**Implementação:**
O componente `TaskListItem` foi excluído, e sua estrutura e lógica foram movidas para o componente `TaskList`.

**Commits:**
- [Move tag li para TaskList e remove TaskListItem](https://github.com/exactaworks/exacta-labs-react-intro/commit/91209bf82f7bda037e0f5a6b7d836fd8bd8ce8e0)

**Referências:**
- [Redux](https://pt-br.reactjs.org/docs/context.html)
- [Context API](https://pt-br.reactjs.org/docs/context.html)
- [Cod3r: Entenda REDUX em um VÍDEO](https://www.youtube.com/watch?v=J0g1cv_03XQ)
- [Rocketseat: Desvendando Redux na prática](https://www.youtube.com/watch?v=u99tNt3TZf8&t=645s)
- [Guilherme Rodz: Como usar React Context](https://www.youtube.com/watch?v=FsCBw9X9U84)

### 8 - Instalando e configurando JSON Server

Até agora utilizamos dados mockados para testar nossa To Do List, e também apenas manipulamos registros em memória. Em uma aplicação real, provavelmente esses registros seriam armazenados em um banco de dados e nós conseguiríamos consultar e manipular os mesmos consumindo endpoints de uma API. Como o intuito desse projeto é apenas introduzir conceitos do React, não vamos construir uma API real, porém vamos simular uma! 

Existem várias formas de simular uma API, a utilizada nesse projeto foi através da biblioteca [json-server](https://github.com/typicode/json-server). Com ela, conseguimos simular uma API e uma base de dados com apenas um arquivo json, que vamos chamar de `db.json`.

Já vamos detalhar a implementação, mas antes é importante entendermos como funcionam as dependências do nosso projeto. Elas estão todas definidas no `package.json`, basicamente esse arquivo contém todas as dependências do nosso projeto. Podemos observar que temos 2 arrays de dependências: `dependencies` e `devDependencies`. Ambos os arrays contém o nome das bibliotecas que são utilizadas em nosso projeto, com a diferença de que `devDependecies` contém apenas bibliotecas utilizadas em ambiente de desenvolvimento.

Já vamos entender o motivo dessa separação, mas antes é legal notar que nesses arrays estão definidos apenas os nomes das bibliotecas, isso porque as bibliotecas em si ficam dentro da pasta `node_modules`. Essa pasta **não** é versionada em nosso repositório, o que temos é apenas a referência das bibliotecas em nosso `package.json`. Isso porque o `node_modules` costuma ser uma pasta muito pesada (por conter a implementação de todas as dependências externas do nosso projeto), então para conseguirmos rodar um projeto após cloná-lo ou baixá-lo na nossa máquina rodamos o comando `yarn` (ou `npm install`), que vai instalar todas as dependências em nosso `node_modules` a partir das referências que temos em nosso `package.json`. Em nossa máquina, em ambiente de desenvolvimento vamos baixar tanto as bibliotecas definidas em `dependecies` quanto em `devDependecies`, porém em ambiente de produção as bibliotecas de desenvolvimento não serão baixadas, economizando um pouco de consumo (por isso é feita essa separação!).

**Implementação:**
Foi executado o comando `yarn add json-server -D` (poderia ser `npm install json-server -D`) para instalar a biblioteca `json-server` como dependência de desenvolvimento.

Após isso, foi criado o arquivo `db.json`, que vai representar os dados da nossa base de dados, que vão ser retornados e manipulados pelo nossa API Fake.

Pronto! Com isso já é possível executar e consumir nossa API Fake, basta rodar o comando `yarn json-server --watch db.json`. Porém, para facilitar, também adicionamos o script `json` que facilita essa execução, então precisamos apenas executar `yarn json`.

**Commits:**
- [Instala e configura json-server](https://github.com/exactaworks/exacta-labs-react-intro/commit/242ee3e1d38a087f6bf7e2e9d8cdaaec3fe9f998)

**Referências:**
- [JSON Server](https://github.com/typicode/json-server)
- [Medium: Criando API REST Fake com json-server](https://medium.com/@andrewchanm/criando-uma-api-rest-fake-com-json-server-9a312127f6d6)

### 9 - Consumindo API Fake com Fetch

Até agora manipulamos nossas tasks apenas em memória, mas agora que temos nossa API Fake rodando, podemos consumir ela! Para isso, vamos utilizar a Fetch API, uma funcionalidade nativa do JavaScript para lidar com requisições HTTP utilizando promises. Vamos também aplicar a sintaxe `async/await` ao invés de utilizar o `then` para lidar com a resolução das promises.

**Implementação:**
Para lidar com as requisições HTTP utilizando o Fetch, foi criado o arquivo `services/api.js` para deixar o código mais organizado. Foram implementados os métodos `get`, `post`, `delete` e, por fim, o `fetchRequest`, que basicamente abstraí a lógica de montar a request e serve como um middleware, pois é chamado por todos os outros métodos. Posteriormente poderemos utilizá-lo também para tratar respostas de erro.

**Commits:**
- [Implementa request GET](https://github.com/exactaworks/exacta-labs-react-intro/commit/c3855ea5e5f4f3247908dc7cb1386a2ad30d63e1)
- [Implementa request POST](https://github.com/exactaworks/exacta-labs-react-intro/commit/47eaf1b335e08b927a9ac465fae8b23ec4701daf)
- [Implementa request DELETE](https://github.com/exactaworks/exacta-labs-react-intro/commit/0ea53e49942cbf53c299599fa233dad816537b11)
- [Refatora service implementando o middleware fetchRequest](https://github.com/exactaworks/exacta-labs-react-intro/commit/0965730d601dece6728d34b4ac002b5a264ef63d)

**Referências:**
- [BrazilJS: Fetch API e o JavaScript](https://braziljs.org/artigos/fetch-api-e-o-javascript/)
- [How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

### 10 - Estilizando a To Do List com Styled Components

Há várias formas de estilizar nossa interface no React, podemos passar objetos contendo as propriedades de estilização ou até mesmo definir classes em um arquivo separado (esse [artigo](https://www.w3schools.com/react/react_css.asp) tem alguns exemplos).

Uma outra abordagem, que está se tornando cada vez mais popular, é utilizar CSS-in-JS, que como o nome já diz, é basicamente a utilização do JavaScript em conjunto com o CSS.

Para aplicar o CSS-in-JS iremos utilizar a biblioteca [styled-components](https://styled-components.com/). Com ela, teremos bastante flexibilidade na manipulação dos estilos, e também conseguiremos deixar nossa estrutura bem semântica.

**Implementação:**

Primeiro o `styled-components` foi instalado executando o comando `yarn add styled-components`.
Também adicionamos o módulo de ícones `material` da biblioteca [styled-icons](https://styled-icons.js.org/) executando o comando `yarn add @styled-icons/material`.

Após isso, colocamos nossa `Home.js` dentro do namespace `Home` e alteramos o nome do arquivo para `index.js` (mantendo o padrão dos componentes). Então, criamos um arquivo `styles.js` para cada componente (incluindo a Home), onde vamos manter nossos componentes estilizados.

Feito isso, os estilos foram implementandos e utilizados em seus respectivos `index.js`.

**Commits:**
- [Instala styled-components](https://github.com/exactaworks/exacta-labs-react-intro/commit/d9da6312b01a1f00f753be5200a577b6de1e9a05)
- [Implementa estilização da página Home](https://github.com/exactaworks/exacta-labs-react-intro/commit/2565680a096c3446f6fa9a3085809a2a19ef88e9)
- [Implementa estilização do componente TaskForm](https://github.com/exactaworks/exacta-labs-react-intro/commit/653729d5c63872022a2e6cbc59c40331b053b402)
- [Implementa estilização do componente TaskList e adiciona @styled-icons/material](https://github.com/exactaworks/exacta-labs-react-intro/commit/9ad06a6225d43ccfc190650a15200f9036e87883)

**Referências:**
- [W3schools: React CSS](https://www.w3schools.com/react/react_css.asp)
- [Felipe Fialho: Do BEM ao CSS-in-JS](https://www.felipefialho.com/blog/do-sass-e-bem-ao-css-in-js-a-evolucao-do-css-ao-longo-da-historia/)
- [Styled Components](https://styled-components.com/)
- [Styled Icons](https://styled-icons.js.org/)

### 11 - Criando componentes Input e Button

Temos implementado os componentes Input e Button dentro do nosso TaskForm, mas é legal observar que ambos os componentes são independentes do TaskForm. 

Até agora não possuímos nenhuma lógica complexa nesses dois componentes, mas já podemos removê-los do TaskForm e criar componentes separados, pois dessa forma vamos isolar e abstrair as responsabilidades de ambos, o que vai facilitar na implementação de novos comportamentos e também na reutilização deles.

**Implementação:**

Foram criados os componentes Input e Button, com seus respectivos `index.js` e `styles.js`. Após isso, substituímos o código referente ao Input e ao Button do TaskForm e passamos a utilizar os componentes criados.

**Commits:**
- [Cria componente Input](https://github.com/exactaworks/exacta-labs-react-intro/commit/e7b13620f351a59f79bc6ea4801332416943ebee)
- [Cria componente Button](https://github.com/exactaworks/exacta-labs-react-intro/commit/4637a15af2c83c0740be7a816cad7dbf02e2874e)

### 12 - Adicionando comportamentos no Input e Button

Agora vamos adicionar alguns comportamentos e funcionalidades nos nossos componentes Input e Button.

**Implementação:**
- Button: foram adicionados os comportamentos visuais referentes ao `hover` e ao `active`, também colocamos um `cursor: pointer`.
- Input: adicionamos a funcionalidades de resetar o input ao clicar no ícone `X` e também ao cadastrar uma nova task. Para isso, foi necessário adicionar o ícone `X` e também transformar o input em um input controlado, adicionando a propriedade `value={state}`. Dessa forma, além do estado reagir as mudanças do nosso input, nosso input também passa a reagir as mudanças do estado.

**Commits:**
- [Adiciona comportamento hover e active no Button](https://github.com/exactaworks/exacta-labs-react-intro/commit/ef8d97da6b53141dc02cb22421ee9c9d710a8519)
- [Implementa reset de Input](https://github.com/exactaworks/exacta-labs-react-intro/commit/6ae0ad073be472f4a4dd342e13e6b4a20efa08d7)

### 13 - Implementa paginação na consulta de Tasks

Nosso método `getTasks` que faz a requisição buscando as tasks cadastradas, no momento retorna todos os registros. Em uma função GET podemos passar parâmetros de consulta, conhecidos como `query params`, que servem para filtrar nossa consulta ou até mesmo paginá-la.

Para enviar `query params` basta adicionar `?` no fim da URL da requisição, e em seguida os parâmetros no formato `param=value`. Podemos também enviar vários parâmetros, separando com o carácter `&`. Exemplo de URLs com `query params`:

```javascript
  // Request com 1 query param:
  'http://localhost:8000/tasks?description=teste'

  // Request com 2 query params:
  'http://localhost:8000/tasks?_page=1&_limit=2'
```

Utilizando o `fetch` ou até mesmo o `axios` conseguimos criar `query params` de uma maneira mais eficiente também. No nosso caso, vamos usar o `fetch` por ser uma função nativa.

Lembrando que o `backend` precisa estar preparado para receber esses parâmetros e realizar o filtro da consulta ou a paginação. Sabendo disso, vamos agora implementar a paginação da nossa consulta de tasks.

**Implementação:**

Primeiro, adicionamos os query params no nosso método `getTasks`, inicialmente colocando diretamente na URL. Após isso, foi implementando a interface de paginação no nosso front-end, também refatoramos nossos métodos de cadastro e exclusão de tasks para sempre manter nosso estado `tasks` atualizado após realizar cada operação.

Com a nossa paginação já funcionando, refatoramos a maneira como montamos os query params, dessa vez utilizando um objeto `URLSearchParams`. Também foi criado um arquivo para armazenarmos nossas constantes.

**Commits:**
- [Adiciona query params no método getTasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/3618ea43705ce47794a64c5ba81237475b465bee)
- [Implementa interface de paginação](https://github.com/exactaworks/exacta-labs-react-intro/commit/80d3da487225649bf68274f6c2e8386c6cf0bfde)
- [Ajusta método de consulta de tasks](https://github.com/exactaworks/exacta-labs-react-intro/commit/7b70fabfb880c6f873292a14943a90bdc3ea05d7)
- [Ajusta estilo do form](https://github.com/exactaworks/exacta-labs-react-intro/commit/cbb58a741339477330535bdac8f55e07b75b186d)
- [Refatora query params](https://github.com/exactaworks/exacta-labs-react-intro/commit/135f2ab8f0db0167092625df1b19e00e014e55ba)
- [Cria arquivo de constantes](https://github.com/exactaworks/exacta-labs-react-intro/commit/8b8af1958d3e73e643751d91e9edd38a2b5b8ec6)

**Referências:**
- [Artigo - Rocketseat: Tipos de Parâmetros nas requisições REST](https://blog.rocketseat.com.br/tipos-de-parametros-nas-requisicoes-rest/)
- [Post - Rocketseat: Recuperando e criando Query Strings](https://www.facebook.com/rocketseat/photos/muitas-vezes-precisamos-lidar-com-query-string-par%C3%A2metros-get-em-aplica%C3%A7%C3%B5es-java/329786660901148/)
- [Vídeo - Rocketseat: Quando utilizar Query Params](https://www.facebook.com/rocketseat/videos/218282579377031)
- [Artigo - Rocketseat: Axios](https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/)
- [MDN - URLSearchParams](https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams)
