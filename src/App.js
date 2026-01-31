function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Tic Tac Toe</h1>

      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "10px",
        justifyContent: "center",
        marginTop: "30px"
      }}>
        
      <button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>
<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>
<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>

<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>
<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>
<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>

<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>
<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>
<button style={{ width: "100px", height: "100px", fontSize: "32px" }}></button>

      </div>
    </div>
  );
}

export default App;