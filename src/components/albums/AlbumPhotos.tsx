import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Album {
  title: string;
  userId: number;
}

interface User {
  username: string;
  email: string;
}

const AlbumPhotos: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [, setAlbum] = useState<Album | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get<Album>(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((response) => {
        setAlbum(response.data);
        return axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
        );
      })
      .then((response) => setUser(response.data))
      .catch((error) =>
        console.error("Error fetching album or user details", error)
      );

    axios
      .get<Photo[]>(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
      )
      .then((response) => setPhotos(response.data));
  }, [albumId]);

  const deletePhoto = (photoId: number) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then(() => {
          setPhotos((prevPhotos) =>
            prevPhotos.filter((photo) => photo.id !== photoId)
          );
          alert(`Photo deleted successfully`);
        })
        .catch((error) => {
          alert(`Error deleting photo: ${error}`);
        });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-6">
        My Album Photos
      </h1>
      {user && (
        <section
          aria-labelledby="user-info"
          className="mb-4 p-4 bg-white border rounded shadow-sm"
        >
          <h2 id="user-info" className="text-2xl font-semibold text-gray-800">
            {user.username}
          </h2>
        </section>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "16px",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #ccc",
              padding: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: "100%", height: "auto" }}
            />
            <p>{photo.title}</p>
            <button
              onClick={() => deletePhoto(photo.id)}
              style={{
                background: "#e61919",
                color: "white",
                padding: "8px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Delete Photo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;
