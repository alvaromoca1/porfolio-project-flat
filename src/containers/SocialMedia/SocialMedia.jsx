import React from 'react';
import {AiOutlineFacebook,AiOutlineMedium,AiFillLinkedin} from 'react-icons/ai';

import './SocialMedia.css';

const SocialMedia = () => (
    <div className='flex justify-center'>
      <div className='w-full md:w-2/4 py-10 sm:px-5 px-10 flex justify-center'>
        <AiOutlineFacebook className='mx-2' color="#000" fontSize={27} />
        <AiOutlineMedium className='mx-2' color="#000" fontSize={27} />
        <AiFillLinkedin className='mx-2' color="#000" fontSize={27} />
      </div>
    </div>
);

export default SocialMedia;
