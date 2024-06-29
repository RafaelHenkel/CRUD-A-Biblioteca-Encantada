import { useState } from 'react';
import ButtonDefault from '../components/ButtonDefault';
import PageDefault from '../components/PageDefault';
import BooksType from '../types/BooksType';
import Modal from '../components/modal/Modal';
import InputDefault from '../components/InputDefault';

function Home() {
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [publication, setPublication] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [books, setBooks] = useState<BooksType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  function openModal() {
    setOpen(!open);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id && title && author && publication && date && gender && description) {
      if (publication > '2024') {
        const book: BooksType = {
          id,
          title,
          author,
          publication,
          date,
          gender,
          description,
        };

        const newBooks = [...books, book];
        setBooks(newBooks);
        console.log(books);
      } else {
        alert('o livro nao pode ser publicado no futuro');
      }
    }
    setId('');
    setTitle('');
    setAuthor('');
    setPublication('');
    setDate('');
    setGender('');
    setDescription('');
  }
  function deleteBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const booksFilter = books.filter(book => book.id !== id);
    if (booksFilter.length) {
      if (confirm('Você realmente deseja deletar o livro?')) {
        setBooks(booksFilter);
      }
    }
  }
  function attBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      const bookAtt = {
        id: books[index].id,
        title,
        author,
        publication,
        date: books[index].date,
        gender,
        description,
      };
      books.splice(index, 1);
      setBooks([...books, bookAtt]);
    } else {
      alert('livro nao encontrado');
    }
  }
  return (
    <>
      <PageDefault>
        <ButtonDefault label="Adicionar Livro" action={openModal} />
        {open && (
          <Modal action={openModal} actionConfirm={openModal} title="Cadastrar Livros">
            <form onSubmit={handleSubmit}>
              <InputDefault action={setId} key="id" label="ID" value={id} />
              <InputDefault action={setTitle} key="title" label="Titulo" value={title} />
              <InputDefault action={setAuthor} key="author" label="Autor" value={author} />
              <InputDefault action={setPublication} key="publication" label="Ano de Publicação" value={publication} />

              <InputDefault action={setDate} key="date" label="Data de Cadastro" value={date} />
              <InputDefault action={setGender} key="gender" label="Genero" value={gender} />
              <InputDefault action={setDescription} key="description" label="Descrição" value={description} />
              <ButtonDefault label="Cadastrar" type="submit" />
            </form>
          </Modal>
        )}
        {books.map(item => (
          <div>
            <p>Title: {item.title}</p>
            <p>Autor: {item.author}</p>
            <p>Ano de Publicação: {item.publication}</p>
            <br />
          </div>
        ))}
        <form onSubmit={deleteBook}>
          <InputDefault action={setId} key="deleteId" label="Deletar ID" value={id} />
          <ButtonDefault label="Deletar Livro" type="submit" />
        </form>
        <form onSubmit={attBook}>
          <InputDefault action={setId} key="idAtt" label="ID do livro que deseja atualizar" value={id} />
          <InputDefault action={setTitle} key="titleAtt" label="Titulo" value={title} />
          <InputDefault action={setAuthor} key="authorAtt" label="Autor" value={author} />
          <InputDefault action={setPublication} key="publicationAtt" label="Ano de Publicação" value={publication} />
          <InputDefault action={setGender} key="genderAtt" label="Genero" value={gender} />
          <InputDefault action={setDescription} key="descriptionAtt" label="Descrição" value={description} />
          <ButtonDefault label="Atualizar livro" type="submit" />
        </form>
      </PageDefault>
    </>
  );
}

export default Home;
