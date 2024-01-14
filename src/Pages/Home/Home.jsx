import React from 'react';
import Navbar from '../../Components/Resuse/Navbar/Navbar';
import Banner from '../../Components/HomeComponents/Banner/Banner';
import Services from '../../Components/HomeComponents/Services/Services';
import Deal from '../../Components/HomeComponents/Deal/Deal';
import Container from '../../Components/Resuse/Container/Container';
import TopSelling from '../../Components/HomeComponents/TopSelling/TopSelling';
import FeaturedBrand from '../../Components/HomeComponents/FeaturedBrand/FeaturedBrand';
import BestSelling from '../../Components/HomeComponents/BestSelling/BestSelling';
import RecomendedProducts from '../../Components/HomeComponents/ReccomendedProducts/RecomendedProducts';
import ShopByBrands from '../../Components/HomeComponents/ShopByBrands/ShopByBrands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Deal></Deal>
            <Container>
            <div className='py-6'>
             <img src="/images/image/Banner1.jpg" alt="" />
            </div>
            </Container>
            {/* <div className='py-10 space-y-10 bg-gray-200 lg:px-0 px-2'>
            <TopSelling></TopSelling>
            <FeaturedBrand></FeaturedBrand>
            <BestSelling></BestSelling>
            <Container>
            <div className='py-6'>
             <img src="/images/image/banner2.jpg" alt="" />
            </div>
            </Container>
            <RecomendedProducts></RecomendedProducts>
            <ShopByBrands></ShopByBrands>
            </div> */}
        </div>
    );
}

export default Home;
