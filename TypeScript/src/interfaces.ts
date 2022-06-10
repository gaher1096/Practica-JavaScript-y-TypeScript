interface Book{
    id: number;
    tittle: string;
    author: string;
    coAuthor?:string;
}

const book:Book ={
    id: 0,
    tittle: "La cupla es de la vaca",
    author: "anonimo"
};

const books:Book[] =[];

function getBook():Book{
    return {id:1,tittle:"Mi libro",author:"Dross"}
}
const myBook = getBook();

function createBook(book:Book):Book{
    return book;
}

const newBook:Book={
    id:1,
    tittle:"Mi libro",
    author:"Dross"
};

createBook(newBook);