function App() {
  const tasks = [
    { id: 1, description: 'Comprar pão' },
    { id: 2, description: 'Lavar louça' },
    { id: 3, description: 'Comprar ração dos gatos' },
    { id: 4, description: 'Abastecer carro' },
  ];

  return (
    <>
      <h1>To Do List</h1>
      <input placeholder="Descrição" />
      <button>Adicionar</button>
      <ul>
        {tasks.map(item => 
          <li key={item.id}>{item.description}</li>
        )}
      </ul>
    </>
  );
}

export default App;
