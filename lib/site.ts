/**
 * Site-wide constants. `COPYRIGHT_YEAR` is evaluated once when the module is
 * imported, so it is a predictable value rather than a per-render timestamp.
 */
export const SITE = {
  name: "WowMade.AI",
  company: "Pinewood Labs, LLC",
  jurisdiction: "Delaware, USA",
  registrationNo: "0000000",
  email: "hello@wowmade.ai",
  copyrightYear: new Date().getFullYear(),
} as const;
