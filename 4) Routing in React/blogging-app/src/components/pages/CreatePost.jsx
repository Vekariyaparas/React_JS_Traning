import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPosts = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
};

useEffect(() => {
    if (!isAuth) {
        navigate("/login");
        
    }
  }, [])

  return (
    <div>
      <div>
        <h3>Create A Post</h3>
        <form>
          <br />
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            rows="4"
            placeholder="Post..."
            onChange={(e) => setPostText(e.target.value)}
          />
          <br />
          <button onClick={createPosts}>Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
