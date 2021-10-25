import React from "react";
import logo from '../assets/Component-8.svg'
import icon1 from '../assets/Vector-(1).svg'
import icon2 from '../assets/Vector-(2).svg'
import icon3 from '../assets/Vector-(3).svg'
import icon4 from '../assets/Vector-(4).svg'
import icon5 from '../assets/person-circle.svg'
const Header = () => {
  return (
    <>
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light shadow ">
        
        <div className="me-5">
         <img src={logo} alt="" /> 
        </div>
          <form className="d-flex">
            <img src={icon1} className="me-4" alt="" />
            <img src={icon2} className="me-4" alt="" />
            <img src={icon3} className="me-4" alt="" />
            <img src={icon4} className="me-4" alt="" />
            <img src={icon5} className="me-4" alt="" />
          </form>
      </nav>
        </div>
    </>
  );
}
    // <div className="row bg-light d-flex align-items-center shadow ">
    //   <div className="col gx-10"> 
    //     <svg
    //           width="150"
    //           height="60"
    //           viewBox="0 0 531 125"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M189.5 8.61913H217.956L207.282 66.4345C205.98 73.5032 211.474 77.1887 216.186 77.6839C222.247 78.312 227.685 73.7424 229.176 66.1055L240.395 8.62245H268.579L257.36 69.7412C252.556 85.6764 241.428 91.9342 229.142 93.4961C221.524 94.4698 213.46 93.6457 206.188 92.2034L181.015 55.8631L189.5 8.61913V8.61913ZM439.059 8.61913H474.903L485.848 29.7619L503.633 8.61913H531L495.156 46.6111L518.686 90.2227H483.657L472.166 65.4409L452.467 90.2227H410.601L408.955 72.3799H379.953L369.826 90.2227H350.126L397.741 8.61913H431.948L438.513 74.6896L461.221 49.5854L439.059 8.61913ZM389.256 54.8695L404.578 27.1166L407.315 54.8695H389.256Z"
    //             fill="#9A2A42"
    //           />
    //           <path
    //             d="M150.003 55.6163H173.81C174.653 49.6476 176.218 40.7346 176.545 33.4831C176.924 24.9888 174.151 18.741 168.062 14.65C159.342 8.81432 146.493 9.12338 136.867 8.70464C123.669 8.12639 107.965 10.1802 99.6515 24.2311C95.3632 31.4792 92.9503 42.7086 92.0029 51.4887C90.8311 62.203 86.3516 80.1787 94.4545 88.9821C100.477 95.539 113.949 97.7191 121.783 97.5895C129.764 97.4532 137.509 96.8251 145.349 94.9342L165.871 125H197.887L150.003 55.6163ZM146.443 56.2776C143.826 70.5212 140.26 82.505 126.467 82.3788C112.619 82.2492 117.215 64.3798 118.533 53.9646C120.398 39.1693 125.135 23.6528 139.329 24.8924C153.699 26.1486 148.626 44.4367 146.443 56.2776ZM277.791 13.3307L270.403 53.9646L263.015 94.9342H290.927L305.975 13.3307H277.791ZM374.386 29.5184L377.672 13.3307H316.649L301.873 94.9342H330.057L336.351 59.9133H363.987L365.081 53.9646L366.724 44.7125H339.359L342.096 29.5184H374.386Z"
    //             fill="#9A2A42"
    //           />
    //           <path
    //             d="M86.5472 23.5008L89.8299 5H21.6934L12.6652 55.8763L5 96.8459H75.0535L78.6105 77.3548H39.7553L43.3122 57.528H76.1478L79.7047 39.0272H46.8692L49.6062 23.5008H86.5472V23.5008Z"
    //             fill="#9A2A42"
    //             stroke="#9A2A42"
    //           />
    //         </svg>
    //     </div>
    //     <div className="col gx-5">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-door-fill text-secondary" viewBox="0 0 16 16">
    //       <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
    //       </svg>
    //     </div>
    //     <div className="col g-0">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-flag-fill text-secondary" viewBox="0 0 16 16">
    //       <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
    //       </svg>
    //     </div>
    //     <div className="col g-0">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-headset text-secondary" viewBox="0 0 16 16">
    //       <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
    //       </svg>
    //     </div>
    //     <div className="col g-0">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bar-chart-fill text-secondary" viewBox="0 0 16 16">
    //       <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
    //       </svg>
    //     </div>
    //     <div className="col g-0">
    //       <img src="src\data\assets\avatar.svg" alt="avatar" width="50" height="50"/> 
    //     </div>
    //   </div>
//   )
// };

export default Header;
