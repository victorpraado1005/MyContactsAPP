import { Container, InputSearchContainer } from './style';

import logo from '../../assets/images/logo.svg';
import logo1 from '../../assets/images/logo1.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" />
      <img src={logo1} alt="MyContacts" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}
