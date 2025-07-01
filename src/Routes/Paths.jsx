import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import Layout from "../pages/Layout";
import ProductPage from "../pages/ProductListingPage";
import Cart from "../pages/CartPage";
import ProductView from "../pages/ProductViewPage"; //ok
import { CarrinhoProvider } from "../components/CarrinhoContext";
import CheckoutForm from "../pages/CheckoutPage";
import { CheckoutProvider } from "../components/CheckoutContext";
import EndingPage from "../pages/CongratsPage";
import Register from "../pages/Register";
import RegisterForm from "../pages/RegisterForm";
import Login from "../pages/Login";
import { ProductProvider } from "../components/ProductContext";
import { AuthProvider } from "../components/AuthContext";
import PrivateRoute from "../components/PrivateRoute";
import OrderPage from "../pages/OrderPage";
import BildingPage from "../pages/BildingPage.jsx";


const Paths = () => {
    return ( 
        <>
<AuthProvider>
    <ProductProvider>
        <CheckoutProvider>
            <CarrinhoProvider>
                <BrowserRouter>
                    <Routes>
                        {/* rotas públicas */}
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/registerform" element={<RegisterForm/>}/>
                        <Route path="/" element={<Login/>}/>    
                        {/* rotas protegidas */}
                        <Route path="/home" element={<PrivateRoute/>}>
                            <Route element={<Layout/>} >
                                <Route index element={<Home/>}/>
                                <Route path="produtos" element={<ProductPage/>}/>
                                <Route path="produtos/*" element={<ProductPage />} />
                                <Route path="produtos/:id" element={<ProductView/>}/>
                                <Route path="cart" element={<Cart/>}/>
                                <Route path="checkoutForm" element={<CheckoutForm/>}/>
                                <Route path="sucesso" element={<EndingPage/>}/>
                                <Route path="myproducts" element={<OrderPage/>}/>
                                <Route path="construction" element={<BildingPage/>}/>
                                
                            </Route>
                        </Route>             
                    </Routes>
                </BrowserRouter>
            </CarrinhoProvider>
        </CheckoutProvider>
    </ProductProvider>
</AuthProvider>
        </>
     );
}
 
export default Paths;