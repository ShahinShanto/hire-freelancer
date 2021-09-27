import React from 'react';
import AddedFreelancer from '../AddedFreelancer/AddedFreelancer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const cost of cart) {
        total = total + parseFloat(cost.salary);
    }
    const element = <FontAwesomeIcon icon={faMoneyBill} />
    return (
        <div className="ms-4">
            <div className="text-center shadow py-3 bg-body rounded cart-color">
                <h4>Hired Freelancers</h4>
                <h6>Total Persons : {props.cart.length}</h6>
                <h6>Total Salary : {total}</h6>
            </div>
            <div>
                {cart.map((selectData) => (
                    <AddedFreelancer data={selectData} key={selectData.key}> </AddedFreelancer>
                ))}
            </div>
            <div className="text-center my-3">
                <button className="btn btn-color fs-5 ">{element} Pay to Hire </button>
            </div>
        </div>
    );
};

export default Cart;