import React, { useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

import DummyImage from '../../../assets/Images/dummySN.png';
import ImageCards from "../../Common/Loading/ImageCard";
import ShowResult from "../../Common/Result";

const { Title } = Typography;

const Mood = (props) => {
  const { fetchMoods, moods, moodLoading } = props;

  useEffect(() => {
    if (moods.length === 0) {
      fetchMoods();
    }
  }, []); //eslint-disable-line

  return (
    <div className="mood">
      <Title level={4}>Moods</Title>
      <Row className="browse-cards extra-bottom-pad">
        {moodLoading ? (
          <ImageCards />
        ) : moods.length !== 0 ? (
          moods.map((mood) => {
            let cover_image = mood.cover_image || DummyImage;
            let name = mood.name;
            let id = mood.id;
            return (
              <Col
              // span={4}
              // className='mood-card'
              // style={{backgroundImage: `url(${i.background})`,}}
              key={id}
              >
                <Link to={`/mood/${id}`}>
                  <div
                    className="mood-card"
                    style={{ backgroundImage: `url(${cover_image})` }}
                  >
                    <div className="mood-card__title">{name}</div>
                  </div>
                </Link>
              </Col>
            );
          })
        ) : (
          <ShowResult msg="Moods Not Found!" home={true} />
        )}
      </Row>
    </div>
  );
};

export default Mood;
