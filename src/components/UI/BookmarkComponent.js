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



function BookmarkComponent ({Bookmarkitems,idx,keys,ismark,SetIsmark,SetBookmarkitems,SetIsToast}) {
 const [isOpen, SetIsOpen] = useState(false)
 const [changebookcolor,Setchangebookcolor] = useState(true)

useEffect(()=>{
    SetIsmark(changebookcolor)
},[changebookcolor])


 const clickchange = ()=>{
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
                    Bookmarkitems[idx].image_url !== null ? Bookmarkitems[idx].image_url : 
                    Bookmarkitems[idx].brand_image_url
                }>
                      <div >
                         <StarIcon className="Staricon"  onClick={(e)=>{
                            e.stopPropagation()
                            clickchange()
                            saveitems(Bookmarkitems[idx])
                            SetIsToast(true)
                            setTimeout(()=>{SetIsToast(false)},2000)
                            }}/>
                      </div>
                </ListImgDiv>
                <ListTitle>{
                    Bookmarkitems[idx].title !== null ? Bookmarkitems[idx].title :
                    Bookmarkitems[idx].brand_name 
                }</ListTitle>
                {
                    Bookmarkitems[idx].follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                    Bookmarkitems[idx].discountPercentage !== null ? <PriceOrFallowers >{Bookmarkitems[idx].discountPercentage+`%`}</PriceOrFallowers> :
                    <PriceOrFallowers ><br></br></PriceOrFallowers>
                }
                {
                    Bookmarkitems[idx].sub_title !== null ?  <div>{Bookmarkitems[idx].sub_title}</div>: 
                    <div><br></br></div>
                }
                {
                    Bookmarkitems[idx].follower !== null ? <Pf>11{Bookmarkitems[idx].follower}</Pf>  : 
                    Bookmarkitems[idx].price !==null ? <Pf>{Bookmarkitems[idx].price+'원'}</Pf>:
                    <Pf><br></br></Pf>
                }
            </List>
                {
                    isOpen &&(<Modal item={Bookmarkitems} idx={idx} keys={keys} saveitems={saveitems}
                         openModal={openModal} clickchange={clickchange} changecolor={changebookcolor}
                          SetchangeColor={Setchangebookcolor} SetIsToast={SetIsToast}
                          />)
                }
        </>
    )
}

export default BookmarkComponent