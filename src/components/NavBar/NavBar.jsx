const NavBar = (props) => {
  return (
    <header className="App-header">
      <a href="/" >
        <img 
          display="inline"
          src="/images/logo.svg" 
          alt="logo" 
          className="App-logo"
          style={{ width: "200px", height: "200px" }}
        />
      </a>
        <h1>Star Wars Starships</h1>
    </header>
  );
}
 
export default NavBar;