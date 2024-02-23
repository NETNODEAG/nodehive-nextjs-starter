export default function NodeWrapper({ entity, children }) {
  const { id, drupal_internal__nid, type } = entity;

  const dynamicId = `node-${drupal_internal__nid}`;

  return (
    <div
      id={dynamicId}
      node-type={type}
      data-nodehive-type="paragraph"
      data-nodehive-id={drupal_internal__nid}
      data-nodehive-uuid={id}
      className="relative overflow-hidden rounded-lg p-2 ring-2 ring-black/10 md:p-6"
    >
      <p className="mb-2 max-w-2xl text-xs leading-6 text-neutral-500">
        {type}
      </p>

      {children}
    </div>
  );
}
