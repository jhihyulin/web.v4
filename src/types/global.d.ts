export {};

declare global {
  interface Window {
    /**
     * Google AdSense queue. The script reads from this queue via push().
     */
    adsbygoogle?: unknown[];
  }
}
