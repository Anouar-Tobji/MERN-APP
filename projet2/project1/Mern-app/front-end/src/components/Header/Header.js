import React from 'react'
import { Link, useHistory } from "react-router-dom";
import {Navbar,NavDropdown,Nav,Container,FormControl,Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../actions/userActions"
const Header = ({setSearch}) => {
  const history =useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const{userInfo } = userLogin
  const logoutHandler = ()=>{
    dispatch(logout())
    history.push('/')
  }
    return (
//         <Navbar bg="primary" expand="lg" variant="dark">
//             <Container>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="mr-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
// <Nav className="m-auto">
// <Form inline>
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="mr-2"
//               aria-label="Search"
//             />
           
//           </Form>

// </Nav>


//             <Nav.Link href="#action1">Home</Nav.Link>
        
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
//             </NavDropdown>
           
//           </Nav>
       
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
            <Link to ='/Annonces'>  Announcement </Link>
          

        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e)=>setSearch(e.target.value)}
                />
              </Form>
  
          </Nav>
          <Nav>
         
              {userInfo ? <>
                <Nav.Link >
                <Link to="/mynotes">My announcement</Link>
                
                </Nav.Link>
                
                
                  
                  <Navbar.Brand >
{           
userInfo.role==="admin"?
            <Link to ='/User'>  |User| </Link>:null
            
          
              }
              {           
userInfo.role==="admin"?
            <Link to ='/NotesAdmin'> Annancement admin|</Link>:null
            
          
              }
        </Navbar.Brand>

                <NavDropdown title={userInfo?.name} id="basic-nav-dropdown"
                
                >
                  <NavDropdown.Item href="/profile">
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler
                }>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>:<Nav> <Nav.Link >
                <Link to="/login">Login</Link>
                <Link to="/register"><span style={{padding:'20px'}}>Signup</span></Link>
                
                </Nav.Link></Nav>}
{/*       
              <Nav.Link >Login</Nav.Link> */}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    )
}

export default Header
