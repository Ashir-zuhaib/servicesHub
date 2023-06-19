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

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Avatar />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="bg-gray px-4 py-4 br-xl">
            <Stack alignItems="center" direction="row" className="mb-2">
              <Avatar />
              <p className="has-text-weight-semibold ml-2">Mahnoor</p>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <div>
                <span className="is-size-7">Available Credit</span>
                <p className="has-text-weight-bold is-size-4">Rs, 19.927</p>
              </div>
              <Link href="https://dawaai.pk" legacyBehavior>
                <a className="is-size-7 has-text-weight-bold text-dawaai-blue underline">
                  View History
                </a>
              </Link>
            </Stack>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
