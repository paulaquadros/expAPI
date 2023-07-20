import React from "react";
import axios from "axios";
import useForm from "./hooks/useForm";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [post, setPost] = React.useState(null);

  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const enviarContato = () => {
    axios.post(baseURL, { ...useForm }).then((response) => {
      setPost(response.data);
    });
    console.log(values);
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Digite o título"
        />
        <input
          onChange={handleChange}
          type="text"
          name="body"
          placeholder="Digite o assunto"
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  );
};
