
import { styled } from "styled-components"
import Ig0 from '../../Image/카테고리0.jpeg'
import Ig1 from '../../Image/카테고리1.jpeg'
import Ig2 from '../../Image/카테고리2.jpeg'
import Ig3 from '../../Image/카테고리3.jpeg'
import Ig4 from '../../Image/카테고리4.jpeg'

const CategorySection = styled.section`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;

left: 50vw;
transform: translate(-50%,-38%);
height: 100vh;
width: 650px;
`

const CategoryDiv = styled.div`
height: 140px;
text-align: center;
font-size: 20px;
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

function Category (){

return (
    <CategorySection>
        <CategoryDiv>
            <CategoryImg src={Ig0}/>
            <p>전체</p>
        </CategoryDiv>
        <CategoryDiv>
            <CategoryImg src={Ig1}/>
            <p>상품</p>
        </CategoryDiv>
        <CategoryDiv>
            <CategoryImg src={Ig2}/>
            <p>카테고리</p>
        </CategoryDiv>
        <CategoryDiv>
            <CategoryImg src={Ig3}/>
            <p>기획전</p>
        </CategoryDiv>
        <CategoryDiv>
            <CategoryImg src={Ig4}/>
            <p>브랜드</p>
        </CategoryDiv>    
    </CategorySection>
)
}


export default Category