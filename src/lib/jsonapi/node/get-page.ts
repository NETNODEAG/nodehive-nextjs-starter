import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

/**
 * The resource type.
 * @type {string}
 */
const RESOURCE_TYPE = 'node--page';

/**
 * The API URL.
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/node/page`;

/**
 * Get a single page node.
 * @param {string} id - The node id
 *
 * @return {Promise} Promise object represents a single node
 */
export async function getSinglePageNode(id: string) {
  const apiParams = new DrupalJsonApiParams();

  apiParams
    .addFilter('status', '1')
    .addFilter('id', id)
    .addInclude(['field_main_image.field_media_image', 'field_paragraphs'])
    .addFields(RESOURCE_TYPE, [
      'title',
      'path',
      'drupal_internal__nid',
      'field_lead_text',
      'field_main_image',
      'field_paragraphs', // Ref. paragraphs
    ])
    .addFields('file--file', ['uri', 'resourceIdObjMeta'])
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

/**
 * Get multiple page nodes.
 * @return {Promise} Promise object represents multiple nodes
 */
export async function getMultiplePageNodes() {
  const apiParams = new DrupalJsonApiParams();

  apiParams
    .addFilter('status', '1')
    .addInclude(['field_main_image.field_media_image'])
    .addFields(RESOURCE_TYPE, [
      'title',
      'path',
      'drupal_internal__nid',
      'field_main_image',
    ])
    .addFields('file--file', ['uri', 'resourceIdObjMeta'])
    .addSort('created', 'DESC')
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

    return data.data;
  } catch (error) {
    throw new Error(`ERROR: ${error}`);
  }
}
