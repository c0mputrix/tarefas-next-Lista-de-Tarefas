import ListaDeTarefas from '@/components/ListaDeTarefas';
import { getTarefas } from '@/lib/api';

// Server Component: carrega as tarefas no servidor.
export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main className="pagina">
      <h1 className="titulo">Lista de Tarefas</h1>
      <ListaDeTarefas tarefasIniciais={tarefas} />
    </main>
  );
}
