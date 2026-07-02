const projectImageModules = import.meta.glob('../assets/projects/**/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

const projectImageFolders: Record<string, string> = {
  'noon-reviews-importer': 'Noon Reviews',
  'my-outfit-builder': 'Outfit builder',
  'peakflow-progress-tracker': 'Peak flow',
  'buddy-cart': 'Shared Cart',
  'tekmetric-inventory-integration': 'tekmetric',
  'extend-b2b-aio': 'booking AIO',
  'extend-b2b-product-tables': 'Product table',
  'extend-booking-filters': 'Extend - Booking Filters for WooCommerce',
  'extend-subscriptions': 'Extend - Subscriptions Add-On for WooCommerce',
  'bigmpos-advanced-analytics': 'advance analytic bigmpos',
  'cyberize-it': 'Cyberize it',
};

function normalizePath(value: string) {
  return value
    .replace(/\\/g, '/')
    .replace(/[–—]/g, '-')
    .toLowerCase();
}

function frameNumber(path: string) {
  const match = path.match(/frame\s+(\d+)/i);
  return match ? Number(match[1]) : 0;
}

export function getProjectImages(projectId: string) {
  const folder = projectImageFolders[projectId];
  if (!folder) return [];

  const normalizedFolder = `/${normalizePath(folder)}/`;

  return Object.entries(projectImageModules)
    .filter(([path]) => normalizePath(path).includes(normalizedFolder))
    .sort(([a], [b]) => frameNumber(a) - frameNumber(b))
    .map(([, src]) => src);
}
