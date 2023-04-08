import React from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "./Skelaton.module.css";

function Skelaton() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
        <div className={styles.container}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
        <div className={styles.container}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
        <div className={styles.container}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
        <div className={styles.container}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>
        <div className={styles.container}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </div>

      </div>
    </div>
  );
}

export default Skelaton;
