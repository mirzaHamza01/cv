import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UserImage from "../../images/img.jpg";

export const CvTemplate3 = React.forwardRef(
  ({ handleSelection, selectThird, color }, ref) => {
    return (
      <Paper
        ref={ref}
        sx={{ flexGrow: 1 }}
        onClick={() => {
          handleSelection(3);
        }}
        style={
          selectThird ? { boxShadow: "0px 0px 3px 3px rgb(29 119 183)" } : null
        }
        className="cv-template3-box"
      >
        <Grid spacing={2} className="cv-template-contanier">
          {/* <Grid
          xs={3}
          className="cv-template-side-bar"
          style={{ backgroundColor: color }}
        ></Grid> */}
          <Grid xs className="cv-template-body">
            <div className="cv-template-body-container">
              <div className="cv-template-body-title-container">
                <img width={45} height={50} alt="171x180" src={UserImage} />
                <div className="cv-template-body-title">
                  PROF. <br /> DR. MIRZA HAMZA
                </div>
              </div>
              <div
                className="cv-template-body-detail"
                style={{
                  backgroundColor: color,
                  color:
                    (color === "#c31924" ||
                      color === "#237ec5" ||
                      color === "#9da7a2") &&
                    "white",
                }}
              >
                <div className="cv-template-body-detail-title">
                  Firma: <br /> <br /> Website: <br />
                  LinkedIn-Account: <br />
                  Xing-Account: <br /> E-Mail: <br />
                  <br /> Telefon: <br /> Telefon mobil: <br /> <br /> Anschrift:
                </div>
                <div className="cv-template-body-detail-text">
                  Marvel Inc. <br /> <br /> www.website.biz <br />
                  www.linkedin.com/wonder-woman <br />
                  www.xing.de/wonder-woman <br /> wonder.woman@website.biz{" "}
                  <br />
                  <br /> +49 221 123 446 78
                  <br />
                  +49 151 123 446 78 <br /> <br /> 51147 Köln <br />
                  Heidestraße 17
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
);
