import Styles from '../productDetails/productDetails.module.css'

interface ProductDetails {
    PackSize:string 
    ProductType:string
}

function ProductDetails({PackSize, ProductType}: ProductDetails) {
    return (
        <>
        <div className={Styles.productDetails} >
        <span>{PackSize}</span> |   <span>{ProductType}</span>
        </div>
        </>
    )
}

export default ProductDetails