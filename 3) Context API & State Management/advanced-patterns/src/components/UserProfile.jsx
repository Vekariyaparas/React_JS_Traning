import React, { useEffect, useState } from "react";

export const withUser = (WrappedComponent) => {
  return function WithUser(props) {
    const [userData, setUserData] = useState("");
    const fetchUserData = () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUserData(data));
    };
    useEffect(() => {
      fetchUserData();
    }, []);
    return <WrappedComponent {...props} usersData={userData} />;
  };
};
