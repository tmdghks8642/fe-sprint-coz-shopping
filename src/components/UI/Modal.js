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
width: 50rem;
height: 30rem;
border-radius: 30px;
background-image: url(${props => props.itemimage});
background-size: 100%;
background-repeat: no-repeat;
background-position: center;
z-index: 2;
`

const IconDiv = styled.div`
position: absolute;
width: 40px;
height: 30px;
left: 730px;
top: 20px;
font-weight: 700;
color: white;
cursor: pointer;
`

const ItemTitle = styled.div`
position: absolute;
top: 400px;
right: 100px;
width: 40rem;
color: white;
font-size: 40px;
font-weight: 700;
`


function Modal({openModal,keys,item}){

let itemObj = (item.filter(el=> el.id === keys)[0]) 


return(
    <>
        <BackgroundDiv onClick={()=>{openModal(false)}}/>
            <ModalDiv itemimage={
                itemObj.image_url !== null ? itemObj.image_url : itemObj.brand_image_url
            }>
        <IconDiv>
            <XMarkIcon onClick={()=>{openModal(false)}}/>
        </IconDiv>
            <ItemTitle>
                {
                itemObj.title !== null ? itemObj.title : itemObj.brand_name
                }
            </ItemTitle>
        </ModalDiv>
    </>
)
}

export default Modal