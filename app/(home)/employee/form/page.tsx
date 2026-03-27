
'useclient'

import { Button, Col, Form, Input, InputNumber, Row } from "antd";

const EmployeeForm = () => {

    const [form] = Form.useForm();

    return (
        <div className="w-full">
            <Form form={form} layout="vertical">
                <Row>
                    <Col md={24}>
                        <Form.Item label="Nama" name="name" rules={[{ required: true }]}>
                            <Input placeholder="Nama" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Umur" name="age" rules={[{ required: true }]}>
                            <InputNumber placeholder="Umur" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Button type="primary">Tambah Employee</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default EmployeeForm;