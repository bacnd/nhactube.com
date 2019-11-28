import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

import SongBar from '../../containers/SongBar';
import { useNewSongsPlaylist } from './hooks';
import { _chunk } from '../../utils';

const Wrapper = styled.div`
  display: flex;
`;
const PlaylistWrapper = styled.ul`
`;

const NewSongs = ({ className }) => {
  const { playlist, actions } = useNewSongsPlaylist();
  useEffect(() => {
    actions.fetchNewSongs();
  }, []);

  const [first, second, third] = useMemo(() => _chunk(playlist.songs, 5), [playlist.songs]);

  return (
    <Wrapper className={className}>
      <PlaylistWrapper className="w-1/3">
        {first && first.map(song => (
          <li key={song.id}>
            <SongBar hiddenDuration {...song} hiddenActions />
          </li>
        ))}
      </PlaylistWrapper>
      <PlaylistWrapper className="w-1/3">
        {second && second.map(song => (
          <li key={song.id}>
            <SongBar hiddenDuration {...song} hiddenActions />
          </li>
        ))}
      </PlaylistWrapper>
      <PlaylistWrapper className="w-1/3">
        {third && third.map(song => (
          <li key={song.id}>
            <SongBar hiddenDuration {...song} hiddenActions />
          </li>
        ))}
      </PlaylistWrapper>
    </Wrapper>
  );
};

export default NewSongs;
