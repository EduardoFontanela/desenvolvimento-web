import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [textoInput, setTextoInput] = useState('');

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (textoInput.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      text: textoInput,
      completada: false // Nova propriedade
    };

    setTarefas([...tarefas, novaTarefa]);
    setTextoInput('');
  };

  const removerTarefa = (id) => {
    const listaFiltrada = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(listaFiltrada);
  };

  // Função para alternar o status da tarefa
  const alternarConclusao = (id) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, completada: !tarefa.completada };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={adicionarTarefa}>
        <input 
          type="text" 
          placeholder="Nova tarefa..."
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}> 
            <div className="tarefa-texto">
              <input 
                type="checkbox" 
                checked={tarefa.completada}
                onChange={() => alternarConclusao(tarefa.id)}
              />
              <span style={{ textDecoration: tarefa.completada ? 'line-through' : 'none' }}>
                {tarefa.text}
              </span>
            </div>
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App