import React from 'react';
import { Container, Row, Col } from '../../styled/Layout.style';
import { Button } from '../../styled/button/Button.style';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col padding="50px 0 75px 0" position="center">
          <h1>Home page</h1>
        </Col>
      </Row>
      <Row>
        <Col position="space-between">
          <Button cta onClick={() => alert('clicked')}>
            Primary
          </Button>
          <Button cta onClick={() => alert('clicked')}>
            Primary
          </Button>
        </Col>
        <Col position="center">
          <Button cta secondary onClick={() => alert('clicked')}>
            middle
          </Button>
        </Col>
        <Col position="flex-end">
          <Button secondary onClick={() => alert('clicked')}>
            Primary
          </Button>
        </Col>
      </Row>
      <Row>
        <Col padding="25px 0" position="center">
          <h1>Nice page paragraph</h1>
        </Col>
      </Row>
      <Row>
        <Col padding="10px 0px 25px 0" position="flex-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ad itaque eos reprehenderit corporis? Magnam dignissimos obcaecati culpa quos dolorum incidunt a odit repudiandae pariatur, earum quia id quod labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero cumque molestias recusandae eius error quod suscipit et corporis tempore saepe, modi earum, vero quasi! Beatae voluptatum perspiciatis perferendis dignissimos!
          Aliquid placeat hic, harum quidem perspiciatis eveniet nemo dolor blanditiis accusantium eius voluptatum ipsa quasi dicta ab enim ipsum cum beatae! Nostrum impedit aut incidunt iusto quibusdam, totam tenetur temporibus?
          Nulla laudantium reprehenderit placeat aut nostrum dolor officia temporibus animi est id quos blanditiis error necessitatibus voluptate consectetur fuga modi natus eaque, doloribus iure velit illum? Reprehenderit reiciendis explicabo culpa.
          Quis ullam illum sint quibusdam corporis voluptates mollitia autem molestias praesentium nobis ipsum deleniti illo, aut debitis aperiam dolores placeat at. Et id alias beatae exercitationem voluptas nemo illo accusamus!
          Fugiat minus quod eius repellat mollitia quo magni ut dolor perspiciatis at, doloremque nesciunt excepturi maxime, et eum iste dolore voluptatibus aut, consequuntur voluptas culpa. Sapiente dolorum dignissimos explicabo nesciunt?
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
