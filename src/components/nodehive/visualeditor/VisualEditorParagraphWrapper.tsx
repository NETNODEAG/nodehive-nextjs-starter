import VisualEditButton from './VisualComponentEditButton';

export default function VisualEditorParagraphWrapper({
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
      className="relative overflow-hidden rounded-lg p-8 ring-2 ring-neutral-900/10"
    >
      <p className="mb-2 max-w-2xl text-xs leading-6 text-neutral-500">
        {type}
      </p>

      <VisualEditButton
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
