import React from 'react';

import LottieAnimation from '../../lottie/Lottie.js';
import wonderWoman from '../../lottie/superhero_01.json';
import '../../styles/underConstruction.css';
import rocket from '../../img/rocket.png';
import figma from '../../img/figma.svg';
import code from '../../img/code.svg';


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
                <p className="longParagraph">I'm working very hard to design and develop<br></br>my portfolio with <b>React</b>.<br></br><br></br>Meanwhile, you can enjoy Wonder Woman watching over the sky. An animation I created with <b>After Effects, Lottie plugin</b> and <b>implemented in my code</b>.
                </p>
            </div>
            <div className="infoContact">
                <h3 className="contactQuestion">
                    Do you want<br></br>to <b>contact me</b>?
                </h3>
                <a href="https://www.linkedin.com/in/virginiakmartinez/">
                    <p className="shortParagraph">
                        <i className="fab fa-linkedin"></i>
                        Linkedin profile
                    </p>
                </a>
                <a href="https://github.com/VirginiaKMartinez">
                    <p className="shortParagraph">
                        <i className="fab fa-github"></i>
                            GitHub repositories
                    </p>
                </a>
                <a href="https://drive.google.com/file/d/1zFMuJ6QDjhJeTxNOljLSLsuX1Iz23q0P/view?usp=sharing">
                    <p className="shortParagraph">
                        <i className="fas fa-file-pdf"></i>
                        Download my CV
                    </p>
                </a>
            </div>
        </div>
    )
}

export default LottieWonderWoman; 