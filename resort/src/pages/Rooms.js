import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Rooms = () => (
   <Hero hero = "roomsHero">
       <Banner title = "Rooms">
           <Link to = "/" className = "btn-primary">Return Home</Link>
       </Banner>
   </Hero>
);

export default Rooms;