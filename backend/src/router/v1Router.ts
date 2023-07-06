import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoRouter from '../resources/produto/produto.router';
import usuarioRouter from '../resources/usuario/usuario.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoRouter);
router.use('/usuario', usuarioRouter);

export default router;
