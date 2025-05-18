import { useRouteError } from "react-router";

const err = useRouteError;
const Error = () => {
  return (
    <div>
      <h1>Something went wrong !</h1>
      <h2>{err.message}</h2>
    </div>
  );
};

export default Error;
