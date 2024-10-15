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

module.exports = {
    addBook
}