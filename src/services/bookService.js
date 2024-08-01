import BookJsonRepository from "../repositories/bookJsonRepository.js";
import BookModel from "../models/bookModel.js";
import LoanModel from "../models/bookLoanModel.js";

const bookJsonRepository = new BookJsonRepository();

export async function addBook(title, author, year){
    const book = new BookModel(title, author, year);
    return bookJsonRepository.addBook(book);
}

export async function listBooks(){
    return bookJsonRepository.listBooks();
}

export async function deleteBook(bookId){
    const loans = await bookJsonRepository.getAllLoans(bookId);
    const loan = loans.find(loan => loan.status === 'active');
    if(loan){
        throw new Error('Não é possível deletar um livro com empréstimo ativo.');
    }
    return bookJsonRepository.deleteBook(bookId);
}

export async function loanBook(bookId){
    const loans = await bookJsonRepository.getAllLoans(bookId);
    const loan = loans.find(loan => loan.status === 'active');
    if(loan){
        throw new Error('Não é possível emprestar um livro com empréstimo ativo.');
    }
    return bookJsonRepository.loanBook(new LoanModel(bookId));
}

export async function returnBook(loanId){
    return bookJsonRepository.returnBook(loanId);
}

export async function getAllLoans(bookId){
    return bookJsonRepository.getAllLoans(bookId);
}