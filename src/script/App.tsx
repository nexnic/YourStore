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

const templetData = [
    {
        "id": "109566af-c5c2-4f87-86cb-76f36fb8d378",
        "title": "Vanilla Perfume",
        "description": "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.",
        "price": 2599.99,
        "discountedPrice": 2079.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/1-perfume-white.jpg",
        "rating": 5,
        "tags": [
            "perfume",
            "beauty"
        ],
        "reviews": [
            {
                "id": "90a61e3e-355a-42e4-b038-d91dcad33c20",
                "username": "Jim N.",
                "rating": 5,
                "description": "My partner loves it, its her favourite."
            }
        ]
    },
    {
        "id": "10d6cc02-b282-46bb-b35c-dbc4bb5d91d9",
        "title": "Toy car",
        "description": "A die-cast model of a toy car, perfect for displaying on your shelf.",
        "price": 499.95,
        "discountedPrice": 449.95,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/12-toy-car.jpg",
        "rating": 0,
        "tags": [
            "toy"
        ],
        "reviews": []
    },
    {
        "id": "159fdd2f-2b12-46de-9654-d9139525ba87",
        "title": "Gold headphones",
        "description": "Professional headphones with gold trim.",
        "price": 449.99,
        "discountedPrice": 382.49,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/3-headphones-beats.jpg",
        "rating": 4,
        "tags": [
            "headphones"
        ],
        "reviews": [
            {
                "id": "88e11191-d2e5-4bfb-9bcb-d7e158284657",
                "username": "Michael J.",
                "rating": 4,
                "description": "Good sound quality."
            }
        ]
    },
    {
        "id": "1fd1ddca-0d38-4e41-aa62-a1a7a57cf4b5",
        "title": "External Hard Drive",
        "description": "Large-capacity external hard drive with USB 3.0 interface for fast data transfer.",
        "price": 149.99,
        "discountedPrice": 149.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/20-external-hard-drive.jpg",
        "rating": 4.5,
        "tags": [
            "storage"
        ],
        "reviews": [
            {
                "id": "35eaa065-2772-4f8b-b77e-ad27877aae6a",
                "username": "John D.",
                "rating": 4,
                "description": "Great hard drive for storing large amounts of data, but it's a bit bulky."
            },
            {
                "id": "369b50fc-7684-4abe-b2db-9a393685df30",
                "username": "Megan B.",
                "rating": 5,
                "description": "This external hard drive is perfect for my needs. It's fast and has a lot of storage space."
            }
        ]
    },
    {
        "id": "31e3a66f-2dbe-47ae-b80d-d9e5814f3e32",
        "title": "Wireless Earbuds",
        "description": "High-quality wireless earbuds with noise-cancellation and long battery life.",
        "price": 199.99,
        "discountedPrice": 179.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/17-wireless-earbuds.jpg",
        "rating": 4,
        "tags": [
            "electronics",
            "audio"
        ],
        "reviews": [
            {
                "id": "498c7a60-28c6-4ab3-a7ca-0e9610cb02e5",
                "username": "Max T.",
                "rating": 4,
                "description": "Great value for money, but the noise-cancellation could be better."
            }
        ]
    },
    {
        "id": "3b43b2e4-62b0-4c02-9166-dffa46a0388c",
        "title": "Red bag",
        "description": "A high-quality red leather bag perfect for a night out in the town.",
        "price": 759.99,
        "discountedPrice": 759.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/4-bag-red.jpg",
        "rating": 5,
        "tags": [
            "fashion",
            "bags"
        ],
        "reviews": [
            {
                "id": "5fc85c8d-5114-4e74-be2d-d1fb3ceab0d1",
                "username": "Celeste W.",
                "rating": 5,
                "description": "Amazing build quality, my favourite bag."
            }
        ]
    },
    {
        "id": "3f328f02-715e-477f-9738-7934af4bc5b0",
        "title": "Hairdryer",
        "description": "Wired hairdryer with multiple functions.",
        "price": 579.99,
        "discountedPrice": 579.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/10-hairdryer.jpg",
        "rating": 0,
        "tags": [
            "electronics"
        ],
        "reviews": []
    },
    {
        "id": "414f5b60-c574-4a2f-a77b-3956b983495b",
        "title": "Vitamin C Serum",
        "description": "Powerful serum containing high concentration of vitamin C, great for brightening and evening out skin tone.",
        "price": 899.99,
        "discountedPrice": 699.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/24-serum-vitamin-c.jpg",
        "rating": 3,
        "tags": [
            "beauty",
            "skin care"
        ],
        "reviews": [
            {
                "id": "528a4a62-b685-48d5-8aa3-ef8592b8d438",
                "username": "David K.",
                "rating": 3,
                "description": "It works, but it's a very expensive. I'll probably buy a cheaper alternative next time."
            }
        ]
    },
    {
        "id": "5391e16f-d88b-4747-a989-f17fb178459d",
        "title": "Black boots",
        "description": "Stylish and comfortable black leather boots for all occasions.",
        "price": 899.99,
        "discountedPrice": 799.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/22-boots-black.jpg",
        "rating": 0,
        "tags": [
            "fashion",
            "shoes"
        ],
        "reviews": []
    },
    {
        "id": "5aa2e388-8dfb-4d70-b031-3732d8c6771a",
        "title": "Portable Bluetooth Speaker",
        "description": "Compact and lightweight portable speaker that delivers high-quality sound.",
        "price": 149.99,
        "discountedPrice": 119.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/14-bluetooth-speaker.jpg",
        "rating": 0,
        "tags": [
            "audio"
        ],
        "reviews": []
    },
    {
        "id": "7238397e-0ee5-4d5c-9e82-bda666dd2470",
        "title": "Gold glasses",
        "description": "Stylish pair of sunglasses that feature a gold trim.",
        "price": 1699.99,
        "discountedPrice": 1529.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/6-glasses-gold.jpg",
        "rating": 0,
        "tags": [
            "fashion",
            "glasses"
        ],
        "reviews": []
    },
    {
        "id": "7c6353ec-17a9-4a4d-a9d7-6997465367e1",
        "title": "Blue shoes",
        "description": "A pair of stylish blue suede shoes for both formal and casual occasions.",
        "price": 599.99,
        "discountedPrice": 599.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/18-shoes-blue.jpg",
        "rating": 5,
        "tags": [
            "fashion",
            "shoes"
        ],
        "reviews": [
            {
                "id": "32531b04-e6f3-44a6-9b7c-fa6383c9ebee",
                "username": "Sarah M.",
                "rating": 5,
                "description": "Love these shoes, perfect for any outfit!"
            }
        ]
    },
    {
        "id": "83111322-05a9-4a93-bc81-7d6b58f1a707",
        "title": "Black watch",
        "description": "A classic black leather watch, perfect for any occasion.",
        "price": 399.99,
        "discountedPrice": 299.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/15-watch-black.jpg",
        "rating": 3,
        "tags": [
            "accessories",
            "watches"
        ],
        "reviews": [
            {
                "id": "9fed9d39-cbca-4d34-bfc8-345c4d6e6447",
                "username": "Peter S..",
                "rating": 3,
                "description": "Good watch, but the strap is a bit uncomfortable."
            }
        ]
    },
    {
        "id": "894ca18f-9725-40b3-9429-1420ee2054da",
        "title": "Black headphones",
        "description": "A set of wireless black headphones.",
        "price": 259.99,
        "discountedPrice": 259.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/5-headphones-black.jpg",
        "rating": 2,
        "tags": [
            "headphones"
        ],
        "reviews": [
            {
                "id": "08d5110d-ced9-49b5-a966-a90b65a98640",
                "username": "Mike M.",
                "rating": 2,
                "description": "Terrible audio."
            }
        ]
    },
    {
        "id": "95dc28de-9ef6-4c67-808b-6431a5de43e8",
        "title": "Gold Earrings",
        "description": "Elegant gold earrings with a minimalist design, perfect for any occasion.",
        "price": 999.99,
        "discountedPrice": 799.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/23-earrings-gold.jpg",
        "rating": 4.6,
        "tags": [
            "fashion",
            "jewelry"
        ],
        "reviews": [
            {
                "id": "47af5354-b3be-42aa-8780-503fcabe2f3e",
                "username": "Emma K.",
                "rating": 5,
                "description": "Love these earrings, they're so elegant and versatile."
            },
            {
                "id": "71b20a18-3fa0-40a4-ba9e-50dad572eba8",
                "username": "John P.",
                "rating": 4,
                "description": "Bought these earrings for my wife and she loves them!"
            },
            {
                "id": "82497089-9dec-42a1-b8f0-06798c346360",
                "username": "Maggie T.",
                "rating": 5,
                "description": "These earrings are perfect for dressing up or down, I wear them all the time!"
            }
        ]
    },
    {
        "id": "9be4812e-16b2-44e6-bc55-b3aef9db2b82",
        "title": "Pink Candy Perfume",
        "description": "Playful perfume based on the scent of hibiscus with nuances of vanilla.",
        "price": 1399.99,
        "discountedPrice": 1049.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/8-perfume-pink-candy.jpg",
        "rating": 5,
        "tags": [
            "perfume",
            "beauty"
        ],
        "reviews": [
            {
                "id": "a721f8d2-89b2-4b65-8061-9eb19f780867",
                "username": "Jamie A.",
                "rating": 5,
                "description": "Great scent, lasts very long."
            }
        ]
    },
    {
        "id": "be5e376d-e657-4035-8916-1580c52f4e98",
        "title": "Smartwatch",
        "description": "Smartwatch with heart rate monitor, fitness tracking, and notifications for calls and messages.",
        "price": 299.99,
        "discountedPrice": 299.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/16-smartwatch.jpg",
        "rating": 4.5,
        "tags": [
            "watch",
            "wearables"
        ],
        "reviews": [
            {
                "id": "8615d397-1052-4211-a1d2-d379b0c26af7",
                "username": "Sarah L.",
                "rating": 5,
                "description": "Love this smartwatch! It's easy to use and has all the features I need."
            },
            {
                "id": "c80e93ce-8b53-4c9a-ad21-95081260ca14",
                "username": "Mike K.",
                "rating": 4,
                "description": "Great quality, but the battery life could be longer."
            }
        ]
    },
    {
        "id": "c0d245f1-58fa-4b15-aa0c-a704772a122b",
        "title": "Organic shampoo",
        "description": "An organic shampoo with bamboo fibres.",
        "price": 104.29,
        "discountedPrice": 104.29,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/11-shampoo.jpg",
        "rating": 5,
        "tags": [
            "shampoo",
            "beauty"
        ],
        "reviews": [
            {
                "id": "7f5d0844-9ade-4033-90fb-b5631fc6fa00",
                "username": "John F.",
                "rating": 5,
                "description": "Great shampoo, keeps my hair feeling fresh."
            }
        ]
    },
    {
        "id": "ce5b64e3-440d-46e5-952f-bfdbad8a48d2",
        "title": "Black digital watch",
        "description": "A hi-end digital watch that can answer calls, save notes and track your training.",
        "price": 4599.99,
        "discountedPrice": 4599.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/9-watch-black.jpg",
        "rating": 4.5,
        "tags": [
            "watch"
        ],
        "reviews": [
            {
                "id": "1ce10d0f-f562-43c8-9bcc-2a30d3d15511",
                "username": "Adam L.",
                "rating": 5,
                "description": "Amazing watch, suits all of my needs"
            },
            {
                "id": "e2077393-6ebd-41b1-b890-bc3619481442",
                "username": "Mark P.",
                "rating": 4,
                "description": "Love the watch, battery doesn't last as long as I'd like."
            }
        ]
    },
    {
        "id": "f2d44fba-09a7-4ccb-9ceb-a6212bf5c213",
        "title": "Pink shoes",
        "description": "Gold-trimmed pink shoes perfect for any women with a sense of adventure.",
        "price": 899.99,
        "discountedPrice": 899.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/2-shoes-pink.jpg",
        "rating": 0,
        "tags": [
            "shoes"
        ],
        "reviews": []
    },
    {
        "id": "f5d453d1-e811-4225-81ac-cee54ef0384b",
        "title": "Wireless Keyboard",
        "description": "Ergonomic wireless keyboard with a built-in customizable hotkeys.",
        "price": 129.99,
        "discountedPrice": 99.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/21-wireless-keyboard.jpg",
        "rating": 4.2,
        "tags": [
            "electronics",
            "peripherals"
        ],
        "reviews": [
            {
                "id": "19828454-eefd-4783-9aeb-b13521d4a743",
                "username": "Mark P.",
                "rating": 4.2,
                "description": "Great keyboard, but some keys are a bit small."
            }
        ]
    },
    {
        "id": "f6712e3b-8050-4841-bd64-f332a48f7566",
        "title": "Gaming Mouse",
        "description": "High-performance gaming mouse with customizable buttons and RGB lighting.",
        "price": 79.99,
        "discountedPrice": 59.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/19-gaming-mouse.jpg",
        "rating": 0,
        "tags": [
            "electronics",
            "gaming"
        ],
        "reviews": []
    },
    {
        "id": "f7bdd538-3914-409d-bd71-8ef962a9a9dd",
        "title": "White sneakers",
        "description": "An amazing pair of sneakers that have red trim.",
        "price": 695.99,
        "discountedPrice": 695.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/7-shoes-white.jpg",
        "rating": 5,
        "tags": [
            "fashion",
            "shoes"
        ],
        "reviews": [
            {
                "id": "0824fa1e-66d2-42b5-accb-92f700fae4ec",
                "username": "Neal D.",
                "rating": 5,
                "description": "Super stylish pair of shoes, love them!"
            },
            {
                "id": "6604d496-2cd6-47d9-8e23-8a696a9222e4",
                "username": "Jan W.",
                "rating": 5,
                "description": "Amazing shoes!"
            }
        ]
    },
    {
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
    },
    {
        "id": "fbf07ebe-9f9a-4895-8a16-567acbbeef4e",
        "title": "Wireless Keyboard",
        "description": "Compact and easy to use wireless keyboard compatible with all devices.",
        "price": 75.99,
        "discountedPrice": 75.99,
        "imageUrl": "https://static.cloud.noroff.dev/api/online-shop/13-wireless-keyboard.jpg",
        "rating": 4.5,
        "tags": [
            "electronics",
            "computers"
        ],
        "reviews": [
            {
                "id": "c9670f1b-b611-4f5f-adfe-f8f32de61653",
                "username": "Adam B.",
                "rating": 5,
                "description": "Great keyboard with long battery life."
            },
            {
                "id": "095d3a10-b727-4612-a3b4-2c3eca00a0c2",
                "username": "Kate M.",
                "rating": 5,
                "description": "Perfect!"
            }
        ]
    }
]



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




