import { assert, describe, expect, test } from "vitest";

import { app_util } from "../src/app";

describe("App component", () => {
  test("assert", () => {
    assert(true);
  });

  test("expect", () => {
    expect(true).toBe(true);
  });

  test("snapshot", () => {
    expect(app_util()).toMatchSnapshot();
    expect(app_util()).toMatchInlineSnapshot('"x"');
  });
});
