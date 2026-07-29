import { clientPaths } from "../framework.data";

import {
  ClientPathsRow,
  ClientPathCard,
  ClientPathIcon,
  ClientPathContent,
  ClientPathTitle,
  ClientPathDescription,
  ClientPathConnector,
} from "./client_paths.styles";

export const ClientPaths = () => {
  const ideaPath = clientPaths[0];
  const definedPath = clientPaths[1];

  return (
    <ClientPathsRow>
      <ClientPathCard $tone={ideaPath.tone}>
        <ClientPathIcon $tone={ideaPath.tone}>
          <img
            src={ideaPath.icon}
            alt={ideaPath.title}
            width={80}
            height={80}
          />
        </ClientPathIcon>

        <ClientPathContent>
          <ClientPathTitle $tone={ideaPath.tone}>
            {ideaPath.title}
          </ClientPathTitle>

          <ClientPathDescription>{ideaPath.description}</ClientPathDescription>
        </ClientPathContent>
      </ClientPathCard>

      <ClientPathConnector aria-hidden="true" />

      <ClientPathCard $tone={definedPath.tone}>
        <ClientPathIcon $tone={definedPath.tone}>
          <img
            src={definedPath.icon}
            alt={definedPath.title}
            width={80}
            height={80}
          />
        </ClientPathIcon>

        <ClientPathContent>
          <ClientPathTitle $tone={definedPath.tone}>
            {definedPath.title}
          </ClientPathTitle>

          <ClientPathDescription>
            {definedPath.description}
          </ClientPathDescription>
        </ClientPathContent>
      </ClientPathCard>
    </ClientPathsRow>
  );
};
