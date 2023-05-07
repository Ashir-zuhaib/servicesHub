import Modal from "@mui/material/Modal";
import React from "react";
import Box from "@mui/material/Box";
import Styles from "./CustomModal.module.css";
import { Divider, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomModal({
  ModalLabelComponent,
  ModalBodyToPassDown,
  ModalWidth,
  ModalTitle
}: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span onClick={handleOpen}>{ModalLabelComponent}</span>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{ width: ModalWidth ? ModalWidth : "600px" }}
          className={Styles.ModalStyling}
        >
          <div className="px-2 py-2">
            <Stack direction="row" alignItems="center">
              <CloseIcon className="mr-3" onClick={handleClose} />
              <Typography variant="h6" component="h2">
                {ModalTitle}
              </Typography>
            </Stack>
          </div>
          <Divider />
          {ModalBodyToPassDown}
        </Box>
      </Modal>
    </div>
  );
}
