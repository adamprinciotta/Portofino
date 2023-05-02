import {react, useEffect, useState} from 'react';
import homepageVideo from '../images/homepage-fade.mp4'
import homeCenter from '../images/HomeCenter.png'
import '../styles/Home.css'

function Home(){

    const [current, setCurrent] = useState(0);
    const messages = [
      "Complete One-Stop-Shop showroom & Design Center",
      "Luxury For Less...Designed For Your Life...",
      "The Triangle's Only Complete Contractor & Design Center",
      "Expert Design and Installation Average 9-11 days!",
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        const next = ((current + 1) % 4)
        console.log("next: ", next)
        // current === messages.length - 1 ? 0 : current + 1;

        setCurrent(next);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [current, messages.length]);


    return(
        <>
        <div className="homeContainer">
            <video src={homepageVideo} autoPlay="autoplay" preload="auto" loop="loop" muted="muted" crossOrigin='use-credentials'></video>
            <section className="homeTopSection">
            <div className="homeCenterDiv">
                <img src={homeCenter} width="50%"></img>
                <br></br>
                {messages.map((message, index) => (
                <h2 key={index} className={index === current ? "current" : ""}>
                    {message}
                </h2>
            ))}
            <br></br>
            <button className='homeBtn'>
                <div className="homeBtnTop">How do I get started?</div>
                <div className="homeBtnBottom">Click here or scroll down</div>
            </button>
            <br></br>
            <h1>NC LICENSED GENERAL CONTRACTOR #86537</h1>
            </div>
            </section>
            <section className="gridContainer">
                <div className="gridElement ba">
                    <div className="gridHeader">Before & After</div>
                    <article>
                        <p>
                            See some of the beautiful bathrooms we have designed and installed for our clients.
                        </p>
                        <br></br>
                        <div className="divider"></div>
                    </article>
                    <br></br>
                    <a><button className="gridBtn">View Gallery</button></a>
                </div>
                <div className="gridElement reviews">
                    Hand-Written Reviews
                </div>
                <div className="gridElement remodel">
                    Bath Remodeling Experts
                </div>
                <div className="gridElement process">
                    Our Process
                </div>
                <div className="gridElement expect">
                    What to Expect
                </div>
                <div className="gridElement showroom">
                    See our Showroom
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;