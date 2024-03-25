import ParagraphEditButton from './paragraph-edit-button';

export default function ParagraphWrapper({
  entity,
  enable = true,
  editmode = 'sidebar',
  children,
}) {
  const { meta, type, parent_id, id } = entity;
  const { drupal_internal__target_id } = meta || {};

  if (!type) {
    return <div>no visual editor {children}</div>;
  }

  // Preparing dynamic ID
  const dynamicId = `node-${entity.meta.drupal_internal__target_id}`;

  return (
    <div
      id={dynamicId}
      paragraph-type={type}
      data-nodehive-enable={enable.toString()}
      data-nodehive-editmode={editmode} // edit-form, sidebar, modal, inline
      data-nodehive-type="paragraph"
      data-nodehive-parent_id={parent_id}
      data-nodehive-id={drupal_internal__target_id}
      data-nodehive-uuid={id}
      className="relative rounded-lg border border-black p-10"
    >
      <ParagraphEditButton
        label="Edit Paragraph"
        type="paragraph"
        uuid={id}
        id={drupal_internal__target_id}
        parentId={parent_id}
      />

      {children}
    </div>
  );
}
