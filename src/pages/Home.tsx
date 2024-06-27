import ButtonDefault from '../components/ButtonDefault';
import PageDefault from '../components/PageDefault';

function Home() {
  function handleClick() {
    alert('Apertou no botao da home.');
  }

  return (
    <>
      <PageDefault>
        <h1>Home</h1>
        <div style={{ textAlign: 'center' }}>
          <ButtonDefault label="Botão Home" action={handleClick} />
        </div>
      </PageDefault>
    </>
  );
}

export default Home;
