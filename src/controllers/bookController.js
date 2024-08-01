import { addBook, listBooks, deleteBook, loanBook, returnBook, getAllLoans } from "../services/bookService.js"

const bookController = {
    
    async addBook(request, reply){
        const { title, author, year } = request.body;
        try{
            const book = await addBook( title, author, year );
            reply.code(201).send({ message: 'Livro adicionado com sucesso.', book });
        } catch (error) {
            reply.code(400).send({ message: error.message });
        }
    },

    async listBooks(request, reply){
        try{
            const books = await listBooks();
            reply.send(books);
        }catch(error){
            reply.code(500).send({ message: error.message });
        }
    },
    
    async deleteBook(request, reply){
        const { id } = request.params;
        try{
            const book = await deleteBook(id);
            reply.send({ message: 'Livro deletado com sucesso.', book });
        }catch(error){
            reply.code(404).send({ message: error.message });
        }
    },

    async loanBook(request, reply){
        const { bookId } = request.params;
        try{
            const loan = await loanBook(bookId);
            reply.code(201).send({ message: 'Livro emprestado com sucesso.', loan });
        }catch(error){
            reply.code(400).send({ message: error.message });
        }
    },

    async returnBook(request, reply){
        const { loanId } = request.params;
        try{
            const loan = await returnBook(loanId);
            reply.send({ message: 'Livro devolvido com sucesso.', loan });
        }catch(error){
            reply.code(404).send({ message: error.message });
        }
    },

    async getAllLoans(request, reply){
        const { bookId } = request.params;
        try{
            const loans = await getAllLoans(bookId);
            reply.send(loans);
        }catch(error){
            reply.code(404).send({ message: error.message });
        }
    }
};

export default bookController;