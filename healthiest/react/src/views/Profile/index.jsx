import "../Profile/profile.css"
import Header from "../../components/header"
import Input from "../../components/input"
import PasswordInput from "../../components/passInput/PasswordInput"
import { useStateContext } from "../../context/ContextProvider"
import axiosClient from "../../axios-client"

const Profile = () => {

    const {user, setUser,setToken} = useStateContext()

    const onLogout = (ev) => {
        ev.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return(
        <div className="content">
            <Header />
            <h1>PERFIL</h1>
            <div className="profile-form">
                <div className="profile-img-container">
                    <img src="" alt="Foto de Perfil" className="profile-img"></img>
                    <div className="pic-buttons">
                        <i className="fa-solid fa-trash trash"></i>
                        <button className="btn-change-pic">Trocar Foto</button>
                    </div>
                    <div className="logout"><span onClick={onLogout}>Sair</span></div>
                </div>
                <div className="profile-data">
                    <form action="" className="profile-data-form">
                        <div className="profile-data-form-right">
                            <Input 
                                type="text" 
                                placeholder="Insira seu Email..."
                                label="Email"
                                value={user.email}
                            />
                            <Input 
                                type="text" 
                                placeholder="Insira seu Nome..."
                                label="Nome"
                                value={user.name}
                            />
                            <Input 
                                type="text" 
                                placeholder="Insira seu telefone..."
                                label="Telefone"
                            />
                        </div>
                        <div className="profile-data-form-left">
                            <PasswordInput 
                                type="password" 
                                placeholder="Insira sua Senha..."
                                label="Senha"
                            />
                            <PasswordInput 
                                type="password" 
                                placeholder="Insira sua nova senha..."
                                label="Nova Senha"
                            />
                            <PasswordInput 
                                type="password" 
                                placeholder="Confirme sua nova senha..."
                                label="Confirmar Senha"
                            />
                        </div>

                    </form>
                </div>
                <div className="saved">
                    <h2>RECENTES</h2>
                    <div className="saved-card">
                        <img src="/frango.jpeg" alt="" className="saved-card-img"/>
                        <span className="saved-card-text">Frango Salgado com Infusão de Ervas</span>
                    </div>
                    <div className="saved-card">
                        <img src="/frango.jpeg" alt="" className="saved-card-img"/>
                        <span className="saved-card-text">Frango Salgado com Infusão de Ervas</span>
                    </div>
                    <div className="saved-card">
                        <img src="/frango.jpeg" alt="" className="saved-card-img"/>
                        <span className="saved-card-text">Frango Salgado com Infusão de Ervas</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile