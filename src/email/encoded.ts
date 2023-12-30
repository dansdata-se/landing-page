/*
 * Email addresses are not "true" secrets but should be obfuscated
 * and require client-side work to decode to reduce the risk of spam.
 */

export const decodeEmail = (encoded: string) =>
  atob(encoded).split("").reverse().join("");

export const encodedSupportEmail = "ZXMuYXRhZHNuYWRAdHJvcHB1cw==";
