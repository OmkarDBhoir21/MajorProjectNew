import styles from "./AvailableJobsTemp.module.css";

export default function AvailableTempCard(
  {jobTitle,
  reqRole,
  experience,
  details,
  lastDate}
) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.items}>
        <p>Job Title:  {jobTitle}</p>
        <p>Job Role:  {reqRole}</p>
        <p>Experience:  {experience}</p>
        <p>Details:  {details}</p>
      </div>
        <p>Due Date:  {lastDate}</p>
    </div>
  );
}
