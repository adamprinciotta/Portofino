import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'
import five from './images/5.png'
import six from './images/6.png'
import seven from './images/7.png'
import eight from './images/8.png'
import nine from './images/9.png'
import ten from './images/10.png'
import eleven from './images/11.png'
import twelve from './images/12.png'
import thirteen from './images/13.png'
import fourteen from './images/14.png'
import fifteen from './images/15.png'
import sixteen from './images/16.png'
import seventeen from './images/17.png'
import eighteen from './images/18.png'
import nineteen from './images/19.png'
import twenty from './images/20.png'
import twentyone from './images/21.png'
import twentytwo from './images/22.png'
import twentythree from './images/23.png'
import twentyfour from './images/24.png'
import twentyfive from './images/25.png'
import twentysix from './images/26.png'
import twentyseven from './images/27.png'
import twentyeight from './images/28.png'
import twentynine from './images/29.png'
import thirty from './images/30.png'
import thirtyone from './images/31.png'
import thirtytwo from './images/32.png'
import thirtythree from './images/33.png'
import thirtyfour from './images/34.png'
import thirtyfive from './images/35.png'
import thirtysix from './images/36.png'
import thirtyseven from './images/37.png'
import thirtyeight from './images/38.png'
import thirtynine from './images/39.png'
import forty from './images/40.png'
import fortyone from './images/41.png'
import fortytwo from './images/42.png'
import fortythree from './images/43.png'
import fortyfour from './images/44.png'
import fortyfive from './images/45.png'
import fortysix from './images/46.png'
import fortyseven from './images/47.png'
import fortyeight from './images/48.png'
import fortynine from './images/49.png'
import fifty from './images/50.png'
import fiftyone from './images/51.png'
import fiftytwo from './images/52.png'
import fiftythree from './images/53.png'
import fiftyfour from './images/54.png'
import fiftyfive from './images/55.png'
import fiftysix from './images/56.png'
import fiftyseven from './images/57.png'
import fiftyeight from './images/58.png'
import fiftynine from './images/59.png'
import sixty from './images/60.png'
import sixtyone from './images/61.png'
import sixtytwo from './images/62.png'
import sixtythree from './images/63.png'
import sixtyfour from './images/64.png'
import sixtyfive from './images/65.png'
import sixtysix from './images/66.png'
import sixtyseven from './images/67.png'
import sixtyeight from './images/68.png'
import sixtynine from './images/69.png'
import seventy from './images/70.png'
import seventyone from './images/71.png'
import seventytwo from './images/72.png'
import seventythree from './images/73.png'
import seventyfour from './images/74.png'
import seventyfive from './images/75.png'
import seventysix from './images/76.png'
import seventyseven from './images/77.png'
import seventyeight from './images/78.png'
import seventynine from './images/79.png'
import eighty from './images/80.png'
import eightyone from './images/81.png'
import eightytwo from './images/82.png'
import eightythree from './images/83.png'
import eightyfour from './images/84.png'
import eightyfive from './images/85.png'
import eightysix from './images/86.png'
import eightyseven from './images/87.png'
import eightyeight from './images/88.png'
import eightynine from './images/89.png'
import ninety from './images/90.png'
import ninetyone from './images/91.png'
import ninetytwo from './images/92.png'
import ninetythree from './images/93.png'
import ninetyfour from './images/94.png'

import header from './images/header.png'



import React from 'react';

function App() {
  
  const firstSixImages = [one, two, three, four, five, six]

  const images = [
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twentyfour,
    twentyfive,
    twentysix,
    twentyseven,
    twentyeight,
    twentynine,
    thirty,
    thirtyone,
    thirtytwo,
    thirtythree,
    thirtyfour,
    thirtyfive,
    thirtysix,
    thirtyseven,
    thirtyeight,
    thirtynine,
    forty,
    fortyone,
    fortytwo,
    fortythree,
    fortyfour,
    fortyfive,
    fortysix,
    fortyseven,
    fortyeight,
    fortynine,
    fifty,
    fiftyone,
    fiftytwo,
    fiftythree,
    fiftyfour,
    fiftyfive,
    fiftysix,
    fiftyseven,
    fiftyeight,
    fiftynine,
    sixty,
    sixtyone,
    sixtytwo,
    sixtythree,
    sixtyfour,
    sixtyfive,
    sixtysix,
    sixtyseven,
    sixtyeight,
    sixtynine,
    seventy,
    seventyone,
    seventytwo,
    seventythree,
    seventyfour,
    seventyfive,
    seventysix,
    seventyseven,
    seventyeight,
    seventynine,
    eighty,
    eightyone,
    eightytwo,
    eightythree,
    eightyfour,
    eightyfive,
    eightysix,
    eightyseven,
    eightyeight,
    eightynine,
    ninety,
    ninetyone,
    ninetytwo,
    ninetythree,
    ninetyfour
  ];

  const googleReviews = [
    {
      reviewer: "Linda M.",
      review: "From my first call with Dave until I paid him the last installment, he was always on time, communicated often, and most of all, knows his craft! I am so happy how my kitchen cabinets came out. He used great quality cabinets and I would recommend him hands down. I had received a quote from Hone Depot, they were going to use laminate cabinet doors. The price I was quoted did not seem right, it was close to getting a brand new kitchen. When I called Dave, he not only came in 6K less, but the cabinets are maple wood! They are top of the line. Thank you Dave!"
    },
    {
      reviewer: "Beth G.",
      review: "We used David from Atlantic Cabinet Refacing to reface our 20 year old cabinets. David was very responsive to our initial call for an estimate and to all other calls from the beginning of the process to the end. David proved to be a meticulous craftsman helping us to ensure that we match the color of the cabinets to the remaining wood in the kitchen. He was ahead of schedule for installation which was great because we were hosting a party. David was very accommodating with that time schedule. The job was completed very professionally in 1 day. I had an concern about one of my drawers after the work was completed and David came back to take a look within 48 hours of reaching out to him, and solved that problem for us. We would recommend David and Atlantic Cabinet Refacing without hesitation."
    },
    {
      reviewer: "Nick G.",
      review: "David did an excellent job with our cabinet refacing. He is very organized, when he lays out the timeline of what happens when, that is exactly how it went. Since I was acting as my own general contractor he even reminded me of when my responsibilities were due in order to stay on schedule. No surprises, no delays, all t's are crossed and i's dotted. The quality of my new doors is outstanding and all gaps perfectly aligned. My new white kitchen is better than new for a cost far less than a total remodel. This project is by far the best value we have ever achieved in any of our house projects. Thank you Atlantic Cabinet Refacing and David for talking me out of painting my cabinets and putting on new doors instead."
    },
    {
      reviewer: "Anglea D.",
      review: "I highly recommend Atlantic Cabinet Refacing! David, the owner, is professional, organized and meticulous. He explained the whole process so that we knew what to expect and when to expect it. He provided us with updates each day, answered questions without hesitation and left our home in good order before leaving each day. He had a great relationship with the company he recommended for our counter and they too were excellent. David takes pride in his work, in his business as well as in his business associates. Our cabinets came out amazing! We have a beautiful new kitchen and we are so pleased. Thank you David, you were wonderful!"
    },
    {
      reviewer: "Gregg T.",
      review: "David did a wonderful job refacing our cabinets exactly in the way we wanted. He is a perfectionist with all details and aspects. We highly recommend him. He is very reliable which is an usual trait for contractors. David completed everything in a timely manner, exactly as he said! I can't count the times we have said that we LOVE our kitchen in the days since David did the job! If all contractors were as efficient as Dave, the industry as a whole would have a better reputation!"
    },
    {
      reviewer: "Mary H.",
      review: "I am very happy with my new white Shaker cabinet doors that David from Atlantic Cabinet Refacing installed for me. David was recommended to me from a friend who is a kitchen designer. My kitchen looks brand new with new cabinet fronts, new quartz countertops, fresh paint and new tile backspace. It has been a pleasure to work with David."
    },
    {
      reviewer: "YB and Cheryl R.",
      review: "These days when you do a kitchen renovation project, some one does the estimate and writes a contract and it is handed over to a sub contractor to do the actual work. As an engineering professional myself, I do not expect the subcontractor to do the job properly as often the contract document does not specify every detail. David of Atlantic Cabinet Refacing of Burlington MA writes the contract, takes charge of the project and performs all the work himself. His interface with quartz/granite counter top company is very smooth with no hassles. We saved about 25% of the total cabinet cost when we replaced the cabinet drawers and doors as we did minimal prep work and painting ourselves. David was very responsive to our needs and everything was on schedule. We are very pleased with his work and we love our brand new kitchen. We highly recommend Atlantic Cabinet Refacing."
    },
    {
      reviewer: "Mary L.",
      review: "We just had our kitchen cabinets refaced by Atlantic Cabinet and cannot say enough about how pleased we are. The owner, David Princiotta, was wonderful to work with. He kept us updated throughout the process showing true professionalism. David was true to his estimate, worked within the time frame projected, provided true craftsmanship and used quality products. We have worked with many contractors and David Princiotta is one of the good guys. We felt comfortable with him and his decision-making throughout the whole renovation process. We are thrilled with our new kitchen and would not hesitate to recommend David and his company."
    },
    {
      reviewer: "Michael R.",
      review: "Dave refaced my kitchen cabinets 3 years ago. They still look as good as the day he installed them. The quality of the materials he uses is unsurpassed and the quality of his work is top shelf. Highly recommend."
    },
    {
      reviewer: "Michael L.",
      review: "We just had our cabinets refinished by Atlantic Cabinet Refacing and all we can say is WOW! Our kitchen looks like a showroom for new cabinetry. As promised, David Princiotta delivered a quality product, on time and for a fair price. He and his son worked together on the project. Their professionalism, cleanliness and attention to detail was beyond our expectations. You could set your watch to David's committed arrival time! If your in the market for cabinet refacing, look no further...this is the place to go."
    },
    {
      reviewer: "Mary T.",
      review: "We just had our kitchen cabinets refaced by Atlantic Cabinet and we LOVE them! All the doors close beautifully and the new hinges are great! My only regret is that we did not do this sooner. David made a few changes to our cabinets ( pull out trash and drawers) that are fabulous! We love our kitchen again. It looks SO nice!"
    },
    {
      reviewer: "Mary H.",
      review: "Our new cabinet doors are wonderful. We had a lot of new doors to hang and he ordered all the correct sizes and pieces. He was ahead of schedule which we were so greatful for and on budget. It was a fraction of the cost for new cabinets and you cannot tell the difference. We highly recommend David for your project."
    },
    {
      reviewer: "Maria S.",
      review: "I cannot say enough good things about Dave and Atlantic Cabinet Refacing. The quality, workmanship and professionalism are all top notch. The work was done in a minimal amount of time, and my kitchen was left cleaner than I would have expected. I LOVE my cabinets, counters and sink. There were no surprises, and Dave was always available to answer questions. I highly recommend Atlantic Cabinet Refacing."
    },
    {
      reviewer: "Dyhanna N.",
      review: "David did an exceptional job refacing our cabinets. He is truly a master craftsman who made cabinet suggestions that have beautifully enhanced our kitchen in appearance , quality and functionality. We look foward to enjoying them for years to come !"
    },
    {
      reviewer: "Kathy R.",
      review: "Love my new cabinets. David from Atlantic Cabinet did a great job. He was professional, meticulous and responsive. I am very satisfied with the results."
    },
    {
      reviewer: "Mary B.",
      review: "We are so delighted with our new cabinets! David was great to work with, he was professional , friendly and efficient. He covered the floor & counters so they wouldn’t be damaged and cleaned up after. It took just one day and we are so happy! Thanks David"
    },
    {
      reviewer: "Mary R.",
      review: "David was great to work with and delivered exactly what was promised. He was very precise and went out of his way to accommodate our wishes. Kitchen looks great! Highly recommend Atlantic Cabinet Refacing. Thank you, David!"
    },
    {
      reviewer: "Will D.",
      review: "We can't get over the transformation! New doors & drawer fronts, hardware and granite for a fraction of the cost (and time) of a complete remodel! Dave was a pleasure to work with. His knowledge of the business and attention to detail is top-notch. Can't recommend enough to all my friends!"
    },
    {
      reviewer: "Frank V.",
      review: "Cabinet fronts are well constructed and David takes great care to measure and install each for a better-than-new fit and finish. Could not be more pleased with the results."
    },
    {
      reviewer: "Danielle G.",
      review: "David did an amazing job with our cabinets. He is top notch and extremely professional! HIGHLY recommend him!"
    },
    {
      reviewer: "Peg C.",
      review: "We couldn't be happier with the newly renovated kitchen. His ideas, capabilities, and suggestions were terrific. It looks exactly the way we wanted it to for a fraction of the cost a new kitchen would have been."
    },
    {
      reviewer: "Sheila M.",
      review: "The cabinets look wonderful and are very high quality unlike some other refacing jobs that I've seen. I'm very happy with my new kitchen!"
    },
    {
      reviewer: "Sam C.",
      review: "Great workmanship, fast and efficienet, and great products"
    },
    {
      reviewer: "Dafna H.",
      review: "David was a pleasure to work with! Super professional, responsive and friendly. The end result is fantastic and it was a stress free process. I highly recommend working with David. I love my new kitchen!"
    },
  ]

  const yelpReviews = [

    {
      reviewer: "Steve P.",
      review: "David saved us tons of $$$ and made our kitchen look brand new! We were considering new cabinets (2002 built house with worn cherry cabinets) and/or a kitchen remodel. Neither my wife nor I had heard of cabinet refacing, and then David came to the rescue. David is a true professional who worked with us to find the right fit, color and style - he listened to what we wanted and made a number of helpful suggestions based on his years of experience.  David was honest, direct, responsive, pleasant and HE did exactly what he said he was going to do, exactly when he said he was going to do it.  He is a perfectionist and it shows in his work product.  The doors are beautiful and well built. In the end, we kept our counters, which are in good shape as well as our appliances.  Though it feels as if we got a brand new kitchen due to the refaced doors.  We received quotes for new cabinets at 3x and other forms of refacing for more as well. He made a great recommendation on subway tile store, which we used and also were extremely happy we did -they were knowledgeable, friendly, professional and timely."
    },
    {
      reviewer: "Marvin G.",
      review: "Dave did our lake home and our new condo. His workmanship is meticulous, as evidenced by the end product. We loved the refacing he did at our lake house and loved the new cabinets he installed at our condo. It totally transformed the kitchen and bathroom!!  Plus we know the product lasts and Dave stands behind his work. That is why we have used him twice and would recommend him to anyone."
    },

    //unsure if wants to be included because it's a huge review
    //Beth B.
    // Our home, built in 1996, had a builder-grade kitchen with oak cabinets and laminate countertops. The cabinets were in good condition, though, and the kitchen's layout worked for us, so we decided to go with refacing rather than replacing. We asked four companies for estimates. One was a national chain, one was a small business with several employees, and two were sole proprietors. Each company came out, looked at our kitchen, talked us through options, showed us materials, and provided estimates. After the initial meeting, we immediately eliminated the national company (we didn't get a good sense of the quality of the work given that we were visited by a salesperson rather than a craftsperson) and one of the sole proprietors (his materials were not high quality). That left the small business with several employees (two of whom visited us) and David Princiotta of Atlantic Cabinet Refacing. We were impressed with David firstly because he did all the work himself, so we felt comfortable that we weren't being sold something that could not be delivered. But we were also impressed for other reasons: he spent a long time with us, asking questions and taking notes; he gave us a a number of options for a design problem (concealing an exhaust vent at the top of the cabinets); he showed us a book of photos of finished kitchens; and he showed us the high-quality cabinet doors that he would use. The small business had given us a lower quote, however, so we decided to call past clients for them as well as for David, hoping to get a better sense of workmanship for both. A number of clients of the small business told us that the painted finish on the doors had not held up well. All of the clients of David, however, raved about the high quality of their painted doors -- none had chipped, and many had been living in their kitchens for many years. They also raved about David's attention to detail. (I called about 10 former clients, and they all offered unequivocal endorsements.)

// We paid our deposit and got onto David's schedule. He made another visit to the house to do detailed measurements, confirm our choices, and explain the renovation process. He carefully explained what would happen on each day of the renovation (days 1-3), when the countertop people would do their templating, and when the counters would be installed. He told us the dates by which we needed to have our countertops chosen, our faucets bought, and our sink and dishwasher disconnected. As the date for the renovation drew near, he called to make sure that everything was ready on our end. The actual work took exactly as long as David had estimated; he arrived first thing on Monday morning and was done by Wednesday afternoon. The result was everything that we had hoped for -- a complete transformation from an old, dated kitchen to something modern, bright, and clean. David is a real craftsman and spent time getting all the details right. We give him our very highest recommendation.
    // {
    //   reviewer: "",
    //   review: ""
    // }
  ]

  const angiReviews = [
    {
      reviewer: "Brian M.",
      review: "The work went great. Got an almost immediate estimate, and a specific date for the job to be done. David was super-knowledgeable and helpful right from the start. He told us about the option of our painting the sides of cabinets (instead of refacing them) and just having the matching new doors put on. This worked well for us and we really appreciated this less-expensive option. He did the installation exactly when he said he would, and our \"re-doored\" cabinets look fantastic! The cabinet doors we bought are solid maple, beautifully crafted and look like they are truly built to last. And absolutely no hassles in the whole process. Would definitely hire again, and recommend to others."
    },
    {
      reviewer: "William R.",
      review: "He is very organized, professional, and does excellent work!"
    },
    {
      reviewer: "Al C.",
      review: "David was a joy to work with. He was on time, very professional, did exactly what he said he was going to do when he scheduled to do it. There were no surprises or hidden costs. As a retired carpenter of 30+ years myself, I can attest that David is truly a craftsman."
    },
    {
      reviewer: "Joeanne A.",
      review: "We can't express how thrilled we are with our kitchen cabinets and the fantastic work David Princiotta did refacing. He is truly a perfectionist and real artisan. You would never know that we hadn't replaced our current cabinets with new ones. David is meticulous and takes much pride in his work, something you do not find everyday. David did the entire job himself, from measuring to installing and was a pleasure to work with. The quality of his materials were excellent as well. He was prompt and the quote we received was what we paid. We had received other quotes and David was competitive. One important thing to keep in mind -- we wanted Euro hung doors and whoever installs these must be precise. The doors fit together like a glove. Many refacing contractors did not want to hang this style door because of the time and precision involved. We went from oak cabinets to a factory painted buttermilk wood cabinet. If we went with a wood finish the price would have been less but we wanted the buttermilk wood finish. If you are considering replacing you kitchen cabinets, you should consider refacing first. It was much less than replacing your cabinets and the job was truly professional. Thank you David!!!"
    },
    {
      reviewer: "James K.",
      review: "Everything was absolutely outstanding. Atlantic Cabinet Refacing was punctual, courteous, and informative."
    }
  ]

  const houzzReviews = [
    {
      reviewer: "RoseMarie and Joe O.",
      review: "David did an excellent job in our cabinet refacing project. He is detailed oriented, reliable, and professional.  The products he uses are of high quality and he is very particular in the installation of door and drawer fronts- it must be perfect.  David first worked in our kitchen when we purchased our house 16 years ago. Recently, when we decided to change our dark wood cabinets to white to brighten our kitchen, we called David again, without hesitation.  We highly recommend him. You will be pleased with the results."
    },
    {
      reviewer: "Hu",
      review: "David Princiotta is professional, efficient, knowledgeable, experienced and the sole proprietor .  He replied to our call in less than day, and came within 2 days to give us an estimate.  He had samples of doors and hardware and the quote he gave us was an excellent value. He measured everything, in our case it included 30+ doors, 10+ drawers as well as 10 extra pieces for end caps to to cover the base of the center island. He gave us a timeline, allowing time for door delivery and to match and paint the areas necessary ahead of installation. He accommodated our accelerated schedule. When it was time for prep and installation, he and his son unpacked, installed hinges and drilled drawer fronts.  They then installed all the end caps and the area under the island in a half day. The 2nd day Dave was alone to place all of the doors, drawers fronts, drill handle locations and clean up.  He was done shortly after lunch. By using Atlantic Cabinet Refacing we were able to get a new kitchen for far less money and mess than reconstruction.  We didn't even need to empty the cabinets! We highly recommend David and Atlantic Cabinet Refacing."
    }
  ]
  // {
  //   reviewer: "",
  //   review: ""
  // },

  return (
    <>
    <div className="screen">
      <div className="container">
        <img src={header} height="100px" width="300px" className="headerImg"></img>
      </div>
      <div className="gallery">
        {firstSixImages.map((image)=> (
          <img className="firstSix" src={image} alt="Refaced Kitchen" width="100%"/>
        ))}
        {images.map((image) => (
          <img src={image} alt="Refaced Kitchen" width="100%" loading="lazy"/>
        ))}
      </div>

      <div className="reviews">
        <h2>Google Reviews</h2>
        {googleReviews.map((r) => (
          <>
            <blockquote>"{r.review}"</blockquote>
            <cite>- <i>{r.reviewer}</i></cite>
          </>
        ))}
        <h2>Yelp Reviews</h2>
        {yelpReviews.map((r) => (
          <>
            <blockquote>"{r.review}"</blockquote>
            <cite>- <i>{r.reviewer}</i></cite>
          </>
        ))}
        <h2>Angi's List Reviews</h2>
        {angiReviews.map((r) => (
          <>
            <blockquote>"{r.review}"</blockquote>
            <cite>- <i>{r.reviewer}</i></cite>
          </>
        ))}
        <h2>Houzz Reviews</h2>
        {angiReviews.map((r) => (
          <>
            <blockquote>"{r.review}"</blockquote>
            <cite>- <i>{r.reviewer}</i></cite>
          </>
        ))}
      </div>
    </div>
    </>
  )
}

export default App


    {/* Left over from when creatin the header */}
    {/* <div className="container">
      <div className="header">
        <div className="leftSide">
          <div className="blackBox"></div>
          <h1>ACR</h1>
          <h5>Since 1985</h5>
          <div className="border">&nbsp;</div>
        </div>
        <div className="rightSide">
          <div className="locationInfo">Burlington, MA - 781-221-0334</div>
          <div className="companyName">Atlantic Cabinet Refacing</div>
          <div className="numberRefaced">Over 1500 Kitches Refaced</div>
        </div>
      </div>
    </div> */}



          //Messing with opacity when scrolling into screen
  // const imageElements = document.querySelectorAll('.gallery img');

  // function checkScroll() {
  //   const windowHeight = window.innerHeight;
  //   const scrollTop = window.scrollY;
    
  //   imageElements.forEach((img) => {
  //     const imgTop = img.offsetTop+ 50;
  //     const imgHeight = img.offsetHeight;
      
  //     if (imgTop < scrollTop + windowHeight - imgHeight * 0.2) {
  //       // set opacity to a value between 0.2 and 1 based on how far the element is scrolled into view
  //       img.style.opacity = (scrollTop + windowHeight - imgTop) / (imgHeight * 0.8);
  //     }
  //   });
  // }
  
  // window.addEventListener('scroll', checkScroll);