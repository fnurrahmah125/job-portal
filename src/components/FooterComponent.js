import { Footer } from "flowbite-react";
import logo from "../assets/logo.png";

const FooterComponent = () => {
  return (
    <Footer className="relative rounded-none px-4 py-4 text-center shadow-none">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Footer.Brand
            href="/"
            src={logo}
            alt="Flowbite Logo"
            name="JobQuest"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms of Service</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="JobQuest" year={2024} />
      </div>
    </Footer>
  );
};

export default FooterComponent;
