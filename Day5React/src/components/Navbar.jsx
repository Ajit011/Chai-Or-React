import "./Navbar.css";

function Navbar() {

  const menuItems = [
  { id: 1, title: "MEN" },
  { id: 2, title: "WOMEN" },
  { id: 3, title: "KIDS"  },
  { id: 4, title: "HOME"   },
  { id: 5, title: "BEAUTY" },
  { id: 6, title: "STUDIO", isNew: true },
];
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>MYNTRA</h2>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
         <li key={item.id}>
        {item.title}
        </li>
        ))}
      </ul>

  <div className="search">
  <span>🔍</span>
  <input
    type="text"
    placeholder="Search for products, brands and more"
  />
   </div>
     <div className="icons">

  <div>
    👤
    <p>Profile</p>
  </div>

  <div>
    ❤️
    <p>Wishlist</p>
  </div>

  <div>
    👜
    <p>Bag</p>
  </div>

</div>

    </nav>
  );
}
export default Navbar;