{
    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.get('/', (req, res) =>{
        res.send('hello there');
    });

    app.listen(PORT, ()=>{
        console.log('app listening on ' + PORT);
    });
}