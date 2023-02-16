import React from 'react';

import Playlists from '../../components/Playlists';

export class PlaylistsContainer extends React.Component {

    render() {
        return (
            <Playlists
                {...this.props}
            />
        )
    }
}


export default PlaylistsContainer;