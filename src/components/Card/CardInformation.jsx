import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CardInformation = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Ocurrio un error");
        }
        return res.json();
      })
      .then(data => setPosts(data));
  });

  return (
    <>
      <Link to="/info" className="text-decoration-none">
        <div className="continer m-4">
          {posts.map(post => (
            <Card className="img text-white card-size d-inline-flex justify-content-between" key={post.id}>
              <Card.Body>
                <Card.Title className="fs-2">{post.title}</Card.Title>
                <div className="d-flex">
                  <p className="fst-italic">Comments</p>
                  <i className="fa-solid fa-comments m-1"></i>
                </div>
                <Card.Text>{post.body}</Card.Text>
                <p className="fw-semibold">CATEGORIA</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Link>
    </>
  );
}

export default CardInformation
