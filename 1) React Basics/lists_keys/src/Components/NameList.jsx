import React from "react";

const NameList = (props) => {

  const allData = props.data;
  const listitems = allData.map((person) => (
    <li key={person.name}>{person.name}</li>
  ));
  
  return (
    <>
      <ul>{listitems}</ul>
    </>
  );
};

export default NameList;
