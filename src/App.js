import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/Homepage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

//페이지: 홈페이지 / 영화전체 / 영화디테일

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
      </Route>
      {/* movies를 path로 사용하는 라우터들은 이렇게 하나로 묶어줘서 써줄 수 있다*/}

      <Route path="*" element={<NotFoundPage />} />
      {/* 유저가 엉뚱한 페이지로 갔을 경우 */}
    </Routes>
  );
}


export default App;
