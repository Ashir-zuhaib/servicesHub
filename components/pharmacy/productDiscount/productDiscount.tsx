import Styles from '../productDiscount/productDiscount.module.css';

interface discountTypes {
    productDiscount: string
}


function ProductDiscount({productDiscount} : discountTypes) {
    return (
        <div className={Styles.discountLabel}>
            <span>{productDiscount}</span>
        </div>
    )
}
export default ProductDiscount