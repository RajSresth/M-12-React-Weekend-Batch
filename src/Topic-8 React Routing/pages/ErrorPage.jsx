import React from "react";
import { useRouteError, useNavigate, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const isHttpError = isRouteErrorResponse(error);
  const status = isHttpError ? error.status : "Oops";
  const message = isHttpError
    ? (error.data?.message ?? error.statusText)
    : error?.message ?? "Something went wrong.";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-gray-300">{status}</h1>
      <p className="text-lg font-medium text-gray-800 mt-4">{message}</p>
      <p className="text-sm text-gray-400 mt-1">
        The page you're looking for isn't available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-8 px-6 py-2.5 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
      >
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;