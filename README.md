# Lista de Tarefas — Next.js 15 + Testes Unitários

Aplicação simples de listagem e adição de tarefas, feita com Next.js 15 (App Router) e TypeScript, com testes usando Jest e React Testing Library.

## Funcionalidades

- Lista de tarefas carregada em um Server Component (`app/page.tsx`), a partir de uma API simulada com `Promise.resolve()`.
- Formulário controlado (`<NovaTarefa />`) para adicionar tarefas, com validação de campo vazio.
- Hook personalizado `useContadorDeTarefas` que retorna o número de tarefas.

## Estrutura

```
app/            # App Router (layout e página, equivalente ao "pages")
components/     # NovaTarefa (client) e ListaDeTarefas (client)
hooks/          # useContadorDeTarefas
data/           # tarefas simuladas
lib/            # api simulada (getTarefas)
tests/          # testes unitários
```

## Instalação e execução

Requisitos: Node.js 18.18+ e npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Testes

```bash
npm test                # roda todos os testes
npm run test:coverage   # com relatório de cobertura
```

### O que é testado

- `NovaTarefa`: renderização, botão desabilitado com input vazio/só espaços, habilitação ao digitar, submissão (com `trim`) e limpeza do input.
- `useContadorDeTarefas`: valor para lista vazia, valor correto e atualização com `renderHook` + `rerender`.
- Página: renderização do título, das tarefas, do contador e fluxo de adicionar uma tarefa (sem mock de API externa).
