import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";


const SearchBox = () => {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.inputWrap}>
      <label htmlFor="filterId" className={css.inputLabel}>
        Find сontacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;