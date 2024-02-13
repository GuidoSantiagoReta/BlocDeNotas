import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row } from 'react-bootstrap';
import './CreatePosts.css';

const URI = 'http://localhost:3001/posts/';

const Posts = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    navigate('/');
  };

  return (
    <>
      <div className="mt-5 pt-5">
        <h3 className="text-success">Crear Nota</h3>

        <Form onSubmit={create}>
          <Form.Group  className="mb-3 ">
          <Row className="d-flex justify-content-center align-items-center mt-5"> 
            <Form.Label >Titulo</Form.Label>
            <Form.Control
             className="custom-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
             
            />
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contenido</Form.Label>
            <Form.Control
              className="custom-input-area"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              as="textarea"
             
            />
          </Form.Group>
          <Button variant="success" type="submit">Crear</Button>
        </Form>
      </div>
    </>
  );
};

export default Posts;