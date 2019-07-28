const express = require('express');
const app = express();

app.set('port', process.env.Port || 3000);

app.get('/', (req, res) => {
    console.log('hola mundo');
    res.send('hola mundo');
});

app.listen(app.get('port'), () => {
    console.log('servidor en el puerto:', app.get('port'));
})