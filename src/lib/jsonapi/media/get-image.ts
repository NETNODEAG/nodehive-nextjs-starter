import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

/**
 * The resource type
 *
 * @type {string}
 */
const RESOURCE_TYPE = 'media--image';

/**
 * The API URL
 *
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/media/image`;

/**
 * Get a single media image
 *
 * @param {string} id - The media id
 *
 * @return {Promise} Promise object represents a single media image
 */
export async function getSingleImage(id: string) {
  const apiParams = new DrupalJsonApiParams();

  apiParams
    .addFilter('status', '1')
    .addFilter('id', id)
    .addInclude(['field_media_image'])
    .addFields(RESOURCE_TYPE, [
      'name',
      'path',
      'drupal_internal__nid',
      'field_media_image',
    ])
    .getQueryObject();

  const queryString = apiParams.getQueryString();
  const jsonApiUrl = API_URL + '?' + queryString + '&jsonapi_include=1';

  try {
    const response = await fetch(jsonApiUrl.toString(), {
      next: { revalidate: 180 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.data?.length) {
      return null;
    }

    return data.data[0];
  } catch (error) {
    throw new Error(`ERROR: ${error}`);
  }
}
