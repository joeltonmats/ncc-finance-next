# NCC Finance

Uma plataforma moderna de gestão financeira (MVP inicial) construída com [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), [Prisma](https://www.prisma.io/), [NextAuth.js](https://next-auth.js.org/) e mais.

Inclui autenticação, integração com banco de dados, UI orientada por Storybook e boas práticas de qualidade e testes de código.

Desenvolvido para o Tech Challenge 1.

## Primeiros Passos

### 1. Clone o repositório

```bash
git clone git@github.com:NewCode-Crafters/ncc-finance.git
cd ncc-finance
```

### 2. Instale as dependências

> Pré-requisitos: Node >= 18

```bash
npm install
```

### 3. Configure o Prisma

- Copie o arquivo de ambiente de exemplo e atualize a URL do banco de dados:
  ```bash
  cp .env.example .env
  ```
- Edite o `.env` e defina seu `NEXTAUTH_SECRET`.

> Como fazer: Gere a senha com `npx auth secret`, copie o valor de `.env.local` para `NEXTAUTH_SECRET` no arquivo `.env`. Você pode deletar o arquivo `.env.local`, pois não é necessário.

### 4. Execute as migrações do Prisma

```bash
npm run prisma:migrate
```

> Nota: Após a primeira execução deste passo, o seed inicial do banco será executado automaticamente.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Depois, acesse `http://localhost:3000/`:

- Opção "Já tenho conta" - Preencha os campos "Email" e "Senha" com as credenciais:
  - Email: guest@ncc.com
  - Senha: ncc
  - Selecione o botão "Acessar". O app irá redirecionar para a página inicial após o sucesso.
- Opção "Abrir minha conta" - Preencha todos os campos com as informações solicitadas e clique em "Criar conta".
  - O app irá redirecionar para a página de login após o sucesso.
  - Faça login com os dados cadastrados. O app irá redirecionar para a página inicial após o sucesso.

### 6. Comandos Adicionais (opcional, apenas se necessário)

A. Opcional, necessário apenas se customizar o script de seed.

```bash
npm run prisma:seed
```

B. Opcional, reseta o banco do Prisma, permitindo gerar o seed usando o comando `A`.

```bash
npm run prisma:db-reset
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar o app.

## Estrutura do Projeto

```
ncc-finance/
├── .github/            # Workflows e templates do GitHub
├── .husky/             # Hooks do Husky
├── .next/              # Build do Next.js (gerado automaticamente)
├── .storybook/         # Configuração do Storybook para UI
├── .vscode/            # Configurações e extensões do VS Code
├── docs/               # Documentação e guias do projeto
├── node_modules/       # Dependências instaladas
├── prisma/             # Schema, migrações e seeds do Prisma
├── public/             # Arquivos estáticos (imagens, ícones, etc.)
├── src/                # Código-fonte principal da aplicação
│   ├── app/            # Diretório do app Next.js (rotas, layouts, páginas)
│   ├── components/     # Componentes React reutilizáveis
│   ├── constants/      # Constantes globais
│   ├── features/       # Módulos e lógicas específicas de features
│   ├── lib/            # Bibliotecas utilitárias e helpers
│   ├── models/         # Modelos e tipos de dados
│   ├── service/        # Camada de serviços e chamadas de API
│   ├── stories/        # Stories do Storybook para componentes UI
│   ├── types/          # Tipos e interfaces TypeScript compartilhados
│   └── setupTests.ts   # Arquivo de setup de testes
├── tests/              # Cobertura de código dos testes automatizados
├── .env                # Configuração de variáveis de ambiente
├── .env.example        # Exemplo de configuração de variáveis de ambiente
├── .eslintignore       # Regras de exclusão do ESLint
├── .gitignore          # Regras de exclusão do Git
├── .huskyrc            # Configuração do Husky
├── .lintstagedrc       # Configuração do Lint Staged
├── .nvmrc              # Configuração do Node Version Manager
├── .prettierignore     # Regras de exclusão do Prettier
├── .prettierrc.json    # Configuração do Prettier
├── eslint.config.mjs   # Configuração do ESLint
├── next-env.d.ts       # Definições de ambiente TypeScript do Next.js
├── next.config.ts      # Configuração do Next.js
├── package-lock.json   # Lockfile de dependências
├── package.json        # Metadados, scripts e dependências do projeto
├── postcss.config.mjs  # Configuração do PostCSS
├── README.md           # Documentação do projeto
├── tsconfig.json       # Configuração do TypeScript
└── vitest.config.ts    # Configuração de testes Vitest
```

## Scripts

| Script            | Descrição                                                                              |
| ----------------- | -------------------------------------------------------------------------------------- |
| `check:node`      | Verifica se a versão do Node.js é 18 ou superior antes de instalar as dependências.    |
| `preinstall`      | Executa a verificação da versão do Node.js antes de instalar as dependências.          |
| `dev`             | Inicia o servidor de desenvolvimento Next.js com Turbopack para fast refresh e HMR.    |
| `build`           | Faz o build da aplicação Next.js para produção.                                        |
| `start`           | Inicia o servidor Next.js em modo produção.                                            |
| `lint`            | Executa o ESLint para checar qualidade e estilo do código.                             |
| `lint:fix`        | Executa o ESLint e corrige automaticamente os problemas corrigíveis.                   |
| `prettier:check`  | Verifica a formatação do código no diretório `src` usando o Prettier.                  |
| `storybook`       | Inicia o Storybook para desenvolvimento e testes de componentes UI isolados.           |
| `build-storybook` | Gera o site estático do Storybook para deploy.                                         |
| `commit`          | Inicia o Commitizen CLI para mensagens de commit padronizadas.                         |
| `test`            | Executa todos os testes usando o Vitest.                                               |
| `test:ui`         | Abre a interface do Vitest para execução interativa dos testes.                        |
| `test:coverage`   | Executa os testes e gera o relatório de cobertura de código.                           |
| `prepare`         | Configura os hooks do Husky após instalar as dependências.                             |
| `prisma:migrate`  | Executa as migrações do Prisma em desenvolvimento.                                     |
| `prisma:generate` | Gera o client do Prisma a partir do schema.                                            |
| `prisma:seed`     | Popula o banco de dados com dados iniciais usando o script de seed.                    |
| `prisma:db-reset` | Reseta o banco de dados e aplica todas as migrações do zero.                           |

## Principais Bibliotecas & Ferramentas

| Biblioteca/Ferramenta           | Finalidade                                                                 |
| ------------------------------- | -------------------------------------------------------------------------- |
| **TypeScript**                  | JavaScript tipado para desenvolvimento escalável e sustentável.            |
| **Next.js**                     | Framework React para SSR, roteamento e rotas de API.                      |
| **React**                       | Biblioteca principal para construção de interfaces de usuário.             |
| **Prisma**                      | ORM tipado para acesso ao banco de dados e migrações.                     |
| **@prisma/client**              | Client gerado pelo Prisma para consultas ao banco de dados.                |
| **NextAuth.js**                 | Autenticação para apps Next.js.                                            |
| **@auth/prisma-adapter**        | Adaptador Prisma para NextAuth.js para persistir sessões e contas.         |
| **Tailwind CSS**                | Framework CSS utilitário para desenvolvimento rápido de UI.                |
| **Storybook**                   | Ambiente isolado para desenvolvimento e documentação de componentes UI.    |
| **@storybook/nextjs**           | Integração do Storybook para projetos Next.js.                             |
| **@faker-js/faker**             | Geração de dados fake para testes e seeds.                                 |
| **Vitest**                      | Framework de testes unitários rápido com integração Vite.                  |
| **@testing-library/react**      | Utilitários para testar componentes React com foco no usuário.             |
| **@testing-library/jest-dom**   | Matchers customizados do Jest para asserções no DOM.                       |
| **Playwright**                  | Testes de ponta a ponta para fluxos de UI.                                 |
| **ESLint**                      | Linter para qualidade e consistência do código.                            |
| **Prettier**                    | Formatador de código para estilo consistente.                              |
| **Commitizen**                  | Padroniza mensagens de commit para melhor legibilidade e automação.        |
| **Husky**                       | Hooks do Git para garantir qualidade antes de commits e push.              |
| **Lint Staged**                 | Executa linters e formatadores nos arquivos staged do git.                 |
| **react-hot-toast**             | Notificações toast para feedback ao usuário.                               |
| **@headlessui/react**           | Primitivas UI acessíveis e sem estilo para React.                          |
| **@heroicons/react**            | Ícones SVG artesanais e bonitos para React.                                |
| **bcrypt**                      | Hash de senha para autenticação.                                           |
| **validator**                   | Validação e sanitização de strings.                                        |

## Links Externos

- **[Demo em Vídeo](https://google.com)**
- **[Design no Figma](https://google.com)**

## Contribuidores

| Nome              | Perfil no GitHub                                      | Foto de Perfil                                                                                                       |
| ----------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Carlos Ferreira   | [@carlosrfjrdev](https://github.com/carlosrfjrdev)    | <img src="https://avatars.githubusercontent.com/u/107284563?v=4" width="40" height="40" style="border-radius:50%;" /> |
| Joelton Matos     | [@joeltonmatos](https://github.com/joeltonmats)       | <img src="https://avatars.githubusercontent.com/u/4190757?v=4" width="40" height="40" style="border-radius:50%;" />   |
| Larissa Rocha     | [@larisr](https://github.com/larisr)                  | <img src="https://avatars.githubusercontent.com/u/64704731?v=4" width="40" height="40" style="border-radius:50%;" />  |
| Leonardo Medeiros | [@leomartinsm](https://github.com/leomartinsm)        | <img src="https://avatars.githubusercontent.com/u/20979905?v=4" width="40" height="40" style="border-radius:50%;" />  |
| Ricardo Momberg   | [@ricardomomberg](https://github.com/RicardoMomberg)  | <img src="https://avatars.githubusercontent.com/u/65039145?v=4" width="40" height="40" style="border-radius:50%;" />  |
