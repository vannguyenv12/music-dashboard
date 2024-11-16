import { Col, Row } from 'antd';
import SignIn from '../../components/auth/sign-in';

export default function SignInPage() {
  return (
    <Row
      align='middle'
      justify='center'
      style={{ width: '100%', height: '100vh' }}
    >
      <Col span={12}>
        <SignIn />
      </Col>
    </Row>
  );
}
