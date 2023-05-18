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

function Bookmark ({Bookmarkitems,SetBookmarkitems}){
    const [selectitem, SetSelectitem]= useState('All')
    const [ismark,SetIsmark] = useState(false)
    const [isToast,SetIsToast] = useState(false)


return(
    <>
        <BookmarktPage> 
            <Category SetSelectitem={SetSelectitem}/> 
            <BookmarkList>
                <ul>
                  {
                    selectitem === 'All' ? 
                    Bookmarkitems.map(item=><BookmarkComponent  key={item.id} 
                    item={item}   SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                        />) 
                    : selectitem === 'Product' ? 
                    Bookmarkitems.filter((item,idx)=> item.type === 'Product').map(item=><BookmarkComponent  key={item.id} 
                    item={item}   SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                        />) 
                    : null
                  } 
                  {
                    selectitem === 'Category' ? 
                    Bookmarkitems.filter((item,idx)=> item.type === 'Category').map(item=><BookmarkComponent  key={item.id} 
                     item={item}  SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                        />) 
                    : selectitem === 'Exhibition' ? 
                    Bookmarkitems.filter((item,idx)=> item.type === 'Exhibition').map(item=><BookmarkComponent  key={item.id} 
                    item={item}   SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                        />) 
                    : null
                    }
                    {
                    selectitem === 'Brand' ? 
                    Bookmarkitems.filter((item,idx)=> item.type === 'Brand').map(item=><BookmarkComponent  key={item.id} 
                    item={item}   SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
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