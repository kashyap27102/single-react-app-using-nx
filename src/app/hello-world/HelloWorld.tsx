import styles from "./HelloWorld.module.css";

export function HelloWorld() {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to HelloWorld!</h1>
    </div>
  );
}

export default HelloWorld;
