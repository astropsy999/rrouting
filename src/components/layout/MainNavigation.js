import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation () {
    return <header className={classes.header}>
        <div className={classes.logo}>Зустрічі</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Усі зустрічі</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Додати зустріч</Link>
                </li>
                <li>
                    <Link to='/favorites'>Обрані</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;