import './Style.css'

function Card(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.imageUrl} alt={props.imageAlt} />
            <h3>{props.proffesion}</h3>
            <p>{props.description}</p>
            <hr />
        </div>
    );
}
export default Card;