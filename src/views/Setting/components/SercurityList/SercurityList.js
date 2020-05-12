import React, { useCallback, useEffect, useRef } from 'react';
import { List, Form } from 'antd';
import FormChangePass from '../FormChangePass';
import ListSetting from './../ListSetting';
import { ModalContent } from './../../../../components';

export default function SercurityList({
    updatePass,
    loadingButton,
    visible,
    showModal,
    closeModal,
}) {
    const [form] = Form.useForm();
    const preVisibleRef = useRef();


    useEffect(() => {
        preVisibleRef.current = visible;
    }, [visible]);
    const preVisible = preVisibleRef.current;
    useEffect(() => {
        if(!visible && preVisible) {
            form.resetFields();
        }
    }, [visible, form, preVisible]);

    const handleCancel = () => {
        form.resetFields();
        closeModal();
    };

    const handleOk = useCallback(() => {
        form.submit();
    }, [form]);
    const onFormFinish = (name, { values, forms }) => {
        if (name === 'changePasswordForm') {
            updatePass(values);
        }
    };

    return (
        <Form.Provider onFormFinish={onFormFinish}>
            <List
                itemLayout="horizontal"
                dataSource={ListSetting(showModal)}
                renderItem={item => (
                    <List.Item actions={[item.action]}>
                        <List.Item.Meta
                            title={item.name}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            <ModalContent
                title="Change the password"
                width={500}
                visible={visible}
                handleCancel={handleCancel}
                handleOk={handleOk}
                confirmLoading={loadingButton}
                content={<FormChangePass form={form} />}
            />
        </Form.Provider>
    );
}
