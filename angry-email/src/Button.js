export default function Button(props) {
    return (
        <span>
                <button onClick={props.clickFunction}>{props.message}</button>
              </span>
    )
}