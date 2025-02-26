/* Product Card Component */

import React from 'react';
import classes from '../../styles/ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={classes.productCard}>
                            <img src="https://via.placeholder.com/300x200" alt="Product 1" className={classes.productImage} />
                            <h2 className={classes.productTitle}>Handmade Necklace</h2>
                            <p className={classes.productDescription}>Beautifully crafted with natural materials.</p>
                            <button className={classes.productButton}>View Details</button>
                        </div>
    );
}

export default ProductCard;