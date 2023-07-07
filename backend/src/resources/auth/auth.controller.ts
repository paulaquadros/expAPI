import { Request, Response } from 'express';
import { createUsuario } from '../usuario/usuario.service';
import { buscaUsuarioPorEmail } from '../usuario/usuario.service';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';
import checkCredentials from './auth.service';

// Login
const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const usuario = await checkCredentials({ email, senha });
    if (!usuario)
      return res.status(401).json({ message: 'Usuário não existe.' });
    req.session.uid = usuario.id;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    res.status(200).json({ msg: 'Login realizado com sucesso.' });
  } catch {}
};

// Sign Up
const signup = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = await buscaUsuarioPorEmail(email);
    if (usuario)
      return res.status(400).json({ message: 'E-mail já cadastrado.' });

    const newUsuario = await createUsuario({
      nome,
      email,
      senha,
      tipoUsuarioId: TiposUsuarios.CLIENTE,
    });
    res.status(201).json(newUsuario);
  } catch (e) {
    res.status(500).json(e);
  }
};

// Log Out
const logout = (req: Request, res: Response) => {
  if (req.session.uid) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        res.status(200).json({ msg: 'Logout realizado com sucesso.' });
      }
    });
  } else {
    res.status(400).json({ msg: 'Não há usuário logado.' });
  }
};

export default { login, signup, logout };
