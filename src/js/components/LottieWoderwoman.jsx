import React from 'react';
import LottieAnimation from '../../lottie/Lottie.js';
import wonderWoman from '../../lottie/superhero_01.json';
import '../../styles/underConstruction.css';
import rocket from '../../img/rocket.png';
import figma from '../../img/figma.svg';
import code from '../../img/code.svg'


const LottieWonderWoman = () => {

    return ( 
         <div className='wrapperBody'>
            <div className="headBlock">
                {/* <i className="fas fa-exclamation-triangle"></i> */}
                <h1 className="titleH1">Portfolio</h1>
                <h2 className="titleH2">Under Construction</h2>
                <img className="rocketImg" src={rocket} alt="rocket_image"/>
            </div>
            <div className="textIconsFigmaLoveCode">
                <h3 className="helloText">Hi, I'm <b>Virginia</b>!<br></br>I'm a <b>FrontEnd Developer</b><br></br>and a <b>UX/UI Designer</b>.</h3>
                <div className="designLoveCode">
                    <img src={figma} alt="figma logo"/>
                    <i className="fas fa-heart"></i>
                    <img src={code} alt="figma logo"/>
                </div>
             </div>
            <div className="textAndLottie">
                <LottieAnimation lotti={wonderWoman} height={300} width={300} />
                <span className="longParagraph">I'm working very hard to design and develop my web portfolio with React.js. Meanwhile, you can enjoy Wonder Woman watching over the sky.
                    An animation that I have created with After Effects, Lottie plugin and implemented in my code.
                </span>
            </div>
            <div className="infoContact">
                <span className="shortParagraph">You can also visit my Linkedin profile </span>
                <i className="fab fa-linkedin"></i>
                <br></br>
                <span className="shortParagraph">Or you can Download my CV in pdf</span>
                <br></br>
                <button>Download</button>
            </div>
        </div>
    )
}

export default LottieWonderWoman; 