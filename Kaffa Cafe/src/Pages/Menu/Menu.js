import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../sharedComponents/Breadcrumbs";

const mapStateToProps = state => ({
  campsites: state.campsites
});

function RenderMenuItem({ campsite }) {
  return (
    <Card>
      <Link to={`/menu/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function menu(props) {
  const menu = props.campsites.map(campsite => {
    return (
      <Col key={campsite.id} md={5}>
        <RenderMenuItem campsite={campsite} />
      </Col>
    );
  });

  return (
    <Container>
      <Row>
        <Breadcrumbs items={[["Kaffa Café", "/home"], ["Campsite menu"]]} />
      </Row>
      <Row>{menu}</Row>
    </Container>
  );
}

export default connect(mapStateToProps)(menu);
