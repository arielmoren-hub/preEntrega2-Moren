import React from 'react'
import { FaOpencart } from "react-icons/fa"

function CartWiget() {
    return (
        <div className='CartWiget-container'
            style={{display: 'flex'}}
        >
            <FaOpencart />
            <div>
                <span>1</span>
            </div>
        </div>
    )
}

export default CartWiget