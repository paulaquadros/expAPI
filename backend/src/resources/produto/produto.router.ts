import { Router } from 'express';
import produtoController from './produto.controller';
import checkAdmin from '../../middlewares/checkAdmin';

const router = Router();

router.get('/', produtoController.index);
router.post('/', checkAdmin, produtoController.create);
router.get('/:id', produtoController.read);
router.put('/:id', checkAdmin, produtoController.update);
router.delete('/:id', checkAdmin, produtoController.remove);

export default router;
