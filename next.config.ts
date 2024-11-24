import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(nextConfig, {
  org: "skuratov",
  project: "project-winter",
  silent: !process.env.CI,
  // Используем нестабильные опции для добавления dryRun
  unstable_sentryWebpackPluginOptions: {
    // @ts-ignore
    dryRun: process.env.NODE_ENV === ("development" as any),
  },
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
