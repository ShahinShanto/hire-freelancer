import React from 'react';
import './AddedFreelancer.css';

const AddedFreelancer = (props) => {
    const { data } = props;

    return (
        <div>
            <div class="my-4 d-flex text-center shadow py-3 bg-body rounded brdr">
                <div>
                    <img src={data.img} class="p-2 rounded-circle" style={{ height: '98px', width: '100px' }} alt="..." />
                </div>
                <div>
                    <h5 class="card-title">{data.name}</h5>
                    <h6 class="card-title">{data.expertize}</h6>
                </div>

            </div>
        </div>
    );
};

export default AddedFreelancer;