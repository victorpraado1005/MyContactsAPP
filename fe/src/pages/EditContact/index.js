import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Editar Mateus Silva"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
