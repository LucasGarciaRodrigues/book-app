import { v4 as uuidv4 } from 'uuid';

export default class BookModel{
    constructor(title, author, year){
        this.id = uuidv4();
        this.title = title;
        this.author = author;
        this.year = year;
        this.entryDate = new Date();
    }
}