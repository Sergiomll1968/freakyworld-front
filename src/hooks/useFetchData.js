import { useState } from 'react';

export function useFetchData (defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchData (
    {
      route,
      mode = 'cors',
      method = 'GET',
      body,
      headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
      }
    }) {
    setLoading(true);
    try {
      const response = await fetch(`${route}`, {
        mode,
        method,
        headers,
        body,
      });

      if (response.ok) {
        const responseAsJson = await response.json();

        setData(responseAsJson);
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  return { fetchData, data, error, loading };
}
