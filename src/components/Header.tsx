import "./Header.css";

function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <span className="badge">PRODUCTIVITY DASHBOARD</span>

      <h1>Lumora</h1>

      <p>
        Transform ideas into achievements with a beautifully crafted workspace.
      </p>

      <div className="date">{today}</div>
    </header>
  );
}

export default Header;