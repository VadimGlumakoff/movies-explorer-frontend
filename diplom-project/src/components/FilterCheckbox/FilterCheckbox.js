import "./FilterCheckbox.css";

function FilterCheckbox({ checkboxClick, checkbox }) {
  return (
    <div className="check-box">
      <label className="check-box__container">
        <input
          type="checkbox"
          onChange={checkboxClick}
          checked={checkbox}
        ></input>
        <span className="check-box__slider check-box__slider_round"></span>
      </label>
      <label className="check-box__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
