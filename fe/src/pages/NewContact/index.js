import PageHeader from '../../components/PageHeader';

import Input from '../../components/input';
import Select from '../../components/select';
import Button from '../../components/button';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">
        Salvar alterações
      </Button>
      <Button type="button" disabled>
        Salvar alterações
      </Button>
    </>
  );
}
