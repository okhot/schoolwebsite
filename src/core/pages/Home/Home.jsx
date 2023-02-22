import React from 'react';
import Header from '../../atoms/Headers';
import NavBar from '../../organisms/StickyBar/NavBar';
import StickyBar from '../../organisms/StickyBar/StickyBar';
import Content from '../Content';
import Card from './Card';
import Collaborators from './Collaborators';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Footer from '../../molecules/Footer';
import Search from './Search';
import Counter from './Counter';
import CarouselComponent from './Carousel';
import GoogleMap from '../../organisms/googleMap';

const Home = () => {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <CarouselComponent />
      <Card />
      <Content />
      <Counter />
      <Header title="TAKE A SCHOOL TOUR" />
      <Gallery />
      <Collaborators />
      <Testimonials />
      <GoogleMap />
      <Footer />
      <Search />
    </div>
  );
};

export default Home;
