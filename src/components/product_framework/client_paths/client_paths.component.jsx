import { clientPaths } from "../product_framework.data";

import {
  ClientPathsRow,
  ClientPathCard,
  ClientPathIcon,
  ClientPathIconImage,
  ClientPathContent,
  ClientPathTitle,
  ClientPathDescription,
  ClientPathSelectionLabel,
} from "./client_paths.styles";

export const ClientPaths = ({ selectedPathId, onPathSelect }) => {
  return (
    <ClientPathsRow>
      {clientPaths.map((path) => {
        const isSelected = path.id === selectedPathId;

        return (
          <ClientPathCard
            key={path.id}
            type="button"
            $tone={path.tone}
            $isSelected={isSelected}
            aria-pressed={isSelected}
            onClick={() => onPathSelect(path.id)}
          >
            <ClientPathIcon $tone={path.tone}>
              <ClientPathIconImage src={path.icon} alt="" aria-hidden="true" />
            </ClientPathIcon>

            <ClientPathContent>
              <ClientPathSelectionLabel
                $tone={path.tone}
                $isSelected={isSelected}
              >
                {isSelected ? "Selected path" : "Choose this path"}
              </ClientPathSelectionLabel>

              <ClientPathTitle $tone={path.tone}>{path.title}</ClientPathTitle>

              <ClientPathDescription>{path.description}</ClientPathDescription>
            </ClientPathContent>
          </ClientPathCard>
        );
      })}
    </ClientPathsRow>
  );
};
