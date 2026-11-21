export type Tarefa = {
  id: number;
  titulo: string;
};

// Dados simulados, como se viessem de uma API.
export const tarefasIniciais: Tarefa[] = [
  { id: 1, titulo: 'Estudar testes unitários' },
  { id: 2, titulo: 'Configurar o Jest' },
  { id: 3, titulo: 'Escrever o README' },
];
