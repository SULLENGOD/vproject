import React from "react";
import "./SingIn.css";

const SingIn = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-dark ms-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Sing In
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sing In
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="row g-2 mb-3">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="nameFloating"
                        placeholder="First Name"
                      />
                      <label for="nameFloating">First Name</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="nameFloating"
                        placeholder="First Name"
                      />
                      <label for="nameFloating">Last Name</label>
                    </div>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="emailFloating"
                    placeholder="Email"
                  />
                  <label for="emailFloating">Email Adress</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="userFloating"
                    placeholder="UserName"
                  />
                  <label for="userFloating">User Name</label>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="nameFloating"
                        placeholder="Password"
                      />
                      <label for="nameFloating">Password</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="PassFloating"
                        placeholder="Confirm Password"
                      />
                      <label for="passFloating">Confirm Password</label>
                    </div>
                  </div>
                </div>
              </form>
              <button type="submit" className="btn btn-primary">
                Sing In
              </button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingIn };
