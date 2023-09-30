import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div>
      <h1>Hold your horses !!!</h1>
      <h2>{error.status}: {error.data}</h2>
    </div>
  );
};
export default Error;
