import React, { useState } from 'react';

// import {Navigate} from 'react-router-dom';

import illustrationImageDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationImageMobile from './assets/images/illustration-sign-up-mobile.svg';
import iconList from './assets/images/icon-list.svg';
import EmailSection from './component/emailSection/emailSection';


// main page component
export default function App() {
  return (
      <div className='white-space flex flex-col-reverse items-center space-x-0 bg-white p-0 pb-10 sm:flex-row sm:space-x-2 sm:p-2 sm:pb-2'>
        {/* text part*/}
        <main className='flex-1 px-7'>
          <div className='flex flex-col justify-center h-full space-y-4'>
            <header>
              <h1 className='text-4xl font-robotoBold text-DarkSlateGrey mt-8 xl:text-5xl sm:mt-0'>Stay updated!</h1>
            </header>
            <p className='text-DarkSlateGrey text-belowSize font-robotoRegular lg:text-mediumSize'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='list-none m-0 text-DarkSlateGrey text-belowSize font-robotoRegular space-y-2 lg:text-mediumSize'>
              <li className='flex items-start'>
                <img src={iconList} alt="List Icon" className="w-4 h-4 mr-2 mt-1" />
                  Product discovery and building what matters
              </li>
              <li className='flex items-start'>
                <img src={iconList} alt="List Icon" className="w-4 h-4 mr-2 mt-1" />
                  Measuring to ensure updates are a success
              </li>
              <li className='flex items-start'>
                <img src={iconList} alt="List Icon" className="w-4 h-4 mr-2 mt-1" />
                And much more!
              </li>
            </ul>
            
            <EmailSection />
          </div>
        </main>

        {/* image part */}
        <img className='flex-1 illustration hidden sm:block' src={illustrationImageDesktop} alt='Illustration desktop' />
        <img className='flex-1 illustration block sm:hidden' src={illustrationImageMobile} alt='Illustration mobile' />
      </div>
  );
}
