import { createFileRoute } from "@tanstack/react-router";
import { TeachersPage } from "./teachers";

export const Route = createFileRoute("/teacher")({
  component: TeachersPage,
});
