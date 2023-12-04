import React from "react";
import './Intro.css';

function Intro() {
    return(

        <div className="footer">
            <div className="main-container">
                <div className="container">
                    <div className="container1">
                        <h2 className="name">JATIN MAHAKAL</h2>
                        <p className="des">The following website is created using 
                            React, which demonstrate the use of states 
                             and how to update them using searchBox
                        </p>
                    </div>
                    <div className="container2">
                        <h2 style={{textAlign: 'left'}}>
                            <span>SOCIAL</span>
                        </h2>
                        <div className="social-links">
                            <a className="social-link" href="https://github.com/JatinRM">
                                <img style={{marginRight:'2vh', marginTop:'0.1vh'}} className="social-link-img" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="github-icon" />    
                            </a>
                            <a className="social-link" href="https://www.linkedin.com/in/jatin-mahakal-1a8036185">
                                <img style={{height: 30, marginRight: '2vh'}} className="social-link-img" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="linkdin-icon"/>    
                            </a>
                            <a className="social-link" href="https://instagram.com/jatin_mahakal?igshid=OGQ5ZDc2ODk2ZA==">
                                <img style={{height: 25, marginBottom: '0.4vh'}} className="social-link-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92G5kEM7FL7kCzjkVy2foG71rurCRGxDFE6zAM9RQajmiUJHtVUDFpCe9xAfa5lM-sak&usqp=CAU" alt="instagram-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="divider"></hr>
             <h1 className="credit">Made by Jatin Mahakal</h1>

        </div>
    )
}
export default Intro;