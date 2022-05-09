/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Facebook from '@material-ui/icons/Facebook';
import { Telegram, Twitter, Phone } from '@material-ui/icons';
import Instagram from '@material-ui/icons/Instagram';
import React from 'react';
import './Contactus.css';
const Contact = () => {
  return (
    <main className='contact'>
      <h1>Contact Us</h1>
      <div className='c2'>
        <img src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-colored-pills-capsules-png-image_1428469.jpg' />
      </div>

      <form className='c3'>
        <label for='name'>Full Name</label>
        <input type='text' name='name' required />
        <br />
        <label for='email'>Email</label>
        <input type='email' name='email' required />
        <br />
        <label for='phone'>Contact Number</label>
        <input type='tel' name='phone' required />
        <br />
        <header>Message</header>
        <textarea name='message' id='' rows='5' required></textarea>
        <input type='submit' value='Submit→' />
      </form>
      <div className='c4'>
        <div id='a1'>
          <header style={{ fontSize: '30px', color: 'teal' }}>
            Contact Info
          </header>
          <p>Megengna Road, Akaki, Addis Ababa-1000</p>
          <p>Telephone: +251-926-775-529</p>
          <p>Email: fentahuna1221@gmail.com</p>
          <a
            href='https://www.facebook.com/profile.php?id=100075868836530'
            target='facebook'
          >
            <Facebook />
          </a>
          <a href='FEEE AASTU' target='_blank'>
            <Telegram />
          </a>
          <a href='FEEE AASTU' target='_blank'>
            <Instagram />
          </a>
          <a href='FEEE AASTU' target='_blank'>
            <Twitter />
          </a>
        </div>

        <div id='a2'>
          <header>About</header>
          <p>
            This is the official contact page of company. All your queries will
            be addressed as soon as possible.
          </p>
          <div className='c1'>
            <p id='phone'>
              <a href=''>
                {' '}
                <Phone />
                +251-926-775-529
              </a>
              <a href=''>Contact us</a>
              <a href='signin'>Log In</a>
              <a href='signin'>
                <button>Sign Up</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
