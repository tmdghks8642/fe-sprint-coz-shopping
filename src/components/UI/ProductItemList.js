import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { StarIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";

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
    color: ${props => props.ischangecolor ? '#FFD361' : '#DFDFDFCF' };
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
color : ${props => props.color ? props.color: 'black'};
font-weight: 800;
`
const PriceOrFallower = styled.div`
float:right;
position:relative;
bottom:20px;
`



function ProductItem ({item,SetIsmark,SetBookmarkitems,SetIsToast}) {
 const [isOpen, SetIsOpen] = useState(false)
 const [ischangecolor,SetIschangeColor] = useState(false)

useEffect(()=>{
    SetIsmark(ischangecolor)
},[ischangecolor])

 const openModal = (isopen)=>{
    SetIsOpen(isopen)
 }


 const saveitems = (props)=>{
    let data = JSON.parse(localStorage.getItem('Items'))
    if(!ischangecolor){
        if(data.filter(item=>item.id === props.id).length === 0){
        data.unshift(props)
        SetBookmarkitems(data)
        localStorage.setItem('Items',JSON.stringify(data))
        }
    }else{
        data.splice(data.findIndex(item=> item.id ===props.id),1)
        SetBookmarkitems(data)
        localStorage.setItem('Items',JSON.stringify(data))
    }
 }

    return (
        <>  
            <List onClick={()=>{openModal(true)
            }}>
                <ListImgDiv ischangecolor={ischangecolor} src={
                    item.image_url !== null ? item.image_url : 
                    item.brand_image_url
                }>
                      <div>
                         <StarIcon className="Staricon" onClick={(event)=>{
                            event.stopPropagation()
                            // 아이콘 색변경
                            SetIschangeColor(!ischangecolor) 
                             // 로컬스토리지 데이터 저장
                            saveitems(item)
                            // Toast UI 구현
                            SetIsToast(true)
                            setTimeout(()=>{SetIsToast(false)},3000)
                            }}/>
                      </div>
                </ListImgDiv>
                <ListTitle>{
                   item.title !== null ? item.title :
                   item.brand_name 
                }</ListTitle>
                {
                    item.follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                    item.discountPercentage !== null ? <PriceOrFallowers color={'#452CDD'} >{item.discountPercentage+`%`}</PriceOrFallowers> :
                    <PriceOrFallowers ><br></br></PriceOrFallowers>
                }
                {
                    item.sub_title !== null ?  <div>{item.sub_title}</div>: 
                    <div><br></br></div>
                }
                {
                   item.follower !== null ? <PriceOrFallower>11{item.follower}</PriceOrFallower>  : 
                   item.price !==null ? <PriceOrFallower>{item.price+'원'}</PriceOrFallower>:
                    <PriceOrFallower><br></br></PriceOrFallower>
                }
            </List>
                {
                    isOpen &&(<Modal item={item} saveitems={saveitems}
                         openModal={openModal} ischangecolor={ischangecolor} 
                         SetIschangeColor={SetIschangeColor} SetIsToast={SetIsToast}/>) 
                }
        </>
    )
}

export default ProductItem