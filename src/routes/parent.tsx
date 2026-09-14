import { createFileRoute } from "@tanstack/react-router";
import { ParentsPage } from "./parents";

export const Route = createFileRoute("/parent")({
  component: ParentsPage,
});
