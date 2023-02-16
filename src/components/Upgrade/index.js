import React, { useState } from 'react';
import { Row, Col, Button, Form, Radio, Typography } from 'antd';
import upgradePlan from '../../mock/upgradePlan'

const { Title } = Typography

const layout = {
    full: {
        xxl: { span: 16, offset: 4 },
        xl: { span: 20, offset: 2 },
        lg: { span: 20, offset: 2 },
        md: { span: 22, offset: 1 },
        sm: { span: 24, offset: 0 },
        xs: { span: 24, offset: 0 },
    },

    left: {
        xxl: { span: 12 },
        xl: { span: 12 },
        lg: { span: 12 },
        md: { span: 0 },
        sm: { span: 0 },
        xs: { span: 0 },
    },
    right: {
        xxl: { span: 12 },
        xl: { span: 12 },
        lg: { span: 12 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    },
};

const Upgrade = () => {
    const [value, setValue] = useState('');

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    };
    return (
        <Row {...layout.full} className='upgrade-main'>
            <Col {...layout.left} className='upgrade-image'></Col>
            <Col {...layout.right} className='upgrade-form-col'>
                <Title level={1}>Upgrade Plan</Title>
                <Form>
                    <Title level={4}>Choose A Plan</Title>
                    <Form.Item name="radio-group">
                        <Radio.Group onChange={onChange} value={value}>
                            {
                                upgradePlan.map(plan => (
                                    <Radio className={value===plan.title?'upgrade-radio-purple':'upgrade-radio'} value={plan.title}>
                                        <div className='card-inner'>
                                            <div>
                                                <div className='plan-title'>
                                                    {plan.title}
                                                </div>
                                                <div className='plan-text-fade'>
                                                    {plan.text}
                                                </div>
                                            </div>
                                            {plan.discount?(<div className='plan-discount'><span >
                                                {'NRS '+plan.price}
                                            </span><span className='plan-percent'>
                                                {'Save '+ plan.percent+'%'}
                                            </span></div>):(<span >
                                                {'NRS '+plan.price}
                                            </span>)}
                                            
                                        </div>

                                    </Radio>
                                ))
                            }
                        </Radio.Group>
                    </Form.Item>
                    <Button shape="round" size='large' className='btn-gradient'>
                        UPGRADE
                        </Button>
                </Form>
            </Col>

        </Row>
    );
};

export default Upgrade;