const express= require('express')
const mongoose=require('mongoose')
const articleRouter=require('./routes/articles')


const app=express()

mongoose.connect('mongodb://localhost/Bharat')

app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }))




app.get('/',(req,res)=>{
    const articles=[{
        title: 'test Article',
        createdAt:new Date(),
        description: 'Test description'
    },
    {
        title: 'test Article 2',
        createdAt:new Date(),
        description: 'Test description 2'
    }


]
    res.render('articles/index',{ articles: articles })

})


app.use('/articles',articleRouter)

app.listen(2000)
