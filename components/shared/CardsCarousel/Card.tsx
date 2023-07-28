import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Styles from "./cards.module.css";
import { useRouter } from 'next/router';

interface card {
  id: number;
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
}

function Card({ id, imgUrl, imgWidth, imgHeight, title }: card) {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            flexDirection={"column"}
            justifyContent={"space-around"}
            className={Styles.boxStyles}>
            <Grid container justifyContent={"center"}>
              {" "}
              <Image
                src={imgUrl}
                alt={title}
                width={imgWidth}
                height={imgHeight}
              />
            </Grid>
            <Grid container justifyContent={"center"}  onClick={()=>router.push({pathname: '/Category',
            query: {service: id, serviceName:title}})}>
              {/* <Link> */}
                <span className={Styles.brandName}>{title}</span>
              {/* </Link> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Card;
