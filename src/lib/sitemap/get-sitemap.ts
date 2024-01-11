/**
 * The API URL
 * INFO: Create a rest endpoint for the sitemap in Drupal
 *
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/rest/sitemap`;

/**
 * Create the response
 *
 * @param {string} body The response body
 *
 * @return {object} The response
 */
export function createResponse(body) {
  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=43200, stale-while-revalidate=43200',
      'content-type': 'application/xml',
    },
  });
}

/**
 * Generate the sitemap
 *
 * @param {array} data The sitemap data
 *
 * @return {string} The sitemap
 */
export function generateSitemap(url, data, priority = 0.5) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${data
        .map((item) => {
          return `
            <url>
              <loc>${url}${item.path}</loc>
              <lastmod>${item.changed}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

/**
 * Get the sitemap data
 *
 * @param {string} url The API URL
 * @param {number} revalidate The revalidate time
 *
 * @return {Promise} Promise object represents the sitemap data
 */
async function fetchSitemapData(url, revalidate) {
  try {
    const response = await fetch(url, {
      next: { revalidate: revalidate },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(`There was a problem (fetchSitemapData): ${error.message}`);
  }
}

/**
 * Get the sitemap data - Pages data
 *
 * @return {Promise} Promise object represents the sitemap data
 */
export async function getSitemapPagesData() {
  const url = `${API_URL}?type=page`;
  return fetchSitemapData(url, 43200);
}
