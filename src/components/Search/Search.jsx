import React from "react";

const Search = () => {
  return (
    <>
      <button
        class="btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Search
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-body">
          <div className="input-group mb-3">
            <form action="." className="row g-3">
              <div className="col-auto">
                <input
                  type="text"
                  placeholder="Artist"
                  className="form-control"
                />
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-outline-secondary me-1">
                  Search
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Search };
