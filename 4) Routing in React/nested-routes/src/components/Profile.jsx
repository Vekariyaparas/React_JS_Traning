import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const handleTabChange = (tab) => {
    return setActiveTab(tab);
  };
  return (
    <>
      <div className="p-2">
        <div className="tab-buttons">
          <buttons
            onClick={() => handleTabChange("posts")}
            className={activeTab === "posts" ? "active" : ""}
          >
            <button className="p-1 px-2 bg-slate-600 text-white rounded-lg">
              Posts
            </button>
          </buttons>
          <buttons
            onClick={() => handleTabChange("Friends")}
            className={activeTab === "Friends" ? "active" : ""}
          >
            <button className="p-1 px-2 bg-slate-600 text-white rounded-lg ms-3">
              Friends
            </button>
          </buttons>
        </div>
        <div className="tab-content mt-2">
          {activeTab === "posts" && (
            <div>
              <p>Post contain goes here</p>
            </div>
          )}
          {activeTab === "Friends" && (
            <div>
              <p>Friends contain goes here</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
