import { useState } from "react";

function ButtonSave({ saveMovies, data }) {
  const [activeLike, setActiveLike] = useState(false);

  const handleLike = () => {
    saveMovies(data);
    setActiveLike(true);
  };

  return (
    <button
      className={activeLike ? "card__button_active" : "card__button"}
      onClick={handleLike}
      type="button"
    />
  );
}

export default ButtonSave;
