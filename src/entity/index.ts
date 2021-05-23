import { ConnectionOptions } from "typeorm";
import { Component } from "./component";


export const Entities = [
  Component,
];

export const config = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "test",
  logging: true,
  entities: Entities,
} as ConnectionOptions;

export { Component } ;