import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Freelancer.css"

const Freelancer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./freelancer.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const [cart, setCart] = useState([]);

    const eventAddToCart = (freelancerData) => {
        // console.log(freelancerData.name);

        const match = cart.find((data) => data.key === freelancerData.key);

        if (match === undefined) {
            const newCart = [...cart, freelancerData];
            setCart(newCart);
        } else {
            alert(
                "You Already Added This Person"
            );
        }
    };

    return (
        <div className="mx-5 freelancer-container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(data => <Product key={data.key} product={data} addToCart={eventAddToCart}></Product>)
                }
            </div>
            <div className="cart ">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Freelancer;