import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddPhotoButton from "../photos/AddPhotoButton";

interface Album {
  id: number;
  title: string;
}

interface User {
  username: string;
  email: string;
}

const UserAlbums: React.FC = () => {
  const { userId } = useParams<{ userId: string | undefined }>();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data));

    axios
      .get<Album[]>(
        `https://jsonplaceholder.typicode.com/users/${userId}/albums`
      )
      .then((response) => setAlbums(response.data));
  }, [userId]);

  const deleteAlbum = (albumId: number) => {
    if (window.confirm("Are you sure you want to delete this album?")) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(() => {
          setAlbums((prevAlbums) =>
            prevAlbums.filter((album) => album.id !== albumId)
          );
          alert(`Album deleted successfully`);
        })
        .catch((error) => {
          alert(`Error deleting album: ${error}`);
        });
    }
  };

  return (
    <>
      <main>
        <header>
          <h1 className="text-3xl font-semibold text-center mb-6">
            My User Albums
          </h1>
          {user && (
            <section
              aria-labelledby="user-info"
              className="mb-4 p-4 bg-white border rounded shadow-sm"
            >
              <h2
                id="user-info"
                className="text-2xl font-semibold text-gray-800"
              >
                {user.username}
              </h2>
              <p className="text-gray-600">Email: {user.email}</p>
            </section>
          )}
        </header>

        <section aria-labelledby="albums-list">
          <h2 id="albums-list" className="sr-only">
            Albums List
          </h2>
          <ul role="list">
            {albums.map((album) => (
              <li
                key={album.id}
                role="listitem"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <a
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  aria-label={`View photos of the album: ${album.title}`}
                  onClick={() => navigate(`/albums/${album.id}/photos`)}
                >
                  {album.title}
                </a>
                <button
                  style={{
                    background: "#e61919",
                    color: "white",
                    padding: "6px 12px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  onClick={() => deleteAlbum(album.id)}
                  aria-label={`Delete album: ${album.title}`}
                >
                  Delete Album
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <AddPhotoButton userId={userId} />
    </>
  );
};

export default UserAlbums;
