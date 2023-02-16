import React from 'react';

import Upgrade from '../../components/Upgrade';

export class UpgradeContainer extends React.Component {

    render() {
        return (
            <Upgrade
                {...this.props}
            />
        )
    }
}


export default Upgrade