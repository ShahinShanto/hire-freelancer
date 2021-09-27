import React from 'react';
import './Title.css';
const Title = () => {
    return (

        <div className="pb-3">
            <div className="text-center bg-color py-3 fw-bold">

                <h1>Hire Freelancers</h1>
                <h6 className="fw-normal">Join the world's work marketplace. Find great talent. Build your business. Work with the largest network of independent professionals and get things done.</h6>
                <h4>Total Budget : 1 Million</h4>
                <div class="search-box input-group w-50 mx-auto">
                    <input id="search-field" type="text" class="form-control" placeholder="Search Freelancers"
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onclick="loadProducts()" class="btn btn2 bg-dark" type="button" id="button-search">Search</button>
                </div>
            </div >
        </div>
    );
};

export default Title;