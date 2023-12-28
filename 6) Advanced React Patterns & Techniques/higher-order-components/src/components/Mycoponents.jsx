import React from "react";
import { withLoading } from "./WithLoading";

const MyComponent = ({ data }) => {
  return <div>{data && data.someProperty}</div>;
};

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { someProperty: "Data loaded successfully!" };
};

export const MyComponentWithLoading = withLoading(MyComponent, fetchData);
