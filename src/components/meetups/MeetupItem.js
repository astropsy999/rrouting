import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../store/favorite-context';

function MeetupItem (props) {
    const favoriteCtx = useContext(FavoritesContext)

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

    const toggleFavoriteStatushandler = () => {
        if(itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            })
        }
    }

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatushandler}>{itemIsFavorite ? 'Видалити з обраного': 'В обране'}</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;