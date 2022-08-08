import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { RiPlayListAddLine } from 'react-icons/ri';
import { TbPlayerPlay } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variables } from '../../../styles/variables';
import { ISongItem } from '../../../types';

const { colors, fontSizes, fontWeight } = variables;

const SongItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2rem 1fr 4rem 5rem;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

const SongItemTrack = styled.p`
  justify-self: center;
  color: ${colors.secondaryColorLight};
  cursor: pointer;
`;

const SongItemTitle = styled.h2`
  font-size: ${fontSizes.md};
  font-weight: ${fontWeight.lg};
`;

const SongItemArtists = styled.div`
  & span {
    font-size: ${fontSizes.md};
    font-weight: ${fontWeight.xs};
  }
`;

const SongItemButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & svg {
    font-size: ${fontSizes.lg};
    cursor: pointer;
  }
`;

const SongItemLength = styled.p`
  justify-self: center;
`;

export function SongItem(props: { song: ISongItem }) {
  const [play, setPlay] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <SongItemContainer>
      {play ? (
        <TbPlayerPlay
          onClick={() => {
            setPlay(!play);
          }}
        />
      ) : (
        <SongItemTrack>{props.song.track}</SongItemTrack>
      )}
      <div>
        <SongItemTitle>{props.song.title}</SongItemTitle>
        <SongItemArtists>
          {props.song.artists.map((artist: string) => {
            return (
              <span>
                <Link to="#">{artist}</Link>
              </span>
            );
          })}
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
      <SongItemLength>
        {convertTimeMilliseconds(props.song.length)}
      </SongItemLength>
    </SongItemContainer>
  );
}
