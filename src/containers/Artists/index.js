import React from 'react';


import Artists from '../../components/Artists';



export class ArtistContainer extends React.Component {



    render() {
        return (
            <Artists            
                {...this.props}
            />
        )
    }
}



export default ArtistContainer;