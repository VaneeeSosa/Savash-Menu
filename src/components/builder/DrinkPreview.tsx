import type { BuilderStep } from "../../types/menu";

import "../../styles/DrinkPreview.css";

interface DrinkPreviewProps {
  steps: BuilderStep[];
  selections: Record<number, string[]>;
  title?: string;
}

function DrinkPreview({
  steps,
  selections,
  title = "Tu batido",
}: DrinkPreviewProps) {
  const selectedItems = steps.flatMap(
    (step) => {
      const selectedIds =
        selections[step.id] ?? [];

      return selectedIds
        .map((selectedId) => {
          const option =
            step.options.find(
              (item) =>
                item.id === selectedId
            );

          if (!option) return null;

          return {
            ...option,
            stepName: step.name,
          };
        })
        .filter(Boolean);
    }
  );

  const bases =
    steps[0]?.options.filter((option) =>
      selections[1]?.includes(option.id)
    ) ?? [];

  const firstBase =
    bases[0]?.name ?? "Elige tus bases";

  const totalSelections =
    selectedItems.length;

  const totalRequired =
    steps.reduce(
      (total, step) =>
        total +
        (step.maxSelections ?? 1),
      0
    );

  const completed =
    totalSelections === totalRequired;

  return (
    <aside className="drink-preview">
      <div>
        <div className="drink-preview__top">
          Tu creación
        </div>

        <div className="drink-preview__name">
          {totalSelections > 0
            ? firstBase
            : title}
        </div>

        <div className="drink-preview__tags">
          {selectedItems
            .slice(
              bases.length > 0
                ? 0
                : 0
            )
            .map((item) => (
              <span
                key={`${item!.stepName}-${item!.id}`}
                className="drink-preview__tag"
              >
                {item!.name}
              </span>
            ))}
        </div>
      </div>

      <div
        className={`drink-preview__status ${
          completed
            ? "drink-preview__status--complete"
            : ""
        }`}
      >
        {completed
          ? "Combinación completa"
          : `${totalSelections}/${totalRequired} elecciones`}
      </div>
    </aside>
  );
}

export default DrinkPreview;