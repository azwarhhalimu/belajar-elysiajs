import { Elysia } from "elysia";

export type itRoutingAdmin = Elysia<
  "/admin",
  false,
  {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
  },
  {
    type: {};
    error: {};
  },
  {
    schema: {};
    macro: {};
  },
  {},
  {
    derive: {};
    resolve: {};
    schema: {};
  },
  {
    derive: {};
    resolve: {};
    schema: {};
  }
>;
