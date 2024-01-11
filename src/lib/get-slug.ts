import { notFound } from 'next/navigation';

/**
 * The API URL.
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/router/translate-path?path=`;

/**
 * Get a single resource (entity) by slug.
 * @param {Array<string>} slug - The slug
 *
 * @return {Promise} Promise object represents a single resource
 */
export async function getResourceBySlug(slug: Array<string>) {
  // Build the JSON API URL based on the slug array
  const jsonApiUrl = `${API_URL}/${slug.join('/')}`;

  try {
    // Fetch the data from the API URL
    const response = await fetch(jsonApiUrl.toString());
    const resource = await response.json();

    // Check if the resource was resolved or not
    if (!resource.resolved) {
      return null;
    }

    // Return the resource
    return resource;
  } catch (error) {
    // Log the error
    console.error(error);

    // If there was an error, return to the 404 page
    notFound();
  }
}
