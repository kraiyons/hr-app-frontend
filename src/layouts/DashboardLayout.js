import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  console.log({ children });
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

export default DashboardLayout;
