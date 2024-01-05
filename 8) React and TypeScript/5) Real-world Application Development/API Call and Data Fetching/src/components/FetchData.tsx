import axios from "axios";
import React, { useEffect, useState } from "react";

interface Note {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const FetchData: React.FC = () => {
  const [data, setData] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const listData = async () => {
    try {
      const response = await axios.get<Note[]>("https://jsonplaceholder.typicode.com/todos");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listData();
  }, []);

  return (
    <div>
      <h3>List Of To-Do Datas</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
          <tr>
            <th>No.</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border w-80">
                <td className="w-28">{item.id}</td>
                <td className="w-28">{item.userId}</td>
                <td className="w-40">{item.title}</td>
                <td className="w-96">{item.completed.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchData;
