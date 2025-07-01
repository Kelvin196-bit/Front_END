import { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [dadosCheckout, setDadosCheckout] = useState({
    pessoais: {},
    entrega: {},
    pagamento: {},
  });

  return (
    <CheckoutContext.Provider value={{ dadosCheckout, setDadosCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
