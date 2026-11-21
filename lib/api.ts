import { tarefasIniciais, type Tarefa } from '@/data/tarefas';

// Simula uma chamada de API usando Promise.resolve().
export function getTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([...tarefasIniciais]);
}
