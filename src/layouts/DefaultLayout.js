import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const DefaultLayout = (props) => {
  return (
    <>
      <HeaderComponent container={true} />
      {props.children}
      <FooterComponent />
    </>
  );
};

export default DefaultLayout;
