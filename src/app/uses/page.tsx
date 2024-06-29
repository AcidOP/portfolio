import ListUses from '@/components/lists/ListUses';
import uses from '@/data/uses';

const Uses = () => {
  return (
    <>
      <h1 className='sr-only'>Uses</h1>
      <ListUses uses={uses} />
    </>
  );
};

export default Uses;
