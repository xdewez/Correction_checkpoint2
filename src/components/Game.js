export default function Game(props) {
    return (
        <div>
            {props.name}<br />
            {props.rating}<br />
            <img src={props.img} alt={props.name} style={{ width: "300px" }} /><br />
        </div>

    )
}