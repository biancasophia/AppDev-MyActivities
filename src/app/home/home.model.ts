
export class User{
    id: string;
    title:string;
    author: string;
    publicationdate:Date;
    genre: string;
    stanzas:number;


    
    constructor(id: string = '',title: string = '', author: string = '',publicationdate: Date = new Date(),
    genre: string='',stanzas: number = 0 ){
        this.id = id;
        this.title = title;
        this.author = author;
        this.publicationdate = publicationdate;
        this.genre = genre;
        this.stanzas = stanzas;
    }
}
export interface iUser{
    id: string;
    title:string;
    author: string;
    publicationdate:Date;
    genre: string
    stanzas: number;
}