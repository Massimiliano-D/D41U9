import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavAction } from "../redux/actions";

export default function Fav() {
  const jobs = useSelector((state) => state.favjob.content);
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row>
        <h1> Favorites</h1>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {jobs.map((job, i) => (
              <Row key={i} className="my-4 align-items-center">
                <Col xs={1}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(removeFromFavAction(i));
                    }}
                  >
                    Remove
                  </Button>
                </Col>
                <Col>
                  <h3>{job.title}</h3>
                  <Row>
                    <Col>Category: {job.category}</Col>
                    <Col>
                      <Link to={`/${job.company_name}`}>Company Name: {job.company_name}</Link>
                    </Col>
                    <Col>
                      <a href={job.url}>Link</a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
