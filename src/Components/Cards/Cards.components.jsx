import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../Card/Card.components';
import {ActionContext} from '../../Context/GlobalState';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding : 20
  },
}));

const Products = () => {
  const classes = useStyles();

  const {products} = useContext(ActionContext);

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
          {
              products.map(product => (
                <Grid item xs={6} sm={4}>
                  <Link to={`/catalog/${product.slug}`}>
                    <ProductCard
                        title={product.title}
                        key={product.id} 
                        img={product.image}
                        price={product.price}
                        slug={product.slug}
                    />
                  </Link>
                </Grid>
            ))
          }
      </Grid>
    </div>
  );
}

export default Products;
