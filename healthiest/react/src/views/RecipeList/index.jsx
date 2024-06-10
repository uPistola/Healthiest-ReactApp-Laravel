import Header from "../../components/header"
import Footer from "../../components/footer"
import '../RecipeList/recipeList.css'
import { useEffect, useState } from "react"
import axiosClient from "../../axios-client";

const RecipeList = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getRecipes();
    },[])

    const getRecipes = () => {
        setLoading(true)
        axiosClient.get('/recipes')
        .then(({data}) => {
            setLoading(false)
            console.log(data)
        })

        .catch(() => {
            setLoading(false)
        })
    }

    return (
        <div className="content">
            <Header></Header>
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
                <div className="card1-recipe">
                    <div className="card-content-profile">
                        <span className="card-title-profile">Frango Salgado com Infusão de Ervas</span>
                        <p className="card-desc-profile">Delicie-se com a rica e saborosa sinfonia de sabores com nosso saboroso frango com infusão de ervas</p>
                    </div>
                    <div className="card-footer-profile">
                        <span className="recipe-diff">40 Min - FÁCIL - 3 porções</span>
                        <button className="btn-trans">VER RECEITA</button>
                    </div>
                </div>
                <div className="card2-recipe">
                    <div className="card-content-profile">
                        <span className="card-title-profile">Frango Grelhado com Limão e Alho</span>
                        <p className="card-desc-profile">Experimente a mistura perfeita de limão picante e alho aromático com esta receita de frango assado</p>
                    </div>
                    <div className="card-footer-profile">
                        <span className="recipe-diff">1 hora - difícil - 4 porções</span>
                        <button className="btn-trans">VER RECEITA</button>
                    </div>
                </div>                
                <div className="card3-recipe">
                    <div className="card-content-profile">
                        <span className="card-title-profile">Legumes Grelhados com Molho</span>
                        <p className="card-desc-profile">Servidos com um molho chimichurri picante, são uma adição perfeita para seus encontros ao ar livre.</p>
                    </div>
                    <div className="card-footer-profile">
                        <span className="recipe-diff">25 Min -  médio - 6 porções</span>
                        <button className="btn-trans">VER RECEITA</button>
                    </div>
                </div>                
                <div className="card4-recipe">
                    <div className="card-content-profile">
                        <span className="card-title-profile">Espaguete Aglio e Olio</span>
                        <p className="card-desc-profile">Um prato minimalista, mas saboroso, com alho, azeite de oliva e um toque de flocos de pimenta vermelha.</p>
                    </div>
                    <div className="card-footer-profile">
                        <span className="recipe-diff">20 min - fácil - 2 porções</span>
                        <button className="btn-trans">VER RECEITA</button>
                    </div>
                </div>                
                <div className="card5-recipe">
                    <div className="card-content-profile">
                        <span className="card-title-profile">Quinoa vegetariana salteada</span>
                        <p className="card-desc-profile">Rápido, saudável e repleto de sabores, é perfeito para um jantar saudável durante a semana.</p>
                    </div>
                    <div className="card-footer-profile">
                        <span className="recipe-diff">30 Min - fácil - 3 porções</span>
                        <button className="btn-trans">VER RECEITA</button>
                    </div>
                </div>                
                <div className="card6-recipe">
                    <div className="card-content-profile">
                        <span className="card-title-profile">Mousse de Chocolate</span>
                        <p className="card-desc-profile">Rápido e repleto de sabores, é perfeito para uma sobremesa durante a semana.</p>
                    </div>
                    <div className="card-footer-profile">
                        <span className="recipe-diff">40 Min -  médio - 4 porções</span>
                        <button className="btn-trans">VER RECEITA</button>
                    </div>
                </div>                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RecipeList