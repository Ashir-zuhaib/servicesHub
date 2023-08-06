import ProductPrice from "../../ServicesCard/productPrice/productPrice";
import Divider from "@mui/material/Divider";
import BookingSteps from "../BookingSteps";
const productDetails = () => {
  return (
    <div>
      <p className="has-text-weight-semibold is-size-6">Carpenter</p>
      <h1 className="is-size-3">Ali Raza</h1>
      <div className="is-flex">
        <ProductPrice Price={500} />
        <p className="pl-4">
          <span className="pr-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.34986 1.17603L7.98494 4.48861L11.6414 5.02307L8.99562 7.60011L9.62002 11.2408L6.34986 9.52098L3.07971 11.2408L3.70411 7.60011L1.05835 5.02307L4.71478 4.48861L6.34986 1.17603Z"
                fill="#F29D43"
                stroke="#F29D43"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </span>
          4.5/5
        </p>
      </div>

      <p className="my-2">
        <strong>Areas Available:</strong> Nazimabad, North Nazimabad,
        Liaquatabad, Hyderi, Paposh, F.B Area
      </p>
      <Divider />
      <p className="my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero harum
        impedit laboriosam, eligendi laudantium doloremque natus odio architecto
        repudiandae debitis tempore! Facere beatae nisi reiciendis ducimus
        labore molestiae dolores atque.Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Libero harum impedit laboriosam, eligendi laudantium
        doloremque natus odio architecto repudiandae debitis tempore! Facere
        beatae nisi reiciendis ducimus labore molestiae dolores atque.
      </p>
    </div>
    
  );
};

export default productDetails;
