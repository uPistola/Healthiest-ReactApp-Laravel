import Header from "../../components/header"
import Footer from "../../components/footer"
import '../RecipeList/recipeList.css'
import { useEffect, useState } from "react"
import axiosClient from "../../axios-client";
import { useNavigate } from "react-router-dom";

const RecipeList = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        getRecipes();
    }, [])

    const handleRedirectBest = (id) => {
        navigate(`/recipe/${id}`);  
    };

    const getRecipes = () => {
        setLoading(true)
        axiosClient.get('/recipes')
        .then(({ data }) => {
            setLoading(false)
            setData(data.data)
        })
        .catch(() => {
            setLoading(false)
        })
    }

    return (
        <div className="content">
            <Header />
            <h1>EMBARQUE EM UMA JORNADA</h1>
            <div className="recipes-sub-title">Com nossa diversificada coleção de receitas, temos algo para satisfazer todos os paladares.</div>
            <div className="list-header">
                <button className="btn-trans current">todas</button>
                <button className="btn-trans">Vegana</button>
                <button className="btn-trans">Café da manhã</button>
                <button className="btn-trans">almoço</button>
                <button className="btn-trans">jantar</button>
                <button className="btn-trans">sobremesa</button>
                <button className="btn-trans">lanches!</button>
            </div>

            <div className="cards-list-profile">
                {
                    data ? (
                        data.map((e, index) => (
                            <div className="card-recipes" style={{ backgroundImage: `url(${e.img})` }} key={index}>
                                <div className="card-content-profile">
                                    <span className="card-title-profile">{e.name}</span>
                                    <p className="card-desc-profile">{e.description}</p>
                                </div>
                                <div className="card-footer-profile">
                                    <span className="recipe-diff">{e.difficult}</span>
                                    <button className="btn-trans" onClick={() => handleRedirectBest(e.id)}>VER RECEITA</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        loading ? <p>Carregando...</p> : <p>Sem receitas disponíveis</p>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default RecipeList
