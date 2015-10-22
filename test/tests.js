import assert from "assert";
import {version as pkgVersion} from "../package.json";
import {version as srcVersion, sleep as srcSleep} from "../src/index.js";
import {version as libVersion, sleep as libSleep} from "../lib/index.js";

describe("jsnext-skeleton", () => {
  it("can be imported", () => {
    assert.strictEqual(pkgVersion, srcVersion);
    assert.strictEqual(pkgVersion, libVersion);
  });

  it("supports async", async () => {
    const start = Date.now();
    await Promise.all([
      srcSleep(100), srcSleep(100), srcSleep(100),
      libSleep(100), libSleep(100), libSleep(100)
    ]).then(hundreds => {
      assert.ok(hundreds.every(n => n === 100));
      assert.ok(Date.now() - start < 150);
    });
  });
});
