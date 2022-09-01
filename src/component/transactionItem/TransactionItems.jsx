import React from 'react'
import { TransactionItemWrapper } from './style'

const TransactionItems = ({ item }) => {
    return (
        <TransactionItemWrapper bg={item.bg}>
            <div className='item-icon-text'>
                <div className='item-img-container'>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h5>{item.name}</h5>
                    <h1>{item.item}</h1>
                </div>
            </div>
            <div className='item-amount'>
                <h5>{item.currency}</h5>
                <h1>{item.amount}</h1>
            </div>
        </TransactionItemWrapper>
    )
}

export default TransactionItems