import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
const UserPage = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-2">
                <div className="card-header">User:</div>
              <div className="card-body">
                  <form>
                      <input type="file" className="form-control"/>
                      <button type="submit" className="mt-2 form-control btn btn-primary">Add image</button>
                  </form>
              </div>
            </div>
            <Card
              userName="John"
              userAvatar="https://www.w3schools.com/howto/img_avatar.png"
              photo="https://www.w3schools.com/howto/img_avatar.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
