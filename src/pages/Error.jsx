import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            The page you are looking for does not exist.
          </h1>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Go to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid place-items-center min-h-[100vh] px-8">
      <h1 className="text-6xl text-center font-bold ">Something went wrong!</h1>
      <p className="text-red-500">
        {error.statusText || error.message || "An unexpected error occurred."}
      </p>
      <div className="mt-10">
        <Link to="/" className="btn btn-secondary ">
          Go to Home
        </Link>
      </div>
    </main>
  );
};

export default Error;
