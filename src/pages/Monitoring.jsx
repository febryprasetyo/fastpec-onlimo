import React from "react";
import TopBar from "../components/TopBar";
// import Liststation from "../components/ListStation";
import CardMonitoring from "../components/CardMonitoring";

export default function Monitoring() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <TopBar />
      </div>
      <div className="md:container md:mx-auto ">
        <CardMonitoring />
      </div>
    </div>
  );
}
