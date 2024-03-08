const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

// In case of module type js we import packages by:
// import express form "express";
// import path from "path";

const practice = [
    {id: 1, name: 'dinesh'},
    {id: 2, name: 'ram'},
    {id: 3, name: 'shyam'},
    {id: 4, name: 'kumar'},
];
  


//  Get method for retriving data
// for query parameters we use req.query eg: (http://localhost:8080/api/practice/1/?name)

app.get('/api/practices/:id', (req, res) =>
{
    let prac = practice.find(d => d.id === parseInt(req.params.id));
    if (!prac) return res.status(404).send('ID not found!'); 
    res.send(prac);
    
    // res.end();
});
// app.get('/', (req, res) => 
// {
//     res.send("Hello it's your boi Dinesh!!");
//     // res.end();
// });

app.get('/api/practices', (req, res) =>
{
    res.send(practice);
    // res.end();
});




//  Post method for uploading or sending data

app.post('/api/practice', (req, res) => {

    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    const { error } = validatepractice(req.body);

    if (error) return res.status(400).send(error.details[0].message);
        
    

    let prac = {
        id: practice.length + 1,
        name: req.body.name
    };
    practice.push(prac);
    res.send(prac);

});





// Put method for updating data 

app.put('/api/practice/:id', (req, res) => {
    let prac = practice.find(d => d.id === parseInt(req.params.id));// for query parameters we use req.query eg: (http://localhost:8080/api/practice/1/?name)
    if (!prac) return res.status(404).send('ID not found!');

        // const result = validatepractice(req.body);
    const { error } = validatepractice(req.body);

    if (error) return res.status(400).send(error.details[0].message);
        

    prac.name = req.body.name;
    res.send(prac);

      
});

function validatepractice(prac) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(prac, schema);
}




// Delete method to delete data

app.delete('/api/practice/:id', (req, res) => {
    let prac = practice.find(d => d.id === parseInt(req.params.id));
    if (!prac) return res.status(404).send('ID not found!');

    const index = practice.indexOf(prac);
    practice.splice(index, 1);

    res.send(prac);
});



const port = process.env.PORT || 8000; //environment variable declaration with process object
app.listen(port, () => {
   console.log(`Listening on port ${port}!!`); 
});













// app.put();
// app.delete();


