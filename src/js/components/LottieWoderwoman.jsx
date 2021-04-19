import React from 'react';
import LottieAnimation from '../../lottie/Lottie.js';
import wonderWoman from '../../lottie/superhero_01.json';
import '../../styles/underConstruction.css';


const LottieWonderWoman = () => {

    return ( 
         <div className='wrapperBody'>
            <div className="headBlock">
                
                <h1 className="title"><i class="fas fa-drafting-compass"></i><br></br>Under Construction</h1>
            </div>
            <div className="iconsFigmaLoveCode">
                <h3 className="helloText">Hi I'm Virginia and I'm a FrontEnd Developer and UX / UI Designer</h3>
                <i className="fab fa-figma"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-code"></i>
                
             </div>
            
            
            <div className="textAndLottie">
                <LottieAnimation lotti={wonderWoman} height={300} width={300} />
                <span className="descriptText">I'm working very hard to design and develop my web portfolio with React.js. Meanwhile, you can enjoy Wonder Woman watching over the sky.
                    An animation that I have created with After Effects, Lottie plugin and implemented in my code.
                </span>
            </div>
            <div className="infoContact">
                <span className="longParagraph">You can also visit my Linkedin profile </span>
                <i className="fab fa-linkedin"></i>
                <br></br>
                <span className="descriptText">Or you can Download my CV in pdf</span>
                <br></br>
                <button>Download</button>
            </div>
        </div>
    )
}

export default LottieWonderWoman; 