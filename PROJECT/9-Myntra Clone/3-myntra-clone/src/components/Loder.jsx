// import React, { useEffect, useState } from 'react';

// React component for the loader
const Loader = () => {
  // const [isVisible, setIsVisible] = useState(true);

  // // Hide the spinner after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000); // Adjust the time as needed

  //   // Cleanup the timer on component unmount
  //   return () => clearTimeout(timer);
  // }, []);

  // Only render the spinner if it's visible
  return (
    <div className="loding">
      <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
  );
};

export default Loader;
