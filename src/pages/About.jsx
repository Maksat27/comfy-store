import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        mollitia illum inventore. Velit ducimus ut praesentium aut perspiciatis,
        nulla omnis? Beatae aliquid sint tenetur ullam quae in temporibus ipsum,
        ea, voluptatum odio neque animi possimus! Laborum, recusandae nulla
        tempore quo aperiam veniam iure porro! Quas at adipisci doloremque ut
        aut!
      </p>
    </>
  );
};

export default About;
