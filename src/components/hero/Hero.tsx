import "../../styles/Hero.css";

import heroProduct from "../../assets/images/hero-product.png";

function Hero() {
  const handleScroll = () => {
    const target = document.getElementById("batidos");

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero">
      <div className="hero__background-circle" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          Smoothie · café · snacks
        </div>

        <h1 className="hero__title">
          elige.
          <br />
          mezcla.
          <br />
          <em>disfruta.</em>
        </h1>

        <p className="hero__description">
          Descubre nuestros favoritos o crea una combinación
          a tu manera. Una carta sencilla, rápida y pensada
          para explorar.
        </p>

        <button
          type="button"
          className="hero__note"
          onClick={handleScroll}
        >
          <span className="hero__note-dot" />
          Tu bebida, tus reglas.
        </button>
      </div>

      <div className="hero__drink">
        <img
          src={heroProduct}
          alt="Bebida"
          className="hero__drink-image"
        />

        <span className="hero__number">
          01
        </span>
      </div>
    </section>
  );
}

export default Hero;