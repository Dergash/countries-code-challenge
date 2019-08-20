import React, {FunctionComponent} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

interface AppBarProps {

}

export const AppBar: FunctionComponent<AppBarProps> = (props) => {
    return <nav>
        <ul>
            <li>
                <Link to={`/`}>
                    Index
                </Link>
            </li>
            <li>
                <Link to={`/countries`}>
                    Countries List
                </Link>
            </li>
        </ul>
    </nav>
}

export default React.memo(withRouter(AppBar));
