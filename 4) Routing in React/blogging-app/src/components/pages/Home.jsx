import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase-config";

const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }
  return (
    <>
      {postLists.map((post) => {
        return (
          <>
            <div>
              <h1>{post.title}</h1> 
              <div>{isAuth && post.author.id === isAuth.currentUser.uid && (<button onClick={() => {deletePost(post.id)}}>&#128465;</button>)}</div>
              <p>{post.postText}</p>
              <p>@{post.author.name}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
