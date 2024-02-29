const express = require('express');
const app = express();
const practice = [
    {id: 1, name: 'dinesh'},
    {id: 2, name: 'ram'},
    {id: 3, name: 'shyam'},
    {id: 4, name: 'kumar'},
];
    


app.get('/', (req, res) => 
{
    res.send("Hello it's your boi Dinesh!!");
    // res.end();
});

app.get('/api/practice', (req, res) =>
{
    res.send(prac);
    // res.end();
});

app.get('/api/practice/:id', (req, res) =>
{
    let prac = practice.find(d => d.id === parseInt(req.params.id));
    if (!prac)
        res.status(404).send('ID not found!')
        res.send(prac);
    // res.end();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log('Listening yar!!'); 
});


// app.post();
// app.put();
// app.delete();


