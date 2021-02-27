import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter-checkbox">
      <button type="button" className="filter-checkbox__handler" />
      <p className="filter-checkbox__option">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;
