import type { Document } from "zerithdb-core";

type Migration = (doc: any) => any;

const migrations: Record<number, Migration> = {
  1: (doc) => ({
    ...doc,
    _schemaVersion: 1,
  }),
};

export function upgradeDocument(doc: any) {
  let current = { ...doc };

  const version = current._schemaVersion ?? 0;

  for (let v = version + 1; v <= 1; v++) {
    const migrate = migrations[v];

    if (migrate) {
      current = migrate(current);
    }
  }

  return current;
}