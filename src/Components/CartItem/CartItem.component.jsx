import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {ActionContext} from '../../Context/GlobalState';


const CartItem = ({title, img, price, quantity, productId}) => {

    const {cart, dispatch} = useContext(ActionContext);

    const removeFromCart = (id) => {
        const cartcheck = cart.filter(item => item.productId === id);
        const cartindex = cart.findIndex(item => item.productId === id);
        cart.splice(cartindex, 1);

        console.log(cartcheck);
        
        if(cartcheck.length !== 0){
            dispatch({
                type : "REMOVE_CART",
                payload: {
                    quantity : cartcheck[0].quantity,
                    cartTotal : cartcheck[0].price,
                    cart
                }
            })
        }
    }

    return (
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
                <Grid item xs={6} sm={6}>
                    <img src={img} width="100"/>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {quantity} x $ {price}
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <DeleteIcon onClick={() => removeFromCart(productId)}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default CartItem;