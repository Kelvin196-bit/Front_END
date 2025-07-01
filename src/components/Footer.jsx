import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import Information from "./Information";
import data from "./Data/data.json"
export default function Footer() {

    const content_1 = data.informacao;
    const content_2 = data.categorias;

    return (
        <footer className="flex flex-col items-center justify-around w-full p-2 bg-dark-gray">
            
            {/* Conteúdo principal dividido em colunas em telas grandes */}
            <div className="flex flex-col md:flex-row md:gap-20 md:items-center">

                {/* Coluna da logo e redes sociais */}
                <div className="md:w-[25vw]">
                    <Logo type="logoFooter" />
                    <p className="py-5 text-sm text-light-gray">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae natus quasi officia excepturi laborum amet
                    </p>

                    {/* Ícones de redes sociais com hover animado */}
                    <div className="py-2 flex gap-5 text-white">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size="30px" fill="#c8c8c8" className="hover:scale-110 duration-200" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size="30px" fill="#c8c8c8" className="hover:scale-110 duration-200" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size="30px" fill="#c8c8c8" className="hover:scale-110 duration-200" />
                        </a>
                    </div>
                </div>

                {/* Coluna com listas de informações */}
                <div className="py-5 flex gap-10">
                    <div className="flex flex-col text-light-gray">
                        <Information title="Informação" informations={content_1} />
                    </div>
                    <div className="flex flex-col text-light-gray">
                        <Information title="Informação" informations={content_2} />
                    </div>
                </div>

                {/* Coluna de contato */}
                <div className="md:w-[25vw] md:mb-9">
                    <h6 className="py-1 text-light-gray-3 font-bold">Contato</h6>
                    <p className="py-1 text-light-gray">
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p className="py-2 md:pb-5 text-light-gray">(85) 3051-3411</p>
                </div>
            </div>
            <hr className="w-11/12 border-light-gray/80 my-4" />
            <p className="text-light-gray-2 text-center"> &copy; 2024 Digital College</p>
        </footer>
    );
}
