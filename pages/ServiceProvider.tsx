import Layout from "../components/layout";
import Image from "next/image";
import ProductDescription from "../components/ProductPage/ProductDescription/ProductDescription";
import { Skeleton, Grid } from "@mui/material";
import BookingSteps from "../components/ProductPage/BookingSteps";
import { useRouter } from "next/router";
import { getAllLocation, getAllService, getUser } from "../utils/getData";
import { useEffect, useState } from "react";
import imagePlaceholder from "../public/images/image-placeholder.jpeg";

interface ServiceProvider {
  profileImg: any;
  // Add other required properties here
}

const ServiceProviderProfile = () => {
  const router = useRouter();
  const [serviceProviderData, setServiceProviderData] =
    useState<ServiceProvider | null>(null);
  const { providerId } = router.query;

  const gettingProviderData = async () => {
    try {
      if (!providerId) return; // Ensure providerId is defined

      const providerData = await getUser(providerId);

      // Check if providerData has the required properties
      if (providerData && providerData.profileImg) {
        // Convert to ServiceProvider type
        const serviceProvider: ServiceProvider = {
          profileImg: providerData.profileImg,
          // Add other properties here
        };

        // Set the converted data in the state
        setServiceProviderData(serviceProvider);
      } else {
        // Handle the case where profileImg is missing in providerData
        // You can provide default values or handle it as needed
        // Example:
        setServiceProviderData({
          profileImg: imagePlaceholder, // Provide a default image
          // Add other default values here
        });
      }
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    gettingProviderData();
  }, [providerId]);

  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8} spacing={2}>
          {!serviceProviderData ? (
            <>
              <Grid item xs={12} md={3}>
                <Skeleton
                  variant="circular"
                  height={200}
                  width={200}
                  className="mx-auto"
                  animation="wave"
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Skeleton variant="rectangular" height={200} animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rectangular" height={200} animation="wave" />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} md={3}>
                <Image
                  src={
                    serviceProviderData.profileImg
                      ? serviceProviderData.profileImg
                      : imagePlaceholder
                  }
                  width={200}
                  height={200}
                  alt="service provider"
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <ProductDescription userProfile={serviceProviderData} />
              </Grid>
              <Grid item xs={12} md={12}>
                <BookingSteps providerId={providerId} />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ServiceProviderProfile;
