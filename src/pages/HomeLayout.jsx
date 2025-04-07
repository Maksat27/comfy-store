import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet /> {/* This is where the child routes will be rendered */}
      </section>
    </>
  );
};

export default HomeLayout;
