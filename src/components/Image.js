const Image = (props) => {

    return (
        <div className={"container"}>
            <img src={props.source} alt={""} width={"400"}/>
        </div>
    )
}
export default Image;