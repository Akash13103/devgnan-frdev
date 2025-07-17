import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser, setFunds } from "../redux/slices/userSlice";
import { addStock } from "../redux/slices/portfolioSlice";
import { addToWatchlist } from "../redux/slices/watchlistSlice";

function Dashboard() {
  // Step 8.2: Get data from Redux
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const funds = useSelector((state) => state.user.funds);
  const stocks = useSelector((state) => state.portfolio.stocks);
  const watchlist = useSelector((state) => state.watchlist.watchedStocks);

  // Step 8.3: Get update functions
  const dispatch = useDispatch();

  // Step 8.4: Test functions
  const handleLogin = () => {
    dispatch(
      loginUser({
        name: "Ravi Kumar",
        email: "ravi@zerodha.com",
        id: "ZER001",
      })
    );
    dispatch(setFunds(50000));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleAddStock = () => {
    dispatch(
      addStock({
        id: "RELIANCE",
        name: "Reliance Industries",
        quantity: 10,
        price: 2500,
      })
    );
  };

  const handleAddToWatchlist = () => {
    dispatch(
      addToWatchlist({
        id: "TCS",
        name: "Tata Consultancy Services",
        price: 3200,
      })
    );
  };

  return (
    <div>
      <h2>🏦 Zerodha Dashboard</h2>

      {/* User Section */}
      <div>
        <h3>👤 User Info</h3>
        {isLoggedIn ? (
          <div>
            <p>Welcome: {user?.name}</p>
            <p>Funds: ₹{funds}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login as Ravi</button>
        )}
      </div>

      {/* Portfolio Section */}
      <div>
        <h3>📊 Portfolio ({stocks.length} stocks)</h3>
        {stocks.map((stock) => (
          <p key={stock.id}>
            {stock.name}: {stock.quantity} shares @ ₹{stock.price}
          </p>
        ))}
        <button onClick={handleAddStock}>Add Reliance Stock</button>
      </div>

      {/* Watchlist Section */}
      <div>
        <h3>👁️ Watchlist ({watchlist.length} stocks)</h3>
        {watchlist.map((stock) => (
          <p key={stock.id}>
            {stock.name}: ₹{stock.price}
          </p>
        ))}
        <button onClick={handleAddToWatchlist}>Add TCS to Watchlist</button>
      </div>
    </div>
  );
}

export default Dashboard;
