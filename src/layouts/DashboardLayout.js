import HeaderComponent from "../components/HeaderComponent";
import SidebarComponent from "../components/SidebarComponent";

const DefaultLayout = (props) => {
  return (
    <>
      <HeaderComponent container={false} />
      <main className="main flex flex-row border-y border-slate-200">
        <div className="border-r border-neutral-200">
          <SidebarComponent />
        </div>
        <div className="content overflow-x-auto">{props.children}</div>
      </main>
    </>
  );
};

export default DefaultLayout;
