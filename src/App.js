import React, { useRef, useEffect } from "react";
import ImgBeauty1 from "./img/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  //
  // tl stands for TimelineLite
  //   You need to declare this to make the animations
  let tl = new TimelineLite();
  //
  //
  useEffect(() => {
    //   the container div is represented here, 1 represents the DURATION, in other words it takes 1sec to load/reveal
    // You can change the duration from 1 to 0 , so that you dont have to wait a second to see the animation
    tl.to(container, 1, {
      // the css represents what you want to animate
      css: { visibility: "visible" },
      //   imageReveal will reveal the sudo class element :after on line 9
    })
      .to(
        imageReveal,
        1.4,
        { width: "0%", ease: Power2.easeInOut }
        // duration : imageReveal, 1.4,
        // what happens in img reveal is that you are changing the width: to a 0% , if you notice it correspond to the reveal curtain arriving to the end
      )
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.5 });
    //   the last line starting from the "FROM", will be to set up the zoom out while the reveal is happening, this zoom out is more a scaling effect
    // .from(image, 1.4, { scale: 1.6,  means that it starts FROM a zoomed/scaled 1,6 and it will end up zooming out to its original size

    // the delay here:  delay: -1.5 }); will be to set up the moment from when the scaling animation will start
    // So if we set up the scaling in -1.5 you will notice it s from a second before the reveal start. I tried to add a delay of 2 or 1 only and it start from where the reveal is nearly done, so its to slow
  });

  //
  //

  return (
    <section className="main">
      {/* the ref makes alussion to the line 7 , by adding this ref here, you will have a connection to this div  */}
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={ImgBeauty1} alt="image" />
          </div>
        </>
      </div>
    </section>
  );
};

export default App;
