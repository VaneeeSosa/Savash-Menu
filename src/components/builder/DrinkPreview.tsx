import type { BuilderStep } from "../../types/menu";
import "../../styles/DrinkPreview.css";

interface DrinkPreviewProps {
  steps: BuilderStep[];
  selections: Record<number, string | null>;
  title?: string;
}

function DrinkPreview({
  steps,
  selections,
  title = "Tu bebida",
}: DrinkPreviewProps) {
  const selectedOptions = steps
    .map((step) => {
      const selectedId =
        selections[step.id];

      const option = step.options.find(
        (item) => item.id === selectedId
      );

      return option;
    })
    .filter(Boolean);

  const base =
    selectedOptions[0]?.name ??
    "Elige una base";

  return (
    <aside className="drink-preview">
      <div>
        <div className="drink-preview__top">
          Tu creación
        </div>

        <div className="drink-preview__name">
          {selectedOptions.length > 0
            ? base
            : title === "Tu batido"
              ? "Elige una base"
              : "Elige tu bebida"}
        </div>

        <div className="drink-preview__tags">
          {selectedOptions
            .slice(1)
            .map((option) => (
              <span
                key={option!.id}
                className="drink-preview__tag"
              >
                + {option!.name}
              </span>
            ))}
        </div>
      </div>

      <div className="drink-preview__status">
        {selectedOptions.length ===
        steps.length
          ? "Combinación completa"
          : `${selectedOptions.length}/${steps.length} pasos`}
      </div>
    </aside>
  );
}

export default DrinkPreview;