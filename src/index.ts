import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routers/users';

const app = express(); // instancia o app express

// O primeiro argumento é o prefixo do caminho.
// Todas as rotas que estiverem registradas no roteador
// de usuarios vão usar este prefixo.
// Aqui o usersRouter é passado como argumento para o caminho.
app.use('/api/users', usersRouter);

const PORT = 3000; // variavel para a porta

app.get('/api/users', function(request, response, next){
    
});

app.listen(PORT, function() {
    console.log(`Running on port ${PORT}`)
});