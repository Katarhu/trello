export const ROUTES = {
  INDEX: "/",
  BOARDS: "/boards",
  BOARD_ID: (id?: string) => (id ? `/boards/${id}` : "/boards/:id"),
  NON_EXISTING: "*",
} as const;
