import styled from "styled-components";
import { albumInformation } from "../../assets/albumTracks";
import { MainArea } from "../../components/MainArea";
import { MusicInfo } from "../../components/MusicItem/MusicInfo";
import { MusicList } from "../../components/MusicItem/MusicList";

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
  return (
    <MainArea
      style={{ gridRow: "2 / 3", gridColumn: "2 / 4", padding: "3rem 0" }}
    >
      <AlbumContainer>
        <MusicInfo musicItem={albumInformation} />
        <MusicList />
      </AlbumContainer>
    </MainArea>
  );
}
