import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Import Page Config
import AboutusPage from "./pages/AboutUs/AboutUsPage";
import ContactUspage from './pages/ContantUs/ContactUsPage'
import HomePage from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import CheckoutPage from "./pages/Checkout/Checkout";
import ProductPage from './pages/ProductPage/ProductPage'
import Layout from './pages/Layout/Layout';


const pageConfig = [
    {
        CompanyName: 'YourStore',
        CompanySlogen: 'Your One-Stop Online Shop for All Your Needs.',
        email: 'post@yourstore.no',
        telefon: '3322 2222',
        logo: null,
        headerBackgroundImage: null,
        address:{
            street: 'Ensjøveien 5',
            city: 'Oslo',
            code: '0655',
            country: 'norway'
        },
        openHours: {
            Monday: {
                open: 12,
                close: 18,
            },
            Tuesday: {
                open: 12,
                close: 18,
            },
            Wednesday: {
                open: 11,
                close: 17,
            },
            Thursday: {
                open: 12,
                close: 18,
            },
            Friday: {
                open: 10,
                close: 16,
            },
            Saturday: false,
            Sunday: false,
        },
    }
    

    

    

]



export default function App() {
    const [cart, setCart] = useState([])
    //const [loading, setLoading] = useState(false)
    //const [error, setError] = useState(false)
    //const [errorMsg, setErrorMsg] =useState([])

    // id
    function handlerAddToCart(product) {
        const existingProduct = cart.find((item) => item.id === product.id);

        if(existingProduct) {
            const updateCart = cart.map((item) => {
                if(item.id === product.id) {
                    item.quantity += 1;
                }
                return item;
            });
            setCart(updateCart)
        }else {
            const productWithQuantity = { ...product, quantity: 1};
            setCart([...cart, productWithQuantity]);
        }
    }

    function handlerEmptyCart() {
        setCart([])
    }

    function handlerRemoveItemFromCart(productid) {
        const removeFromCart = cart.filter((item) => item.id !== productid )
        setCart(removeFromCart)
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout pageConfig={pageConfig} cart={cart} onSelectEmptyCart={handlerEmptyCart} onSelectCartRemoveItem={handlerRemoveItemFromCart}/>}>
                    <Route index element={<HomePage onSelectAddCart={handlerAddToCart}/>} />
                    <Route path="/Aboutus" element={<AboutusPage />} />
                    <Route path="/ContactUs" element={<ContactUspage />}/>
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage cart={cart}/>} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}




