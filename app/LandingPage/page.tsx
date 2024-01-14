// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className="bg-gradient-to-b from-green-300 to-green-300 h-screen flex flex-col justify-center items-center">
//       <h1 className="text-yellow-500 text-6xl mb-8">EQUIP FARM</h1>
//       <h3 className="text-white text-4xl text-center">
//         Welcome To Equip Farm For
//         <br />
//         Your Top Agricultural Tools
//       </h3>
//       <a href="/shop">
//         <button className="bg-yellow-500 text-black text-xl font-bold px-8 py-4 mt-8 rounded-full transition-colors duration-300 hover:bg-green-500">
//           Shop
//         </button>
//       </a>
//     </div>
//   );
// };

// export default LandingPage;


// import React from "react";

// const LandingPage = () => {
//   return (
//     <div
//       className="bg-gradient-to-b from-green-300 to-green-300 h-screen flex flex-col justify-center items-center"
//       style={{
//         backgroundImage: "url('/image(1).jpg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <h1 className="text-yellow-500 text-6xl mb-8">EQUIP FARM</h1>
//       <h3 className="text-white text-4xl text-center">
//         Welcome To Equip Farm For
//         <br />
//         Your Top Agricultural Tools
//       </h3>
//       <a href="/shop">
//         <button className="bg-yellow-500 text-black text-xl font-bold px-8 py-4 mt-8 rounded-full transition-colors duration-300 hover:bg-green-500">
//           Shop
//         </button>
//       </a>
//     </div>
//   );
// };

// export default LandingPage;


// import React from "react";

// const LandingPage = () => {
//   return (
//     <div
//       className="bg-gradient-to-b from-green-300 to-green-300 h-screen flex flex-col justify-center items-center"
//       style={{
//         backgroundImage: "url('/images/img1.jpeg')",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* <h1 className="text-yellow-500 text-6xl mb-8">EQUIP FARM</h1> */}
//       <h3 className="text-black text-4xl text-center mr-80">
//         Welcome To Adratah Music Studio
//         <br />
//         Your Top Musical Studio
//       </h3>
//       <a href="/shop">
//         <button className="bg-yellow-500 text-black text-xl font-bold px-8 py-4 mt-8 rounded-full transition-colors duration-300 hover:bg-green-500">
//           Shop
//         </button>
//       </a>
//     </div>
//   );
// };

// export default LandingPage;
"use client"
import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState("img1.jpeg");

  const images = ["aa.jpg", "bb.jpg", "jj.jpg", ]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextImageIndex = (images.indexOf(currentImage) + 1) % images.length;
      setCurrentImage(images[nextImageIndex]);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  return (
    <div
      className="bg-gradient-to-b from-green-300 to-green-300 h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('/images/${currentImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh", 

      }}
    >
        {/* <h1 className="text-yellow-500 text-6xl mb-8">EQUIP FARM</h1> */}
     <h3 className="text-black text-4xl text-center mr-80 font-extrabold">
       Welcome To Adratah Music Studio
       <br />
       Your Top Musical Studio Shop
     </h3>
     {/* <a href="/shop">
       <button className="bg-yellow-500 text-black text-xl font-bold px-8 py-4 mt-8 rounded-full transition-colors duration-300 hover:bg-green-500">
         Shop
       </button>
     </a> */}
      {/* ... rest of your JSX ... */}
    </div>
  );
};

export default LandingPage;
