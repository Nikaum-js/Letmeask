import './styles.scss'

export function Header () {
  return (
    <main className="Navbar">
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Sobremim">Sobre mim</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projetos">Projetos</a></li>
        <button type="button" href="#Contato">Contato</button>
      </ul>
    </main>
  );
}