import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const URI = 'http://localhost:3001/posts/';

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get(URI);
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`${URI}${id}`);
    getPosts();
  };

  return (
    <Container className='mt-5 h-100 d-flex flex-column justify-content-center align-items-center'>
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Col>
          <Link to="/create" className='btn btn-success my-3'>
            Crear<FaPlus className='ms-2' />
          </Link>
          <Row className="d-flex justify-content-center align-items-center mt-5"/> 
          <Table striped bordered hover responsive className='mb-4'>
            <thead className='table-success'>
              <tr>
                <th>Titulo</th>
                <th>Contenido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/edit/${post.id}`} className='btn btn-primary me-2' >
                        <FaEdit />
                      </Link>
                      <Button onClick={() => deletePost(post.id)} variant='danger'>
                        <MdDeleteForever />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowPosts;