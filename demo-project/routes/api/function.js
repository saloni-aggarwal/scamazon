const express = require("express");

const router = express.Router();


// Load Book model

const amazonData = require("../../models/dataModel");


// @route GET api/books/test

// @description tests books route

// @access Public

router.get("/test", (req, res) => res.send("Route testing!"));

//This end point search for all the documents in the collection 
router.route('/searchById/:id').get((req,res) => {
    amazonData.find({_id:req.params.id})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error ' +err));
})


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
    amazonData.find({primaryCategories:{$regex: new RegExp(req.params.category, 'i')}})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error: ' +err));
})

router.route('/searchByZip/:zipcode').get((req, res, next) => {
    amazonData.find({zipcode:{$regex: new RegExp(req.params.zipcode)}})
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(400).json('Error: ' +err));
})

router.route('/geoSearch/:lat/:long').get((req, res, next) => {
    // var neighborhood = amazonData.findOne( { loc: { $geoIntersects: { $geometry: { type: "Point", coordinates: [ , 40.82302903 ] } } } } )
    // db.restaurants.find( { location: { $geoWithin: { $geometry: neighborhood.geometry } } } ).count()
    console.log(req.params.lat);
    console.log(req.params.long);
    const options = {
        loc: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [req.params.long, req.params.lat]
                    
                },
                $maxDistance: 10
            }}}
    // console.log(coordinates)    
    console.log(options)
    amazonData.find(options)
    .then(data => {
        res.json(data)
    })
    .catch(err => {return err.json});
})

// router.route('/comments').post((req,res) => {
//     // amazonData.findById(req.params.id)
//     // .then(product => {
//     //     product.comment = 
//     // })
//     amazonData.updateOne( {_id:req.body.id}, { $set:{ comment: req.body.comment } }) //adds lastName field, update age
//     .then(() => res.json('Comments updated!'))
//     .catch(err => res.json(400).json('Error: ' +err));
// })

router.route('/comments').post((req,res) => {
    
    amazonData.updateOne( {_id: req.body.id}, {$set: {comment:req.body.comment}}) 
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => res.status(400).json('Error: ' +err))


});

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

