import { styled } from "styled-components"
import { XMarkIcon } from "@heroicons/react/24/solid"

const BackgroundDiv = styled.div`
position:fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.4);
z-index: 1;
`

const ModalDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-20%);
width: 70rem;
height: 35rem;
border-radius: 30px;
background-color: white;
background-image: url(${props => props.isUrl});
background-size: 100%;
background-repeat: no-repeat;
z-index: 2;
`

const IconDiv = styled.div`
position: absolute;
width: 40px;
height: 30px;
left: 1050px;
top: 10px;
font-weight: 700;
color: white;
cursor: pointer;
`

function Modal({openModal,isUrl}){

return(
    <>
        <BackgroundDiv onClick={()=>{openModal(false)}}/>
        <ModalDiv isUrl={isUrl}>
        <IconDiv>
            <XMarkIcon onClick={()=>{openModal(false)}}/>
        </IconDiv>
        </ModalDiv>
    </>
)
}

export default Modal