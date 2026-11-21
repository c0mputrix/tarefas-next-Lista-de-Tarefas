import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';
import { tarefasIniciais } from '@/data/tarefas';

describe('Página inicial', () => {
  it('renderiza o título e as tarefas simuladas', async () => {
    render(await Home());

    expect(
      screen.getByRole('heading', { name: 'Lista de Tarefas' })
    ).toBeInTheDocument();

    tarefasIniciais.forEach((t) => {
      expect(screen.getByText(t.titulo)).toBeInTheDocument();
    });
    expect(screen.getAllByRole('listitem')).toHaveLength(tarefasIniciais.length);
  });

  it('mostra o contador com o total de tarefas', async () => {
    render(await Home());

    expect(
      screen.getByText(`Total de tarefas: ${tarefasIniciais.length}`)
    ).toBeInTheDocument();
  });

  it('adiciona uma nova tarefa à lista e atualiza o contador', async () => {
    render(await Home());

    fireEvent.change(screen.getByLabelText('Nova tarefa'), {
      target: { value: 'Subir projeto no GitHub' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(screen.getByText('Subir projeto no GitHub')).toBeInTheDocument();
    expect(
      screen.getByText(`Total de tarefas: ${tarefasIniciais.length + 1}`)
    ).toBeInTheDocument();
  });
});
