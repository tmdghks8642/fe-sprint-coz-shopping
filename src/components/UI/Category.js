
import { styled } from "styled-components"
import Ig0 from '../../Image/카테고리0.jpeg'
import Ig1 from '../../Image/카테고리1.jpeg'
import Ig2 from '../../Image/카테고리2.jpeg'
import Ig3 from '../../Image/카테고리3.jpeg'
import Ig4 from '../../Image/카테고리4.jpeg'

const CategorySection = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`

const CategoryDiv = styled.div`
height: 140px;
text-align: center;
font-size: 20px;
cursor: pointer;
margin: 0 18px;

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

function Category ({SetSelectitem}){

const Type = [ {title :'전체', image: Ig0, type: 'All'},
{title:'상품',image: Ig1 ,type: 'Product'},
{title:'카테고리',image:Ig2, type:'Category'},
{title:'기획전',image:Ig3, type:'Exhibition'},
{title:'브랜드',image:Ig4, type :'Brand'}] 

return (
    <CategorySection>
        {
            Type.map((el)=> 
                    <CategoryDiv onClick={()=>{SetSelectitem(el.type)}}>
                        <CategoryImg src={el.image}/>
                        <p>{el.title}</p>
                    </CategoryDiv>)
        }
    </CategorySection>
)
}


export default Category