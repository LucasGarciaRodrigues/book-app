import fs from 'fs';
import path from 'path';
import BookRepository from './bookRepository.js';

const booksFile = path.resolve('books-db.json');
const loansFile = path.resolve('loans-db.json');

function loadBooks(){
    try{
        const data = fs.readFileSync(booksFile, 'utf8');
        const booksData = JSON.parse(data);
        return booksData.map(book => ({
            ...book,
            entryDate: new Date(book.entryDate)
        }));
    }catch(error){
        return [];
    }    
}

function saveBooks(books) {
    const data = JSON.stringify(books.map(book => ({
      ...book,
      entryDate: book.entryDate.toISOString()
    })), null, 2);
    fs.writeFileSync(booksFile, data);
}

function loadLoans(){
    try{
        const data = fs.readFileSync(loansFile, 'utf8');
        const loansData = JSON.parse(data);
        return loansData.map(loan => ({
            ...loan,
            entryDate: new Date(loan.entryDate)
        }));
    }catch(error){
        return [];
    }    
}

function saveLoans(loans) {
    const data = JSON.stringify(loans.map(loan => ({
      ...loan,
      entryDate: loan.entryDate.toISOString()
    })), null, 2);
    fs.writeFileSync(loansFile, data);
}

let books = loadBooks();
let loans = loadLoans();

export default class BookJsonRepository extends BookRepository{
    async addBook(bookData){
        books.push(bookData);
        saveBooks(books);
        return bookData;
    }
    
    async listBooks(){
        return books;
    }

    async deleteBook(bookId){
        const index = books.findIndex(book => book.id === bookId);
        console.log(index);
        if(index === -1){
            throw new Error('Livro não encontrado.');
        }
        const deletedBook = books.splice(index, 1)[0];
        saveBooks(books);
        return deletedBook;
    }

    async loanBook(loanData){
        const bookIndex = books.findIndex(book => book.id === loanData.bookId);
        if (bookIndex === -1) {
            throw new Error('Livro não encontrado.');
        }
        loans.push(loanData);
        saveLoans(loans);
        return loanData;
    }

    async returnBook(loanId){
        const loan = loans.find(loan => loan.id === loanId);
        if(!loan){
            throw new Error("Empréstimo não encontrado.");
        }
        loan.status = 'returned';
        saveLoans(loans)
        return loan;
    }

    async getLoan(bookId){
        const loan = loans.find(loan => loan.bookId === bookId);
        if (!loan) {
            throw new Error('Empréstimo não encontrado.');
        }
        return loan;
    }

    async getAllLoans(bookId){
        const allLoans = loans.filter(loan => loan.bookId === bookId);
        if (allLoans == []) {
            throw new Error('Empréstimos não encontrados.');
        }
        return allLoans;
    }

}

