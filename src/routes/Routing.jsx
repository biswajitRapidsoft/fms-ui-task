import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VehicleList from "../components/VehicleList";
import Dashboard from "../components/Dashboard";
import TableData from '../components/TableData'

const Routing = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/vehiclelist" />} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/vehiclelist" element={<VehicleList />} />
      <Route path="/tabledata" element={<TableData/>}/>
      </Routes>
    </>
  );
};

export default Routing;
