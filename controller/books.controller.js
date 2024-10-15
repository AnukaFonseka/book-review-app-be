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

module.exports = {
    addBook
}