import  { useState } from 'react';
import { useCarrinho } from '../components/CarrinhoContext';
import { useCheckout } from '../components/CheckoutContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    complemento: '',
    nomeCartao: '',
    numeroCartao: '',
    validade: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const { setDadosCheckout } = useCheckout();

  const handleSubmit = () => {
    console.log('handleSubmit chamado');
    console.log(formData);
    setDadosCheckout({
      pessoais: {
        nome: formData.nome,
        cpf: formData.cpf,
        email: formData.email,
        celular: formData.celular,
      },
      entrega: {
        endereco: formData.endereco,
        bairro: formData.bairro,
        cidade: formData.cidade,
        cep: formData.cep,
        complemento: formData.complemento,
      },
      pagamento: {
        nomeCartao: formData.nomeCartao,
        finalCartao: formData.numeroCartao.slice(-4),
      },
    });
    console.log()

    navigate('/home/sucesso');
    window.scrollTo(0, 0) 
  };

  const [paymentMethod, setPaymentMethod] = useState('cartao')
  const {
    carrinho,
    subtotal,
    total,
    frete,
    descontoCupom,
  } = useCarrinho();

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-4 bg-light-gray-3 justify-center  pt-28 lg:pt-14 px-5 lg:px-0">
        <div className="lg:w-[60%]">
          <div>
            <h1 className="pb-3 md:text-start text-2xl font-bold">Finalizar Compra</h1>

            {/* Informações Pessoais */}
            <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
              <section className="w-full flex flex-col gap-5 rounded-md bg-white md:p-6">
              <h1 className="text-sm font-bold tracking-wide leading-[22px]">Informações Pessoais</h1>
              <hr className="my-3 bg-light-gray-2" />
              <label className="text-sm font-medium">Nome Completo *
                <input type="text" placeholder="Insira seu nome" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light " value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">CPF *
                <input type="text" placeholder="Insira seu CPF" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.cpf} onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">E-mail *
                <input type="text" placeholder="Insira seu email" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">Celular *
                <input type="text" placeholder="Insira seu celular" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.celular}
                  onChange={(e) => setFormData({ ...formData, celular: e.target.value })} required />
              </label>
            </section>
            </form>

            {/* Informações de Entrega */}
            <form className="px-5 py-10 lg:py-5 my-5 h-auto flex gap-2 flex-col justify-center bg-white lg:w-full rounded-md shadow-sm m-auto md:p-6">
              <section className="w-full flex flex-col gap-5 rounded-md bg-white md:p-6">
              <h1 className="text-sm font-bold tracking-wide leading-[22px]">Informações de Entrega</h1>
              <hr className="my-3 bg-light-gray-2" />
              <label className="text-sm font-medium">Endereço *
                <input type="text" placeholder="Insira seu endereço" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.endereco}
                onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">Bairro *
                <input type="text" placeholder="Insira seu bairro" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.bairro}
                onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">Cidade *
                <input type="text" placeholder="Insira sua cidade" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.cidade}
                onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">CEP *
                <input type="text" placeholder="Insira seu CEP" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.cep}
                onChange={(e) => setFormData({ ...formData, cep: e.target.value })} required />
              </label>
              <label className="text-sm font-medium">Complemento
                <input type="text" placeholder="Insira complemento" className="w-full mt-3 rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 placeholder:font-light" value={formData.complemento}
                onChange={(e) => setFormData({ ...formData, complemento: e.target.value })} />
              </label>
            </section>
            </form>
          </div>

          {/* Pagamento */}
          <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col bg-white lg:w-full rounded-md shadow-sm m-auto">
            <section className="w-full flex flex-col gap-5 rounded-md bg-white md:p-6">
  <h2 className="text-sm font-bold tracking-wide leading-[22px]">Informações de Pagamento</h2>

  <div className="border-t border-[#CCCCCC] pt-5 flex flex-col gap-5">
    <div className="flex flex-row justify-start">
      <h2 className="text-sm font-bold tracking-wide leading-[22px]">Forma de Pagamento</h2>
    </div>

    <div className="flex flex-wrap sm:flex-nowrap gap-5">
      <div className="flex items-center gap-2">
         <input
          type="radio"
          id="cartao"
          name="pagamento"
          value="cartao"
          checked={paymentMethod === 'cartao'}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-5 h-5 accent-[#C92071] cursor-pointer"
         />
        <label htmlFor="cartao" className="text-sm">Cartão de Crédito</label>
      </div>

      <div className="flex items-center gap-2">

         <input
          type="radio"
          id="boleto"
          name="pagamento"
          value="boleto"
          checked={paymentMethod === 'cartao'}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-5 h-5 accent-[#C92071] cursor-pointer"
        />
        <label htmlFor="boleto" className="text-sm">Boleto Bancário</label>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap gap-5 pt-4">
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium">Nome no Cartão *</label>
      <input
        className="w-full rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] text-sm px-3 py-2 focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 "
        placeholder="Nome como está no cartão"
        value={formData.nomeCartao}
        onChange={(e) => setFormData({ ...formData, nomeCartao: e.target.value })}
      />
    </div>

    <div className="flex flex-col gap-2 w-full sm:max-w-[332px] md:w-full">
      <label className="text-sm font-medium">Número do Cartão *</label>
      <input
        className="w-full rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 text-sm px-3 py-2 "
        placeholder="1234 5678 9012 3456"
        value={formData.numeroCartao}
        onChange={(e) => setFormData({ ...formData, numeroCartao: e.target.value })}
      />
    </div>

    <div className="flex flex-col gap-2 w-full sm:max-w-[332px] md:w-full">
      <label className="text-sm font-medium">Validade *</label>
      <input
        className="w-full rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 text-sm px-3 py-2 placeholder:text-light-gray "
        placeholder="MM/AA"
        value={formData.validade}
        onChange={(e) => setFormData({ ...formData, validade: e.target.value })}
      />
    </div>

    <div className="flex flex-col gap-2 w-full sm:max-w-[332px]">
      <label className="text-sm font-medium">CVV *</label>
      <input
        className="w-full rounded-lg bg-[#F5F5F5] border border-[#F5F5F5] focus:border-primay focus:ring-primary focus:ring-2 outline-none duration-200 text-sm px-3 py-2"
        placeholder="123"
        value={formData.cvv}
        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
      />
    </div>
  </div>
</section>

          </form>

          {/* Finalizar Compra - Desktop */}
          <div className="hidden lg:flex flex-col lg:w-full h-fit px-6 py-7 mt-5 mb-12 bg-white pl-10 pr-10">
            <h1 className="text-sm font-bold text-dark-gray-2">Finalizar Compra</h1>
            <hr className="my-3 bg-light-gray-2" />
            <p className="flex justify-between text-sm font-bold text-dark-gray-2">Total: <span className="text-error">R$ {total}</span></p>
            <p className="pt-1 pb-5 text-xs text-light-gray text-end">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
            <button onClick={handleSubmit} className="w-full py-2 px-2 bg-warning text-white rounded-md text-center">Realizar Pagamento</button>
          </div>
        </div>

        {/* Resumo de Compra */}
        <div className="lg:w-[30%] h-fit px-6 py-7 mt-5 lg:mt-11 bg-white">
          <h1 className="w-full font-bold font-sm text-dark-gray-2">RESUMO</h1>
          <hr className="my-5 bg-light-gray-2" />

           {/* recomendável criar um card para isso pois aparece em multiplas paginas */}
          <div className="text-center pb-5 w-full  max-h-[1000px] overflow-y-auto">
  {carrinho.length === 0 ? (
    <p>Adicione Um Produto.</p>
  ) : (
    <>
      {carrinho.map((produto, index) => (
        <div key={index} className="flex items-start gap-4 mb-4">
          <img
            src={produto.image}
            alt={produto.image}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex flex-col text-left">
            <p className="text-sm font-semibold text-gray-800">
              {produto.name}{' '}
              <span className="font-normal text-gray-600">x{produto.quantidade}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  )}
</div>

          <hr className="my-5 bg-light-gray-2" />
          <div className="flex flex-col gap-4">
            <p className="flex justify-between text-sm font-medium text-light-gray">Subtotal: <span className="text-dark-gray">R$ {subtotal.toFixed(2)}</span></p>
            <p className="flex justify-between text-sm font-medium text-light-gray">Frete: <span className="text-dark-gray">R$ {frete.toFixed(2)}</span></p>
            <p className="flex justify-between text-sm font-medium text-light-gray">Desconto: <span className="text-dark-gray">R$ {descontoCupom.toFixed(2)}</span></p>
            <span className="mb-5 p-5 bg-[#F6AA1C]/[.15]">
              <p className="flex justify-between text-lg font-bold text-dark-gray-2">Total: <span>R$ {total}</span></p>
              <p className="text-xs text-light-gray text-end">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
            </span>
          </div>
          <button onClick={handleSubmit} className="flex justify-center w-full py-2 px-2 bg-warning text-white rounded-md text-center">Realizar Pagamento</button>
        </div>
      </div>

      {/* Finalizar Compra - Mobile */}
      <div className="flex lg:hidden flex-col lg:w-full h-fit px-6 py-3 mt-10 bg-white">
        <p className="flex justify-between text-lg font-bold text-dark-gray">Total: <span className="text-error">R$ {total}</span></p>
        <p className="pt-1 pb-5 text-xs text-light-gray text-end">ou 10x de R$ {(total / 10).toFixed(2)} sem juros</p>
        <button onClick={handleSubmit} className="w-full py-2 px-2 bg-warning text-white rounded-md text-center">Realizar Pagamento</button>
      </div>
    </>
  );
}
