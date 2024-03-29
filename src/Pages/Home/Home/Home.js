import React from 'react';
import EarnMoney from '../../../components/earnMoney/EarnMoney';
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
           
            <SpicialOffer></SpicialOffer>
            <EarnMoney></EarnMoney>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;