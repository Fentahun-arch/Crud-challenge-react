/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Service.css';
import Slider from './Slider';
const Services = () => {
  return (
    <main className='service'>
      <h1 id='serve' style={{ fontSize: '100px' }}>
        Our Services
      </h1>
      <Slider />
      <section className='contain'>
        <div className='carding'>
          <div className='card-image car-1'></div>
          <h2>Card 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            illo, quasi excepturi blanditiis dolor ipsum dolorem id temporibus
            laboriosam voluptas eos doloremque odio. Molestias explicabo
            distinctio perferendis quo suscipit maiores.
          </p>
          <a href=''>Read more</a>
        </div>
        <div className='carding'>
          <div className='card-image car-2'></div>
          <h2>Card 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            illo, quasi excepturi blanditiis dolor ipsum dolorem id temporibus
            laboriosam voluptas eos doloremque odio. Molestias explicabo
            distinctio perferendis quo suscipit maiores.
          </p>

          <a href=''>Read more</a>
        </div>
        <div className='carding'>
          <div className='card-image car-3'></div>
          <h2>Card 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            illo, quasi excepturi blanditiis dolor ipsum dolorem id temporibus
            laboriosam voluptas eos doloremque odio. Molestias explicabo
            distinctio perferendis quo suscipit maiores.
          </p>

          <a href=''>Read more</a>
        </div>
      </section>
    </main>
  );
};

export default Services;
