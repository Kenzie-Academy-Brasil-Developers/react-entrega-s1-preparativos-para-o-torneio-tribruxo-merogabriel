import React from 'react'
import Players from '../Players'

function index({escolhidos}) {
    return (
        <div>
            <Players escolhidos={escolhidos}></Players>
        </div>
    )
}

export default index
