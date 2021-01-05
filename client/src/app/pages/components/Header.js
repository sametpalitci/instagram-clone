const Header = () => {
  return (
    <div className="container-full card ">
      <div className="container">
        <div className="row">
          <div className="col-12 py-1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="headerLogo d-flex align-items-center justify-content-start">
                <img
                  className="w-25 img-fluid"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ara"
                  />
                </form>
              </div>
              <div className="d-flex align-items-center justify-content-start flex-column"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
