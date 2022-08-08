import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MainArea } from '../../components/BlockComponents/MainArea';
import { getAlbum } from '../../services/apiAlbums';
import { IAlbum } from '../../types';
import { AlbumItem } from './components/AlbumContent';

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: 350px minmax(auto, 700px);
  grid-template-rows: 1fr auto;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3rem;
  gap: 3rem;
`;

export function Album() {
  let { albumId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [album, setAlbum] = useState<IAlbum>({} as IAlbum);

  async function getSingleAlbum() {
    const albumResponse = await getAlbum(albumId!);

    setAlbum(albumResponse);
  }

  useEffect(() => {
    getSingleAlbum();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [album.id]);

  return (
    <MainArea style={{ padding: '3rem 0' }}>
      <AlbumContainer>
        {!isLoading && <AlbumItem album={album} />}
      </AlbumContainer>
    </MainArea>
  );
}
