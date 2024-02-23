export default function AreaWrapper({ entity, children }) {
  const { id, drupal_internal__fid, type, machine_name } = entity;

  const dynamicId = `area-${drupal_internal__fid}`;

  return (
    <div
      id={dynamicId}
      area-type={machine_name}
      data-nodehive-type="area"
      data-nodehive-id={drupal_internal__fid}
      data-nodehive-uuid={id}
      className="relative w-full overflow-hidden rounded-lg p-2 ring-2 ring-primary-600/10 md:p-6"
    >
      <p className="mb-2 max-w-2xl text-xs leading-6 text-neutral-500">
        {type}--{machine_name}
      </p>

      <div className="flex justify-between gap-4">{children}</div>
    </div>
  );
}
