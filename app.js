const express = require('express')


const app = express()


const port = 5000


//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/img'))
app.use('/css', express.static(__dirname + 'public/js'))

//Templating Engine

app.set('views', './src/views')
app.set('view engine', 'ejs')

//Routes
const newsRouter= require('./src/routes/news')

app.use('/', newsRouter)





app.listen(port, () => {
    console.log(`listening on ${port} :D`);
})