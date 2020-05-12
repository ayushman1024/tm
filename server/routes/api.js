const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const db = "mongodb+srv://admin:admin@c0-txnvy.mongodb.net/test?retryWrites=true&w=majority";

const post = require('./../models/post.js');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("DB_ERROR");
    }
});

router.get('/posts',function(req,res){
    console.log('requesting');
    TextTrackList.find({})
                .exec(function(err, tasks){
                    if(err){
                            console.log('Error getting tasks');
                    }else {
                        res.json(tasks);
                        console.log(tasks);
                    }
                });

});

module.exports = router;
