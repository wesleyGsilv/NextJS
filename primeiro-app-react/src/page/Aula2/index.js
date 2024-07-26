import { useEffect, useState } from "react";
export default function Aula2() {
  const [name, setNameTarefa] = useState("");

  const [tarefas, setNomes] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefas");
    if (tarefasStorage) {
      setNomes(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleTarefas(e) {
    e.preventDefault();
    setNomes((tarefa) => [
      ...tarefa,
      {
        id: Math.random(),
        tarefa: name,
      },
    ]);
    setNameTarefa("");
  }

  return (
    <div>
      <h1>Lista de Tarefas!</h1>
      <form onSubmit={handleTarefas}>
        <label>Nome da tarefa:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNameTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
