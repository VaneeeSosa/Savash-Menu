import type { BuilderStep } from "../../types/menu";

import "../../styles/BuilderOptions.css";

interface BuilderOptionsProps {
  step: BuilderStep;
  selectedOptions: string[];
  onSelect: (optionId: string) => void;
}

function BuilderOptions({
  step,
  selectedOptions,
  onSelect,
}: BuilderOptionsProps) {
  const maxSelections =
    step.maxSelections ?? 1;

  const reachedLimit =
    selectedOptions.length >= maxSelections;

  return (
    <div className="builder-options">
      <div className="builder-options__header">
        <div className="builder-options__counter">
          {selectedOptions.length}/
          {maxSelections}
        </div>

        <p className="builder-options__hint">
          {maxSelections > 1
            ? `Elige ${maxSelections} bases`
            : "Elige una opción"}
        </p>
      </div>

      <div className="builder-options__grid">
        {step.options.map((option) => {
          const selected =
            selectedOptions.includes(
              option.id
            );

          const disabled =
            reachedLimit && !selected;

          return (
            <button
              key={option.id}
              type="button"
              className={`builder-option ${
                selected
                  ? "builder-option--selected"
                  : ""
              } ${
                disabled
                  ? "builder-option--disabled"
                  : ""
              }`}
              onClick={() =>
                onSelect(option.id)
              }
              disabled={disabled}
            >
              <strong>
                {option.name}
              </strong>

              {option.description && (
                <span>
                  {option.description}
                </span>
              )}

              {selected && (
                <span className="builder-option__check">
                  ✓
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