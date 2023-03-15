import React from 'react';
import SpicialOffer from '../../../components/SpicialOffer/SpicialOffer';
import AboutUs from '../AboutUs/AboutUs';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <AboutUs></AboutUs>
            <SpicialOffer></SpicialOffer>
        </div>
    );
};

export default Home;