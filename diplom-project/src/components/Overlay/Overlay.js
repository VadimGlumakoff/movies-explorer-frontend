import "./Overlay.css";

function Overlay({ openBurger, closeBurger, children }) {
  const handleClickByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeBurger();
    }
  };
  return (
    <div
      className={`overlay ${openBurger ? "overlay_is_opened" : ""}`}
      onClick={handleClickByOverlay}
    >
      {children}
    </div>
  );
}

export default Overlay;
