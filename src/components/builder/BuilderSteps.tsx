import type { BuilderStep } from "../../types/menu";
import "../../styles/BuilderSteps.css";

interface BuilderStepsProps {
  steps: BuilderStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

function BuilderSteps({
  steps,
  currentStep,
  onStepChange,
}: BuilderStepsProps) {
  return (
    <div className="builder-steps">
      {steps.map((step, index) => {
        const active = index === currentStep;

        return (
          <button
            key={step.id}
            type="button"
            className={`builder-step ${
              active
                ? "builder-step--active"
                : ""
            }`}
            onClick={() => onStepChange(index)}
          >
            <span className="builder-step__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="builder-step__line" />

            <span className="builder-step__name">
              {step.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default BuilderSteps;