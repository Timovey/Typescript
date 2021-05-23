import { Request, Response, Express } from "express";

export class Route {
  public constructor(
    public path: string,
    public method: "get" | "post" | "put" | "delete",
    public action: (request: Request, response: Response) => Promise<void>
  ) {}
}

/**
 * All application routes.
 */
const AppRoutes: Route[] = [

  
];

export function initRoutes(app: Express) {
  AppRoutes.forEach((route) => {
    app[route.method](
      route.path,
      (request: Request, response: Response, next: Function) => {
        route
          .action(request, response)
          .then(() => next)
          .catch((err) => next(err));
      }
    );
  });
}