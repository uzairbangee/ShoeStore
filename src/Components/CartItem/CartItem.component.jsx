import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ActionContext} from '../../Context/GlobalState';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const CartItem = ({title, img, price, quantity}) => {

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
                    <Typography variant="body1" color="textSecondary" component="p">
                        {quantity} x $ {price}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CartItem;