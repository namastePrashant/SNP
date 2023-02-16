import React from 'react';

import Albums from '../../components/Albums';

export class AlbumsContainer extends React.Component {

    render() {
        return (
            <Albums
                {...this.props}
            />
        )
    }
}


export default AlbumsContainer