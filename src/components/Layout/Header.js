
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"
import {Bars3Icon, GiftIcon, StarIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import LogoImg from '../../Image/로고.jpeg'

const HeaderDiv = styled.header`
position: sticky;
top: 0px;
margin:0px;
padding:0px;
width: 100vw;
height:7vh;
box-shadow: 0 4px 10px -3px black;
z-index: 990;
`

const HeaderTitle = styled.h1`
display: inline-block;
position:relative;
left:7vw;
line-height: 7vh;
margin:0px;
padding:0px;
font-weight:900;
`

const Logo = styled.img`
position: relative;
line-height: 7vh;
width :60px;
height:30px;
cursor: pointer;
`
const HeaderIcon = styled.div`
position: relative;
top: -60px;
left: 90vw;
bottom:55px;
cursor: pointer;
`
const MouseOver = styled.div`
position: relative;
z-index: 100;
border-radius: 20px;
left: 87vw;
bottom: 50px;
width: 170px;
height: 150px;
box-shadow: 0 4px 10px -3px black;

p {
    font-size: 15px;
    line-height: 10px;
    margin: 0px;
    padding: 16px; 
}
.menu1,.menu2  {
    border-bottom: solid 1px gray;
}
.menu2,.menu3 {
    cursor: pointer;
}
.icon {
    width: 20px;
    position: relative;
    top: 4px
}
` 

function Header (){
const [hover, SetHover] =useState(false);
const navigate = useNavigate();

const MouseClick =()=>{
    SetHover(!hover)
}

return(
    <>
        <HeaderDiv>
            <HeaderTitle>
                <Logo src={LogoImg}onClick={()=>{navigate('/')}}/> COZ Shopping
            </HeaderTitle>
            <HeaderIcon>
                <Bars3Icon width={'50px'} onClick={()=>{ MouseClick()}}/>
            </HeaderIcon>
        {
                hover? <MouseOver className='dropdownmenu'>
                                <div>
                                <p className='menu1'> 이승환님, 안녕하세요!</p>
                                </div>
                                <div>
                                    <p className='menu2' onClick={()=>{navigate('/products/list'); MouseClick()}}>
                                        <GiftIcon className='icon' /> 상품리스트 페이지
                                    </p>
                                </div>
                                <div>
                                    <p className='menu3' onClick={()=>{navigate('/bookmark'); MouseClick()}}>
                                        <StarIcon className='icon'/>북마크 페이지
                                    </p>
                                </div>
                    </MouseOver> 
                    : null
        }
        </HeaderDiv>
    </>
)
}

export default Header
