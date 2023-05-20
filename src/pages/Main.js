import { styled } from "styled-components"
import { useState,useEffect } from "react"
import ProductItem from "../components/UI/ProductItemList"
import BookmarkComponent from "../components/UI/BookmarkComponent"
import Toast from "../components/UI/Toast"



// 메인페이지 스타일
const Mainpage = styled.div`
position: relative;
height: 100vh;
width: 100vw;

// 저장된 북마크 없을 시 
.nobookmark {
    position: absolute;
    bottom: 15rem;
    left: 40rem;
    font-size: 50px;
    
}
`
// 상품 리스트 스타일
const ProductsList = styled.section`
display: inline-block;
position:relative;
left: 8vw;
top: 2rem;
`

const ProductsListTitle = styled.h2`
position:relative;
`
const ProductItems = styled.ul`
display: inline-block;
`

// 북마크 스타일
const BookmarkList = styled.div`
display: inline-block;
position:absolute;
left: 8vw;
top: 25rem;

`
const BookmarkListTitle = styled(ProductsListTitle)`
`


function Main ({bookmarkitems,setBookmarkitems}){
const [items,setItems] = useState([])
// Toast UI 관리
const [ismark,setIsmark] = useState(false)
//const [isbookmark,SetIsbookmark] = useState(true)
const [isToast,setIsToast] = useState(false)


    useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(rsp=> {
        if(!rsp.ok){
            throw new Error(rsp.statusText);
        }
        return rsp.json()
    })
    .then(json => setItems(json))
    .catch(error=> console.error(error))
    },[]) 

// ismark 가 상품리스트에만 의도대로 잘 적용 됨 
// 북마크 리스트의 경우에는 항상 true를 반환한다. 
// 해결법을 모르겠다,,, 설계를 잘 못 한것 같다


return (
    <>  
        <Mainpage>
                <ProductsList>
                    <ProductsListTitle>상품 리스트</ProductsListTitle>
                        <ProductItems>
                            {
                                items&&items.filter((item,idx)=> idx <4).map(item => <ProductItem key={item.id} 
                                    item={item} setIsmark={setIsmark} setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}
                                 />)
                            }
                        </ProductItems>
                </ProductsList>

              {

                bookmarkitems.length === 0 ? <p className="nobookmark">저장된 북마크가 없습니다.</p> :
                    <BookmarkList>
                        <BookmarkListTitle>북마크 리스트</BookmarkListTitle>
                        <ProductItems>
                                {
                                    bookmarkitems&&bookmarkitems.filter((item,idx)=> idx <4).map(item=> <BookmarkComponent key={item.id} 
                                    item={item}  setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}/>)
                                } 
                        </ProductItems>    
                </BookmarkList>
              }  

               {
                   isToast? <Toast ismark={ismark}/>: null
               } 
         
       
        </Mainpage>
    </>

)
}


export default Main