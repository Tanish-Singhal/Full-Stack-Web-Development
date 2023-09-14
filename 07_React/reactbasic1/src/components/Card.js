import './Card.css'

function Card(props) {
    return <div className='carding'>
        {props.children};
    </div>;
}

export default Card;