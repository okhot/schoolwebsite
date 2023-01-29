import React from 'react';
import Header from '../../atoms/Headers';
import NavBar from '../../organisms/StickyBar/NavBar';
import StickyBar from '../../organisms/StickyBar/StickyBar';
import Content from '../Content';
import Card from './Card';
import Carousel from './Carousel';
import Collaborators from './Collaborators';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Footer from '../../molecules/Footer';
import Search from './Search';
import Counter from './Counter';

const Home = () => {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <Carousel />
      <Card />
      <Content />
      <Counter />
      <Header title="TAKE A SCHOOL TOUR" />
      <Gallery />
      <Collaborators />
      <Testimonials />
      <Footer />
      <Search />
    </div>
  );
};

export default Home;
