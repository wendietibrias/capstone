"use client";

import { Button, Card, Col, Form, Input, InputNumber, Row } from "antd";

const EmployeeForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
     await form.validateFields();

  }

  return (
    <div className="w-full">
      <Card>
        <Form onFinish={handleSubmit} form={form} layout="vertical">
          <Row>
            <Col md={24}>
              <Form.Item label="Nama" name="name" rules={[{ required: true }]}>
                <Input placeholder="Nama" />
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item
                className="w-full"
                label="Umur"
                name="age"
                rules={[{ required: true }]}
              >
                <InputNumber style={{width:"100%"}} className="w-full" placeholder="Umur" />
              </Form.Item>
            </Col>
            <Col md={24}>
              <Button onClick={handleSubmit} type="primary">Tambah Employee</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default EmployeeForm;
