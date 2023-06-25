import express from "express";
import { registration } from "../middleware/authmiddleware.js";
import { Autocomplete, Calendar, register, searchbygeoLocation, searchbylocation } from "../Controller/UserController.js";

var router = express.Router();
 
router.post('/registration',registration,register)
router.get('/searchby-location',searchbylocation);
router.get('/Calendar',Calendar);
router.get('/Autocomplete',Autocomplete);
router.get('/searchbygeoLocation',searchbygeoLocation);

export default router;