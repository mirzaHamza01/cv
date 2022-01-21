import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { CvTemplate1DownloadForm } from "../../cvTemplate1/download/downloadForm";
import ReactToPrint from "react-to-print";
import { CvTemplate2DownloadForm } from "../../cvTemplate2/download/downloadForm";
import { CvTemplate3DownloadForm } from "../../cvTemplate3/download/downloadForm";

export default function CvView({
  open,
  setOpen,
  selectFirst,
  selectSecond,
  selectThird,
  color,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const componentRefFirst = React.useRef(null);
  const handleClose = () => {
    setOpen(false);
  };
  const handleAfterPrint = React.useCallback(() => {
    setOpen(false);
  }, []);
  const reactToPrintTrigger = React.useCallback(() => {
    return (
      <Button onClick={handleClose} autoFocus variant="contained">
        PDF EXPORT
      </Button>
    );
  }, []);
  const reactToPrintContent = React.useCallback(() => {
    return componentRefFirst.current;
  }, [componentRefFirst.current, selectFirst, selectSecond, selectThird]);
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        className="cv-view-dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          {selectFirst && (
            <CvTemplate1DownloadForm color={color} ref={componentRefFirst} />
          )}
          {selectSecond && (
            <CvTemplate2DownloadForm color={color} ref={componentRefFirst} />
          )}
          {selectThird && (
            <CvTemplate3DownloadForm color={color} ref={componentRefFirst} />
          )}
        </DialogContent>
        <DialogActions className="d-flex justify-content-between m-2">
          <Button
            onClick={handleClose}
            autoFocus
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          <ReactToPrint
            content={reactToPrintContent}
            onAfterPrint={handleAfterPrint}
            trigger={reactToPrintTrigger}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
