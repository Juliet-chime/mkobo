import React from 'react'
import Heading from '../../../component/heading/Heading'
import TransactionItems from '../../../component/transactionItem/TransactionItems'
import { spendingItem } from '../../../data'
import { TransactionItemContianer, ViewTransaction } from './style'

const AllTransaction = () => {
    return (
        <div>
            <Heading color="#141623" size="12px" name="Today" />
            <TransactionItemContianer>
                <div>
                    {spendingItem.map((item, index) => (<TransactionItems key={index} item={item} />))}
                </div>
            </TransactionItemContianer><br />

            <Heading color="rgba(38, 50, 56, 0.5)" size="12px" name="Sept 18" />
            <TransactionItemContianer>
                <div>
                    {spendingItem.map((item, index) => (<TransactionItems key={index} item={item} />))}
                </div>
            </TransactionItemContianer>

            <ViewTransaction>
                <button>View All Transactions</button>
            </ViewTransaction>
        </div>
    )
}

export default AllTransaction