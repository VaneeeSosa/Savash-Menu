import { useEffect, useState } from "react";

import "../../styles/CategoryNav.css";

const categories = [
  { id: "batidos", label: "Batidos" },
  { id: "frappes", label: "Frappes" },
  { id: "frias", label: "Bebidas frías" },
  { id: "calientes", label: "Bebidas calientes" },
  { id: "especialidades", label: "Especialidades" },
  { id: "snacks", label: "Nutri snacks" },
];

function CategoryNav() {
  const [activeCategory, setActiveCategory] =
    useState("batidos");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    setActiveCategory(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = categories
      .map((category) =>
        document.getElementById(category.id)
      )
      .filter(
        (
          section
        ): section is HTMLElement =>
          section !== null
      );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length === 0) {
          return;
        }

        setActiveCategory(
          visibleSections[0].target.id
        );
      },
      {
        root: null,
        rootMargin: "-24% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="category-nav"
      aria-label="Categorías del menú"
    >
      <div className="category-nav__inner">
        {categories.map((category) => {
          const isActive =
            activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              className={`category-nav__item ${
                isActive
                  ? "category-nav__item--active"
                  : ""
              }`}
              onClick={() =>
                handleScroll(category.id)
              }
              aria-current={
                isActive ? "page" : undefined
              }
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default CategoryNav;