export default function Header({ searchValue, setSearchValue }) {
  return (
    <div className="header">
      <div className="header-main">
        <img src="images/Foody Zone.png" />
        <input
          placeholder="Search Food..."
          onKeyUp={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}
