import React, { useState } from "react";

export function hideshowclick() {
  document.getElementById("show").style = "display:block;";
}

export function showhideclick() {
  document.getElementById("show").style = "display:none;";
}

const SettingsForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  const handleSubmit = (e) => {
    e.preventDefault();
    const settings = { username, profilePicture, theme, language };
    onSubmit(settings);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Your Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body w-100">
              <form
                onSubmit={handleSubmit}
                id="show"
                style={{ display: "none" }}
                className="form-control text-center"
              >
                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control w-100"
                  />
                </label>
                <br />
                <label className="mt-3">
                  Profile Picture URL:
                  <input
                    type="text"
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                    className="form-control w-100"
                  />
                </label>
                <br />
                <button
                  type="submit"
                  onClick={showhideclick}
                  data-bs-dismiss="modal"
                  className="btn btn-primary mt-3"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsForm;
