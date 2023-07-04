import { Produto } from '../../models/Produto';

// !! OBS: sempre que tiver 'Dto' é uma definição de algo que o front tem que enviar pro back ou vice-versa

export type createProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
export type updateProdutoDto = Pick<Produto, 'nome' | 'preco' | 'estoque'>;
