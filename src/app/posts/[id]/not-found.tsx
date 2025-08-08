import Container from "@/components/Container";
import estilos from "./not-found.module.css";
import Link from "next/link";


export default function PostNaoEncontrado() {
  return <section className={estilos.conteudo}>
    <h2>Ops! Post não encontrado!</h2>
    <Container>
      <p>O post que você está procurando não existe.</p>
      <p><Link href="/">Voltar para a página inicial</Link></p>
    </Container>
  </section>;
}