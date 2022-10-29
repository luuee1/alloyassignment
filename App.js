import React, { useEffect, useState } from "react";
import Form from "./Form.jsx";

function App() {

  const [backendData, setBackendData] = useState({});

  useEffect{(res,req) => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
        }
    );
  }
};

  return (
    <Form />
  );
}

export default App;
