import React, { useState, useEffect } from 'react';

const ApiRetryComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(3); // Set the number of retries

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your API call here
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        
        // Assuming the API response has a "success" field
        if (result.success) {
          setData(result.data);
        } else {
          throw new Error('API request failed');
        }
      } catch (err) {
        // Retry logic
        if (retryCount <= 0) {
          setRetryCount(retryCount - 1);
          fetchData(); // Retry the API call
        } else {
          setError('Failed to fetch data from the API');
        }
      }
    };

    fetchData(); // Initial API call
  }, [retryCount]); // Re-run the effect when retryCount changes

  return (
    <div>
      {data && <p>Data: {data}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ApiRetryComponent;