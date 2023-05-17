import { styled } from "styled-components"
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid"

const BackgroundDiv = styled.div`
position:fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.4);
z-index: 5;

`

const ModalDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: ${props => props.location ?'translate(-50%,-20%)' : 'translate(20%,-95%)'};
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
        color: ${props => props.changecolor ? '#FFD361' : '#DFDFDFCF' };
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


function Modal({openModal,keys,item,idx,location,changecolor,clickchange,saveitems,SetIsToast}){


let itemObj = (item.filter(el=> el.id === keys)[0]) 

console.log(changecolor)

return(
    <>
        <BackgroundDiv onClick={()=>{openModal(false)}}/>
            <ModalDiv location={location} changecolor={changecolor} itemimage={
                    itemObj.image_url !== null ? itemObj.image_url : itemObj.brand_image_url
                     }>
                <IconDiv>
                    <XMarkIcon onClick={()=>{openModal(false)}}/>
                </IconDiv>
                <div changecolor={changecolor} >
                    <StarIcon className="staricon"  changecolor={changecolor} onClick={()=>{
                        clickchange()
                        saveitems(item[idx])
                        SetIsToast(true)
                        setTimeout(()=>{SetIsToast(false)},2000)                           
                    }}/>
                </div>
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