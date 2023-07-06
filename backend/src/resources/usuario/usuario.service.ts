import { Usuario } from '../../models/Usuario';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.types';

export const getAllUsuarios = async (): Promise<Usuario[]> => {
  const usuarios = await Usuario.findAll();
  return usuarios.map((p) => p.toJSON());
};

export const createUsuario = async (
  usuario: CreateUsuarioDto,
): Promise<Usuario> => {
  return await Usuario.create(usuario);
};

export const getUsuario = async (id: string): Promise<Usuario | null> => {
  return await Usuario.findOne({ where: { id } });
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto,
): Promise<number | null> => {
  const usr = await getUsuario(id);
  if (usr === null) return null;
  const [affectedCount] = await Usuario.update(usuario, { where: { id } });
  return affectedCount;
};

export const removeUsuario = async (id: string): Promise<number> => {
  return await Usuario.destroy({ where: { id } });
};
