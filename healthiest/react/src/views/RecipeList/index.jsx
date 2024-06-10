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
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RecipeList