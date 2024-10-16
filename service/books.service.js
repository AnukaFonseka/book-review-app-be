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

//Update book details.
async function updateBook(id, updatedData) {
    try {
        const book = await Books.findByPk(id);

        if(!book) {
            return { 
                error: true,
                status: 404,
                payload: "Book not found."
            };
        }
        await book.update(updatedData);


    return {
        error: false,
        status: 200,
        payload: "Book updated successfully. "
    };

    } catch (error) {
        console.log(error)
        throw error;
    }

}


module.exports = {
    addBook,
    getAllBooks,
    updateBook
}