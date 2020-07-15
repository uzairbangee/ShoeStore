import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {useParams} from 'react-router-dom';
import {ActionContext} from '../../Context/GlobalState';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin : 20
  },
  info : {
      textAlign: 'center',
      border : 'none',
      marginTop : 20
  },
  media: {
    height: 360,
  },
  button : {
      backgroundColor : 'black',
      marginTop : 10
  },
}));

const ProductPage = () => {
    const classes = useStyles();
    const {products, cart, cartTotal, dispatch} = useContext(ActionContext);
    const { slug } = useParams();
    const shoe = products.filter(product => product.slug === slug);

    const addToCart = (id) => {
        const checkcart = cart.filter(item => item.productId === id);
        if(checkcart.length === 0){
            const updatedCart = [
                ...cart,
                {
                    productId : shoe[0].id,
                    quantity : 1,
                    price : shoe[0].price
                }
            ]

            const cart_total = updatedCart.reduce((item, num) => item.price + num.price)

            dispatch({
                type: "ADD_TO_CART",
                payload : {
                    cart : updatedCart,
                    cartTotal : cart_total
                }
            })
        }
        else{
            const quantity = checkcart[0].quantity + 1;
            const price = quantity * checkcart[0].price;

            const newcart = cart.map(item => {
                if(cart.productId === checkcart[0].id){
                    item = {...item, quantity, price} 
                }
                return item;
            })

            const cart_total = newcart.reduce((item, num) => item.price + num.price)

            dispatch({
                type: "ADD_TO_CART",
                payload : {
                    cart : newcart,
                    cartTotal : cart_total
                }
            })
        }
    }

    if(!shoe)
        return <div>Not FOUND</div>

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={shoe[0].image}
                    title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <div className={classes.info}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {shoe[0].title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        $ {shoe[0].price}
                    </Typography>

                    <Button variant="contained" onClick={() => addToCart(shoe[0].id)} className={classes.button} color="primary">
                        ADD TO CART
                    </Button>

            </div>
            </Grid>
        </Grid>
        </div>
    );
}

export default ProductPage;