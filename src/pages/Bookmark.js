import {useState } from "react";
import { styled } from "styled-components";
import Category from "../components/UI/Category"
import Toast from "../components/UI/Toast";
import BookmarkComponent from "../components/UI/BookmarkComponent";

const BookmarktPage =styled.div`
width: 100vw;
padding-bottom: 600px;
`

// 상품 리스트 스타일
const BookmarkList = styled.main`
ul{
    margin: 0;
}
`

function Bookmark ({bookmarkitems,setBookmarkitems}){
    const [selectitem, setSelectitem]= useState('All')
    const [ismark,setIsmark] = useState(false)
    const [isToast,setIsToast] = useState(false)

    const categoryTitle = {
        ALL : 'All',
        PRODUCT: 'Product',
        CATEGORY: 'Category',
        EXHIBITION: 'Exhibition',
        BRAND : 'Brand'
     }   
     Object.freeze(categoryTitle);
    
    const {ALL,PRODUCT,CATEGORY,EXHIBITION,BRAND} = categoryTitle



return(
    <>
        <BookmarktPage> 
            <Category setSelectitem={setSelectitem}/> 
            <BookmarkList>
                <ul>
                  {
                    selectitem === ALL ? 
                    bookmarkitems.map(item=><BookmarkComponent  key={item.id} 
                    item={item}   setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}
                        />) 
                    : selectitem === PRODUCT ? 
                    bookmarkitems.filter((item,idx)=> item.type === 'Product').map(item=><BookmarkComponent  key={item.id} 
                    item={item}   setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}
                        />) 
                    : null
                  } 
                  {
                    selectitem === CATEGORY ? 
                    bookmarkitems.filter((item,idx)=> item.type === 'Category').map(item=><BookmarkComponent  key={item.id} 
                     item={item}  setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}
                        />) 
                    : selectitem === EXHIBITION ? 
                    bookmarkitems.filter((item,idx)=> item.type === 'Exhibition').map(item=><BookmarkComponent  key={item.id} 
                    item={item}   setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}
                        />) 
                    : null
                    }
                    {
                    selectitem === BRAND ? 
                    bookmarkitems.filter((item,idx)=> item.type === 'Brand').map(item=><BookmarkComponent  key={item.id} 
                    item={item}   setBookmarkitems={setBookmarkitems} setIsToast={setIsToast}
                        />) 
                    : null
                    } 
                </ul>
            </BookmarkList>
            {
                isToast? <Toast ismark={ismark}/>: null
            } 
        </BookmarktPage>
    </>
)
}

export default Bookmark