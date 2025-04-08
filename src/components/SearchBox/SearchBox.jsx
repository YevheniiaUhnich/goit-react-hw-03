import s from "./SearchBox.module.css";

const SearchBox = ({ contactValue, setContactValue }) => {
  return (
    <div className={s.searchWrapper}>
      <p className={s.titleSearch}>Find contacts by name</p>
      <input
        value={contactValue}
        onChange={(e) => setContactValue(e.target.value)}
        className={s.input}
      />
    </div>
  );
};
export default SearchBox;
