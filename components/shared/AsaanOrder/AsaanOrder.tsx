import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Styles from '../AsaanOrder/AsaanOrder.module.css';

function AsaanOrder() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className={Styles.customStyle} variant="outlined" startIcon={<CameraAltOutlinedIcon className={Styles.customStyledIcon} />}>
        Asaan Order
      </Button>
    </Stack>
  );
}
export default AsaanOrder