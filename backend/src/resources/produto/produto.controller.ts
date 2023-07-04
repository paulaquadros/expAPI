import { Request, Response } from 'express';
import {
  getAllProdutos,
  createProduto,
  getProduto,
  updateProduto,
} from './produto.services';
import { createProdutoDto, updateProdutoDto } from './produto.types';

const index = async (req: Request, res: Response) => {
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos); // 200 porque já consegui os dados do usuário
  } catch (e) {
    res.status(500).json(e); // mostrando para o usuário que deu algum erro no servidor
  }
};

const create = async (req: Request, res: Response) => {
  const produto: createProdutoDto = req.body;
  try {
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (e) {
    res.status(500).json(e);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const produto = await getProduto(id);
    if (produto == null) res.status(400).json({ msg: 'Produto não existe' });
    else res.status(200).json(produto);
  } catch (e) {
    res.status(500).json(e);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const produto: updateProdutoDto = req.body;
  try {
    const result = await updateProduto(id, produto);
    if (result == null) res.status(400).json({ msg: 'Produto não existe' });
    else res.status(200).json({ msg: 'Produto Atualizado' });
  } catch (e) {
    res.status(500).json(e);
  }
};

const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
