const express= require ("express");
const db= require ("express-mongo-db");

const app =express();
app.set('view engine', 'ejs');
app.use('/css', express.static ('css'));
app.use(db('mongodb://localhost/contatos'));

app.get('/', (req,res) => {
    res.render('home');
});
app.listen (3000, ()=>{
    console.log('Servidor iniciado');
})