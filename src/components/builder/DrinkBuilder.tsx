import { useState } from "react";
import { smoothieSteps } from "../../data/menu";

import BuilderSteps from "./BuilderSteps";
import BuilderOptions from "./BuilderOptions";
import DrinkPreview from "./DrinkPreview";

import "../../styles/drinkBuilder.css";

function DrinkBuilder() {
  const [currentStep, setCurrentStep] = useState(0);

  const [selections, setSelections] =
    useState<Record<number, string[]>>({
      1: [],
      2: [],
      3: [],
    });

  const currentStepData =
    smoothieSteps[currentStep];

  const handleSelect = (optionId: string) => {
    const stepId = currentStepData.id;

    const currentSelections =
      selections[stepId] ?? [];

    const maxSelections =
      currentStepData.maxSelections ?? 1;

    // Si ya estaba seleccionado, lo quitamos.
    if (
      currentSelections.includes(optionId)
    ) {
      setSelections((previous) => ({
        ...previous,
        [stepId]: currentSelections.filter(
          (id) => id !== optionId
        ),
      }));

      return;
    }

    // No permitir más selecciones del máximo.
    if (
      currentSelections.length >=
      maxSelections
    ) {
      return;
    }

    const newSelections = [
      ...currentSelections,
      optionId,
    ];

    setSelections((previous) => ({
      ...previous,
      [stepId]: newSelections,
    }));

    // Avanza únicamente cuando el paso está completo.
    if (
      newSelections.length ===
        maxSelections &&
      currentStep <
        smoothieSteps.length - 1
    ) {
      window.setTimeout(() => {
        setCurrentStep(
          (previous) => previous + 1
        );
      }, 180);
    }
  };

  return (
    <section
      id="armar"
      className="builder-section"
    >
      <div className="builder">
        <div className="builder__header">
          <div className="builder__eyebrow">
            Hazlo tuyo
          </div>

          <h2 className="builder__title">
            Arma tu batido.
          </h2>

          <p className="builder__intro">
            Combina dos bases, elige tu aloe
            y termina con tu té favorito.
          </p>
        </div>

        <BuilderSteps
          steps={smoothieSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          selections={selections}
        />

        <div className="builder__grid">
          <BuilderOptions
            step={currentStepData}
            selectedOptions={
              selections[
                currentStepData.id
              ] ?? []
            }
            onSelect={handleSelect}
          />

          <DrinkPreview
            steps={smoothieSteps}
            selections={selections}
          />
        </div>
      </div>
    </section>
  );
}

export default DrinkBuilder;