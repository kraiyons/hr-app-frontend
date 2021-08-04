const PublicLayout = ({ children }) => {
  return (
    <>
      <nav>public nav</nav>
      <div className='main'>{children}</div>
    </>
  );
};
export default PublicLayout;
