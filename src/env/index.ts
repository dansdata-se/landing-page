import { envsafe, str } from "envsafe";

/**
 * Used for environment variables representing e.g. passwords or other
 * credential tokens that should not be shared in git and where a local
 * development fallback is not possible.
 *
 * An example of this is image storage. We use Cloudflare for our images.
 * However, our Cloudflare credentials should not be shared in git and we
 * cannot provide "development credentials" for anyone cloning the code from
 * GitHub either.
 */
export const ENVVAR_UNSET = "{unset_envvar}";

// You can override any of these variables by creating a
// file named `.env.{development|test}.local` at the root of the repository
// and assigning overrides such as:
// ```dotenv
// CLOUDFLARE_ACCOUNT_HASH="myPersonalAccountHash"
// ```
//
// * `.env.development.local` is used in development builds (`npm run dev`).
// * `.env.test.local` is used for tests (`npm run test:all`)
//
// ---
//
// This object MUST NOT include `process.env.NODE_ENV`
//
// By default, the compiler is able to eliminate code such as
// ```ts
// if (process.env.NODE_ENV === "development") {
//   //...
// }
// ```
// However, this does not work if NODE_ENV is loaded via envsafe.
export default envsafe({
  // Logging
  LOG_LEVEL: str({
    devDefault: "debug",
    default: "info",
    choices: ["trace", "debug", "info", "warn", "error", "fatal", "silent"],
  }),

  // Vercel system environment variables
  // https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables
  VERCEL_GIT_COMMIT_REF: str({
    devDefault: ENVVAR_UNSET,
    input:
      // Server side
      process.env.VERCEL_GIT_COMMIT_REF ??
      // Client side
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF,
  }),
  VERCEL_GIT_COMMIT_SHA: str({
    devDefault: ENVVAR_UNSET,
    input:
      // Server side
      process.env.VERCEL_GIT_COMMIT_SHA ??
      // Client side
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
  }),
});
