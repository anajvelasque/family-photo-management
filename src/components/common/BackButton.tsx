import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="py-2 px-4 bg-[#d6d6d6] text-black rounded-md hover:bg-[#c4c4c4] focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Go back to the previous page"
      >
        Back
      </button>
    </section>
  );
};

export default BackButton;
