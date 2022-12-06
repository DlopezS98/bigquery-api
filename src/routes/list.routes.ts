import { Router } from "express";
import ListsController from "../controllers/lists.controller";

const listController = new ListsController();

const router = Router();
export const endpoint = "/list";

router.get('/', listController.get);
router.get('/getById', listController.getById);

export default router;