import React from "react";
import TopBar from "../components/TopBar";
// import Liststation from "../components/ListStation";
import CardMonitoring from "../components/CardMonitoring";

export default function Monitoring() {
  return (
    <div className="flex flex-col">
      <div className="">
        <TopBar />
      </div>
      <div className="">
        <CardMonitoring />
      </div>
    </div>
  );
}
