import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export const CvTemplate1DownloadForm = React.forwardRef(({ color }, ref) => {
  return (
    <div ref={ref} className="cv-template1-download-box">
      <Paper sx={{ flexGrow: 1 }}>
        <Grid spacing={2} className="cv-template-download-contanier">
          <Grid
            xs={3}
            className="cv-template-side-bar"
            style={{ backgroundColor: color }}
          ></Grid>
          <Grid xs className="cv-template-body">
            <div className="w-100">
              <div className="cv-template-body-title">
                PROF. <br /> DR. MIRZA HAMZA
              </div>
              <div className="cv-template-body-detail">
                <div className="cv-template-body-detail-title">
                  <div className="d-flex ">
                    <div className="head">Firma:</div>
                    <div className="detail"> Marvel Inc.</div>
                  </div>
                  <br />
                  <div className="d-flex ">
                    <div className="head">Website:</div>
                    <div> www.website.biz</div>
                  </div>
                  <div className="d-flex ">
                    <div className="head">LinkedIn-Account:</div>
                    <div> www.linkedin.com/wonder-woman</div>
                  </div>
                  <div className="d-flex ">
                    <div className="head"> Xing-Account:</div>
                    <div> www.xing.de/wonder-woman</div>
                  </div>
                  <div className="d-flex ">
                    <div className="head">E-Mail:</div>
                    <div> wonder.woman@website.biz</div>
                  </div>
                  <br />
                  <div className="d-flex ">
                    <div className="head">Telefon:</div>
                    <div> +49 221 123 446 78</div>
                  </div>
                  <div className="d-flex ">
                    <div className="head">Telefon mobil:</div>
                    <div> +49 151 123 446 78</div>
                  </div>
                  <br />
                  <div className="d-flex ">
                    <div className="head">Anschrift:</div>
                    <div>
                      51147 Köln <br />
                      Heidestraße 17
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
