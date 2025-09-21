import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({msg : "hello world"});
}); 

//CRUD fuctionality of movies
//R- for Reading
app.get('/movies',() =>{

})

//C-for creating movies
app.post('/movies',()=> {

})

//U - for updating movies
app.put('/movies/:id',()=>{

})

//D- for Deleting movies
app.delete('/movies/:id', ()=> {
  
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
