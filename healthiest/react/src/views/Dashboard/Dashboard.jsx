// Dashboard.js
import Header from "../../components/header";
import Footer from "../../components/footer";
import "../Dashboard/dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const generateRecipe = () => {
        setOpen(!open);
    };

    const handleRedirectBest = (id) => {
        navigate(`/recipe/${id}`);  
    };

    const handleRedirect = () => {
        navigate(`/recipe`); 
    };


  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Voce é um nutricionista e chef culinario, voce deve apenas responder perguntas relacionadas com comida, receitas, calorias, nutriçao e coisas relacionadas a alimentaçao no geral. Outras perguntas que nao estao relacionadas com estes conteudos voce deve dizer que nao pode responder.' },
            { role: 'user', content: input }
          ],
          
          max_tokens: 2000
        }, {
          headers: {
            'Authorization': `Bearer`,
            'Content-Type': 'application/json'
          }
        });
  
        setResponse(result.data.choices[0].message.content);
      } catch (error) {
        console.error("There was an error making the request", error);
      }
    };

    return (
        <div className="content">
            <Header />
            <div className="img-container adjust">
                <div className="title align"><h1>DESPERTE A EXCELÊNCIA CULINÁRIO</h1></div>
                <div className="align"><p className="desc">Explore um mundo de sabores, descubra receitas artesanais e deixe o aroma da nossa paixão pela culinária preencher sua cozinha.</p></div>
                <div className="align"><button className="create-recipe" onClick={generateRecipe}>CRIE SUA RECEITA</button></div>
            </div>
            <div className={`input-chat adjust` + " " + (!open ? "hide" : null)}>
                <form className="chat" onSubmit={handleSubmit}>
                    <textarea className="text-area" onChange={(e) => setInput(e.target.value)}  placeholder="Escreva aqui a receita que deseja gerar, busque por ingredientes, tempo de preparo e dificuldade. Obs: Quanto mais detalhes inserir, melhor será a geração"></textarea>
                    <div className="div-botao">
                        <button className="btn-trans" type="submit">GERAR RECEITA</button>
                    </div>
                </form>
                <div>
                    {response}
                </div>
            </div>
            <div className="options adjust">
                <div className="left-form">
                    <div className="option-title">NOSSA PALETA DIVERSIFICADA</div>
                    <div><p className="option-text">Se você é um entusiasta do café da manhã, um conhecedor de delícias salgadas ou está em busca de sobremesas irresistíveis, nossa seleção cuidadosamente elaborada tem algo para satisfazer todos os paladares.</p></div>
                    <div className="btn-spacing"><button className="btn-trans" onClick={() => handleRedirect(1)}>VEJA MAIS</button></div>
                </div>
                <div className="right-form">
                    <div className="option-item"><i className="fa-solid fa-mug-saucer opt-icon"></i><span>CAFÉ DA MANHÃ</span></div>
                    <div className="option-item"><i className="fa-solid fa-shrimp opt-icon"></i><span>ALMOÇO</span></div>
                    <div className="option-item"><i className="fa-solid fa-burger opt-icon"></i><span>JANTAR</span></div>
                    <div className="option-item"><i className="fa-solid fa-ice-cream opt-icon"></i><span>SOBREMESAS</span></div>
                    <div className="option-item"><i className="fa-solid fa-hotdog opt-icon"></i><span>LANCHES</span></div>
                </div>
            </div>
            <div className="best-recipes adjust">
                <div className="recipes-header">
                    <div className="option-title">RECEITAS EM DESTAQUE</div>
                    <div className="next-section">
                        <ul className="next-list">
                            <li className="next-icon"><i className="fa-solid fa-arrow-left"></i></li>
                            <li className="next-icon"><i className="fa-solid fa-arrow-right"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="carrosel">
                    <div className="card1">
                        <div className="card-content">
                            <span className="card-title">Frango Salgado com Infusão de Ervas</span>
                            <p className="card-desc">Delicie-se com a rica e saborosa sinfonia de sabores com nosso saboroso frango com infusão de ervas</p>
                        </div>
                        <div className="card-footer">
                            <span className="recipe-diff">40 Min - FÁCIL - 3 porções</span>
                            <button className="btn-trans" onClick={() => handleRedirectBest(1)}>VER RECEITA</button>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="card-content">
                            <span className="card-title">Mousse De Chocolate</span>
                            <p className="card-desc">Mergulhe na indulgência aveludada da nossa Mousse de Chocolate. Uma sobremesa que transcende a doçura!</p>
                        </div>
                        <div className="card-footer">
                            <span className="recipe-diff">30 Min - MÉDIO - 4 PORÇÕES</span>
                            <button className="btn-trans" onClick={() => handleRedirectBest(2)}>VER RECEITA</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
