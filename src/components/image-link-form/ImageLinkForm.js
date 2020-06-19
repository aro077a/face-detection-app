import React from 'react';
import './imageLinkForm.scss';

const ImageLinkForm = () => {
  return (
    <div className='imageLinkForm'>
      <p className='f3 white'>
        {'This Magic Brain will detect faces in your pictures. Get it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center br4 ' type='tex' />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red br4 mt3 detect'>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
