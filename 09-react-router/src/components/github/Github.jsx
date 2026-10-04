import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const randomNumber = Math.round(Math.random() * 30);
  return (
    <div className="m-4 bg-gray-600 text-white p-4 text-xl">
      <h1 className="text-2xl">User Information</h1>
      First name: {data.users?.[randomNumber]?.firstName} <br />
      Last name: {data.users?.[randomNumber]?.lastName} <br />
      Email: {data.users?.[randomNumber]?.email} <br />
      Phone: {data.users?.[randomNumber]?.phone}
    </div>
  );
}

export default Github;

export const userInfoLoader = async () => {
  const response = await fetch("https://dummyjson.com/users");
  return response.json();
};
