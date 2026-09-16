import { useState } from "react";
import { smoothieSteps } from "../../data/menu";

import BuilderSteps from "./BuilderSteps";
import BuilderOptions from "./BuilderOptions";
import DrinkPreview from "./DrinkPreview";

import "../../styles/drinkBuilder.css";

function DrinkBuilder() {
  const [currentStep, setCurrentStep] = useState(0);

  const [selections, setSelections] = useState<
    Record<number, string | null>
  >({
    1: null,
    2: null,
    3: null,
  });

  const currentStepData = smoothieSteps[currentStep];

  const handleSelect = (optionId: string) => {
    const stepId = currentStepData.id;

    setSelections((previous) => ({
      ...previous,
      [stepId]: optionId,
    }));

    /*
      Al seleccionar una opción avanzamos
      automáticamente al siguiente paso.
    */
    if (currentStep < smoothieSteps.length - 1) {
      window.setTimeout(() => {
        setCurrentStep((previous) => previous + 1);
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
            Tres pasos. Una combinación que es
            completamente tuya.
          </p>
        </div>

        <BuilderSteps
          steps={smoothieSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        <div className="builder__grid">
          <BuilderOptions
            step={currentStepData}
            selectedOption={
              selections[currentStepData.id]
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