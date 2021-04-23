import React from 'react';

import './Home.css';
import Product from './Product';

const Home = () => (
    <div className = "home">
       <div classNam = "home__container">
           <img className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt = ""/>
       
           <div className = "home__row">
               <Product title = "The Lean Startup" 
                price = {29.99} 
                image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating = {5}/>
               <Product title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
               price = {239.0}
               image = 'https://images-eu.ssl-images-amazon.com/images/I/81BOGWDXGHL._AC_UL160_.jpg'
               rating = {4}/>
           </div>
           <div className = "home__row">
               <Product title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
               price = {199.0}
               rating= {3}
               image = 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'/>
               <Product title = "Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
               price = {98.99}
               rating = {5}
               image = 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300X400_retinamobilex2$'/>
               <Product title = "New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)"
               price = {598.99}
               rating = {4}
               image = 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'/>
           </div>
           <div className = "home__row">
              <Product title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price = {1094.98}
              rating = {4}
              image = 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/>
           </div>
       </div>
    </div>
);

export default Home;

