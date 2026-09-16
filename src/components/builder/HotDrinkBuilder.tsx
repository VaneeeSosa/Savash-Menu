import { useState } from "react";

import type {
  BuilderOption,
} from "../../types/menu";

import BuilderSteps from "./BuilderSteps";

import "../../styles/HotDrinkBuilder.css";

const hotTeaOptions: BuilderOption[] = [
  {
    id: "jamaica-pitaya",
    name: "Jamaica con pitaya",
  },
  {
    id: "limon",
    name: "Limón",
  },
  {
    id: "chai",
    name: "Chai",
  },
  {
    id: "hierbas",
    name: "Hierbas",
  },
  {
    id: "granada",
    name: "Granada",
  },
  {
    id: "menta",
    name: "Menta",
  },
  {
    id: "nrg",
    name: "NRG",
  },
  {
    id: "natural-g",
    name: "Natural G",
  },
  {
    id: "manzana-verde",
    name: "Manzana verde",
  },
];

const drinkGroups = [
  {
    title: "Té + aloe",
    options: [
      {
        id: "protein-mix",
        name: "Protein mix",
      },
      {
        id: "ponche-frutas",
        name: "Ponche de frutas",
      },
      {
        id: "mango-durazno",
        name: "Mango durazno",
      },
      {
        id: "glow-cd",
        name: "Glow CD",
        description: "Antigripal",
      },
      {
        id: "sueno-profundo",
        name: "Sueño profundo",
      },
    ],
  },

  {
    title: "Con fibra",
    options: [
      {
        id: "fibra-manzana",
        name: "Manzana",
      },
      {
        id: "fibra-pina-colada",
        name: "Piña colada",
      },
    ],
  },

  {
    title: "Con café",
    options: [
      {
        id: "cafe",
        name: "Café",
      },
      {
        id: "capuchino",
        name: "Capuchino",
      },
      {
        id: "moka",
        name: "Moka",
      },
      {
        id: "latte",
        name: "Latte",
      },
    ],
  },
];

function HotDrinkBuilder() {
  const [currentStep, setCurrentStep] =
    useState(0);

  const [tea, setTea] = useState<
    string | null
  >(null);

  const [drink, setDrink] = useState<
    string | null
  >(null);

  const selectTea = (id: string) => {
    setTea(id);

    window.setTimeout(() => {
      setCurrentStep(1);
    }, 180);
  };

  const selectDrink = (id: string) => {
    setDrink(id);
  };

  const selectedTea = hotTeaOptions.find(
    (option) => option.id === tea
  );

  const allDrinkOptions =
    drinkGroups.flatMap(
      (group) => group.options
    );

  const selectedDrink =
    allDrinkOptions.find(
      (option) => option.id === drink
    );

  return (
    <section
      id="calientes"
      className="hot-builder-section"
    >
      <div className="hot-builder">
        <div className="hot-builder__header">
          <div className="hot-builder__eyebrow">
            Hazlo a tu manera
          </div>

          <h2 className="hot-builder__title">
            Arma tu bebida caliente.
          </h2>

          <p className="hot-builder__intro">
            Elige tu té quemador y después
            selecciona la bebida que quieres.
          </p>
        </div>

        <BuilderSteps
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          steps={[
            {
              id: 1,
              name: "Té quemador",
              options: [],
            },
            {
              id: 2,
              name: "Bebida",
              options: [],
            },
          ]}
        />

        <div className="hot-builder__content">
          <div className="hot-builder__options">
            {currentStep === 0 ? (
              <div className="hot-builder__grid">
                {hotTeaOptions.map(
                  (option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`hot-builder__option ${
                        tea === option.id
                          ? "hot-builder__option--selected"
                          : ""
                      }`}
                      onClick={() =>
                        selectTea(
                          option.id
                        )
                      }
                    >
                      <strong>
                        {option.name}
                      </strong>
                    </button>
                  )
                )}
              </div>
            ) : (
              <div className="hot-builder__groups">
                {drinkGroups.map(
                  (group) => (
                    <div
                      key={group.title}
                      className="hot-builder__group"
                    >
                      <h3>
                        {group.title}
                      </h3>

                      <div className="hot-builder__grid">
                        {group.options.map(
                          (option) => (
                            <button
                              key={option.id}
                              type="button"
                              className={`hot-builder__option ${
                                drink === option.id
                                  ? "hot-builder__option--selected"
                                  : ""
                              }`}
                              onClick={() =>
                                selectDrink(
                                  option.id
                                )
                              }
                            >
                              <strong>
                                {option.name}
                              </strong>

                              {option.description && (
                                <span>
                                  {
                                    option.description
                                  }
                                </span>
                              )}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <aside className="hot-builder__preview">
            <div>
              <div className="hot-builder__preview-top">
                Tu creación
              </div>

              <div className="hot-builder__preview-name">
                {selectedDrink?.name ??
                  "Elige tu bebida"}
              </div>

              <div className="hot-builder__tags">
                {selectedTea && (
                  <span className="hot-builder__tag">
                    {selectedTea.name}
                  </span>
                )}

                {selectedDrink && (
                  <span className="hot-builder__tag">
                    {selectedDrink.name}
                  </span>
                )}
              </div>
            </div>

            <div className="hot-builder__status">
              {tea && drink
                ? "Combinación completa"
                : tea
                  ? "Elige tu bebida"
                  : "Elige tu té"}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default HotDrinkBuilder;