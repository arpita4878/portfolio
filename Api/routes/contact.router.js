import express from 'express'
import * as contactController from '../controller/contact.controller.js'
const router=express.Router()

router.post("/save",contactController.save)

export default router;