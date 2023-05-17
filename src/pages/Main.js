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
z-index: 40;

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


function Main ({Bookmarkitems,SetBookmarkitems}){
const [item,SetItem] = useState([])
const [ismark,SetIsmark] = useState()
const [isToast,SetIsToast] = useState(false)


    useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(rsp=> {
        if(!rsp.ok){
            throw new Error(rsp.statusText);
        }
        return rsp.json()
    })
    .then(json => SetItem(json))
    .catch(error=> console.error(error))
    },[]) 

     console.log(ismark)

return (
    <>  
        <Mainpage>
                <ProductsList>
                    <ProductsListTitle>상품 리스트</ProductsListTitle>
                        <ProductItems>
                            {
                                item&&item.filter((el,idx)=> idx <4).map((el,idx)=> <ProductItem 
                                key={el.id} keys={el.id} item={item} idx={idx}
                                 ismark={ismark} SetIsmark={SetIsmark} Bookmarkitems={Bookmarkitems} SetBookmarkitems={SetBookmarkitems}
                                 SetIsToast={SetIsToast}
                                 />)
                            }
                        </ProductItems>
                </ProductsList>

              {

                Bookmarkitems.length === 0 ? <p className="nobookmark">저장된 북마크가 없습니다.</p> :
                    <BookmarkList>
                        <BookmarkListTitle>북마크 리스트</BookmarkListTitle>
                        <ProductItems>
                                {
                                    Bookmarkitems&&Bookmarkitems.filter((el,idx)=> idx <4).map((el,idx)=> <BookmarkComponent 
                                    key={el.id} keys={el.id} Bookmarkitems={Bookmarkitems} idx={idx}  ismark={ismark}
                                    SetIsmark={SetIsmark} SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}/>)
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