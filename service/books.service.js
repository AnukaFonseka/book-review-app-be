const { Books } = require('../models')

//Add new book 
async function addBook(book) {
    try {
        const result = await Books.create(book);
        return {
            status: 201,
            error: false,
            payload: result
        }
    } catch (error) {
        console.error('Error Adding Book Service : ',error);
        throw error;
    }
    
}

//Get All Books
async function getAllBooks() {
    try{
        const result = await Books.findAll();
        return {
            status: 200,
            error: false,
            payload: result
        }
    } catch (error) {
        console.error('Error getting all books Service: ', error);
        throw error;
    }
}


module.exports = {
    addBook,
    getAllBooks
}