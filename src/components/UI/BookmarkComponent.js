import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";
import { StarIcon } from "@heroicons/react/24/solid";


const List = styled.li`
display: inline-block;
width: 16.7vw;
height: 25vh;
margin-right: 3rem;
cursor: pointer;
`
const ListImgDiv = styled.div`
width: 16.7vw;
height: 20vh;
border-radius: 20px;
background-image: url(${props => props.src});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: relative;
text-align: end;

div {
    position: absolute;
    bottom: 12px;
    right: 12px;
}

.Staricon {
    width: 40px;        
    color: #FFD361
}

`

const ListTitle =styled.div`
display:inline-block;
font-weight: 800;
margin-bottom: 0.5rem;
`

const PriceOrFallowers = styled.div`
float: right;
margin-bottom: 0.5rem;
`
const Pf = styled.div`
float:right;
position:relative;
bottom:20px;
`

     

function BookmarkComponent ({el,SetIsbookmark,SetBookmarkitems,SetIsToast}) {
 const [isOpen, SetIsOpen] = useState(false)
 const [changebookcolor,Setchangebookcolor] = useState(false)

useEffect(()=>{
    SetIsbookmark(changebookcolor)
    console.log('1',changebookcolor)
},[changebookcolor])

const cange = ()=>{
    Setchangebookcolor(!changebookcolor)
}

 const openModal = (isopen)=>{
    SetIsOpen(isopen)
 }

 const saveitems = (props)=>{
    let data =  JSON.parse(localStorage.getItem('Items'))
    data.splice(data.findIndex(el=> el.id ===props.id),1)
    SetBookmarkitems(data)
    localStorage.setItem('Items',JSON.stringify(data))
 }

    return (
        <>  
            <List onClick={(e)=>{openModal(true)
            }}>
                <ListImgDiv  src={
                   el.image_url !== null ? el.image_url : 
                   el.brand_image_url
                }>
                      <div >
                         <StarIcon className="Staricon"  onClick={(e)=>{
                            e.stopPropagation()
                            cange()
                            //Setchangebookcolor(!changebookcolor) 
                            saveitems(el)
                            SetIsToast(true)
                            setTimeout(()=>{SetIsToast(false)},3000)
                            }}/>
                      </div>
                </ListImgDiv>
                <ListTitle>{
                    el.title !== null ?el.title :
                    el.brand_name 
                }</ListTitle>
                {
                   el.follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                   el.discountPercentage !== null ? <PriceOrFallowers >{el.discountPercentage+`%`}</PriceOrFallowers> :
                    <PriceOrFallowers ><br></br></PriceOrFallowers>
                }
                {
                    el.sub_title !== null ?  <div>{el.sub_title}</div>: 
                    <div><br></br></div>
                }
                {
                    el.follower !== null ? <Pf>11{el.follower}</Pf>  : 
                    el.price !==null ? <Pf>{el.price+'원'}</Pf>:
                    <Pf><br></br></Pf>
                }
            </List>
                {
                    isOpen &&(<Modal el={el} saveitems={saveitems} openModal={openModal} changecolor={changebookcolor}
                          SetchangeColor={Setchangebookcolor} SetIsToast={SetIsToast}
                          />)
                }
        </>
    )
}

export default BookmarkComponent