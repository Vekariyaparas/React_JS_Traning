import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTerm, setResults } from '../Redux/Slice/FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filter.term);
  const searchResults = useSelector((state) => state.filter.results);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?q=${searchTerm}`);
        const json = await response.json();
        dispatch(setResults(json));
        console.log('Performing API call with debounced search term:', searchTerm);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchResults();
  }, [dispatch, searchTerm]);

  const handleChangeInput = (e) => {
    dispatch(setTerm(e.target.value));
  };

  return (
    <div className='mt-5 p-5'>
      <h1 className='text-3xl text-center font-semibold'>Search and Filter Data</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChangeInput}
        className='my-5 p-2 border-2 border-gray-300 rounded-md w-full outline-none focus:border-blue-500'
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
