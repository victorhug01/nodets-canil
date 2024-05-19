import { Router } from "express";
import * as PageControler from "../controllers/pageController"
import * as SearchController from "../controllers/searchController"

const router = Router();

router.get('/', PageControler.home)
router.get('/dogs', PageControler.dogs)
router.get('/cats', PageControler.cats)
router.get('/fishes', PageControler.fishes)

router.get('/search', SearchController.search)

export default router;
