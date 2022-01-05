import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/getHello`)).json();
      setData(text);
    })();
  });

  return <div>Data here: {data}</div>;
}

export default App;