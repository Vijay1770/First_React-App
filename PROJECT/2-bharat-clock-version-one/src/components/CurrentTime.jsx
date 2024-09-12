import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date()); //We use useState for set the currentState and the newstate...

  useEffect(() => {
    const intervalId = setInterval(() => {
      //we use setInterval for updating the date value per second....
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); //Here we use clearInteval method in return section of useEffect...
    };
  }, []);

  return (
    <p className="lead">
      This is the Current Time: <strong>{time.toLocaleDateString()}</strong>
      {" - "}
      <strong>{time.toLocaleTimeString()}</strong>
    </p>
  );
};
export default CurrentTime;
