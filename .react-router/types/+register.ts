import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/about": {};
  "/experience": {};
  "/resume": {};
  "/projects": {};
  "/blog": {};
  "/courses": {};
};