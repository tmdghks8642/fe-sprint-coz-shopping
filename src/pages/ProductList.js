import { useState,useEffect } from "react"
import { styled } from "styled-components"
import Category from "../components/UI/Category"
import ProductItem from "../components/UI/ProductItemList"
import Toast from "../components/UI/Toast"

const ProductPage =styled.div`
width: 100vw;
display: flex;
flex-direction: column;
vertical-align: middle;

section {
    padding-top: 20px;
}
`

// 상품 리스트 스타일
const ProductsList = styled.section`
width: 1850px;
padding-left: 300px;
`


function ProductList ({SetBookmarkitems}){
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

        console.log(selectitem)
    return(
        <>
        <ProductPage>
            <Category SetSelectitem={SetSelectitem}/> 
                <ProductsList>
                    <ul>
                        {
                            selectitem === 'All' ? 
                            allitem.filter((el,idx)=> idx <40).map(el=><ProductItem  key={el.id} 
                                el={el} SetBookmarkitems={SetBookmarkitems} SetIsmark={SetIsmark} SetIsToast={SetIsToast}
                                />) 
                            : null
                        }
                    </ul>
                </ProductsList>
        </ProductPage> 
            {
                isToast? <Toast ismark={ismark}/>: null
            } 
        </>
    )

}

export default ProductList