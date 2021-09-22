import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import lot from '../assets/cuvette.json';

const GreetingLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lot,
      };
    
    return (
        <Suspense>
          {/* To override default onClick pause by Lottie */}
          <div onClick={() => null}>
            <Lottie 
              options={defaultOptions}
            />
          </div>
        </Suspense>
    )
}
 
export default GreetingLottie;
