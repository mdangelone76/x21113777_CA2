const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/ca2_database', {useNewUrlParser: true});
BlogPost.create({ 
title: 'Test Test test',
body: 'If you have been here a long'
}, (error, blogpost) =>{
    console.log(error,blogpost)
})
