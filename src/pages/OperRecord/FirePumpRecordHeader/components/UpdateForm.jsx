import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Drawer, Button, Row, Col, InputNumber, DatePicker, Cascader, Divider } from 'antd';
import moment from 'moment';

// 表单项
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

// 组件定义
const UpdateForm = (props) => {
    // 用useState将列表页面的值赋给表单属性
    const [formVals, setFormVals] = useState({
        isAdd: props.values.id == undefined ? true : false,
        id: props.values.id == undefined ? '' : props.values.id,
        branchId: props.values.branchId,
        mainDeviceId: props.values.mainDeviceId,
        date: props.values.date,
        staff: props.values.staff,
        startWaterPumpOne: props.values.startWaterPumpOne,
        startWaterPumpTwo: props.values.startWaterPumpTwo,
        operatingPressureOne: props.values.operatingPressureOne,
        operatingPressureTwo: props.values.operatingPressureTwo,
        upTimeOne: props.values.upTimeOne,
        upTimeTwo: props.values.upTimeTwo,
        remark: props.values.remark,
    });

    // 设置按钮加载状态（提交未执行完时，不能点击）
    const [loading, setLoading] = useState(false);

    // 获取表单
    const [form] = Form.useForm();

    // 组件属性定义：要想使用组件，就要为组件属性传值，实现值和方法的传递
    const {
        onSubmit: handleUpdate,
        onCancel: handleUpdateModalVisible,
        updateModalVisible,
        values,
        title,
    } = props;

    // 提交事件
    const handleSubmit = async () => {
        const fieldsValue = await form.validateFields();

        setLoading(true);

        setFormVals({ ...formVals, ...fieldsValue });
        await handleUpdate({ ...formVals, ...fieldsValue });

        setLoading(false);
    };

    // 将时间格式化为moment或者null
    const setTime = (timeStr) => {
        return (timeStr == '0001-01-01T00:00:00' || timeStr == undefined || timeStr == null) ? null : moment(timeStr, 'YYYY年MM月DD日')
    }

    // 获取设备数据
    let initDeviceList = [];
    const [device, SetDevice] = useState(initDeviceList);
    // useEffect(() => {
    //     MainDeviceService.deviceGroupByBrank('锅炉', '白水').then((result) => {
    //         SetDevice(result);
    //     });
    // }, [1]);

    // 设备下拉选项改变事件
    const onChange = (value) => {
        console.log(value);
    }

    // 只显示最后一层
    const displayRender = (label) => {
        return label[label.length - 1];
    }

    // 表单内容
    const renderContent = () => {

        // 设备选择项属性（数据不符合规范，需要二次处理）
        // const options: any = [];
        // for (var i: number = 0; i < device.length; i++) {
        //     const optionsItem: any = {};
        //     optionsItem.value = device[i].id;
        //     optionsItem.label = device[i].name;
        //     options.push(optionsItem);
        // }

        const options = [
            {
                value: '白水',
                label: '白水',
                children: [
                    {
                        value: '设备1',
                        label: '设备1',
                    },
                    {
                        value: '设备2',
                        label: '设备2',
                    },
                ],
            },
        ];

        return (
            <>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="deviceAndBranch"
                            label="设备名称"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <Cascader
                                options={options}
                                expandTrigger="hover"
                                //displayRender={displayRender}
                                onChange={onChange}
                                placeholder="请选择"
                            />
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="date"
                            label="日期"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <DatePicker style={{ width: '100%', }} format="YYYY年MM月DD日" placeholder="选择日期" />
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="staff"
                            label="人员"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <Input placeholder="请输入" />
                        </FormItem>
                    </Col>
                    <Divider orientation="left" plain>
                        启动水泵
                    </Divider>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="startWaterPumpOne"
                            label="1#泵"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <Input placeholder="请输入" />
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="startWaterPumpTwo"
                            label="2#泵"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <Input placeholder="请输入" />
                        </FormItem>
                    </Col>
                    <Divider orientation="left" plain>
                        运行压力(MPa)
                    </Divider>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="operatingPressureOne"
                            label="1#泵"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <InputNumber min={1} max={100} style={{ width: '100%' }} />
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="operatingPressureTwo"
                            label="2#泵"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <InputNumber min={1} max={100} style={{ width: '100%' }} />
                        </FormItem>
                    </Col>
                    <Divider orientation="left" plain>
                        运行时间
                    </Divider>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="upTimeOne"
                            label="1#泵"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <InputNumber min={1} max={100} style={{ width: '100%' }} />
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="upTimeTwo"
                            label="2#泵"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <InputNumber min={1} max={100} style={{ width: '100%' }} />
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <FormItem
                            name="remark"
                            label="备注"
                        //rules={[{ required: true, message: '请输入管道规格！' }]}
                        >
                            <Input placeholder="请输入" />
                        </FormItem>
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <Drawer
            width={600}
            bodyStyle={{ padding: 0 }}
            destroyOnClose
            title={title}
            visible={updateModalVisible}
            onClose={() => handleUpdateModalVisible()}
            footer={
                <div style={{ textAlign: 'right', }}>
                    <Button key="submit" size='small' type="primary" loading={loading} style={{ marginRight: 8 }} onClick={() => handleSubmit()}>
                        提交
                    </Button>
                    <Button key="cancel" size='small' type="default" onClick={() => handleUpdateModalVisible()}>
                        取消
                    </Button>
                </div>
            }
        >
            <Form
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 14 }}
                form={form}
                size='small'
                initialValues={{
                    id: formVals.id,
                    deviceAndBranch: (formVals.branchId != undefined && formVals.mainDeviceId != undefined) ? [formVals.branchId, formVals.mainDeviceId] : '',
                    branchId: formVals.branchId,
                    mainDeviceId: formVals.mainDeviceId,
                    date: setTime(formVals.date),
                    staff: formVals.staff,
                    startWaterPumpOne: formVals.startWaterPumpOne,
                    startWaterPumpTwo: formVals.startWaterPumpTwo,
                    operatingPressureOne: formVals.operatingPressureOne,
                    operatingPressureTwo: formVals.operatingPressureTwo,
                    upTimeOne: formVals.upTimeOne,
                    upTimeTwo: formVals.upTimeTwo,
                    remark: formVals.remark,
                }}
            >
                {renderContent()}
            </Form>
        </Drawer>
    );
};

export default UpdateForm;
