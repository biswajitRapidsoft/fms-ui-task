import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VehicleList from "../components/VehicleList";
import Dashboard from "../components/Dashboard";
import TableData from '../components/TableData'
import UserManagement from "../components/UserManagement";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/vehiclelist" />} /> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/vehiclelist" element={<VehicleList />} />
      <Route path="/sitedata" element={<TableData/>}/>
      <Route path="/usertable" element={<UserManagement/>}/>
      </Routes>
    </>
  );
};

export default Routing;
