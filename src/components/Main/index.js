import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);


    
  return <main id="main">{posts.map((object) => {
    return <Post key={object.postId}
      postId= {object.postId}
      title= {object.title}
      date= {object.date}
      author= {object.author}
      text= {object.text}
      highlights = {object.highlights}
      image= {object.image}
    />
  })}</main>
}

export default Main;
