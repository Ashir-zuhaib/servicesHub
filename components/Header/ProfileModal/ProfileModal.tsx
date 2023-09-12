import * as React from "react";
import Avatar from "./Avatar";
import Link from "next/link";
import { Stack, Modal, Typography, Button, Box } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "150px",
  right: "8%",
  transform: "translate(-50%, -50%)",
  width: 330,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "20px",
};
interface ProfileModal {
  currentUserId: string;
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
}
export default function ProfileModal({ userData, setUserData }: ProfileModal) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    localStorage.clear();
    setOpen(false);
    setUserData(null);
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        <Avatar />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="bg-gray px-4 py-4 br-xl">
            <Link href={'#'} className="text-primary" onClick={handleLogout}>
              Log out
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
