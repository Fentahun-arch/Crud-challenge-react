/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './SignIn.css';
import ReactCardFlip from 'react-card-flip';

const SignIn = () => {
  const [isFlipped, setIsFlipped] = useState();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <main className='sign'>
      <div className='container'>
        <div className='card'>
          <div className='inner-box'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
              <div className='card-front'>
                <h1>Sign In</h1>
                <form>
                  <input
                    type='email'
                    className='input-box'
                    placeholder='Your Email Id'
                    required
                  />
                  <input
                    type='password'
                    className='input-box'
                    placeholder='Password'
                    required
                  />
                  <button type='submit' className='submit-btn'>
                    Submit
                  </button>
                  <input type='checkbox' />
                  <span>Remember Me</span>
                </form>
                <button onClick={handleClick} type='button' className='btn'>
                  {' '}
                  I am New Here
                </button>
                <a href='data/db.json'> Forgot Password</a>
                <br />
                <a href='contact'>Contact us</a>
              </div>
              <div className='card-back '>
                <h2>Sign Up</h2>
                <form>
                  <input
                    type='text'
                    className='input-box'
                    placeholder='Your Name'
                    required
                  />
                  <input
                    type='email'
                    className='input-box'
                    placeholder='Your Email Id'
                    required
                  />
                  <input
                    type='password'
                    className='input-box'
                    placeholder='Password'
                    required
                  />
                  <button type='submit' className='submit-btn'>
                    Submit
                  </button>
                  <input type='checkbox' />
                  <span>Remember Me</span>
                </form>
                <button onClick={handleClick} type='button' className='btn'>
                  {' '}
                  I Have an Account
                </button>
                <a href='_blank'> Forgot Password</a>
                <br />

                <a href='contact'>Contact us</a>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
      <div className='title'>
        <h1>Hello Guys these are services that we provide</h1>
        <p id='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi
          sequi eaque quia, fugit a perspiciatis nam eum recusandae ipsum labore
          temporibus placeat, reprehenderit quas maxime sunt necessitatibus
          corporis. Itaque quos, quo accusamus asperiores hic vel iste harum
          deserunt fugiat.
        </p>
      </div>
    </main>
  );
};

export default SignIn;
