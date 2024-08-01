# book-app

Este projeto implementa a API de um sistema de biblioteca utilizando Node.js, o framework Fastify e banco de dados por meio de arquivos JSON.

## Funcionalidades

* **Adicionar livro:** Realiza o cadastro de um livro na biblioteca, incluindo nome, autor e data de lançamento.
* **Remover livro:** Remove um livro da biblioteca pelo ID.
* **Listar todos os livros:** Retorna uma lista com todos os livros registrados no sistema.
* **Realizar emprestimo de livro:** Permite realizar o emprestimo de um livro pelo ID, desde que não esteja emprestado.
* **Devolver livro:** Devolve um livro da biblioteca pelo ID do emprestimo.
* **Listar emprestimos de um livro:** Retorna uma lista com todos os emprestimos do livro registrados no sistema.

## Instalação

1. Instale o <a href = "https://nodejs.org/en/learn/getting-started/how-to-install-nodejs">Node.js</a>.

2. Clone o repositório em uma pasta local:
    
        git clone https://github.com/LucasGarciaRodrigues/book-app.git

4. Execute `npm install` para instalar as dependências.

## Execução

1. Execute `npm start` para iniciar o servidor.
2. Execute `npm dev` para iniciar o servidor no modo `--watch`.
3. O servidor estará disponível em:
        
        http://localhost:3000/bookAPI/