import React from 'react';
import LottieAnimation from '../../lottie/Lottie.js';
import wonderWoman from '../../lottie/superhero_01.json';


const LottieWonderWoman = () => {

    return ( 
         <div className='wrapper'>
            <h1>Page Under Construction</h1>
            <h3>Hi, I'm Virginia and I'm a FrontEnd Developer and UX / UI Designer</h3>
            <div>
                <span>I'm working very hard to design and develop my web portfolio with React.js, meanwhile, you can enjoy Wonder Woman watching over the sky.
                    An animation that I have created from After Effects with the Lottie plugin and implemented in my code.
                </span>
                <LottieAnimation lotti={wonderWoman} height={300} width={300} />
            </div>
           <span>You can also visit my Linkedin profile</span>
           <i className="fab fa-linkedin"></i>
           <br></br>
           <span>Or you can Download my CV in pdf</span>
           <button>Download</button>
           <span></span>
        </div>
    )
}

export default LottieWonderWoman; 