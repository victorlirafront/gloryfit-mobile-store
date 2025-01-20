# 🌐 Star Wars: Aplicação Web

SPA que consome a SWAPI (Star Wars API) com Next.js e SSR, permitindo busca e filtro de personagens, filmes, planetas e mais. Conta com busca instantânea, paginação, interface responsiva e navegação intuitiva. Desenvolvida com Next, TypeScript, Styled-components e Redux, foca na organização do código, acessibilidade e boa experiência em qualquer dispositivo.

### Deploy da aplicação: 

https://hunterstack-challenge.vercel.app/

<br/>
<br/>

<img src="https://img.wine.com.br/picasso/2021/40graus/preview.gif" width="100%"  />

<br/>
<br/>

## 🧰 Tecnologias Utilizadas no Projeto

### Frontend
- **Next.js / React**
- **TypeScript**
- **Redux**
- **Styled-components**
- **ESLint**: Ferramenta de linting para identificar e corrigir padrões de código.
- **Prettier**: Formatação automática de código para garantir consistência.

### 🧪 Testes Automatizados
- **Jest**


### 📁 Estrutura de pastas:

Para entender a arquitetura do projeto, é importante entender a estrutura de pastas e a organização dos arquivos.

```plaintext
   ROOT
   ├── public
   │
   ├── src
   │   ├── components
   │   │   ├── ComponentName.tsx
   │   │   ├── ComponentName.spec.tsx
   │   │   ├── ComponentName.types.ts
   │   │   └── ComponentName.styled.ts
   │   │
   │   ├── pages
   │   │   ├── pageName
   │   │   │   └── pageName.tsx
   │   │   │
   │   │   └── index.tsx
   │   │
   │   ├── constants
   │   │   └── index.ts
   │   │
   │   ├── helper
   │   │   └── functionName
   │   │       ├── functionName.ts
   │   │       └── functionName.types.ts
   │   │
   │   ├── types
   │   │   └── index.ts
   │   │
   │   ├── styles
   │   │   └── global.ts
   │   │
   │   ├── hooks
   │   │   └── useHookName
   │   │       ├── useHookName.ts
   │   │       ├── useHookName.spec.ts
   │   │       └── useHookName.types.ts
   │   │
   │   ├── redux
   │   │   ├── store.ts
   │   │   └── slice.ts

```

## 🚀 Funcionalidades criadas
   - Barra de pesquisa com sugestões
   - Paginação
   - Filtro
   - Exibição do conteúdo
   - Páginas dinâmicas para cada item
   - Responsividade
   - Prevenção de erros

## 🚀 Executando o Projeto Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/victorlirafront/hs-challenge.git
```

### 2. Entre no Projeto

```bash
cd hs-challenge
```

1. **Instale as dependências**:

```bash
npm install
```

2. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
```

Isso iniciará o frontend em [http://localhost:3000](http://localhost:3000).

## 🧪 Testes Unitários

1. Abra um novo terminal no VS Code.  
2. Execute o comando:

   ```bash
   npm run test
   ```

O seguinte texto será exibido no terminal:  
```plaintext
No tests found related to files changed since last commit.
Press `a` to run all tests, or run Jest with `--watchAll`.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

Para rodar todos os testes, pressione **a** no terminal.

<img src="https://ik.imagekit.io/Victorliradev/hunterstack/Captura%20de%20Tela%202025-01-19%20a%CC%80s%2011.57.11_mSSWOXtKh.png?updatedAt=1737298669929" width="100%"  />

Certifique-se de que todos os testes foram aprovados, conforme mostrado no exemplo acima.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
