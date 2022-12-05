import { Router } from "express";
import * as apiController from '../controllers/apiController'

const router = Router()

router.get ('/ping',apiController.ping)

router.get('/random',apiController.random)

router.get('/nome/:nome',apiController.nome) 

router.post('/frases',apiController.createFrase)

router.get('/frases',apiController.listFrases)

router.get('/frase/:id',apiController.getFrase)

router.put('/frase/:id', apiController.updateFrase)

router.delete('/frase/:id',apiController.deleteFrase)

export default router