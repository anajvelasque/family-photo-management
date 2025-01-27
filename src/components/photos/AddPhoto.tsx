import axios from "axios";
import React, { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
  userId: number;
}

const AddPhoto: React.FC<{ userId: string | undefined }> = ({ userId }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    url: "",
    albumId: "",
  });
  const [newAlbum, setNewAlbum] = useState("");
  const [isCreatingAlbum, setIsCreatingAlbum] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setAlbums(response.data));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewPhoto({ ...newPhoto, [name]: value });
  };

  const handleNewAlbumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAlbum(e.target.value);
  };

  const checkboxCreateAlbum = () => {
    setIsCreatingAlbum(!isCreatingAlbum);
    if (!isCreatingAlbum) {
      setNewPhoto({ ...newPhoto, albumId: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title || !newPhoto.url || (!newPhoto.albumId && !newAlbum)) {
      alert("Please fill all fields");
      return;
    }

    let albumId = newPhoto.albumId;

    if (isCreatingAlbum && newAlbum) {
      try {
        const albumResponse = await axios.post(
          "https://jsonplaceholder.typicode.com/albums",
          {
            title: newAlbum,
            userId,
          }
        );
        albumId = albumResponse.data.id;
        setAlbums([...albums, albumResponse.data]);
      } catch (error) {
        alert(`Error creating new album: ${error}`);
        return;
      }
    }

    try {
      await axios.post("https://jsonplaceholder.typicode.com/photos", {
        title: newPhoto.title,
        url: newPhoto.url,
        albumId: Number(albumId),
      });

      alert("Photo added successfully!");
      setNewPhoto({ title: "", url: "", albumId: "" });
      setNewAlbum("");
      setIsCreatingAlbum(false);
    } catch (error) {
      alert(`Error adding new photo: ${error}`);
      return;
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Photo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Photo Title/Description:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPhoto.title}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Photo Title/Description"
          />
        </div>

        <div>
          <label
            htmlFor="url"
            className="block text-lg font-medium text-gray-700"
          >
            Photo URL:
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={newPhoto.url}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Photo URL"
          />
        </div>

        <div>
          <label
            htmlFor="albumId"
            className="block text-lg font-medium text-gray-700"
          >
            Select Album:
          </label>
          <select
            id="albumId"
            name="albumId"
            value={newPhoto.albumId}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isCreatingAlbum}
            required={!isCreatingAlbum}
            aria-label="Select Album"
          >
            <option value="">Choose an album</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isCreatingAlbum}
            onChange={checkboxCreateAlbum}
            className="mr-2"
            aria-label="Create a new album"
          />
          <label>Create a new album</label>
        </div>

        {isCreatingAlbum && (
          <div>
            <label
              htmlFor="newAlbum"
              className="block text-lg font-medium text-gray-700"
            >
              New Album Title:
            </label>
            <input
              type="text"
              id="newAlbum"
              value={newAlbum}
              onChange={handleNewAlbumChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="New Album Title"
            />
          </div>
        )}

        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Photo
        </button>
      </form>
    </section>
  );
};

export default AddPhoto;
