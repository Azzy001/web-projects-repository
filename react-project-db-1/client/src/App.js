import React, { useEffect, useState } from "react";

function App() {
  // state veriable containing backend data
  const [backendData, setBackendData] = useState([{}]);
  // send get request to api
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  });

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
