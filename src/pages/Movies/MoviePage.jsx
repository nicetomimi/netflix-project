import React from "react";
import { useSearchMovieQuery } from "../../hooks/UseSearchMovie";
import { useMovieGenreQuery } from "../../hooks/UseMovieGenre";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

// 네브바에서 클릭해서 온경우 => popularMovie 보여주기
// 키워드를 입력해서 온경우 => 키워드와 관련된 영화 보여주기

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const [page, setPage] = useState(1);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const [dropDownGenre, setDropDownGenre] = useState("장르별 검색");
  const { data: genreData } = useMovieGenreQuery();

  const [sortedData, setSortedData] = useState([]);

  const genreOn = (id, genre) => {
    setSortedData(data.results.filter((genre) => genre.genre_ids.includes(id)));
    setDropDownGenre(genre);
  };

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  useEffect(() => {
    if (data?.results) {
      setSortedData(data.results);
    }
  }, [data]);

  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <DropdownButton
            className="genre-btn"
            variant="danger"
            title={dropDownGenre}
            id="bg-nested-dropdown"
          >
            <Dropdown.Item
              eventKey="1"
              onClick={() => setSortedData(data.results)}
            >
              전체보기
            </Dropdown.Item>
            {genreData?.map((item, index) => (
              <Dropdown.Item
                eventKey="2"
                key={index}
                onClick={() => genreOn(item.id, item.name)}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>

        <Col lg={8} xs={12}>
          <Row>
            {sortedData.length === 0 ? (
              <div className="text-white text-center">
                해당 장르의 영화가 없습니다
              </div>
            ) : (
              sortedData.map((movie, index) => (
                <Col
                  key={index}
                  lg={3}
                  xs={12}
                  className="d-flex justify-content-center p-1"
                >
                  <MovieCard movie={movie} />
                </Col>
              ))
            )}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={8}
            marginPagesDisplayed={1}
            pageCount={data?.total_pages}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link bg-dark border-dark text-white"
            previousClassName="page-item"
            previousLinkClassName="page-link bg-dark border-dark text-white"
            nextClassName="page-item"
            nextLinkClassName="page-link bg-dark border-dark text-white"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link bg-dark border-dark text-white"
            containerClassName="pagination d-flex justify-content-center pt-4"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
