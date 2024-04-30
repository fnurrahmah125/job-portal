import { Footer } from "flowbite-react";
import logo from "../assets/logo.png";

const FooterComponent = () => {
  return (
    <Footer className="relative py-4 px-4 shadow-none rounded-none text-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
