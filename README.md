# NLW Agents 20 Ed - Frontend

O NLW foi um treinamento de desenvolvimento fornecido pela Rocketseat. O objetivo do projeto **Let Me Ask** é criar salas de perguntas, mas quando um usuário fizer uma perguntar utilizar IA (Gemini) para tentar prever a resposta baseada no banco de dados existente. O projeto também possui um sistema de gravação, em que o usuário utiliza para gravar possíveis repostas no banco de dados. Esse foi o projeto de backend.

## Installation

Abaixo são os passos necessários para executar o projeto localmente. 

1)  Clone o repositório

> git clone 'https://github.com/IghorTI/NLW_Agents_20Ed_Let_Me_Ask_Front'

4) Instale as dependências

> npm install --no -optional
> Todas as dependências necessárias serão instaladas; 

9) Execute o projeto

> npm run dev

### (!) Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.


## 🛠️ Estrutura do Projeto

```
src/
├── components/ui/    # Componentes de interface
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── app.tsx          # Componente raiz
``` 

___ 

 ## 🚀 Tecnologias

- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Biblioteca de roteamento
- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones

## 📂 Padrões de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)