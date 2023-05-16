import ProductItem from "../components/UI/ProductItemList"
import { styled } from "styled-components"
import { useState,useEffect } from "react"

// 메인페이지 스타일
const Mainpage = styled.main`
height: 100vh;
width: 100vw;
`
// 상품 리스트 스타일
const ProductsList = styled.div`
display: inline-block;
position:relative;
left: 8vw;
top: 2rem;
`

const ProductsListTitle = styled.h2`
position:relative;
`
const ProductItems = styled.div`
display: inline-block;
`

// 북마크 스타일
const BookmarkList = styled.div`
position:relative;
left: 8vw;
top: 60px;
`
const BookmarkListTitle = styled(ProductsListTitle)`
`



function Main (){
const [item,SetItem] = useState()

    useEffect(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then(rsp=> {
        if(!rsp.ok){
            throw new Error(rsp.statusText);
        }
        return rsp.json()
    })
    .then(json => SetItem(json))
    .catch(error=> console.error(error))
    },[]) 




return (
    <>  
        <Mainpage>
                <ProductsList>
                    <ProductsListTitle>상품 리스트</ProductsListTitle>
                        <ProductItems>
                            {
                                item&&item.map((el,idx)=> <ProductItem item={item} idx={idx}/>)
                            }
            
                        </ProductItems>
                </ProductsList>

                <BookmarkList>
                    <BookmarkListTitle>북마크 리스트</BookmarkListTitle>
                </BookmarkList>
        </Mainpage>
    </>

)
}


export default Main