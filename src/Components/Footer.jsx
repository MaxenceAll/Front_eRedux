import styled from "styled-components";
import { DateDuJour } from "./Tools/DateDuJour";

function Footer() {
    return (
        <DIV_Footer_Container>
            © E-Redux
            <DateDuJour />
            E-Redux ©
        </DIV_Footer_Container>
    );
}

export default Footer;

const DIV_Footer_Container = styled.div`
  border-top: 2px solid var(--background-color-200);
  display: flex;
  justify-content: space-between;
  padding: 1%;
  background-color: orangered;
  color: white;
`;
