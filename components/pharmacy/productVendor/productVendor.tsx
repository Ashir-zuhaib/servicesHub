import Styles from '../productVendor/productVendor.module.css'

function ProductVendor({ VendorName}:{VendorName:string}) {
    return (
        <p className={Styles.vendorName}>{VendorName}</p>
    )
}

export default ProductVendor