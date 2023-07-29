import Layout from "../components/layout";
import CategoryCard from "../components/shared/CategoryCard/CategoryCard";
import Title from "../components/shared/Headings/Title";
import { Grid } from "@mui/material";
import test from "../public/carpenter.png";
import { useRouter } from "next/router";
import { getWorkerByService } from "../utils/getData";
import { useEffect, useState } from "react";
const AllCategories = () => {
  const [workers, setWorker] = useState([]);
  const router = useRouter();
  const { service, serviceName } = router.query;

  const gettingWorker = async () => {
    const getWorker = await getWorkerByService(service);
    setWorker(getWorker);
  };
  useEffect(() => {
    gettingWorker();
  }, [service]);
  const processedServiceName = Array.isArray(serviceName)
    ? serviceName.join(", ")
    : serviceName;
  console.log("processedServiceName", processedServiceName);
  console.log("workers", workers);
  return (
    // <>
    //   {workers?.map((worker) => {
    <Layout>
      <Grid container justifyContent="center" className="py-2 px-2">
        <Grid container item xs={12} md={8}>
          <Title title={processedServiceName} />
          {workers?.map((worker) => (
            <Grid container rowSpacing={2} columnSpacing={2} className="mb-5">
              <CategoryCard worker={worker} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      ;
    </Layout>
    // </>
  );
};

export default AllCategories;
