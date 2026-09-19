import type { BuilderStep } from "../../types/menu";
import "../../styles/BuilderSteps.css";

interface BuilderStepsProps {
  steps: BuilderStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
  selections?: Record<number, string[]>;
}

function BuilderSteps({
  steps,
  currentStep,
  onStepChange,
  selections = {},
}: BuilderStepsProps) {
  return (
    <div className="builder-steps">
      {steps.map((step, index) => {
        const active = index === currentStep;

        const currentSelections =
          selections[step.id] ?? [];

        const completed =
          currentSelections.length >=
          (step.maxSelections ?? 1);

        return (
          <button
            key={step.id}
            type="button"
            className={`builder-step ${
              active
                ? "builder-step--active"
                : ""
            } ${
              completed
                ? "builder-step--completed"
                : ""
            }`}
            onClick={() =>
              onStepChange(index)
            }
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