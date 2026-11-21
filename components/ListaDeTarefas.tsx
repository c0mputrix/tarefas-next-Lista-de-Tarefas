'use client';

import { useState } from 'react';
import type { Tarefa } from '@/data/tarefas';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import NovaTarefa from './NovaTarefa';

type ListaDeTarefasProps = {
  tarefasIniciais: Tarefa[];
};

export default function ListaDeTarefas({ tarefasIniciais }: ListaDeTarefasProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  function adicionar(titulo: string) {
    setTarefas((atual) => [...atual, { id: Date.now(), titulo }]);
  }

  return (
    <section className="cartao">
      <NovaTarefa onAdicionar={adicionar} />
      <p className="contador">Total de tarefas: {total}</p>
      <ul className="lista">
        {tarefas.map((t) => (
          <li className="item" key={t.id}>
            {t.titulo}
          </li>
        ))}
      </ul>
    </section>
  );
}
