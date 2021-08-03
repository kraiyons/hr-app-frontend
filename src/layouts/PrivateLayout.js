function PrivateLayout({ children }) {
  return (
    <>
      <nav>Navbar</nav>
      <aside>Sidebar</aside>
      <div class='main'>{children}</div>
    </>
  );
}

export default PrivateLayout;
