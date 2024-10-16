const bookService = require('../service/books.service')

//Add new book
async function addBook(req, res) {
    try {
        const book = req.body;

        const result = await bookService.addBook(book);

        if(result.error) {
            return res.status(result.status).json({
                error: true,
                payload: result.payload
            }); 
        } else {
            return res.status(result.status).json({
                error: false,
                payload: result.payload
            });
        }
    } catch (error) {
        console.log("Error Adding Book Controller: ", error);
        return res.status(500).json({
            error: true,
            payload: "Internal Server Error"
        })
    }
}

//Get All Books'
async function getAllBooks(req, res) {
    try {

        const result = await bookService.getAllBooks();

        if(result.error) {
            return res.status(result.status).json({
                error: true,
                payload: result.payload
            }); 
        } else {
            return res.status(result.status).json({
                error: false,
                payload: result.payload
            });
        }
    } catch (error) {
        console.log("Error get All Books Controller: ", error);
        return res.status(500).json({
            error: true,
            payload: "Internal Server Error"
        });
    }
}

//Get Book by ID


//Update Book details
async function updateBook(req, res) {
    try{
        
        const { id } = req.params;
        const updatedData = req.body;
        
        const result = await bookService.updateBook(id, updatedData);

        if (result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
        })}
        
    } catch (error) {
        console.log("Error update Book Controller: ", error);
        return res.status(500).json ({
            error: true,
            payload: "Internal Server error"
        })
    }

}

    

module.exports = {
    addBook,
    getAllBooks,
    updateBook
}