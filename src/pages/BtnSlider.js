import React from 'react';
import './Slider.css';
import leftArrow from './icons/right.svg';
import rightArrow from './icons/left.svg';

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt='alternate'
      />
    </button>
  );
}
