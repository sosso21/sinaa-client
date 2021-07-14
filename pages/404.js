import StyleNotFound from "../styles/404.module.css";
import Link from "next/link";
import HeadComponents from  "../components/HeadComponents"

const notFound = () => {
  return (
    <>
    <HeadComponents title="404" />

      <main className={StyleNotFound.rootPageNotFound}>
        <div className={StyleNotFound.text404}>
          <span>4</span>
          <span className="bi bi-gear-wide-connected"></span>
          <span>4</span>
        </div>
        <span>
          <Link href="/">
            <a className="btn btn-lg btn-warning">Réessayer</a>
          </Link>
        </span>
      </main>
      <div className={StyleNotFound.animation404}>
        <i className={StyleNotFound.icon4404Gear + " text-primary bi bi-gear-fill"}></i>
        <i
          className={StyleNotFound.icon4404Cloud + " text-secondary bi bi-cloud-slash-fill"}
        ></i>
      </div>
    </>
  );
};

export default notFound;
