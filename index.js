const exphbs = require('express-handlebars');
const express = require('express')

const app = express()


app.use('/public', express.static(__dirname + '/public'))
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');


app.get('/', async(req, res) => {
  
  res.render('index');
})



app.listen(3000, () => {
  console.log('Server online')
})