import type { Document } from "zerithdb-core";

export type Migration<T extends Record<string, any>> = {
  fromVersion: number;
  toVersion: number;
  migrate: (doc: Document<T>) => Document<T>;
};

export const migrations: Migration<any>[] = [];