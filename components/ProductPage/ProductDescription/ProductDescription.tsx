import ProductPrice from "../../ServicesCard/productPrice/productPrice";
import Divider from "@mui/material/Divider";
import BookingSteps from "../BookingSteps";
const productDetails = ({ userProfile }) => {
  return (
    <div>
      <p className="has-text-weight-semibold is-size-6">
        {userProfile?.roleName}
      </p>
      <h1 className="is-size-3 is-capitalized">{userProfile?.full_name}</h1>
      <div className="is-flex">
        <ProductPrice Price={userProfile?.hourlyRate} />
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
          {userProfile?.rating}
        </p>
      </div>

      <p className="my-2">
        <strong>Areas Available:</strong> {userProfile?.locationName}
      </p>
      <Divider />
      <p className="my-2">
        Welcome to services offered by {userProfile?.full_name} , where quality
        and customer satisfaction is one of the top priorities.{" "}
        {userProfile?.full_name} offer a range of expertise to meet your needs,
        including {userProfile?.roleName} . His services are competitively
        priced, and we serve various locations, including{" "}
        {userProfile?.locationName}. For more details and appointments, please
        get in touch with us. We're here to assist you.
      </p>
    </div>
  );
};

export default productDetails;
