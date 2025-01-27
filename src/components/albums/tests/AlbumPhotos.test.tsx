/* eslint-disable react/react-in-jsx-scope */
import { render, screen, waitFor } from '@testing-library/react';
import AlbumPhotos from '../AlbumPhotos';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const photosResponse = {
  data: [
    {
      albumId: 1,
      id: 1,
      title: 'Photo 1',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'Photo 2',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
  ],
};

beforeEach(() => {
  mockedAxios.get.mockResolvedValueOnce(photosResponse);
});

test('deve renderizar as fotos corretamente', async () => {
  render(
    <MemoryRouter initialEntries={['/albums/1/photos']}>
      <AlbumPhotos />
    </MemoryRouter>
  );

  // Verifica se a primeira foto foi renderizada
  await waitFor(() => screen.getByText('Photo 1'));
  expect(screen.getByText('Photo 1')).toBeInTheDocument();

  // Verifica se a segunda foto foi renderizada
  await waitFor(() => screen.getByText('Photo 2'));
  expect(screen.getByText('Photo 2')).toBeInTheDocument();
});
