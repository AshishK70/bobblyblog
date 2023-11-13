import React from "react";
import { Link } from "react-router-dom";
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="singlePage">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fHww"
          alt="post"
        />
        <div className="userInfo">
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1507499739999-097706ad8914?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwYWNlfGVufDB8fDB8fHww"
              alt="user"
            />
          </div>
          <div className="info">
            <span>Ashish</span>
            <p>posted 2 days agao</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}><button>edit</button></Link>
          </div>
          <div className="deletd">
            <button>delete</button>
          </div>
        </div>
        <h1>This is a title of the post.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis soluta voluptatibus dignissimos vero quisquam vel, ducimus a numquam rem dolore et aspernatur debitis nisi magni excepturi accusantium ipsum veritatis culpa quam vitae quas, cum provident molestiae. 
          <br></br>
          <br></br>
          Temporibus ea labore consequuntur libero minus necessitatibus numquam autem, doloremque obcaecati error voluptatibus quidem tenetur voluptates ab laboriosam repudiandae perferendis! Impedit pariatur nostrum voluptas a quis laudantium fugit excepturi reprehenderit possimus eligendi fugiat fuga quaerat ipsam laborum explicabo veniam, molestiae distinctio aliquam enim deserunt blanditiis debitis est illum qui! Optio reprehenderit eligendi odio! 
          
          <br></br>
          <br></br>Aspernatur, adipisci minus! Laboriosam quae temporibus voluptates beatae tempore animi delectus voluptatum, quo sunt! Fuga ducimus fugit, pariatur animi eligendi ad. Ducimus nesciunt, eius omnis earum esse atque cum molestias harum, quibusdam reiciendis quia iure ad quasi adipisci quod, quam est at quas. Fugiat, totam suscipit vitae modi ut reiciendis minima odit itaque, fuga facilis in harum facere amet assumenda? Quas, culpa quidem. 
          
          <br></br>
          <br></br>Soluta eius adipisci officia consequuntur placeat dolores consectetur. Voluptates odit reiciendis, harum dolores numquam voluptatem in beatae sed debitis nam quidem et consectetur molestias minus aperiam soluta. Placeat cumque quia illo ullam, deleniti earum cupiditate iste blanditiis praesentium consequuntur quo architecto ex, temporibus ad aut tempora dolor?</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
