import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const postInfo = {
    titulo: "Como Começar a Programar",
    data: "25 de janeiro de 2026",
    autor: "Eduardo Fontanela",
    conteudo: [
      "Aprender a programar começa com o domínio das bases, como o HTML e o CSS. Ao construir este blog, o foco está em entender como estruturar o conteúdo e transformar linhas de código em algo que qualquer pessoa possa acessar e navegar na internet.",
      "O segredo não é decorar comandos, mas sim praticar com projetos reais e desenvolver o raciocínio lógico. Cada pequena tag que você aprende hoje é um degrau a mais na sua jornada para se tornar um desenvolvedor de front-end completo e criativo."
    ]
  };

  return (
    <div className="grid-container">
      <Header />
      
      <main className="main-content">
        <Article 
          titulo={postInfo.titulo}
          data={postInfo.data}
          autor={postInfo.autor}
          conteudo={postInfo.conteudo}
        />
      </main>

      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;