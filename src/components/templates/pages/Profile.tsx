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

  const submitNewTheme: (e: any) => void = (e) => {
    e.preventDefault();
    const theme: ITheme = {
      name,
      colors: {
        primary,
        secondary
      },
      font
    }
    dispatch(setTheme(theme));
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Load a new theme</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form>
            <input {...bindName} placeholder="Name" />
            <input {...bindPrimary} placeholder="Primary color" />
            <input {...bindSecondary} placeholder="Secondary color" />
            <input {...bindFont} placeholder="Font name" />
            <Button
              secondary
              onClick={(e: any) => submitNewTheme(e)}
            >
              Load
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
