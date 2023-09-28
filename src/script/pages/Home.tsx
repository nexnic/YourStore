import React, { useState, useEffect } from 'react';




export default function HomePage() {
  document.title = `yourPAge | Home`
  
  const { data, isLoading, isError } = RequestAPI(
    'https://jsonplaceholder.typicode.com/todos',
  );


    if(isLoading) return <div>loading..</div>
    if(isError) return <div>error</div>
    return (
      <main>
        {data}
      </main>
    )
  
}

function RequestAPI(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

    useEffect(()=> {
      async function fetchAPI() {
        try {
          setIsLoading(true);
          setIsError(false);
          const fetchedData = await fetch(url);
          const json = await fetchedData.json();
          setData(json);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
        setIsLoading(false);
      }
      fetchAPI()
    }, [url])
    return { data, isLoading, isError };
}