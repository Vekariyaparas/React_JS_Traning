import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Note {
  id: number;
  title: string;
  desc: string;
}

const ListTask: React.FC = () => {
  // Get data from API
  const [data, setData] = useState<Note[]>([]);

  const listData = () => {
    axios.get<Note[]>("http://localhost:4000/note").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    listData();
  }, []);

  // Delete note
  const deleteNote = (id: number) => {
    axios.delete(`http://localhost:4000/note/${id}`).then((res) => {
      console.warn(res);
      listData();
    });
  };

  return (
    <>
      <div className="text-center mt-5">
        <h3 className="text-3xl font-semibold">Lists of Notes</h3>
        <h3 className="text-1xl font-semibold text-right mx-5">
          Number of Notes:-
          <button className="bg-slate-400 px-1 rounded-full">{data.length}</button>
        </h3>
        <table className="mx-auto border">
          <thead>
            <tr className="border">
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} className="border w-80">
                  <td className="w-28">{item.id}</td>
                  <td className="w-40">{item.title}</td>
                  <td className="w-96">{item.desc}</td>
                  <td className="w-28">
                    <button
                      className="mx-2"
                      onClick={() => deleteNote(item.id)}
                    >
                      &#128465;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTask;
