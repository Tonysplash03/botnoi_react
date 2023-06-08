import classes from "./Header.module.css";

function Header(props) {
  return (
    <nav
      className={classes.contain}
      style={{
        // Don't understand why need style to work, but put in CSS and doesn't work
        height: "656px",
        backgroundSize: "cover",
        backgroundImage: 'url("/images/search-hero.png")',
      }}
    >
      <div className={classes.title}>
        <h1 className={classes.heading}>Find a recipe</h1>
        <div className={classes.searchBar}>
          <img src="/images/search.png" className={classes.searchLogo}></img>
          <input
            className={classes.search}
            type="text"
            placeholder="Find the menu that you want..."
          ></input>
        </div>
      </div>
    </nav>
  );
}

export default Header;
