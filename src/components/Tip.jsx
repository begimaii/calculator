import styled from 'styled-components'
import {MyContainer} from './styledComponents/Styled'

function Tip(props){

const MainTitle = styled.h3`
color:red;
background-color:${()=>{
    if(props.tipAmount > 25){ 
        return"green"
    }else if(props.tipAmount >1){
         return"yellow"
    }
    else{
        return "red"
    }
}};
`
const ResultsTip = styled.h2`
color:darkgreen;
`
    return(
        <MyContainer>
            <MainTitle>this is the tip </MainTitle>
            <ResultsTip tipAmount={props.tipAmount}>
                the amount is and here is the ${props.tipAmount}
            </ResultsTip>
            <ResultsTip>snother if</ResultsTip>
        </MyContainer>
    )
}
export default Tip