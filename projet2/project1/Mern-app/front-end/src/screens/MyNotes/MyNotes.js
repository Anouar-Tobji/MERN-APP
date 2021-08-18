import React from 'react'
import{useEffect ,useState} from 'react'
import MainScreen from '../../components/MainScreen'
import {Link, useHistory} from "react-router-dom"
import {Button, Card,Badge, Accordion} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux"
import {deleteNoteAction, listNotes } from "../../actions/notesAction";
import Loading from  "../../components/Loading"
import ErrorMessage from "../../components/ErrorMessage"
// import axios from 'axios'
const MyNotes = ({search}) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;
    // const[notes,setNotes] = useState([])
    const [name, setName] = useState("");
    const [picMessage, setPicMessage] = useState();
    const [pic, setPic] = useState();
    const userLogin = useSelector((state)=> state.userLogin)
    const {userInfo} = userLogin
    const noteCreate = useSelector((state)=> state.noteCreate)
    const {success:successCreate} = noteCreate
    const noteUpdate = useSelector((state) => state.noteUpdate);
    const {success:successUpdate } = noteUpdate;
    const noteDelete = useSelector((state) => state.noteDelete);
    const {loading:loadingDelete,error:errorDelete,success:successDelete } = noteDelete;

    const deleteHandler=(id)=>{
        if(window.confirm("Are you sure ?")){
          dispatch(deleteNoteAction(id))
        }
    }
    const postDetails = (pics) => {
      setPicMessage(null);
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "notezipper");
        data.append("cloud_name", "de8bvooz7");
        fetch("https://api.cloudinary.com/v1_1/de8bvooz7/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPic(data.url.toString());
            console.log(pic);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return setPicMessage("Please Select an Image");
      }
    };
    // const fetchNotes = async()=> {
    //     const {data }= await axios.get("/api/notes")
    //     setNotes(data)
    // }
    // console.log(notes)
const history = useHistory()

    useEffect(()=>{
        // fetchNotes()
        dispatch(listNotes());
        if(!userInfo){
          history.push("/")
        }
    },[dispatch,successCreate,history,userInfo,successUpdate,successDelete])


    return (
      
           <MainScreen title={`welcome back... ${userInfo.name}`}>
           <Link to='createnote'>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Announcement
                </Button>
                </Link>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading &&<Loading/>}
              
            {/* {notes?.reverse().filter((filteredNote) =>
              filteredNote.title.tolowerCase().includes(search.tolowerCase())
            ).map((note)=>( */}
             {notes &&
        notes
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((note) => (
//                 <Accordion>
// <Card style={{margin:10}}>
//         <Card.Header style={{display:"flex"}}>
//         <span
//                     // onClick={() => ModelShow(note)}
//                     style={{
//                       color: "black",
//                       textDecoration: "none",
//                       flex: 1,
//                       cursor: "pointer",
//                       alignSelf: "center",
//                       fontSize: 18,
//                     }}
//                   >

// <Accordion.Toggle
//                       as={Card.Text}
//                       variant="link"
//                       eventKey="0"
//                     >
//                       {note.title}
//                     </Accordion.Toggle>

//                       {/* <Accordion.Toggle as={Card.Text} variant="link" eventkey='0'>{note.title}</Accordion.Toggle> */}
//       </span>
        
//         <div>
//             <Button  href={`/note/${note._id}`}>Edit</Button>
//             <Button variant='danger' classeName='mx-2 ' onClick={()=>deleteHandler(note._id)}>Delete</Button>
//         </div>
// </Card.Header>

// <Accordion.Collapse eventkey='0'>
// <Card.Body>
// <h4>
//     <Badge variant="success">
//         Category = {note.category}
//     </Badge>


// </h4>

    
// <blockquote className="blockquote mb-0">
//       <p>
       
//      {note.content}
//       </p>
//       <footer className="blockquote-footer">
//         Created On {""}
//       </footer>
//     </blockquote>
// </Card.Body>
// </Accordion.Collapse>



//                 </Card>
//                 </Accordion>
<Accordion key={note._id}  onChange={(e) => postDetails(e.target.files[0])}    id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture" custom>
              <Card style={{ margin: 10 }} key={note._id}>
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
                      {note.title}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button href={`/notes/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                    {/* <Button  onChange={(e) => postDetails(e.target.files[0])}    id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom></Button> */}
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <p>Phone :{note.phone}</p>
                      <img src={note.pic} alt={name} />
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {note.createdAt.substring(0,10)}
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

export default MyNotes
