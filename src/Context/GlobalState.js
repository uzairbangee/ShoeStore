import Reducer from './Reducer';
import {data} from "../data"
import React, {createContext, useReducer} from 'react';

const initialState = {
    products : data.products,
    loading: false,
    cartTotal : 400.00,
    cartQuantity : 1,
    cart : [
        {
            productId : '1',
            quantity : 1,
            price : 400.00
        }
    ]
}

const ActionContext = createContext(initialState);

const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <ActionContext.Provider value={{
            cart : state.cart,
            products : state.products,
            cartTotal : state.cartTotal,
            cartQuantity : state.cartQuantity,
            dispatch
        }}
        >
            {children}
        </ActionContext.Provider>
    )
}

export {
    ActionContext,
    GlobalState
}