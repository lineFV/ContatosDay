const express = require('express');
const bodyParser = require('body-parser');
const db = require('express-mongo-db');

const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('static'));
app.use(bodyParser.urlencoded());
app.use(db('mongodb://alineFv:Academia9@ds223653.mlab.com:23653/contato1'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.post('/', ( req , res ) => {
    console.log(req.body);
    req.db.collection('contatosAmigos').insert(req.body, (erro) =>{
        if(erro){
            resposta.render('erro');
            return;
        }
    res.render('home');
    });
});
app.get('/home', (req, res) => {
    req.db.collection('contatosAmigos').find().toArray((erro, dados) => {
        if(erro){
            res.render('erro');
            return;
        }
        
        res.render('contatosAmigos', {'lista': dados});
    });
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor iniciado')
});