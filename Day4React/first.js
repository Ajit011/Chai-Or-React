import React from 'react';
import ReactDOM from 'react-dom/client';

// const element1 = <h1>Hello Coder Army</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element1);

function Card(props) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "100%", height: "300px" }}
      />

      <div style={{ padding: "10px" }}>
        <h2>{props.title}</h2>
        <h1>{props.offer}</h1>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <Card
        image="https://cottonworld.net/cdn/shop/files/L-TSHIRT-11670-21499-RUST_1.jpg?v=1753678084&width=832"
        title="T-Shirt"
        offer="40-80% OFF"
      />

      <Card
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        title="Shoes"
        offer="50% OFF"
      />

      <Card
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        title="Watch"
        offer="30% OFF"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);