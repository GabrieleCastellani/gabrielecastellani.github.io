import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <center>
          <footer>© {new Date().getFullYear()}, Gabriele Castellani</footer>
        </center>
      </Container>
    </footer>
  );
}
