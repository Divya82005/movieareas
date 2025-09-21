import express from 'express';
import {
    MovieCreate,
    MovieDelete,
    MovieIndex,
    MovieUpdate
} from "../controllers/movies.controller";
const router= express.Router();
//CRUD fuctionality of movies
//R- for Reading
router.get("/",MovieIndex);

//C-for creating movies
router.post("/", MovieCreate);

//U - for updating movies
router.put('/:id', MovieUpdate);

//D- for Deleting movies
router.delete('/:id', MovieDelete);
export default router;