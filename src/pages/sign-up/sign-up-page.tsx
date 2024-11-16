import { Col, Row } from 'antd';
import SignUp from '../../components/auth/sign-up';

export default function SignUpPage() {
  return (
    <Row
      align='middle'
      justify='center'
      style={{ width: '100%', height: '100vh' }}
    >
      <Col span={12}>
        <SignUp />
      </Col>
    </Row>
  );
}
