import { Container, Spacer } from "@chakra-ui/react";
import {
  Outlet
} from "react-router-dom";
import { Header } from "../components/Header";

export const App = () => (
  <>
    <Header />
    <Spacer pt={24} />
    <Container>
      <Outlet />
    </Container>
  </>
)
