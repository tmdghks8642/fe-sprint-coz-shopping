import { styled } from "styled-components"
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid"

const BackgroundDiv = styled.div`
position:fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.4);
z-index: 10;
`

const ModalDiv = styled.div`
position: fixed;
top: 50%;
left: 50%;
right: 0;
bottom: 0;
transform: translate(-50%,-50%);
width: 50rem;
height: 30rem;
border-radius: 30px;
background-image: url(${props => props.itemimage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
z-index: 10;


 div {
     .staricon{
        position: absolute;
        top: 395px;
        left: 4px;
        width: 50px;
        color: ${props => props.ischangecolor ? '#FFD361' : '#DFDFDFCF' };
        cursor: pointer;
    }

 }
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


function Modal({openModal,item,isChangeColor,setIsChangeColor,saveitems,setIsToast}){


return(
    <>
        <BackgroundDiv onClick={()=>{openModal(false)}}/>
            <ModalDiv ischangecolor={isChangeColor} itemimage={
                    item.image_url !== null ? item.image_url : item.brand_image_url
                     }>
                <IconDiv>
                    <XMarkIcon onClick={()=>{openModal(false)}}/>
                </IconDiv>
                <div>
                    <StarIcon className="staricon"  onClick={()=>{
                        setIsChangeColor(!isChangeColor)
                        saveitems(item)
                        setIsToast(true)
                        setTimeout(()=>{setIsToast(false)},2000)                           
                    }}/>
                </div>
                <ItemTitle>
                    {
                    item.title !== null ? item.title : item.brand_name
                    }
                </ItemTitle>
            </ModalDiv>
    </>
)
}

export default Modal