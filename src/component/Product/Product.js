import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    console.log(props.product);
    const { name, expertize, project, country, salary, img } = props.product;
    const element = <FontAwesomeIcon icon={faArrowAltCircleDown} />
    return (
        <div>
            <div class="col">
                <div class="brdr card h-100 text-center shadow p-3 bg-body rounded">
                    <img src={img} class="img-border card-img-top rounded-circle image rounded mt-1 mx-auto d-block" alt="..." />
                    <div class="card-body text-dark">
                        <h5 class="card-title  fw-bold">Name : {name}</h5>
                        <p class="card-text"> Expertise : {expertize}</p>
                        <p class="card-text"> Project Completed : {project}</p>
                        <p class="card-text"> Country : {country}</p>
                        <p class="card-text">Salary : ${salary}</p>

                    </div>
                    <button onClick={() => {
                        props.addToCart(props.product);
                    }} className="btn btn-color fs-5 ">{element} Select </button>
                </div>
            </div>
        </div>
    );
};

export default Product;