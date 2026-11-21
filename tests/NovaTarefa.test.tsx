import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa />', () => {
  it('renderiza o input e o botão', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(screen.getByLabelText('Nova tarefa')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
  });

  it('mantém o botão desabilitado com o input vazio', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeDisabled();
  });

  it('mantém o botão desabilitado se o input só tem espaços', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    fireEvent.change(screen.getByLabelText('Nova tarefa'), {
      target: { value: '   ' },
    });

    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeDisabled();
  });

  it('habilita o botão quando há texto', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    fireEvent.change(screen.getByLabelText('Nova tarefa'), {
      target: { value: 'Nova tarefa' },
    });

    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeEnabled();
  });

  it('chama onAdicionar com o título sem espaços nas pontas e limpa o input', () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText('Nova tarefa') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '  Comprar pão  ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(onAdicionar).toHaveBeenCalledTimes(1);
    expect(onAdicionar).toHaveBeenCalledWith('Comprar pão');
    expect(input.value).toBe('');
  });

  it('não chama onAdicionar ao submeter o formulário vazio', () => {
    const onAdicionar = jest.fn();
    const { container } = render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.submit(container.querySelector('form')!);

    expect(onAdicionar).not.toHaveBeenCalled();
  });
});
