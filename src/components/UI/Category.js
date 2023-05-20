
import { styled } from "styled-components"
import Ig0 from '../../Image/카테고리0.jpeg'
import Ig1 from '../../Image/카테고리1.jpeg'
import Ig2 from '../../Image/카테고리2.jpeg'
import Ig3 from '../../Image/카테고리3.jpeg'
import Ig4 from '../../Image/카테고리4.jpeg'

const CategorySection = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 0%;

`

const CategoryDiv = styled.li`
margin: 0 18px;
text-align: center;
height: 140px;
font-size: 20px;
list-style-type: none;
cursor: pointer;

p{
    margin-top: 7px;
    margin-bottom: 0;
    
}
&:hover{
    color: purple;
    text-decoration: underline
}
`

const CategoryImg = styled.img`
width: 90px;
height: 90px;
border-radius: 50px;
`

function Category ({setSelectitem}){



const Types = [ {title :'전체', image: Ig0, type: 'All'},
{title:'상품',image: Ig1 ,type: 'Product'},
{title:'카테고리',image:Ig2, type:'Category'},
{title:'기획전',image:Ig3, type:'Exhibition'},
{title:'브랜드',image:Ig4, type :'Brand'}] 

return (
    <CategorySection>
        {
            Types.map((type,idx)=> 
                    <CategoryDiv key={idx} onClick={()=>{setSelectitem(type.type)}}>
                        <CategoryImg src={type.image}/>
                        <p>{type.title}</p>
                    </CategoryDiv>)
        }
    </CategorySection>
)
}


export default Category