import React from "react";
import { Navbar } from "../components";

const index = ({ data }) => {
  const apiData = data;
  console.log(apiData);
  return (
    <>
      <Navbar />
      {apiData.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <br />
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://gorest.co.in/public/v2/users`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default index;
