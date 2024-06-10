// Recipe.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../../components/header";
import Footer from '../../components/footer';
import "../Recipe/recipe.css"

const Recipe = () => {
    const { id } = useParams();
    const [recipeData, setRecipeData] = useState(null);

    console.log(id)

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`https://api.example.com/recipes/${id}`);
                setRecipeData(response.data);
            } catch (error) {
                console.error('Error fetching the recipe:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    return (
        <div className="content">
            <Header />
                <div className="recipe-container">
                    <h1 className="recipe-title">Frango Salgado com Infusão de Ervas</h1>
                    <div className='recipe-sub-title'>
                        <span className='sub-title-item'><i className="fa-regular fa-clock margin"></i>1 HORA</span>   
                        <span className='sub-title-item'>.</span> 
                        <span className='sub-title-item'><i class="fa-solid fa-suitcase margin"></i>DIFÍCIL</span>    
                        <span className='sub-title-item'>.</span> 
                        <span className='sub-title-item'><i class="fa-solid fa-bell margin"></i>4 PORÇÕES</span>    
                    </div>
                    <div className='recipe-img'></div>
                    <div className='recipe-form'>
                        <div className='recipe-form-desc'>
                            <p className='recipe-text'>
                                Imaginem uma suculenta galinha impregnada com as notas brilhantes de limão e a riqueza aromática do alho. 
                                É uma sinfonia de sabores que fará seus sentidos dançarem. Junte-se a nós enquanto mergulhamos na arte de 
                                assar e descobrimos os segredos por trás da criação de uma obra-prima que não é apenas uma refeição, mas uma celebração da habilidade culinária.
                                
                                <br></br>
                                <br></br>
                                Enquanto você pré-aquece o seu forno, imagine a cozinha se enchendo com o aroma tentador de ervas e cítricos, 
                                preparando o cenário para uma refeição encantadora que transcende o comum. A antecipação cresce à medida que o frango assa até a perfeição dourada, 
                                prometendo uma experiência gastronômica que une simplicidade e sofisticação. Seja você um chef experiente ou um novato na cozinha, 
                                esta receita convida você a se tornar um artista culinário, criando uma obra-prima que deixará uma impressão duradoura em seus convidados e 
                                entes queridos.
                            </p>
                            <div className='recipe-inst'>
                                <span className='inst-title'>Instruções</span>
                                <p className='recipe-text'>
                                    Esta receita vai além do básico, convidando você a saborear a riqueza de um molho cremoso de tomate e manjericão 
                                    que se agarra a cada fio de massa perfeitamente cozida. 
                                    É uma celebração da simplicidade, onde cada ingrediente 
                                    desempenha um papel crucial na criação de um prato que é reconfortante e delicioso.
                                    <br></br><br></br>
                                    Permita que o frango descanse por 10 minutos antes de cortar. Este breve período de descanso é essencial; 
                                    permite que os sucos se redistribuam, garantindo que cada fatia seja suculenta e repleta de sabor.
                                    Ao cortar a parte externa dourada, esteja preparado para o aroma tentador que enche o ar, 
                                    sinalizando que sua Delícia de Infusão de Citrus está pronta para ser apreciada.
                                </p>
                                <div className='inst-guide'>
                                    <span className='guide-title'>Pré-aqueça e Prepare</span>
                                    <ul className='guide-list'>
                                        <li>Pré-aqueça o seu forno a 375°F (190°C).</li>
                                        <li>Lave o frango por dentro e por fora e, em seguida, seque-o com toalhas de papel.</li>
                                    </ul>
                                </div>
                                <div className='inst-guide'>
                                    <span className='guide-title'>Infusão Cítrica</span>
                                    <ul className='guide-list'>
                                        <li>Com cuidado, levante a pele do frango e esfregue alho picado diretamente na carne.</li>
                                        <li>Coloque fatias de limão sob a pele, garantindo que cubram o máximo de superfície possível.</li>
                                    </ul>
                                </div>
                                <div className='inst-guide'>
                                    <span className='guide-title'>Mistura de Ervas</span>
                                    <ul className='guide-list'>
                                        <li>Em uma tigela pequena, misture azeite de oliva, tomilho seco, alecrim  seco, sal e pimenta-do-reino para criar uma mistura infundida com ervas.</li>
                                        <li>Pincele todo o frango com a mistura de ervas, garantindo que esteja uniformemente revestido.</li>
                                        <li>Tempere a parte exterior com sal e pimenta-do-reino adicionais a gosto.</li>
                                    </ul>
                                </div>
                                <div className='inst-guide'>
                                    <span className='guide-title'>Asse até a Perfeição</span>
                                    <ul className='guide-list'>
                                        <li>Coloque o frango em uma assadeira, com o peito para cima.</li>
                                        <li>Asse no forno pré-aquecido por aproximadamente 1 hora ou até que a temperatura interna atinja 165°F (74°C).</li>
                                        <li>Deixe o frango descansar por 10 minutos antes de cortar.</li>
                                        <li>Sirva com os sucos da assadeira e as fatias de limão assadas para um toque extra de sabor.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='right-form-1'>
                            <div className='recipe-ingredients'>
                                <span className='ing-title'>INGREDIENTES</span>
                                <div className='card-ing'>
                                    <ul className='ing-list'>
                                        <li>1 frango inteiro (cerca de 1,4 a 1,8 quilos)</li>
                                        <li>2 limões, fatiados</li>
                                        <li>6 dentes de alho, picados</li>
                                        <li>2 colheres de sopa de azeite de oliva</li>
                                        <li>1 colher de chá de tomilho seco</li>
                                        <li>1 colher de chá de alecrim seco</li>
                                        <li>Sal e pimenta-do-reino a gosto</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='recipe-ingredients'>
                                <span className='ing-title'>EQUIPAMENTOS NECESSÁRIOS</span>
                                <div className='card-ing'>
                                    <ul className='ing-list'>
                                        <li>forma de assar</li>
                                        <li>2 limões, fatiados</li>
                                        <li>6 dentes de alho, picados</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='recipe-ingredients'>
                                <span className='ing-title'>VALORES NUTRICIONAIS</span>
                                <div className='card-ing'>
                                    <ul className='nut-list'>
                                        <li><b>Caloria</b>: ~250</li>
                                        <li><b>Proteinas:</b> ~30g</li>
                                        <li><b>Gordura Total:</b> ~13g</li>
                                        <li><b>Carboidratos:</b> ~5g</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            <Footer />
        </div>
    );
};

export default Recipe;
