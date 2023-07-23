import React, { Component } from "react";

const products = [
  {
    nome: "PS5",
    estoque: 10,
    preco: "R$ 4.999,90",
  },
  {
    nome: "Amazon Echo Dot",
    estoque: 10,
    preco: "R$ 349,00",
  },
  {
    nome: "PS5",
    estoque: 10,
    preco: "R$ 4.999,90",
  },
  {
    nome: "Xbox Series X",
    estoque: 10,
    preco: "R$ 4.999,90",
  },
  {
    nome: "Amazon Echo Dot",
    estoque: 10,
    preco: "R$ 349,00",
  },
  {
    nome: "Xbox Series X",
    estoque: 10,
    preco: "R$ 4.999,90",
  },
];

const Body = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.products.map((product, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.nome}</h5>
                <p className="card-text">
                  <small className="text-body-primary">{product.preco}</small>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => props.addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <div className="container">
      <h2>Seu carrinho</h2>

      {props.cart.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        props.cart.map((product, index) => (
          <div
            key={index}
            style={{
              borderTop: "1px solid #ccc",
              padding: "30px",
            }}
          >
            <h5>{product.nome}</h5>
            <p>{product.preco}</p>
            <button
              className="btn btn-danger"
              onClick={() => props.removeFromCart(index)}
            >
              Remover do carrinho
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const CreateProduct = (props) => {
  return (
    <div className="container">
      <h1 className="mt-4">Adicionar Produto</h1>
      <form action="#" method="post">
        <div className="form-group mt-4">
          <label for="nomeProduto">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nomeProduto"
            name="nomeProduto"
            required
          />
        </div>
        <div className="form-group mt-4">
          <label for="precoProduto">Preço</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="precoProduto"
            name="precoProduto"
            required
          />
        </div>
        <div className="form-group mt-4">
          <label for="estoqueProduto">Estoque</label>
          <input
            type="number"
            className="form-control"
            id="estoqueProduto"
            name="estoqueProduto"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Adicionar Produto
        </button>
      </form>
    </div>
  );
};

const UpdateProduct = (props) => {
  return (
    <div className="container">
      <h2>Atualizar produtos</h2>
    </div>
  );
};

const DeleteProduct = (props) => {
  return (
    <div className="container">
      <h2>Deletar produtos</h2>
    </div>
  );
};

const ListProducts = (props) => {
  return (
    <div className="container">
      <h2>Lista de produtos</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.nome}</td>
              <td>{product.preco}</td>
              <td>{product.estoque}</td>
              <td style={{ width: "200px" }}>
                <button
                  style={{ marginRight: "10px" }}
                  className="btn btn-primary"
                >
                  Editar
                </button>
                <button className="btn btn-danger">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

class App extends Component {
  renderPage = () => {
    switch (this.state.page) {
      case "products":
        return <Body products={products} addToCart={this.addToCart} />;
      case "cart":
        return (
          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
        );
      case "create":
        return <CreateProduct />;
      case "update":
        return <UpdateProduct />;
      case "delete":
        return <DeleteProduct />;
      case "listProducts":
        return <ListProducts products={products} />;
      default:
        return <Body products={products} addToCart={this.addToCart} />;
    }
  };

  state = {
    cart: [],
    page: "products",
  };

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  removeFromCart = (index) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((_, i) => i !== index),
    }));
  };

  navigateTo = (page) => {
    this.setState({ page });
  };

  render() {
    return (
      <div className="container text-left">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <ul className="nav nav-pills">
            <li>
              <h2
                className="store-title"
                onClick={() => {
                  this.navigateTo("products");
                }}
              >
                Store
              </h2>
            </li>
            <li className="nav-item dropdown" id="produtos">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li
                  className="dropdown-item"
                  onClick={() => this.setState({ page: "create" })}
                >
                  Adicionar
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => this.setState({ page: "update" })}
                >
                  Atualizar
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => this.setState({ page: "delete" })}
                >
                  Deletar
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => this.setState({ page: "listProducts" })}
                >
                  Todos os produtos
                </li>
              </ul>
            </li>
            <li className="nav-item" id="login">
              <a href="google.com" className="nav-link px-2 link-dark">
                Login
              </a>
            </li>
            <li className="nav-item" id="signup">
              <a href="google.com" className="nav-link px-2 link-dark">
                Sign Up
              </a>
            </li>
            <li>
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                id="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
            </li>
            <li
              className="nav-item link-dark cart-button"
              id="cart"
              onClick={() => this.setState({ page: "cart" })}
            >
              Carrinho ({this.state.cart.length})
            </li>
          </ul>
        </header>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
