import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="w-1/3 mx-auto mt-3">
        {hits.map((curPost) => {
          const { title, author, url, num_comments } = curPost;
          return (
            <>
              <div
                className="border bg-white mt-5 p-5 rounded-lg shadow-lg"
                key={title}
              >
                <h2 className="font-bold">{title}</h2>
                <p className="mt-2">
                  By <span className="font-semibold">{author}</span> |{" "}
                  <span className="font-semibold">{num_comments}</span> Comments
                </p>
                <div className="mt-2">
                  <a href={url} target="_blank" className="text-blue-400">
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
