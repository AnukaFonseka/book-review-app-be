const { UserRatings, Books } = require('../models')


async function addRatingsAndReviews (rating) {
    try {
        const existRating = await UserRatings.findOne({
            where: {
                userId: rating.userId,
                bookId: rating.bookId
            }
        })

        if(existRating){
            return{
                status: 400,
                error: true,
                payload: "User has already rated this book!"
            }
        }
        const result = await UserRatings.create(rating)
        return{
            status: 201,
            error: false,
            payload: result
        }

        } catch (error) {
            console.error('Error adding rating and review service:', error);
        throw error;
        }

    } 

    //Get ratings by book Id for a book
    async function getRatingsByBookId(bookId) {
        try {

         const book = await Books.findByPk(bookId);  // Fetch the book by primary key (ID)

        if (!book) {
            return {
                status: 400,
                error: true,
                payload: "Invalid Book ID"
            };
        }
         const result = await UserRatings.findAll({
                where: { 
                    bookId: bookId,
                },
                attributes: ['ratings','reviews'],
            });  
            //console.log(result);
    
            if (!result || result==[]) {
                return {
                    status: 204,
                    error: false,
                    payload: "No reviews and ratings"
                };
            }
    
            return {
                status: 200,
                error: false,
                payload: result
            };
        } catch (error) {
            console.error('Error getting ratings book by ID Service: ', error);
            throw error;
        }
    }

    //Calculate average rating of a book
    async function getAverageRating(bookId) {
        try{
            const ratings = await UserRatings.findAll ({
                where: {
                    bookId: bookId
                },
                attributes: ['ratings']
            });

            if(ratings.length ===0) {
                return {
                    status: 204,
                    error: true,
                    payload: "No user ratings"
                };
            }
            const totalRatings = ratings.reduce((sum,record) => sum + record.ratings,0);
            const numberOfRatings = ratings.length;

            const averageRating = totalRatings/ numberOfRatings;

            return {
                status: 200,
                error: false,
                payload: averageRating
            }

            
        }  catch (error){
             console.error('Error calculating average rating service: ', error);
             throw error;
        }
    }
        
    

    module.exports ={
        addRatingsAndReviews,
        getRatingsByBookId,
        getAverageRating
    }

