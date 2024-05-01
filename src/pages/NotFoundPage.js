import { BiSad } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="custom-height grid place-content-center border-y border-slate-200 text-center">
      <BiSad className="mx-auto mb-4 text-9xl" />
      <h1 className="mb-1 text-3xl font-medium">
        <span className="font-medium">404</span> Page not found
      </h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </div>
  );
};

export default NotFoundPage;
