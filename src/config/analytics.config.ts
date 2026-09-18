// IDs only ever come from environment variables — never hardcoded per brief
// section 57. Leave unset to disable a given integration entirely.
export const analyticsConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
};
