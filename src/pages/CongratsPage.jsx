import confetti from "../assets/confetti.png";
import { useCarrinho } from '../components/CarrinhoContext';
import { useCheckout } from '../components/CheckoutContext';
import { useNavigate } from 'react-router-dom';

export default function EndingPage() {

    const { dadosCheckout } = useCheckout();
    const { carrinho, total } = useCarrinho();
    const navigate = useNavigate();

    const totalNumber = Number(total); 
    const totalFormatado = totalNumber.toFixed(2);

    const backHome = () => {
        navigate('/home');
        window.scrollTo(0, 0);
    }


    

    return (
            <div className="flex flex-col lg:flex-row justify-center pt-32 lg:pt-14 px-5 lg:px-0">
                <div className="lg:w-[60%]">
                    <div>
                        <div className="px-5 pt-10 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <h1 className="pb-6 text-center text-3xl font-bold text-dark-gray">
                                <span className="flex justify-center pb-3">
                                    <img src={confetti} alt="confetti emoji" className="h-[74px]" />
                                </span>
                                Compra Realizada<br /> com sucesso!
                            </h1>
                            <hr className="my-3 bg-light-gray-2" />
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações Pessoais</h1>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Nome: </span>{dadosCheckout?.pessoais?.nome}</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">CPF: </span>{dadosCheckout?.pessoais?.cpf}</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Email: </span>{dadosCheckout?.pessoais?.email}</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Celular: </span>{dadosCheckout?.pessoais?.celular}</p> 

                        </div>

                        <div className="px-5 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <hr className="my-3 bg-light-gray-2" />
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações de Entrega</h1>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Endereço: </span>{dadosCheckout?.entrega?.endereco}</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Bairro: </span>{dadosCheckout?.entrega?.bairro}</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Cidade: </span>{dadosCheckout?.entrega?.cidade}</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">CEP: </span>{dadosCheckout?.entrega?.cep}</p>
                        </div>




                        <div className="px-5 pb-10 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <hr className="my-3 bg-light-gray-2" />
                            <h1 className="text-sm font-bold text-dark-gray-2 pb-2">Resumo da Compra</h1>
                            {carrinho.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-[10px] mb-[10px]">   {/* resumo-item em Twind */}
                                
                                    <img src={item.image} alt={item.name} className="w-[71.18px] h-[58px] rounded-[2.67px]" />
                                    <p>
                                    {item.name} <span className="text-light-gray">x{item.quantidade}</span>
                                    </p>
                                </div>
                                ))}

                            <span className="my-5 p-5 bg-[#F6AA1C]/[.15]">
                                <p className="flex justify-between text-lg font-bold text-dark-gray-2">Total: <span>R$ {totalFormatado}</span></p>
                                <p className="text-xs text-light-gray text-end">ou 10x de R$ {(totalFormatado / 10).toFixed(2)} sem juros</p>
                            </span>
                            <a href="" onClick={() => window.print()} className="text-center text-base underline text-dark-gray-2 hover:text-dark-gray-3">Imprimir Recibo</a>
                        </div>

                        <button onClick={backHome} className="flex justify-center w-full mt-10 mb-28 py-2 px-2 bg-warning text-white rounded-md text-center">
                            Voltar para Home
                        </button>
                    </div>
                </div>
            </div>
    );
}
