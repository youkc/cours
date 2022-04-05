import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="conatiner">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <img src={logo} className="App-logo my-4" alt="logo" />
              <h3 className="mb-4 text-white">Example de formulaire</h3>
            </div>
          </div>
          <div class="col-md-6 offset-md-3">
            <div class="card shadow cardform">
              <div class="card-body">
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress2" class="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div class="col-12">
                    <button type="submit" className="btn btn-primary">
                      Sauvegarder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
