import React from "react";

function App(props) {
  const { name } = props;
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
}

export default App;
