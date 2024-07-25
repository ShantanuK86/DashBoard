// GoogleSlide.js
import { useState } from "react";
import './GoogleSlide.css'; // Import the adapted CSS file

const GoogleSlide = () => {
  return (
    <div className="slide-container"> {/* Container for the slide */}
      <iframe 
        src="https://docs.google.com/presentation/d/1Sm1EnwbUc9yPwa96ZQPzowBMoq3d8UMFbEVRhOiAvIw/edit?usp=sharing" 
        className="slide"
        title="Google Slide Presentation"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleSlide;
