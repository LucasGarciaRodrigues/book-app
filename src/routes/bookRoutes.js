import bookController from '../controllers/bookController.js';

/**
 * A fastify plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * 
 * */

// recebe app como parametro
async function routes(fastify) {
  fastify.post('book/', bookController.addBook);
  fastify.get('book/', bookController.listBooks);
  fastify.delete('book/:id', bookController.deleteBook);
  fastify.post('book/:bookId/loan', bookController.loanBook);
  fastify.delete('book/:loanId/return', bookController.returnBook)
  fastify.get('book/:bookId/loan', bookController.getAllLoans)
}

export default routes;