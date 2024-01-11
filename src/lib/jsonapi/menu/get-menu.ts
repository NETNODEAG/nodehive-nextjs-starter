import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

/**
 * The resource type
 *
 * @type {string}
 */
const RESOURCE_TYPE = 'menu_link_content--menu_link_content';

/**
 * The API URL
 *
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/menu_items`;

/**
 * Get drupal menu
 *
 * @param {string} type - The menu type
 *
 * @return {Promise} Promise object represents a list of menu items
 */
export async function getDrupalMenu(type: string) {
  const apiParams = new DrupalJsonApiParams();

  apiParams
    .addFilter('status', '1')
    .addFields(RESOURCE_TYPE, [
      'title',
      'url',
      'enabled',
      'menu_name',
      'external',
      'options',
      'weight',
      'expanded',
      'parent',
    ])
    .getQueryObject();

  const queryString = apiParams.getQueryString();
  const jsonApiUrl =
    API_URL + '/' + type + '?' + queryString + '&jsonapi_include=1';

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

    return data.data;
  } catch (error) {
    throw new Error(`ERROR: ${error}`);
  }
}
