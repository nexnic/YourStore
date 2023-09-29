import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Import Page Config
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Layout from './pages/Layout';

const pageConfig= {
    pageName: 'YourStore',
    pageSlogen: 'Your One-Stop Online Shop for All Your Needs.',
    logo: null,
    headerBackgroundImage: null,

}

const templetData = {
        "id": "f99cafd2-bd40-4694-8b33-a6052f36b435",
        "title": "USB charger cable",
        "description": "USB 2.0 to USB Type-C. This can be used to power all compliant mobile devices.",
        "price": 45.99,
        "discountedPrice": 45.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/0-usb-plug.jpg",
        "rating": 4.5,
        "tags": [
            "electronics"
        ],
        "reviews": [
            {
                "id": "c6e4fb1a-4c3d-4a4b-b785-a269f7f0707d",
                "username": "Ola N.",
                "rating": 4,
                "description": "Did what it needed to do but wish it lasted longer"
            },
            {
                "id": "dbe6d28f-35f7-43a7-88f4-93a68f3c131c",
                "username": "Kate M.",
                "rating": 5,
                "description": "Perfect!"
            }
        ]
    }



export default function App() {
    const [storeItem] = useState(templetData)
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
                    <Route index element={<HomePage storeItem={storeItem} onSelectAddCart={handlerAddToCart}/>} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}




