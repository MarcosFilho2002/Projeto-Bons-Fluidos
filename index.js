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
app.use(express.json());

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
  const palestras = await Post.listar();
  console.log(user)
  if(user == null){
    res.render('index',{
      layout:'failLogin'
    });
  }else{
    res.render('index',{
      layout:'sucessLogin',
      palestras : palestras
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

//rotas de palestra
app.post("/palestras", async function (req, res) {
  console.log(req.body);
  const titulo = req.body.titulo;
  const conteudo = req.body.conteudo;
  const data = req.body.data;

  if (!titulo || !conteudo || !data) {

    return res.status(400).send("Por favor, preencha todos os campos.");
  }
  const post = new Post(titulo, conteudo, data);

  try {
    await post.save();
    res.render("index", {
      layout: "agenda",
    });
  } catch (error) {
    console.error("Erro ao salvar post:", error);
    res.status(500).send("Ocorreu um erro ao salvar o post.");
  }
});


app.get("/palestras", async (req, res) => {
  try {
    const palestras = await Post.listar();
    res.render("index", { palestras, layout: "palestras" });
  } catch (error) {
    console.error("Erro ao obter palestras:", error);
    res.status(500).send("Ocorreu um erro ao obter palestras.");
  }
});

app.delete("/palestras/:id", async (req, res) => {
  const idPalestra = req.params.id;
  try {
    const objectId = await Post.listarUm(idPalestra);
    const palestras = await Post.excluir(objectId);
    res.render("index", { palestras, layout: "palestras" });
  } catch (error) {
    console.error("Erro ao obter palestras:", error);
    res.status(500).send("Ocorreu um erro ao obter palestras.");
  }
});
////////////////////////////////////////////////////////////////////

app.get('/agenda', async(req, res) => {
  const palestras = await Post.listar();
  res.render('index',{
    palestras,
    layout:'agenda'
  });
})

app.listen(3000, () => {
  console.log('Server online')
})