import Styles from '../productTitle/productTitle.module.css';
type ProductTitleType = {
    ProductName:string 
    TagName:string
}

function ProductTitle({ ProductName}: ProductTitleType) {
    
    return (
        <>
        <p className={Styles.productName}>{ProductName}</p>
        </>
    )
}

export default ProductTitle