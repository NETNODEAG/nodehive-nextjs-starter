import Fragment from '@/components/fragment/Fragment';

export default function Area({ area }) {
  const fragments = area?.data?.fragment_id;

  return (
    <>
      {fragments?.map((fragment) => {
        return <Fragment key={fragment?.id} fragment={fragment} />;
      })}
    </>
  );
}
