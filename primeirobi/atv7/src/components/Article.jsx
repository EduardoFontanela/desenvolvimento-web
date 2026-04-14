export default function Article({ titulo, data, autor, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time>{data}</time>
      <p><strong>Por: </strong>{autor}</p>
      
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img src="Img1.png" alt="Exemplo de código HTML básico" style={{ maxWidth: '100%', height: 'auto' }} />
        <figcaption>Figura 1: Minhas primeiras linhas de código HTML estruturado</figcaption>
      </figure>
    </article>
  );
}