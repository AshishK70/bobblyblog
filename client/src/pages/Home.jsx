import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id:1,
      description: "Moon in the Space",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi reiciendis consectetur, voluptatibus a provident ab quidem quod assumenda eveniet maiores veniam. Tempore in ea est eaque dolorum repellat tempora, optio qui magni laborum, perferendis omnis reiciendis suscipit nemo odio eius, deleniti vel ab enim! Doloribus provident vel ullam recusandae.",
      image:
        "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fHww",
    },
    {
      id:2,
      description: "Moon in the Space",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi reiciendis consectetur, voluptatibus a provident ab quidem quod assumenda eveniet maiores veniam. Tempore in ea est eaque dolorum repellat tempora, optio qui magni laborum, perferendis omnis reiciendis suscipit nemo odio eius, deleniti vel ab enim! Doloribus provident vel ullam recusandae.",
      image:
        "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fHww",
    },
    {
      id:3,
      description: "Moon in the Space",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi reiciendis consectetur, voluptatibus a provident ab quidem quod assumenda eveniet maiores veniam. Tempore in ea est eaque dolorum repellat tempora, optio qui magni laborum, perferendis omnis reiciendis suscipit nemo odio eius, deleniti vel ab enim! Doloribus provident vel ullam recusandae.",
      image:
        "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fHww",
    },
    {
      id:4,
      description: "Space with frackles",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi reiciendis consectetur, voluptatibus a provident ab quidem quod assumenda eveniet maiores veniam. Tempore in ea est eaque dolorum repellat tempora, optio qui magni laborum, perferendis omnis reiciendis suscipit nemo odio eius, deleniti vel ab enim! Doloribus provident vel ullam recusandae.",
      image:
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwYWNlfGVufDB8fDB8fHww",
    },
    {
      id:5,
      description: "Space Galaxy",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi reiciendis consectetur, voluptatibus a provident ab quidem quod assumenda eveniet maiores veniam. Tempore in ea est eaque dolorum repellat tempora, optio qui magni laborum, perferendis omnis reiciendis suscipit nemo odio eius, deleniti vel ab enim! Doloribus provident vel ullam recusandae.",
      image:
        "https://plus.unsplash.com/premium_photo-1677916317230-d9b78d675264?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id:6,
      description: "Shooting Star",
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi reiciendis consectetur, voluptatibus a provident ab quidem quod assumenda eveniet maiores veniam. Tempore in ea est eaque dolorum repellat tempora, optio qui magni laborum, perferendis omnis reiciendis suscipit nemo odio eius, deleniti vel ab enim! Doloribus provident vel ullam recusandae.",
      image:
        "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return <div className="home">
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="img">
            <img src={post.image} alt="" />
          </div>
          <div className="content">
            <Link className="link" to={`post/${post.id}`}>
            <h2>{post.description}</h2>
            </Link>
            <span>{post.info}</span>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
};

export default Home;
