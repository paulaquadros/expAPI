import { Router } from 'express';
import produtoController from './produto.controller';
import checkAdmin from '../../middlewares/checkAdmin';

const router = Router();

router.get('/', produtoController.index);
router.post('/', produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.remove);

export default router;
