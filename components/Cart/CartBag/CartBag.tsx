import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 5,
    border: `2px solid #003B82`,
    padding: '0 4px',
    background:'#003B82',
    width: '20px',
    height: '20px'
  },
}));

function CartBag() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="primary">
        <LocalMallOutlinedIcon sx={{width:'30px', height:'30px'}} />
      </StyledBadge>
    </IconButton>
  );
}
export default CartBag