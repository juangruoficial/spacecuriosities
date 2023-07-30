import "./styles/SpaceCuriositiesBox.css";
import Texteffect from "./Texteffect";
const SpaceCuriositiesBox = ({ handleChangeInfo, spaceCuriosity }) => {
  const { phrase, author } = spaceCuriosity;

  return (
    <section className="spaceCuriosityBox">
      <h1 className="title boxes">LETS KNOW MORE ABOUT GALAXIES</h1>

      <section className="info">
        <article className="info boxes">
          <Texteffect text={phrase} />
        </article>

        <button
          className="change rotatingIcon"
          onClick={handleChangeInfo}
        ></button>
      </section>

      <footer className="footer boxes">
        <Texteffect text={author} />
      </footer>
    </section>
  );
};
export default SpaceCuriositiesBox;
