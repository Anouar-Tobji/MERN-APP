// import React from 'react'
// import {Container,Row, Button} from 'react-bootstrap'
// import './LandingPage.css'
// import { Link } from "react-router-dom";
// const LandingPage = () => {
//     return (
//         <div className='main'>
//             <Container>
//                <Row>
//                   <div className="intro-text">
//                     <div>
//                         <h1 className='title'>Welcome to Note Zipper</h1>
//                         <p className="subtitle">One Safe place for all your notes .</p>
//                     </div>
//                     <div className="buttonContainer">
//               <Link to="/login">
//                 <Button size="lg" className="landingbutton">
//                   Login
//                 </Button>
//               </Link>
//               <Link to="/register">
//                 <Button
//                   variant="outline-primary"
//                   size="lg"
//                   className="landingbutton"
//                 >
//                   Signup
//                 </Button>
//               </Link>
//             </div>


//                   </div>
                   
                   
//                    </Row> 
//             </Container>
         
//         </div>
//     )
// }

// export default LandingPage
import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./LandingStyles.css";

const LandingPage = ({history}) => {
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    
    
      if (userInfo) {
        history.push("/mynotes");
      }
    }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            {/* <div>
              <h1 className="title">Welcome to announcement </h1>
              <p className="subtitle">One Safe place for all your announcement.</p>
            </div> */}
            <div className="buttonContainer">
            <a href='/Login'>
                {/* <Button size="lg" className="landingbutton">
                  Login
                </Button>
                </a>
                  <a href='/register'>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button> */}
                </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;