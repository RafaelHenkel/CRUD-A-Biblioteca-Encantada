import ButtonDefault from '../components/ButtonDefault';
import PageDefault from '../components/PageDefault';

function Products() {
  function handleClick() {
    alert('Apertou no botao do products.');
  }

  return (
    <>
      <PageDefault>
        <h1>Produtos</h1>
        <div style={{ textAlign: 'center' }}>
          <ButtonDefault label="Botão produto" action={handleClick} />
        </div>
      </PageDefault>
    </>
  );
}

export default Products;
