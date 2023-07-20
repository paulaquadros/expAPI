import React, { Component } from "react";

const Body = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.products.map((product, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <small className="text-body-primary">{product.price}</small>
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
        <p>Seu carrinho está vazio</p>
      ) : (
        props.cart.map((product, index) => (
          <div
            key={index}
            style={{
              borderTop: "1px solid #ccc",
              padding: "30px",
            }}
          >
            <h5>{product.name}</h5>
            <p>{product.price}</p>
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

class App extends Component {
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
    const products = [
      {
        name: "PS5",
        description:
          "Largura de banda da RAM: 448 GB/s; Taxa de transferência da RAM: 14 GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado);",
        price: "R$ 4.999,90",
      },
      {
        name: "Amazon Echo Dot",
        description:
          "O Echo Dot é o smart speaker de maior sucesso. Controlado por voz com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir músicas, notícias, informações e muito mais. Além de ligar para amigos e familiares e controlar dispositivos compatíveis de casa inteligente com sua voz.",
        price: "R$ 349,00",
      },
      {
        name: "PS5",
        description:
          "Largura de banda da RAM: 448 GB/s; Taxa de transferência da RAM: 14 GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado);",
        price: "R$ 4.999,90",
      },
      {
        name: "Xbox Series X",
        description:
          "Largura de banda da RAM: 448 GB/s; Taxa de transferência da RAM: 14 GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado);",
        price: "R$ 4.999,90",
      },
      {
        name: "Amazon Echo Dot",
        description:
          "O Echo Dot é o smart speaker de maior sucesso. Controlado por voz com Alexa, ele é perfeito para qualquer ambiente. Você pode pedir músicas, notícias, informações e muito mais. Além de ligar para amigos e familiares e controlar dispositivos compatíveis de casa inteligente com sua voz.",
        price: "R$ 349,00",
      },
      {
        name: "Xbox Series X",
        description:
          "Largura de banda da RAM: 448 GB/s; Taxa de transferência da RAM: 14 GB/s; Armazenamento interno: SSD customizado de 825 GB, barramento de 12 canais e controlador PCI Express 4.0, com taxa de transferência de 5,5 GB/s (tamanho original) ou 8,9 GB/s (compactado);",
        price: "R$ 4.999,90",
      },
    ];

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
                <li>
                  <a className="dropdown-item" href="/create">
                    Create
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/update">
                    Update
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/delete">
                    Delete
                  </a>
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
              Cart ({this.state.cart.length})
            </li>
          </ul>
        </header>
        {this.state.page === "products" ? (
          <Body products={products} addToCart={this.addToCart} />
        ) : (
          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
        )}
      </div>
    );
  }
}

export default App;
