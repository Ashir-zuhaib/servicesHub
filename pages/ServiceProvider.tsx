import Layout from "../components/layout";
import Image from "next/image";
import ProductDescription from "../components/ProductPage/ProductDescription/ProductDescription";
import { Skeleton, Grid } from "@mui/material";
import BookingSteps from "../components/ProductPage/BookingSteps";
import { useRouter } from "next/router";
import { getAllLocation, getAllService, getUser } from "../utils/getData";
import { useEffect, useState } from "react";
interface ServiceProvider {
  profileImg: string;
}
interface ServiceProviderProfile {
  isLoading: boolean;
}

const ServiceProviderProfile = ({ isLoading }: ServiceProviderProfile) => {
  isLoading = false;
  const router = useRouter();
  const [serviceProviderData, setServiceProviderData] =
    useState<ServiceProvider | null>(null);
  const { providerId } = router.query;
  const gettingProviderData = async () => {
    const providerData = await getUser(providerId);
    const getService = await getAllService();
    const filter = getService?.filter((service) =>
      service?.id == providerData?.role
        ? (providerData.roleName = service?.name)
        : ""
    );
    const getLocation = await getAllLocation();
    getLocation?.filter((location) =>
      location?.id == providerData?.location
        ? (providerData.locationName = location?.value)
        : ""
    );
    console.log("ProviderData", providerData);
    setServiceProviderData(providerData);
  };
  useEffect(() => {
    gettingProviderData();
  }, []);
  return (
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8} spacing={2}>
          {isLoading ? (
            <>
              <Grid item xs={12}>
                <Skeleton variant="text" animation="wave" />
              </Grid>
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
            </>
          ) : (
            <>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} md={3}>
                <Image
                  src={serviceProviderData?.profileImg}
                  width={400}
                  height={1200}
                  alt="hhd"
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
