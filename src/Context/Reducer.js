const Reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cartQuantity : state.cartQuantity + 1,
                cartTotal : action.payload.cartTotal,
                cart : action.payload.cart
            }
        case "REMOVE_CART":
            return {
                ...state,
                cartQuantity : state.cartQuantity - action.payload.quantity,
                cartTotal : state.cartTotal - action.payload.cartTotal,
                cart : action.payload.cart
            }
        default:
            return {
                ...state
            }
    }
}

export default Reducer;