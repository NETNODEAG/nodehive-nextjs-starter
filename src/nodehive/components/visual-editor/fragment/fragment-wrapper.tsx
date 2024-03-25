import FragmentEditButton from './fragment-edit-button';

export default function FragmentWrapper({
  entity,
  enable = true,
  editmode = 'sidebar',
  children,
}) {
  const { meta, type, id, drupal_internal__fid } = entity;

  //console.log('FragmentWrapper', entity);

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
      data-nodehive-id={drupal_internal__fid}
      data-nodehive-uuid={id}
      className="relative block"
    >
      <FragmentEditButton
        label="Edit Fragment"
        type="fragment"
        uuid={id}
        id={drupal_internal__fid}
      />
      {children}
    </div>
  );
}
