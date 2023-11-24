const exphbs = require('express-handlebars');
const express = require('express')

const User = require('./models/User')
const Post = require('./models/Post')

const app = express()

const serverSession = require('express-session')

app.use('/public', express.static(__dirname + '/public'))
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: false}))

app.use(serverSession({
  secret: '4004-CrM7-Whe2Ko',
  resave: true,
  saveUninitialized: true
}));


app.get('/', async(req, res) => {
  
  res.render('index');
})

app.post('/login',async function(req,res){
  const email = req.body.email
  const senha = req.body.senha
  const user = await User.logar(email,senha)
  console.log(user)
  if(user == null){
    res.render('index',{
      layout:'failLogin'
    });
  }else{
    res.render('index',{
      layout:'sucessLogin'
    });
  }
})

app.post('/register',async function(req,res){
  const email = req.body.emailRegistro
  const senha = req.body.senhaRegistro

  const user = new User(email,senha)
        
  user.save()

  res.render('index',{
    layout:'sucessRegister'
  });
})


app.get('/agenda', async(req, res) => {
  
  res.render('index',{
    layout:'agenda'
  });
})

app.listen(3000, () => {
  console.log('Server online')
})