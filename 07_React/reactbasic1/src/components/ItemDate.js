import './ItemDate.css';

function ItemDate(props) {

    // suppose the below date came from an API source. (Technically it is also a hardcore data.)
    // const day = 2;
    // const month = "September";
    // const year = 2003;

    const date = props.date;
    const month = props.month;
    const year = props.year;
    

    return (<div className='fullDate'>

        {/* <span>02</span>
        <span> September</span>
        <span> 2003</span> */}
    {/* But the above method is not good. as you hardcore the data.
    In production the data will be came from a API */}

        <span>{date}</span>
        <span> {month}</span>
        <span> {year}</span>



    </div>);
}

export default ItemDate;