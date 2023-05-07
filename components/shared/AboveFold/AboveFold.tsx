import Grid from '@mui/material/Grid';
import MainCarousel from './MainCarousel/MainCarousel';
import SiteLinkingBanner from '../SiteLinkingAssets/SiteLinkingBanner';

function AboveTheFold() {

const linkingImg =  [
{
"id": 1,
"width": "318px",
"height": "329px",
"alt": "go to pharmacy",
"image": "/pharmacy-placeholder.jpg"
},
{
"id": 2,
"width": "314px",
"height": "219px",
"alt": "go to doctor consult",
"image": "/doctor-consult-placeholder.jpg"
},
{
"id": 3,
"width": "314px",
"height": "219px",
"alt": "go to home services",
"image": "/home-services-placeholder.jpg"
},
{
"id": 4,  
"width": "314px",
"height": "219px",
"alt": "go to labtest",
"image": "/labtest-placeholder.jpg"
}
]

return (

<>
<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }} columns={{xs:12, sm:2, md:12, lg:12}}>
<Grid item lg={8}>
   <MainCarousel/>
</Grid>
{    
         
linkingImg.map( (linkingImg, i) =>
<Grid key={linkingImg.id} item lg={4}>
   <SiteLinkingBanner 
   bannerSkeleton={false} 
   LinkingBanner={linkingImg.image} 
   ImgWidth={linkingImg.width} 
   ImgHeight={linkingImg.height} 
   ImgAlt={linkingImg.alt}/>
</Grid>
)
}

</Grid>
</>
)

}

export default AboveTheFold