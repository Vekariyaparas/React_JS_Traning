import React, { useState, useEffect } from "react";

// Higher Order Component
export const withLoading = (WrappedComponent, fetchData) => {
  return function WithLoading(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const result = await fetchData();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchDataAsync();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};
