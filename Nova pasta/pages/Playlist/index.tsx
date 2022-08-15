import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MainArea } from '../../components/BlockComponents/MainArea';
import { getPlaylist } from '../../services/api-services/apiPlaylists';
import { IPlaylist } from '../../types';
import { PlaylistItem } from './components/PlaylistContent';

const PlaylistContainer = styled.div`
  display: grid;
  grid-template-columns: 350px minmax(auto, 700px);
  grid-template-rows: 1fr auto;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3rem;
  gap: 3rem;
`;

export function Playlist() {
  let { playlistId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<IPlaylist>({} as IPlaylist);

  async function getSinglePlaylist() {
    const playlistResponse = await getPlaylist(playlistId!);

    setPlaylist(playlistResponse);
  }

  useEffect(() => {
    getSinglePlaylist();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading, playlist]);

  return (
    <MainArea style={{ padding: '3rem 0' }}>
      <PlaylistContainer>
        {!isLoading && <PlaylistItem playlist={playlist} />}
      </PlaylistContainer>
    </MainArea>
  );
}

/*  useEffect(() => {
    async function getPlaylistResponse() {
      const playlistResponse = await getPlaylist(playlistId!);
      const tracks = filterTracksList(playlistResponse.tracks.items);
      setPlaylist({
        id: playlistResponse.id,
        image: playlistResponse.images[0].url,
        title: playlistResponse.name,
        owner: playlistResponse.owner.display_name,
        tracks: tracks,
        totalTracks: playlistResponse.tracks.total,
      });
    }
    getPlaylistResponse();
    setIsLoading(false);
  }, [playlist]); */
