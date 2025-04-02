import styles from "./Search.module.css";
const Search = () => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>Search</h2>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search Artist or Songs"
      ></input>
    </div>
  );
};

export default Search;
