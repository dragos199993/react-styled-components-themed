import React from 'react';
import { Container, Col, Row } from '../../styled/Layout.style';
import { Button } from '../../styled/button/Button.style';
import { useInput } from '../../../hooks/useInput';
import { setTheme } from '../../../store/actions/theme/themeActions';
import { ITheme } from '../../../interfaces/ITheme';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const { bind: bindName, value: name } = useInput('');
  const { bind: bindPrimary, value: primary } = useInput('');
  const { bind: bindSecondary, value: secondary } = useInput('');
  const { bind: bindFont, value: font } = useInput('');
  const dispatch = useDispatch();

  const submitNewTheme: (e: any) => void = e => {
    e.preventDefault();
    const theme: ITheme = {
      name,
      colors: {
        primary,
        secondary,
      },
      font,
    };
    dispatch(setTheme(theme));
  };

  return (
    <Container>
      <Row>
        <Col position="center" padding="25px 0  ">
          <h1>Load a new theme</h1>
        </Col>
      </Row>
      <Row>
        <Col position="center">
          <form>
            <Row>
              <Col position="center" padding="5px 0">
                <input style={{ width: '340px', padding: '8px' }} {...bindName} placeholder="Name" />
              </Col>
            </Row>
            <Row>
              <Col position="center" padding="5px 0">
                <input style={{ width: '340px', padding: '8px' }} {...bindPrimary} placeholder="Primary color" />
              </Col>
            </Row>
            <Row>
              <Col position="center" padding="5px 0">
                <input style={{ width: '340px', padding: '8px' }} {...bindSecondary} placeholder="Secondary color" />
              </Col>
            </Row>
            <Row>
              <Col position="center" padding="5px 0">
                <input style={{ width: '340px', padding: '8px' }} {...bindFont} placeholder="Font name" />
              </Col>
            </Row>
            <Button secondary onClick={(e: any) => submitNewTheme(e)}>
              Load
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
