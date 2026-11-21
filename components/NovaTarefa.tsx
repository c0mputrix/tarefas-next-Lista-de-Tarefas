'use client';

import { useState, type FormEvent } from 'react';

type NovaTarefaProps = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState('');
  const invalido = titulo.trim() === '';

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (invalido) return;
    onAdicionar(titulo.trim());
    setTitulo('');
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="titulo">Nova tarefa</label>
      <input
        id="titulo"
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit" disabled={invalido}>
        Adicionar
      </button>
    </form>
  );
}
