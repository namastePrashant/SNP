import React, { useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

import DummyImage from '../../../assets/Images/dummySN.png';
import Pop from "../../../assets/Icons/pop.png";
import ImageCards from "../../Common/Loading/ImageCard";
import ShowResult from "../../Common/Result";
import Advertisement from '../../Advertisments/'

const { Title } = Typography;

const Genre = (props) => {
  const { fetchGenres, genres, genreLoading } = props;

 
  useEffect(() => {
      fetchGenres();
  }, []);// eslint-disable-line




  return (
    <div className="genre">
      <Title level={4}>Genre</Title>
      <Row className="browse-cards">
        {genreLoading ? (
          <ImageCards />
        ) : genres.length !== 0 ? (
          genres.map((genre) => {
            let cover_image = genre.cover_image || DummyImage;
            let name = genre.title;
            let id = genre.id;
            return (
              <Col
                key={genre.id}
              >
                <Link to={`/genre/${id}`}>
                  <div
                    className="genre-card"
                    style={{
                      background: `url(${cover_image})`,
                      backgroundSize: "cover, cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img src={Pop} alt={name} />
                    <div className="genre-card__title">{name}</div>
                  </div>
                </Link>
              </Col>
            );
          })
        ) : (
              <ShowResult msg="Genre Not Found!" home={true} />
            )}



      </Row>

      <Advertisement name='banner' type='long'/>
      
    </div>
  );
};



export default Genre;
