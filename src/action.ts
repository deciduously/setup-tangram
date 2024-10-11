export type Args = {
  rev?: string;
};

export type Output = {
  rev: string;
};

// FIXME - use canary.
const defaultCommit = "6811bf5f0c0a5c3803f5a064369f2b313a589748";

export default async (args: Args): Promise<Output> => {
  const output = {
    rev: args.rev ?? defaultCommit
  };
  return output;
}
