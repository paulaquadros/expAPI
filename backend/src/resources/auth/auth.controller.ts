import { Request, Response } from 'express';
import { createUsuario } from '../usuario/usuario.service';

const login = (req: Request, res: Response) => {};
const signup = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = buscaUsuarioPorEmail(email);
    if (usuario)
      return res.status(400).json({ message: 'E-mail já cadastrado.' });

    const newUsuario = createUsuario({ nome, email, senha });
  } catch (e) {
    res.status(500).json(e);
  }
};
const logout = (req: Request, res: Response) => {};

export default { login, signup, logout };
