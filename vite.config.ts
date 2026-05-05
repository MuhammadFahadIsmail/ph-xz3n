// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const deployTarget = process.env.DEPLOY_TARGET ?? "cloudflare";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
    // Keep Cloudflare plugin only for Cloudflare-targeted builds.
    cloudflare: deployTarget === "cloudflare" ? {} : false,

    vite: {
        // GitHub Pages needs a repo subpath; Vercel/Cloudflare should use root.
        base: isGitHubPages ? "/ph-xz3n/" : "/",
        // Nitro enables Vercel/Node deployment output for TanStack Start.
        plugins: deployTarget === "vercel" ? [nitro({ preset: "vercel" })] : [],
    },
});
