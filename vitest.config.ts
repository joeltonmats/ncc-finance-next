import { defineConfig } from "vitest/config";

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./tests/unit/coverage",
    },
  },
});
