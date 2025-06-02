# FarmaJava - Frontend

Frontend da aplicação **FarmaJava**, um sistema simples para cadastro, listagem, edição e exclusão de categorias de medicamentos. 


## 🧪 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/en/main)
- [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)

## ⚙️ Funcionalidades

- Listar todas as categorias cadastradas
- Cadastrar nova categoria
- Editar uma categoria existente
- Deletar categoria com confirmação
- Feedback visual de carregamento
- Integração com backend via Axios

## ▶️ Como rodar o projeto

1. Clone o repositório:  
   `git clone https://github.com/araujokahh/projeto_final_bloco_03`  
   `cd projeto_final_bloco_03`

2. Instale as dependências:  
   `npm install`

3. Inicie o projeto:  
   `npm run dev`

4. O projeto será iniciado em:  
   `http://localhost:5173` (ou porta configurada no seu Vite/React)

> 💡 Certifique-se de que o backend esteja rodando em `http://localhost:8080`.
> ***OBS:*** O repositório do backend está disponível em: https://github.com/araujokahh/projeto_final_bloco_02

## 📁 Estrutura de Pastas (Simplificada)

```
src/
│
├── components/
│   └── CardCategorias.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── ListaCategorias.tsx
│   ├── FormCategoria.tsx
│   └── DeletarCategoria.tsx
│
├── services/
│   └── Service.ts
│
├── types/
│   └── Categoria.ts
```

## 📌 Observações

Este projeto é voltado para fins educacionais e representa uma solução inicial que pode ser expandida com outras features no futuro.

---
