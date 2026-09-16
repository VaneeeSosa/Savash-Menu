import type { BuilderStep } from "../../types/menu";
import "../../styles/BuilderOptions.css";


interface BuilderOptionsProps {
  step: BuilderStep;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
}

function BuilderOptions({
  step,
  selectedOption,
  onSelect,
}: BuilderOptionsProps) {
  return (
    <div className="builder-options">
      <div className="builder-options__grid">
        {step.options.map((option) => {
          const selected =
            selectedOption === option.id;

          return (
            <button
              key={option.id}
              type="button"
              className={`builder-option ${
                selected
                  ? "builder-option--selected"
                  : ""
              }`}
              onClick={() => onSelect(option.id)}
            >
              <strong>
                {option.name}
              </strong>

              {option.description && (
                <span>
                  {option.description}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BuilderOptions;