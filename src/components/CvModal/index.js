import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { CvTemplate1 } from "../cvTemplate1";

import TypeDrowpDown from "./cvTypeDropdown";
import { CvTemplate2 } from "../cvTemplate2";
import { CvTemplate3 } from "../cvTemplate3";
import ReactToPrint from "react-to-print";

export default function CvModal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const componentRefFirst = React.useRef(null);
  const componentRefSecond = React.useRef(null);
  const componentRefThird = React.useRef(null);
  const [color, setColor] = React.useState("#c0cbd7");
  const [selectFirst, setSelectFirst] = useState(false);
  const [selectSecond, setSelectSecond] = useState(true);
  const [selectThird, setSelectThird] = useState(false);
  const reactToPrintContent = React.useCallback(() => {
    if (selectFirst) {
      return componentRefFirst.current;
    } else if (selectSecond) {
      return componentRefSecond.current;
    } else {
      return componentRefThird.current;
    }
  }, [
    componentRefFirst.current,
    componentRefThird.current,
    componentRefSecond.current,
    selectFirst,
    selectSecond,
    selectThird,
  ]);
  function handleSelection(id) {
    if (id === 1) {
      setSelectFirst(true);
      setSelectSecond(false);
      setSelectThird(false);
    } else if (id === 2) {
      setSelectFirst(false);
      setSelectSecond(true);
      setSelectThird(false);
    } else {
      setSelectFirst(false);
      setSelectSecond(false);
      setSelectThird(true);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const colors = [
    "#c0cbd7",
    "#dddddd",
    "#ffffff",
    "#9da7a2",
    "#e6e9e6",
    "#c31924",
    "#237ec5",
  ];
  const reactToPrintTrigger = React.useCallback(() => {
    return (
      <Button onClick={handleClose} autoFocus variant="contained">
        PDF EXPORT
      </Button>
    );
  }, []);
  const handleAfterPrint = React.useCallback(() => {
    // setOpen(false);
  }, []);
  return (
    <div className="cv-modal-container">
      <Button variant="outlined" onClick={handleClickOpen}>
        Custom Resume
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="cv-modal-dialog"
      >
        <DialogContent className="cv-modal-content">
          <div className="cv-modal-content-container">
            <DialogTitle id="responsive-dialog-title">
              PDF Export Configurator
            </DialogTitle>
            <Divider />
            <DialogContentText>
              <div className="select-resume-title">Select Resume Type</div>
              <div className="select-resume-type">
                <CvTemplate1
                  ref={componentRefFirst}
                  handleSelection={handleSelection}
                  selectFirst={selectFirst}
                  color={color}
                />
                <CvTemplate2
                  handleSelection={handleSelection}
                  ref={componentRefSecond}
                  selectSecond={selectSecond}
                  color={color}
                />
                <CvTemplate3
                  ref={componentRefThird}
                  handleSelection={handleSelection}
                  selectThird={selectThird}
                  color={color}
                />
              </div>
              <div className="select-resume-color-scheme mt-4">
                <div>Choose your color scheme</div>
                <div className="d-flex mt-3">
                  {colors.map((val, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          setColor(val);
                        }}
                        style={{
                          backgroundColor: val,
                          width: "24px",
                          height: "24px",
                          marginRight: "14px",
                          border: "1px solid #c9c9c9",
                          cursor: "pointer",
                          boxShadow:
                            color === val ? "0px 0px 3px 3px #4284b3" : "",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="mt-4">Choose your language and CV type</div>
                <TypeDrowpDown />
              </div>
            </DialogContentText>
            <DialogActions>
              <ReactToPrint
                content={reactToPrintContent}
                onAfterPrint={handleAfterPrint}
                trigger={reactToPrintTrigger}
              />
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
