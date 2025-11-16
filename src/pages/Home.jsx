import React from "react";
import ListProduk from "../components/ListProduk";


function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-5 px-10 py-25">
        <h2 className="text-xl font-semibold tracking-wide">
          WE ARE A CHEMICALS DISTRIBUTOR
        </h2>
        <h1 className="font-bold text-5xl text-wrap w-150 leading-20">Easy to Get Chemicals With Us</h1>
        <ListProduk />
      </div>
    </>
  );
}

export default Home;
