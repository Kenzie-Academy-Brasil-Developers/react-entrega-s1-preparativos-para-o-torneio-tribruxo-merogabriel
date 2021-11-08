import React from 'react'

function index({name, img}) {
    return (
        <div>
            <img src={img} alt="" />
            {name}
        </div>
    )
}

export default index
