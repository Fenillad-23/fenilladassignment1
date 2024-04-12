function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p>&copy; 8889008 Fenil lad. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
