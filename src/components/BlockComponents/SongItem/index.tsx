import { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { SongContext } from "../../../contexts/song";
import { IArtist, ITrack } from "../../../types";
import { convertTime } from "../../../utils/convertTime";
import {
  SongItemArtists,
  SongItemButtons,
  SongItemContainer,
  SongItemLength,
  SongItemTitle,
  SongItemTrack,
} from "./styles";

export function SongItem(props: { song: ITrack; index: number }) {
  const [liked, setLiked] = useState<boolean>(false);
  const { setSongPlaying } = useContext(SongContext);

  return (
    <SongItemContainer>
      <SongItemTrack>{props.index + 1}</SongItemTrack>
      <div>
        <SongItemTitle
          onClick={() => {
            setSongPlaying(props.song);
          }}
        >
          {props.song.title}
        </SongItemTitle>
        <SongItemArtists>
          {props.song.artists!.map((artist: IArtist, i: number) => [
            i > 0 && ", ",
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              {artist.name}
            </Link>,
          ])}
        </SongItemArtists>
      </div>
      <SongItemButtons>
        {liked ? (
          <AiFillHeart
            onClick={() => {
              setLiked(!liked);
            }}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => {
              setLiked(!liked);
            }}
          />
        )}
        <RiPlayListAddLine onClick={() => {}} />
      </SongItemButtons>
      <SongItemLength>{convertTime(props.song.length)}</SongItemLength>
    </SongItemContainer>
  );
}
