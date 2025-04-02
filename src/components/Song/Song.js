import styles from "./Song.module.css";
const Song = ({ song }) => {
  return (
    <div>
      <h3 className={styles.song}>
        <span className={styles.songSpan}> song:</span> {song.title}
      </h3>
      <p className={styles.artist}>
        <span className={styles.artistSpan}> artist:</span> {song.artist}
      </p>
    </div>
  );
};

export default Song;
