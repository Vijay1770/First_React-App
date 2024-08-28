const ErrorMessage = ({foodItems}) => {

  // Conditional Rendring by Ternary oprator...
  return <>{foodItems.length === 0 ? <h2>No List is there</h2> : null}</>;
};
export default ErrorMessage;
