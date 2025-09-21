import express from 'express'
const router= express.Router()
//CRUD fuctionality of movies
//R- for Reading
router.get('/',(req,res) =>{
    res.send("get all movie list ");

})

//C-for creating movies
router.post('/',(req,res)=> {
   res.send("create a movie");
})

//U - for updating movies
router.put('/:id',(req,res)=>{
    res.send("update a movie");
})

//D- for Deleting movies
router.delete('/:id', (req,res)=> {
    res.send("delete a movie");
})
export default router;