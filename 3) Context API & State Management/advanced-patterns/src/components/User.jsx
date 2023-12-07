import React from "react";
import { withUser } from "./UserProfile";

const UserProfile = ({ usersData }) => {
  if (!usersData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <table>
        <tr>
          <th>Profile Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Website</th>
          <th>Company name</th>
        </tr>
        {usersData.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export const UserProfileWithUser = withUser(UserProfile);
