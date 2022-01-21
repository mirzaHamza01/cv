import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UserImage from "../../../images/img.jpg";

export const CvTemplate3DownloadForm = React.forwardRef(({ color }, ref) => {
  return (
    <div ref={ref} className="cv-template3-download-box">
      <Paper sx={{ flexGrow: 1 }}>
        <Grid spacing={2}>
          <Grid xs className="cv-template-body">
            <div className="cv-template-body-container">
              <div className="cv-template-body-title-container">
                <div className="d-flex ">
                  <img width={240} height={215} alt="171x180" src={UserImage} />
                  <div className="cv-template-body-title">
                    PROF. <br /> DR. MIRZA HAMZA
                  </div>
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
                  <div className="w-75">
                    <div className="d-flex ">
                      <div className="head">Firma:</div>
                      <div className="detail"> Marvel Inc.</div>
                    </div>
                    <br />
                    <div className="d-flex ">
                      <div className="head">Website:</div>
                      <div className="detail"> www.website.biz</div>
                    </div>
                    <div className="d-flex ">
                      <div className="head">LinkedIn-Account:</div>
                      <div className="detail">
                        {" "}
                        www.linkedin.com/wonder-woman
                      </div>
                    </div>
                    <div className="d-flex ">
                      <div className="head"> Xing-Account:</div>
                      <div className="detail"> www.xing.de/wonder-woman</div>
                    </div>
                    <div className="d-flex ">
                      <div className="head">E-Mail:</div>
                      <div className="detail"> wonder.woman@website.biz</div>
                    </div>
                    <br />
                    <div className="d-flex ">
                      <div className="head">Telefon:</div>
                      <div className="detail"> +49 221 123 446 78</div>
                    </div>
                    <div className="d-flex ">
                      <div className="head">Telefon mobil:</div>
                      <div className="detail"> +49 151 123 446 78</div>
                    </div>
                    <br />
                    <div className="d-flex ">
                      <div className="head">Anschrift:</div>
                      <div className="detail">
                        51147 Köln <br />
                        Heidestraße 17
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
});
