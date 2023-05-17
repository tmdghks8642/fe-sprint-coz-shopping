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



function ProductItem ({el,SetIsmark,SetBookmarkitems,SetIsToast}) {
 const [isOpen, SetIsOpen] = useState(false)
 const [changecolor,SetchangeColor] = useState(false)
 // 모달창 위치 때문에 사용
 const [location] = useState(true)

useEffect(()=>{
    SetIsmark(changecolor)
},[changecolor])

 const openModal = (isopen)=>{
    SetIsOpen(isopen)
 }


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
                    el.image_url !== null ? el.image_url : 
                    el.brand_image_url
                }>
                      <div>
                         <StarIcon className="Staricon" onClick={(e)=>{
                            e.stopPropagation()
                            // 아이콘 색변경
                            SetchangeColor(!changecolor) 
                             // 로컬스토리지 데이터 저장
                            saveitems(el)
                            // Toast UI 구현
                            SetIsToast(true)
                            setTimeout(()=>{SetIsToast(false)},3000)
                            }}/>
                      </div>
                </ListImgDiv>
                <ListTitle>{
                   el.title !== null ? el.title :
                   el.brand_name 
                }</ListTitle>
                {
                    el.follower !== null ? <PriceOrFallowers>관심고객수</PriceOrFallowers> :
                    el.discountPercentage !== null ? <PriceOrFallowers color={'#452CDD'} >{el.discountPercentage+`%`}</PriceOrFallowers> :
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
                    isOpen &&(<Modal el={el}  location={location} saveitems={saveitems}
                         openModal={openModal} changecolor={changecolor} 
                         SetchangeColor={SetchangeColor} SetIsToast={SetIsToast}/>) 
                }
        </>
    )
}

export default ProductItem