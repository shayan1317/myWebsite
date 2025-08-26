import "./specification.css";
function Specification({ tagline, img_src, flag, number }) {
  return (
    <div className="app__specification">
      <div
        className={
          flag ? "app__specification-grid" : "app__specification-grid1"
        }
      >
        <div className="app__specification-grid_box">
          {flag ? (
            <h3 className="number">{number}</h3>
          ) : (
            <img className="clients_img" src={img_src} />
          )}

          <p className="tagline">{tagline}</p>
          <p className="description">
            Etiam nec odio vestibulum est mattis effic iturut magna.
            Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specification;
