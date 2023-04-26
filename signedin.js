import React from "react";

const signedin = () => {
  let data = fetch("/signedin")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  return (
    <div>
      <h1>data.email</h1>
      <h1>data.name</h1>
    </div>
  );
};

export default signedin;
