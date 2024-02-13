import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row  } from 'react-bootstrap';

import './EditPosts.css';

const URI = 'http://localhost:3001/posts/';

const EditPosts = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      content: content
    });
    navigate('/');
  };

  useEffect(() => {
    getPostById();
  }, []);

  const getPostById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title || '');
    setContent(res.data.content || '');
  };

  return (
    <>
      <div className="mt-5 pt-5">
        <h3 className='text-success'>Editar articulo</h3>

        <Form onSubmit={update}>
          <Form.Group className="mb-3">
          <Row className="d-flex justify-content-center align-items-center mt-5"> 
            <Form.Label>Titulo</Form.Label>
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
          <Button variant="success" type="submit">Actualizar</Button>
        </Form>
      </div>
    </>
  );
};

export default EditPosts;