import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/Users/user.type";
import { getUserPost } from "./features/Album/post.type";
import "./App.css";
import { getPostComments } from "./features/Comments/comments.type";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.users);
  const post = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);


  //   VERY IMPORTANT   Down here
  const show = () => {
    if (data.length == 0) {
      dispatch(getUsers());
    }
  };
  useEffect(() => {
    show();
  }, []);

  // const handelClickGetUsers = () => {
  //   dispatch(getUsers());
  // };
  const handelClickViewPost = (id) => {
    dispatch(getUserPost(id));
  };

  const handelClickViewPostComments = (id) => {
    dispatch(getPostComments(id));
  };
  return (
    <div className="App">
      <div>
        <h1>Users</h1>
        {
          <button
            style={{ marginBottom: "2rem" }}
            // onClick={handelClickGetUsers}
          >
            Get Users
          </button>
        }
        {data?.map((item, i) => {
          return (
            <div key={item.id}>
              {" "}
              <h4>{item.name}</h4>
              <span>
                <button onClick={() => handelClickViewPost(item.id)}>
                  Click to see Posts
                </button>
              </span>
            </div>
          );
        })}
      </div>
      <div className="postandComments">
        <div>
          <h1>Albums</h1>
          <h4>{post?.title}</h4>
          <p>{post?.body}</p>
          <button onClick={() => handelClickViewPostComments(post.id)}>
            Click to view Comments
          </button>
        </div>
        <div>
          <h1>Comments📩</h1>
          {comments?.map((item) => {
            return (
              <div key={item.id}>
                <h4>{item.email}</h4>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
