const Card = (props) => {
  console.log(props)
  return (
    <div className="card mt-2">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-start">
          <div className="userImage d-flex flex-row align-items-center justify-content-start">
            <img 
            className="w-25 rounded-circle img-fluid"
            src={props.userAvatar}
            alt=""
            />
            <p className="my-0 mx-2 p-0">{props.userName}</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <img  
            className="img-fluid w-100"
            src={props.photo}
            alt=""
        />
      </div>
    </div>
  );
};

export default Card;
