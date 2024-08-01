import { v4 as uuidv4 } from 'uuid';

export default class BookLoanModel{
    constructor(bookId){
        this.id = uuidv4();
        this.bookId = bookId;
        this.status = 'active';
        this.entryDate = new Date();
    }
}