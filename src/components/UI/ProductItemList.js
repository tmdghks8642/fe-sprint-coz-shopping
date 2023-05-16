import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";

const List = styled.section`
display: inline-block;
width: 16.7vw;
height: 28vh;
margin-right: 3rem;
cursor: pointer;
`
const ListImg = styled.img`
width: 16.7vw;
height: 20vh;
border-radius: 20px;
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


function ProductItem ({item,idx,keys}) {
 const [isOpen, SetIsOpen] = useState(false)


 const openModal = (isopen)=>{
    SetIsOpen(isopen)
 }

    return (
        <>
            <List onClick={(e)=>{openModal(true)}}>
                <ListImg src={
                    item[idx].image_url !== null ? item[idx].image_url : 
                    item[idx].brand_image_url
                }/>
                <ListTitle>{
                    item[idx].title !== null ? item[idx].title :
                    item[idx].brand_name 
                }</ListTitle>
                {
                    item[idx].follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                    item[idx].discountPercentage !== null ? <PriceOrFallowers >{item[idx].discountPercentage+`%`}</PriceOrFallowers> :
                    <PriceOrFallowers ><br></br></PriceOrFallowers>
                }
                {
                    item[idx].sub_title !== null ?  <div>{item[idx].sub_title}</div>: 
                    <div><br></br></div>
                }
                {
                    item[idx].follower !== null ? <Pf>11{item[idx].follower}</Pf>  : 
                    item[idx].price !==null ? <Pf>{item[idx].price+'원'}</Pf>:
                    <Pf><br></br></Pf>
                }
            </List>
                {
                    isOpen &&(<Modal item={item} keys={keys} openModal={openModal}/>)
                }
        </>
    )
}

export default ProductItem