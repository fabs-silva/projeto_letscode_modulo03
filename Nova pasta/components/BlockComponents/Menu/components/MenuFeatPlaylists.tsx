import React from 'react';
import { Link } from 'react-router-dom';
import { playlistsMenu } from '../../../../assets/mocks/playlistsMenu';
import { MenuGroup, MenuGroupTitle, MenuItem } from '../styles';

export function MenuFeatPlaylists() {
  return (
    <MenuGroup>
      <MenuGroupTitle>Featured Playlists</MenuGroupTitle>
      {playlistsMenu.map((playlist) => {
        return (
          <MenuItem key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>
              <>
                {React.createElement(playlist.icon)}
                {playlist.title}
              </>
            </Link>
          </MenuItem>
        );
      })}
    </MenuGroup>
  );
}
