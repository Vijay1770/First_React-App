let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the Current Time: <strong>{time.toLocaleDateString()}</strong>
      {" - "}
      <strong>{time.toLocaleTimeString()}</strong>
    </p>
  );
};
export default CurrentTime;
