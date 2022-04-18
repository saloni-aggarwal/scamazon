const express = require("express");

const router = express.Router();


// Load Book model

const amazonData = require("../../models/dataModel");


// @route GET api/books/test

// @description tests books route

// @access Public

router.get("/test", (req, res) => res.send("Route testing!"));


//This end point search for all the documents in the collection 
router.route('/searchAll').get((req,res) => {
    amazonData.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error ' +err));
})

//This is end point that searches the database based on name and description of the product
router.route('/searchName/:name').get((req, res) => {
    //Mongoose method to get list of all data from the database according to regex
    amazonData.find({name:{$regex: new RegExp(req.params.name, 'i')}})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error: ' +err));
})

//Search Category
router.route('/searchCategory/:category').get((req, res) => {
    //Mongoose method to get list of all data from the database according to regex
    amazonData.find({categories:{$regex: new RegExp(req.params.description, 'i')}})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error: ' +err));
})

// //This is end point that searches the database based on location of person
// router.route('/geoSearch/:longitude/:latitude').get((req, res) => {
//     var long = req.params.longitude;
//     var lat = req.params.latitude;
//     amazonData.aggregate([
//         // loc:
//             { 
//             $geoNear: 
//                 {
//                 near: {
//                     "type": "Point" ,
//                     "coordinates": [long, lat]
//                 },
//                 $maxDistance: 10,
//                 includeLocs: "loc",
//                 spherical: true
//             }}])
//     .then(data => {
//         res.json(data)
//     })
//     .catch(err => {return err.json});
// })

//Exporting the router
module.exports = router;



// // @route GET api/books

// // @description Get all books

// // @access Public

// router.get("/", (req, res) => {

// amazonData.find()

// .then(books => res.json(books))

// .catch(err => res.status(404).json({ nobooksfound: ‘No Books found’ }));

// });





// // @route GET api/books/:id

// // @description Get single book by id

// // @access Public

// router.get(‘/:id’, (req, res) => {

// Book.findById(req.params.id)

// .then(book => res.json(book))

// .catch(err => res.status(404).json({ nobookfound: ‘No Book found’ }));

// });


// // @route GET api/books

// // @description add/save book

// // @access Public

// router.post(‘/’, (req, res) => {

// Book.create(req.body)

// .then(book => res.json({ msg: ‘Book added successfully’ }))

// .catch(err => res.status(400).json({ error: ‘Unable to add this book’ }));

// });


// // @route GET api/books/:id

// // @description Update book

// // @access Public

// router.put(‘/:id’, (req, res) => {

// Book.findByIdAndUpdate(req.params.id, req.body)

// .then(book => res.json({ msg: ‘Updated successfully’ }))

// .catch(err =>

// res.status(400).json({ error: ‘Unable to update the Database’ })

// );

// });


// // @route GET api/books/:id

// // @description Delete book by id

// // @access Public

// router.delete(‘/:id’, (req, res) => {

// Book.findByIdAndRemove(req.params.id, req.body)

// .then(book => res.json({ mgs: ‘Book entry deleted successfully’ }))

// .catch(err => res.status(404).json({ error: ‘No such a book’ }));

// });


// module.exports = router;
