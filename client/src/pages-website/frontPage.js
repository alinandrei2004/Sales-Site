/* Front Page Component */

import React from 'react';
import classes from '../styles/frontPage.module.css';
import Footer from './components/footer';

const FrontPage = () => {
    return (
        <div className={classes.pageContainer}>
            {/* Header */}
            <header className={classes.header}>
                <h1 className={classes.headerTitle}>Welcome to Our Handmade Goods Store</h1>
                <p className={classes.headerSubtitle}>Discover unique, handcrafted items made with love.</p>
            </header>

            {/* Product Showcase */}
            <main className={classes.productGrid}>
                <div className={classes.productCard}>
                    <img src="https://via.placeholder.com/300x200" alt="Product 1" className={classes.productImage} />
                    <h2 className={classes.productTitle}>Handmade Necklace</h2>
                    <p className={classes.productDescription}>Beautifully crafted with natural materials.</p>
                    <button className={classes.productButton}>View Details</button>
                </div>
                <div className={classes.productCard}>
                    <img src="https://via.placeholder.com/300x200" alt="Product 2" className={classes.productImage} />
                    <h2 className={classes.productTitle}>Ceramic Mug</h2>
                    <p className={classes.productDescription}>Perfect for cozy mornings with your favorite drink.</p>
                    <button className={classes.productButton}>View Details</button>
                </div>
                <div className={classes.productCard}>
                    <img src="https://via.placeholder.com/300x200" alt="Product 3" className={classes.productImage} />
                    <h2 className={classes.productTitle}>Knitted Scarf</h2>
                    <p className={classes.productDescription}>Soft and warm, perfect for chilly days.</p>
                    <button className={classes.productButton}>View Details</button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FrontPage;