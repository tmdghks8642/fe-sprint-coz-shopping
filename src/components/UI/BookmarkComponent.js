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

     

function BookmarkComponent ({item,SetIsbookmark,SetBookmarkitems,SetIsToast}) {
 const [isOpen, SetIsOpen] = useState(false)
 // true & false
 const [ischangebookcolor,Setischangebookcolor] = useState(true)

useEffect(()=>{
    SetIsbookmark(ischangebookcolor)
},[ischangebookcolor])


 const openModal = (isopen)=>{
    SetIsOpen(isopen)
 }

 const saveitems = (props)=>{
    let data =  JSON.parse(localStorage.getItem('Items'))
    data.splice(data.findIndex(item=> item.id ===props.id),1)
    SetBookmarkitems(data)
    localStorage.setItem('Items',JSON.stringify(data))
 }

    return (
        <>  
            <List onClick={(e)=>{openModal(true)
            }}>
                <ListImgDiv  src={
                   item.image_url !== null ? item.image_url : 
                   item.brand_image_url
                }>
                      <div >
                         <StarIcon className="Staricon"  onClick={(e)=>{
                            e.stopPropagation()
                            Setischangebookcolor(!ischangebookcolor)
                            //Setchangebookcolor(!changebookcolor) 
                            saveitems(item)
                            SetIsToast(true)
                            setTimeout(()=>{SetIsToast(false)},3000)
                            }}/>
                      </div>
                </ListImgDiv>
                <ListTitle>{
                    item.title !== null ?item.title :
                    item.brand_name 
                }</ListTitle>
                {
                   item.follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                   item.discountPercentage !== null ? <PriceOrFallowers >{item.discountPercentage+`%`}</PriceOrFallowers> :
                    <PriceOrFallowers ><br></br></PriceOrFallowers>
                }
                {
                    item.sub_title !== null ?  <div>{item.sub_title}</div>: 
                    <div><br></br></div>
                }
                {
                    item.follower !== null ? <Pf>11{item.follower}</Pf>  : 
                    item.price !==null ? <Pf>{item.price+'원'}</Pf>:
                    <Pf><br></br></Pf>
                }
            </List>
                {
                    isOpen &&(<Modal item={item} saveitems={saveitems} openModal={openModal} ischangecolor={ischangebookcolor}
                        SetIschangeColor={Setischangebookcolor} SetIsToast={SetIsToast}
                          />)
                }
        </>
    )
}

export default BookmarkComponent