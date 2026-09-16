import "../../styles/TopBar.css";
import logo from "../../assets/LogoSavash.png";

function TopBar() {
  const handleBuilderClick = () => {
    const builder = document.getElementById("armar");

    builder?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="topbar">
      <div className="topbar__logo">
        <img
          src={logo}
          alt="Savash"
          className="topbar__logo-image"
        />
        MENU
      </div>

      <button
        type="button"
        className="topbar__action"
        onClick={handleBuilderClick}
      >
        Armar mi bebida
      </button>
    </header>
  );
}

export default TopBar;