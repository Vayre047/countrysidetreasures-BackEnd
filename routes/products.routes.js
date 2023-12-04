const router = require('express').Router();
const mongoose = require('mongoose');

const Category = require('../models/Category.Model');
const Products = require('../models/Product.Model');

router.get("/meats", async(req, res) => {
    try{
        let allMeats = await Product.find();
        console.log(res.json(allMeats));
    }catch(error){
        res.json(error);
    }
})

router.get("/fruits", async(req, res) => {
    try{
        let allFruits = await Products.find();
        console.log(res.json(allFruits));
        console.log("Heloo World Heloo World Heloo World");
    }catch(error){
        res.json(error);
    }
});

module.exports = router;