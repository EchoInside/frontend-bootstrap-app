import styles from "./Version.module.css";

function VersionTile() {
  return (
    <div className={styles.panel}>
      <div>ENV: {import.meta.env.VITE_ENVIRONMENT}</div>
      <div>VER: {__APP_VERSION__}</div>
    </div>
  );
}

export default VersionTile;
