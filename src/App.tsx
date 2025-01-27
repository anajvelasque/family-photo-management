import React from "react";
import { Routes, Route } from "react-router-dom";
import AlbumPhotos from "./components/albums/AlbumPhotos";
import UserAlbums from "./components/albums/UserAlbums";
import BackButton from "./components/common/BackButton";
import UserList from "./components/users/UserList";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <UserList />
          </div>
        }
      />
      <Route
        path="/users/:userId/albums"
        element={
          <div>
            <UserAlbums />
            <BackButton />
          </div>
        }
      />
      <Route
        path="/albums/:albumId/photos"
        element={
          <div>
            <AlbumPhotos />
            <BackButton />
          </div>
        }
      />
    </Routes>
  );
};

export default App;
