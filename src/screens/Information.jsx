import React from 'react'
import Card from 'react-bootstrap/Card';
import LogoAndTittle from '../components/LogoAndTittle/LogoAndTittle'
import ReturnArrow from '../components/ReturnArrow/ReturnArrow'
import { useEffect, useState } from 'react';

const Information = () => {

  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts?id=1';

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
      <LogoAndTittle/>
      <div>
        {posts.map(post => (
          <>
            <Card className="img text-white container" key={post.id}>
              <Card.Body>
                <ReturnArrow/>
                <Card.Title className='fs-1 fw-bolder text-center'>{post.title}</Card.Title>
              </Card.Body>
            </Card>
            <div className='container p-5 background-information'>
              {post.body}
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Information
