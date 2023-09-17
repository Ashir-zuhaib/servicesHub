import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia'; 
export const BookingCard = ({item,onComplete,onCancel})=>{
    return (
    <Card key={item.id} sx={{ maxWidth: 345, margin: '16px' }}>
            <CardMedia
              component="img"
              height="140"
              image={item?.customerData?.profileImg}
              alt={item?.customerData?.full_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.customerData?.full_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Service: {item?.serviceData?.name}
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                Address: {item?.address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contact: {item?.contactNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Appointment Date: {item?.apptDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Appointment Time: {item?.startTime +"-" + item?.endTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Charges: {item?.total}
              </Typography>
            </CardContent>
            {
                item?.status == "active"?(
                    <CardActions>
              <Button size="small" color="primary" onClick={onComplete}>
                Complete
              </Button>
              <Button size="small" color="error" onClick={onCancel}>
                Cancel
              </Button>
            </CardActions>
                ):(<p> {item?.status}</p>)
            }
            
          </Card>
)}