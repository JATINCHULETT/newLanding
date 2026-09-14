import { createFileRoute } from "@tanstack/react-router";
import { StudentsPage } from "./students";

export const Route = createFileRoute("/student")({
  component: StudentsPage,
});
