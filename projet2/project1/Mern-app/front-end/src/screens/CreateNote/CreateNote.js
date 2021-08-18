import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form ,Col, Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";


function CreateNote({ history }) {
  const [name, setName] = useState("");
  const [pic, setPic] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const[phone,setPhone]=useState("")
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setPhone("")
    setContent("");
    setPic("")
    
  };



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
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content,phone,category,pic));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create announcement">
      <Row>
      <Col md={6}>
      <Card>
        
        <Card.Header>Create a new announcement</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="content"
                value={phone}
                placeholder="Enter the Phone"
                onChange={(e) => setPhone(e.target.value)}
              /></Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Announcement Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
             
              {/* //pic  */}
              <Form.Group controlId="pic">
                <Form.Label> Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>













            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Announcement
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
       
      </Card> </Col> <Col
               style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",


               }}
               
               >
                   
                   
                   <img src={pic} alt={name} className="profilePic" />
        </Col>          
      </Row>
    </MainScreen>
  );
}

export default CreateNote;