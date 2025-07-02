# 🛍️ Digital Store

**Digital Store** é uma aplicação front-end fictícia de e-commerce desenvolvida com React. Nela, o usuário pode se autenticar com login e senha cadastrados no backend, visualizar uma lista de produtos e adicionar itens ao carrinho com opções de cor e tamanho — tudo isso de forma responsiva e prática.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🌀 [TwindCSS](https://twind.style/)
- 🟨 JavaScript (ES6+)
- 🧭 [React Router DOM](https://reactrouter.com/en/main) — usando `<Outlet />` ao invés de `children` por escolha estrutural
- 🧠 Context API — compartilhamento eficiente de dados entre páginas e componentes

---

## ✨ Funcionalidades

- ✅ **Autenticação com token** via backend
  - Login funcional e proteção de rotas com componente `PrivateRoute`
  - A validação do token é feita com lógica própria no front-end
- 🔍 **Campo de busca dinâmico**
  - Busca feita com `query string` e filtragem local
- 🛒 **Carrinho de compras local**
  - Itens armazenados localmente com opção de escolher **cor** e **tamanho**
- 📦 **Filtro por preço**
  - Ordenação funcional por maior/menor valor
- 📱 **Design responsivo**
  - Adaptado para diferentes tamanhos de tela
- 🖼️ **Imagens dinâmicas**
  - Produtos carregados de `/public/products`
  - Demais imagens em `src/assets`
- 🔐 **Rotas protegidas**
  - Implementadas via componente `PrivateRoute`

---

## ⚙️ Requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados na sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes que acompanha o Node.js)
- Navegador moderno (Google Chrome, Firefox, etc.)

### 📦 Dependências principais

- `react-router-dom` — gerenciamento de rotas
- `twind` — estilização com utilitários CSS
- `react-icons` — biblioteca de ícones
- `fetch` — utilizado para requisições HTTP ao backend

---

## 💻 Como executar o projeto localmente

Siga os passos abaixo para rodar o projeto em ambiente de desenvolvimento:

# 1. Clone este repositório
git clone https://github.com/Kelvin196-bit/Front_END.git

# 2. Acesse o diretório do projeto
cd Front_END

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. copie e cole na tela de login o email e password.
Eles estão cadastrados no banco de dados do projeto Back End vinculado a este projeto disponível em https://github.com/Kelvin196-bit/Back_End.

> ⚠️ Este projeto ainda está em desenvolvimento e não realiza requisições de compra ao backend.

---

Este projeto foi desenvolvido em parceria com: Lidiano Sousa, GitHub: @Lihsousa, durante o programa de capacitação Geração Tech 2.0.

