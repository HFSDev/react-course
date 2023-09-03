import './SidewaysList.css';
import ListItem from './ListItem';

const SidewaysList = (props) => {

    return (
        <ul className='sideways-list'>
            <ListItem listItem={props.items[0]} />
            <ListItem listItem={props.items[1]} />
            <ListItem listItem={props.items[2]} />
        </ul>
    );
}

export default SidewaysList;