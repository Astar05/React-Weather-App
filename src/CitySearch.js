import "./styles.css";

export default function CitySearch() {
  return (
    <div className="citySearch">
      <form>
        <div className="new-city-search" style={{ width: "25rem" }}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control style"
                placeholder="Type in new city search..."
                aria-describedby="button-addon"
                id="search"
              />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              <div className="mr-2">
                <button
                  className="btn btn-primary spaced"
                  type="submit"
                  id="enter-search"
                  value="Search"
                >
                  Search
                </button>
              </div>
              <div>
                <button
                  className="btn btn-success spaced"
                  id="current-location"
                  type="button"
                >
                  Current
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
