const LABELS: Record<string, string> = {
  shopify: "Shopify",
  bigcommerce: "BigCommerce",
  woocommerce: "WooCommerce",
  squarespace: "Squarespace",
  wix: "Wix",
  ecwid: "Ecwid",
  magento: "Adobe Commerce (Magento)",
  salesforce: "Salesforce Commerce Cloud",
  other: "Website",
  unknown: "Website",
};

export function platformLabel(p: string): string {
  return LABELS[p] || "Website";
}
