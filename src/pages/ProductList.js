import { useState,useEffect,useRef } from "react"
import { styled } from "styled-components"
import Category from "../components/UI/Category"
import ProductItem from "../components/UI/ProductItemList"
import Toast from "../components/UI/Toast"

const ProductPage =styled.div`
width: 100vw;
`

// 상품 리스트 스타일
const ProductsList = styled.main`
display: flex;
text-align: center;
`


function ProductList ({SetBookmarkitems}){
    // 무한스크 사용하기위해
    const target = useRef(null)
    const [allitem,SetAllitem]=useState([])
    const [selectitem, SetSelectitem]= useState('All')
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
        .then(json => SetAllitem(json))
        .catch(error=> console.error(error))
        },[]) 

        useEffect(()=>{
            observer.observe(target.current)
          },[])

        // allitem 정렬
        const sortitems = allitem.sort((a,b)=> a.id-b.id)
        const allcategory = sortitems.filter((el,idx)=> idx <25)

          const options = {
            root: null,
            threshold: 1.0,
            rootMargin: '10px'
          }
          // 무한스크롤을 구현하려고 했으나 추가 데이터를 받아와서 뿌리는 걸 못하겠음
          const callback = ()=>{
                console.log(1)
            }
          
          const observer = new IntersectionObserver(callback, options)

  
    return(
        <>
            <ProductPage>
                <Category SetSelectitem={SetSelectitem}/> 
                    <ProductsList>
                        <ul>
                            {
                                selectitem === 'All' ? 
                                allcategory.map(item=><ProductItem  key={item.id} 
                                    item={item} SetIsmark={SetIsmark}  SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                                    />) 
                                :  selectitem === 'Product' ? 
                                allitem.filter((item,idx)=> item.type === 'Product').map(item=><ProductItem  key={item.id} 
                                    item={item} SetIsmark={SetIsmark}  SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                                    />) 
                                : null
                            }
                            {
                                selectitem === 'Category' ? 
                                allitem.filter((item,idx)=> item.type === 'Category').map(item=><ProductItem  key={item.id} 
                                    item={item} SetIsmark={SetIsmark}  SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                                    />) 
                                : selectitem === 'Exhibition' ? 
                                allitem.filter((item,idx)=> item.type === 'Exhibition').map(item=><ProductItem  key={item.id} 
                                    item={item} SetIsmark={SetIsmark}  SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                                    />) 
                                : null
                            }
                            {
                                selectitem === 'Brand' ? 
                                allitem.filter((item,idx)=> item.type === 'Brand').map(item=><ProductItem  key={item.id} 
                                    item={item} SetIsmark={SetIsmark}  SetBookmarkitems={SetBookmarkitems} SetIsToast={SetIsToast}
                                    />) 
                                : null
                            }
                        </ul>
                    </ProductsList>
                {
                    isToast? <Toast ismark={ismark}/>: null
                } 
            </ProductPage> 
            <div ref={target}>1</div>
         </>
    )

}

export default ProductList