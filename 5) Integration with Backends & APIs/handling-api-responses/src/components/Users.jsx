import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (response.status < 200 || response.status >= 300) {
          throw new Error("Failed to fetch data");
        }

        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {loading && <h1 className="text-4xl text-center">Loading...</h1>}
        {error && <p>{error}</p>}
        <table>
          <thead>
            <tr className="border">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border text-center">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
