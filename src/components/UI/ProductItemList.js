import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Modal from "./Modal";
import { StarIcon } from "@heroicons/react/24/solid";
import Toast from './Toast'

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
    color: ${props => props.changecolor ? '#FFD361' : '#DFDFDFCF' };
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
const Pf = styled.div`
float:right;
position:relative;
bottom:20px;
`



function ProductItem ({item,idx,keys,SetIsmark,SetBookmarkitems,SetIsToast}) {
 const [isOpen, SetIsOpen] = useState(false)
 const [changecolor,SetchangeColor] = useState(false)
 // 모달창 위치 때문에 사용
 const [location] = useState(true)

useEffect(()=>{
    SetIsmark(changecolor)
},[changecolor])

 const clickchange = ()=>{
    SetchangeColor(!changecolor)  
}
 const openModal = (isopen)=>{
    SetIsOpen(isopen)
 }

//console.log(changecolor)
 const saveitems = (props)=>{
    let data = JSON.parse(localStorage.getItem('Items'))
    if(!changecolor){
        if(data.filter(el=>el.id === props.id).length === 0){
        data.unshift(props)
        SetBookmarkitems(data)
        localStorage.setItem('Items',JSON.stringify(data))
        }
    }else{
        data.splice(data.findIndex(el=> el.id ===props.id),1)
        SetBookmarkitems(data)
        localStorage.setItem('Items',JSON.stringify(data))
    }
 }

    return (
        <>  
            <List onClick={(e)=>{openModal(true)
            }}>
                <ListImgDiv changecolor={changecolor} src={
                    item[idx].image_url !== null ? item[idx].image_url : 
                    item[idx].brand_image_url
                }>
                      <div changecolor={changecolor}>
                         <StarIcon className="Staricon" changecolor={changecolor} onClick={(e)=>{
                            e.stopPropagation()
                            clickchange()
                            saveitems(item[idx])
                            SetIsToast(true)
                            setTimeout(()=>{SetIsToast(false)},2000)
                            }}/>
                      </div>
                </ListImgDiv>
                <ListTitle>{
                    item[idx].title !== null ? item[idx].title :
                    item[idx].brand_name 
                }</ListTitle>
                {
                    item[idx].follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                    item[idx].discountPercentage !== null ? <PriceOrFallowers color={'#452CDD'} >{item[idx].discountPercentage+`%`}</PriceOrFallowers> :
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
                    isOpen &&(<Modal item={item} idx={idx} location={location} keys={keys} saveitems={saveitems}
                         openModal={openModal} clickchange={clickchange} changecolor={changecolor} 
                         SetchangeColor={SetchangeColor} SetIsToast={SetIsToast}/>) 
                }
        </>
    )
}

export default ProductItem