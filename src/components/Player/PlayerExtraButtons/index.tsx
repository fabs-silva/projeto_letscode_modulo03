import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { RiPlayList2Fill, RiPlayListAddLine } from "react-icons/ri";
import {
  TbArrowsRight,
  TbArrowsShuffle,
  TbRepeat,
  TbRepeatOff,
} from "react-icons/tb";
import styled from "styled-components";
import { variables } from "../../../styles/variables";

const { fontSizes } = variables;

const PlayerExtraButtonsContainer = styled.section`
  display: flex;
  gap: 1.25rem;
  width: 20%;
  align-items: center;
  justify-content: center;
  font-size: ${fontSizes.lg};

  & svg {
    cursor: pointer;
  }
`;

export function PlayerExtraButtons() {
  const [liked, setLiked] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  return (
    <PlayerExtraButtonsContainer>
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
      <AiOutlineShareAlt onClick={() => {}} />
      {shuffle ? (
        <TbArrowsShuffle
          onClick={() => {
            setShuffle(!shuffle);
          }}
        />
      ) : (
        <TbArrowsRight
          onClick={() => {
            setShuffle(!shuffle);
          }}
        />
      )}
      {repeat ? (
        <TbRepeat
          onClick={() => {
            setRepeat(!repeat);
          }}
        />
      ) : (
        <TbRepeatOff
          onClick={() => {
            setRepeat(!repeat);
          }}
        />
      )}
      <RiPlayList2Fill onClick={() => {}} />
    </PlayerExtraButtonsContainer>
  );
}
