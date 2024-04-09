import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Homepage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import TvPage from "./pages/TV/TvPage"
import TvDetailPage from "./pages/TvDetail/TvDetailPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        {/* index는 path='/'랑 같다 */}
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        {/* movies를 path로 사용하는 라우터들은 이렇게 하나로 묶어줘서 써줄 수 있다*/}
        <Route path="tv">
          <Route index element={<TvPage />} />
          <Route path=":id" element={<TvDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
      {/* 유저가 엉뚱한 페이지로 갔을 경우 */}
    </Routes>
  );
}

export default App;
