import { styled } from "styled-components"

const FooterDiv = styled.footer`
text-align: center;
height: 7vh;
width: 100vw;
border-top: 1px solid gray;
padding: 10px 0 10px 0;
`
const Footertitle = styled.p`
margin: 10px;
color: gray;
`

function Footer (){
return(
    <>
        <FooterDiv>
            <Footertitle>개인정보 처리방침 | 이용 약관</Footertitle>
            <Footertitle>All rights reserved @ Codestates</Footertitle>
        </FooterDiv>
    </>
)}
 
export default Footer