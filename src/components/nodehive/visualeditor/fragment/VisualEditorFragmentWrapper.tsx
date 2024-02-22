import FragmentEditButton from './FragmentEditButton';

export default function VisualEditorFragmentWrapper({
  entity,
  enable = true,
  editmode = 'sidebar',
  children,
}) {
  const { meta, type, id } = entity;
  const { drupal_internal__target_id } = meta || {};

  if (!type) {
    return <div>no visual editor {children}</div>;
  }

  return (
    <div
      id={id}
      fragment-type={type}
      data-nodehive-enable={enable.toString()}
      data-nodehive-editmode={editmode} // edit-form, sidebar, modal, inline
      data-nodehive-type="fragment"
      data-nodehive-id={drupal_internal__target_id}
      data-nodehive-uuid={id}
      className="relative overflow-hidden rounded-lg p-2 ring-2 ring-neutral-900/10 md:p-2"
    >
      <p className="mb-2 max-w-2xl text-xs leading-6 text-neutral-500">
        {type}
      </p>

      <FragmentEditButton
        label="Edit Fragment"
        type="fragment"
        uuid={id}
        id={drupal_internal__target_id}
      />

      {children}
    </div>
  );
}
