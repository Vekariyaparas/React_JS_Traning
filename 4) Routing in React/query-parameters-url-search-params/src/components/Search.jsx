import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="w-1/4 mx-auto text-center mt-4">
          <div>
            <input
              type="text"
              placeholder="Search here"
              className="outline-none bg-teal-100 border px-1"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
