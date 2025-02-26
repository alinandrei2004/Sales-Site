/* Front Page Component */

import React from 'react';
import classes from '../styles/frontPage.module.css';
import Footer from './components/Footer.js';
import CardComponent from './components/ProductCard.js';

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
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </main>

            <Footer />
        </div>
    );
};

export default FrontPage;