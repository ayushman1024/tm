// const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title: String,
    startDT: Date,
    dueDT: Date
},
{
    timestamps: true
});
