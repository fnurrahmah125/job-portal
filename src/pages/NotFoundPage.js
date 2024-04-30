import { BiSad } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="custom-height border-y border-slate-200 grid place-content-center text-center">
      <BiSad className="mx-auto text-9xl mb-4" />
      <h1 className="text-3xl font-medium mb-1">
        <span className="font-medium">404</span> Page not found
      </h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </div>
  );
};

export default NotFoundPage;
