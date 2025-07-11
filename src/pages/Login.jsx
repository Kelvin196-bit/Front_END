import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../components/AuthContext";
import {  useContext, } from "react";
import { FaFacebook } from "react-icons/fa";

import gmail from "../assets/icons/gmail.svg";

import tenis from "../assets/iconLogin.svg";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Login() {

  const { login: salvarToken } = useContext(AuthContext);
  const {User: saveUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/api/public/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: login, password: senha })
      });
      const dados = await resposta.json(); 
      if (resposta.ok) {
        salvarToken(dados.token); // Salva token no contexto
        saveUser(dados.usuario.nome); 
        //Salva dados do usuario no contexto
        navigate("/home");
        window.scrollTo(0, 0);
        console.log(dados.usuario.nome)
      } 
      else if (resposta.status === 404) {
      alert(dados.message || "Login ou senha inválidos."); // aqui usa a mensagem do backend

    } else {
      alert(dados.message || "Erro ao fazer login. Tente novamente");
    }
    } catch (err) {
      alert("Erro de conexão.");
    }
  };
  

    const handleRegister = () => {
        navigate("/register");
        window.scrollTo(0, 0)
    }

    return(

        <>
            <header className="bg-white flex justify-center items-center py-5 lg:py-3 lg:justify-start lg:px-10">
                <Logo type="logoHeader" />
            </header>

            <main className="h-auto bg-gradient-to-b from-secondary to-[#D8E3F2] pt-8 pb-10 lg:pb-5">


                <div className="px-10 pb-28 flex flex-row justify-center items-center">

                    <form onSubmit={handleLogin} className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white w-auto  rounded-md shadow-sm m-auto">

                        <h2 className="py-2 lg:py-1 md:text-start text-2xl font-bold text-center">Acesse sua conta</h2>
                        <p className="text-sm text-dark-gray-2 text-center md:text-start">Novo cliente? Então registre-se <a className='underline decoration-solid cursor-pointer' onClick={handleRegister}>aqui</a></p>

                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Login *<br />
                            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Insira seu login ou email" className="py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>

                        <label htmlFor="senha"  className="py-2 font-medium md:text-sm">Senha *<br />
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Insira sua senha" className="py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>

                        <button onClick={() => alert("Em contrução")} className="underline underline-offset-4 md:text-[12px] text-start cursor-pointer hover:scale-105 hover:text-primary transition-colors font-medium hover:px-3">Esqueci minha senha</button>

                        <div className="m-auto py-3">
                            <button type="submit" className="bg-primary hover:bg-pink-500 hover:scale-105 transition-colors text-white w-56 py-3 text-lg font-medium rounded-md md:w-[30vw] md:py-2">Acessar Conta</button>
                        </div>

                        <div className="md:flex md:justify-center md:gap-5">
                            <p className="py-2 text-center">Ou faça login com</p>
                            <div className="flex justify-center items-center gap-5">
                                <img src={gmail} alt="Gmail" className="hover:scale-105 cursor-pointer" />
                                <FaFacebook size="25px" color="blue" className="hover:scale-105 hover:cursor-pointer" />
                            </div>

                        </div>
                    
                    </form>

                    <img src={tenis} alt="Tenis" className="hidden relative top-24 md:block w-[44vw] md:w-[37vw] m-auto" />

                </div>

            </main>

            <Footer />

        </>

    )

}