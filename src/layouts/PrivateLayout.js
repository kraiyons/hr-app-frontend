function PrivateLayout({ children }) {
  return (
    <>
      <nav>Navbar</nav>
      <aside>Sidebar</aside>
      <div className='main'>{children}</div>
    </>
  );
}

export default PrivateLayout;
