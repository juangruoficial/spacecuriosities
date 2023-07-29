import "./styles/SpaceCuriositiesBox.css";

const SpaceCuriositiesBox = ({ handleChangeInfo, spaceCuriosity }) => {
  const { phrase, author } = spaceCuriosity;
  return (
    <section className="spaceCuriosityBox">
      <h1 className="title boxes">LETS KNOW MORE ABOUT GALAXIES</h1>

      <section className="info">
        <article className="info boxes">
          <p>{phrase}</p>
        </article>

        <button className="change" onClick={handleChangeInfo}>
          <img
            className="rotatingIcon"
            src="/public/images/refresh-svgrepo-com.svg"
          />
        </button>
      </section>

      <footer className="footer boxes">
        <h4>AUTHOR : {author}</h4>
      </footer>
    </section>
  );
};
export default SpaceCuriositiesBox;
