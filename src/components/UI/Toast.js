import { StarIcon } from "@heroicons/react/24/solid"
import { styled } from "styled-components"


const IconDiv = styled.div`
position: absolute;
width: 400px;
height: 70px;
top: 47rem;
right: 5rem;
border-radius: 30px;
box-shadow: 1px 1px 15px 1px  black ;


div {
    position: absolute;
    top: 15px;
    left: 20px;
    .staricon{
        width: 40px;
        color: ${props => props.ismark ? '#FFD361' : '#DFDFDFCF' };
    }
}

p {
   position: relative;
    bottom: 60px;
    left: 50px;
  font-size: 23px;
}
`



function Toast ({ismark}){


return(
    <>
        <IconDiv ismark={ismark}>
          <div >
            <StarIcon className="staricon" />
            {
              ismark?<p>상품이 북마크에 추가되었습니다.</p> :<p>상품이 북마크에서 제거되었습니다.</p>
            }    
          </div>
        </IconDiv>       
    </>
)
}
export default Toast