import AccountPage from "./pages/AccountPage";
import CommunityPage from "./pages/CommunityPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
