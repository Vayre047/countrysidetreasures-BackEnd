const router = require('express').Router();
const mongoose = require('mongoose');

const Category = require('../models/Category.Model');
const Product = require('../models/Product.Model');

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
        let allFruits = await Product.find();
        console.log(res.json(allFruits));
    }catch(error){
        res.json(error)
    }
});

module.exports = router;