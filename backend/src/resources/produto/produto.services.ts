import { Produto } from '../../models/Produto';
import { createProdutoDto, updateProdutoDto } from './produto.types';

export const getAllProdutos = async (): Promise<Produto[]> => {
  const produtos = await Produto.findAll();
  return produtos.map((p) => p.toJSON());
};

export const createProduto = async (
  produto: createProdutoDto,
): Promise<Produto> => {
  return await Produto.create(produto);
};

export const getProduto = async (id: string): Promise<Produto | null> => {
  return await Produto.findOne({ where: { id } });
};

export const updateProduto = async (
  id: string,
  produto: updateProdutoDto,
): Promise<number | null> => {
  const prod = await getProduto(id);
  if (prod == null) return null;
  const [affectedCount] = await Produto.update(produto, { where: { id } }); // [affectedCount] pega o valor específico dentro da lista
  return affectedCount;
};
