import axios from 'axios'
import React ,{useEffect,useState} from 'react'


import MainScreen from '../../components/MainScreen'
import {Link, useHistory} from "react-router-dom"
import {Button, Card,Badge, Accordion} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"
import { deleteUserAction} from "../../actions/userActions";
import Loading from  "../../components/Loading"
import ErrorMessage from "../../components/ErrorMessage"

const User= () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state)=> state.userLogin)
    const {userInfo} = userLogin
  // const userDelete = useSelector((state) => state.userDelete);
  // const {success:successDelete } = userDelete;

  const deleteHandler=(id)=>{
      if(window.confirm("Are you sure ?")){
        dispatch(deleteUserAction(id))
      }
  }





const[users,setUsers] = useState([])

   const fetchUsers = async()=> {
      const {data }= await axios.get("/api/useress")
       setUsers(data)
     }

  // const[notes,setNotes] = useState([{
  //   title:'',content:''
  // }])

  useEffect(()=>{
// fetch('/notess').then(res =>{
//   if (res.ok){
//     return res.json()
//   }
// }).then(jsonRes =>setNotes(jsonRes))

fetchUsers()
 },[])
  return (<MainScreen title={`welcome back... `}>
  {/* <Link to='createnote'>
       <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
           Create New Note
       </Button>
       </Link> */}
       {/* {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
       {loading &&<Loading/>} */}
     
   {/* {notes?.reverse().filter((filteredNote) =>
     filteredNote.title.tolowerCase().includes(search.tolowerCase())
   ).map((note)=>( */}
    {users 
// notes
//  .filter((filteredNote) =>
//    filteredNote.title.toLowerCase().includes(search.toLowerCase())
//  )
//  .reverse()
 .map((user) => (
    // 
    <Accordion key={user._id}>
              <Card style={{ margin: 10 }} key={user._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {user.name}
                      
                    </Accordion.Toggle>
                  </span>

                  <div>
                    {/* <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                
                    >
                      Delete
                    </Button> */}


<Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(user._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {user.email}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      {/* <p>{note.content}</p>
                      <p>Phone:{ note.phone}</p>
                      <img src={note.pic}  /> */}
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {/* {note.createdAt.substring(0,10)} */}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>


            ))}
                
                


         
           
           
           </MainScreen> 
    
    )
}




export default User
