import { useState } from "react";
import styles from "./AppliedCandidate.module.css";

export default function AppliedCandidate() {
  const [candidates, setCandidates] = useState(["Omkar", "Bhoir"]);
  return (
    <div className={styles.main}>
      <div className={styles.operational}></div>
      <div className={styles.seperatorBody}>
        <div className={styles.seperator}></div>
      </div>
      <div className={styles.displayRanking}>
        <div className={styles.rankingContainer}>
          <div className={styles.heading}>
            <p>Ranking</p>
          </div>
          <RankList candidates={candidates} />
        </div>
      </div>
    </div>
  );
}

const RankerItem = () => {
  return (
    <div>
      <li className={styles.rankingListItem}>
        <p>Omkar Bhoir</p>
        <div className={styles.btnContainer}>
          <button>V</button>
          <button>X</button>
        </div>
      </li>
    </div>
  );
};

const RankList = ({ candidates }) => {
  return (
    <div>
      <ul>{candidates && candidates.map((f) => <RankerItem />)}</ul>
    </div>
  );
};

// const FileItem = ({ file, deleteFile }) => {
//     return (
//       <>
//         <li className={styles.fileItem} key={file.name}>
//           {fileAltIcon}
//           <p>{file.name}</p>
//           <div className={styles.actions}>
//             <div className={styles.loading}></div>
//             {file.isUploading && <button className={styles.faSpin} onClick={deleteFile(file.name)}>{spinnerIcon}</button>}
//             {!file.isUploading && <button onClick={deleteFile(file.name)}>{trashIcon}</button>}
//           </div>
//         </li>
//       </>
//     );
//   };
