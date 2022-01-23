const Footer= ()=>{
 
return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Produit</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Produit 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Produit 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Forfaits & Tarifs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Questions fréquemment posées</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Société</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">A Propos de nous</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Texte Remplissage </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Actualitées et  articles</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact et Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link"><i className="bi bitele-phone"></i>+213 559-000-000</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-send"></i> Chat en direct</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-envelope"></i>Contactez Nous</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-star"></i>Donnez votre avis
</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="bi bi-triangle"> </i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; SINAA <script>document.write(new Date().getFullYear())</script>
         | By <a href="https://hermes-dev-fr.web.app">HERMES DEV </a></span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#">Politique Privé</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Termes D'utilisation</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

)
}

export default Footer