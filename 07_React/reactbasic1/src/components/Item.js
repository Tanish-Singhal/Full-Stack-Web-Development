import './Item.css';

function Item(props) {

    // suppose this data will also came from a API.
    // const ItemName = "Tanish Singhal Ji";

    // return (<p className="stylingJi">{ItemName}</p>);

    const ItemName = props.name;
    return (<p className="stylingJi">{ItemName}</p>);
}

export default Item;