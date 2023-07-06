import { Router } from 'express';
import pingRouter from '../resources/ping/ping.router';
import produtoRouter from '../resources/produto/produto.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import tipoUsuarioRouter from '../resources/tipoUsuario/tipoUsuario.router';

const router = Router();

router.use('/ping', pingRouter);
router.use('/produto', produtoRouter);
router.use('/usuario', usuarioRouter);
router.use('/tipoUsuario', tipoUsuarioRouter);

export default router;
