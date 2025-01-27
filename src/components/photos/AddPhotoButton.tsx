import React, { useState } from "react";
import AddPhoto from "./AddPhoto";

const AddPhotoButton: React.FC<{ userId: string | undefined }> = ({
  userId,
}) => {
  const [showAddPhoto, setShowAddPhoto] = useState(false);

  const handleClick = () => {
    setShowAddPhoto(true);
  };

  return (
    <section className="p-4">
      {!showAddPhoto ? (
        <button
          onClick={handleClick}
          className="py-2 px-4 bg-[#d6d6d6] text-black rounded-md hover:bg-[#c4c4c4] focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Add a new photo"
        >
          Add Photo
        </button>
      ) : (
        <AddPhoto userId={userId} />
      )}
    </section>
  );
};

export default AddPhotoButton;
