import Container from '@/components/container';
import ListUses from '@/components/lists/ListUses';
import uses from '@/data/uses';

const Uses = () => {
  return (
    <Container>
      <h1 className='sr-only'>Uses</h1>
      <ListUses uses={uses} />
    </Container>
  );
};

export default Uses;
