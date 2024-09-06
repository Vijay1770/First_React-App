const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="message">
      <h1>There are no Post.</h1>
      {/* <button
        type="button"
        className="btn btn-primary"
         onClick={onGetPostsClick}
      >
        Get Posts by Server
      </button> */}
    </div>
  );
};

export default WelcomeMessage;
