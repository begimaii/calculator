function Tip(props){
    console.log(props);
    return(
        <>
            <h3>this is the tip </h3>
            <h4>the amount is and here is the ${props.tipAmount}</h4>
        </>
    )
}
export default Tip