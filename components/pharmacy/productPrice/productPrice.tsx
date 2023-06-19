import Styles from '../productPrice/productPrice.module.css';
interface ProductPrice {
    DiscountedPrice: string | number
    ActualPrice: string | number
    CurrencyIdentifier: string
}

function ProductPrice({DiscountedPrice, ActualPrice, CurrencyIdentifier}:ProductPrice) {
    return (
       <div className={Styles.productPricing}>
           <p>{CurrencyIdentifier} {DiscountedPrice} <span>{CurrencyIdentifier} {ActualPrice}</span></p>
       </div> 
    )
}

export default ProductPrice