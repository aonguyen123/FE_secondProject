import React, { useEffect, useRef } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import { ModalContent } from 'components';
import FormCreateRoom from '../FormCreateRoom';
import FormJoinRoom from '../FormJoinRoom';

export default function ModalCreateRoom({
    visible,
    handleCancel,
    handleOk,
    loadingButton,
    form,
    type
}) {
    const preVisibleRef = useRef();

    useEffect(() => {
        preVisibleRef.current = visible;
    }, [visible]);
    const preVisible = preVisibleRef.current;
    useEffect(() => {
        if (!visible && preVisible) {
            form.resetFields();
        }
    }, [visible, form, preVisible]);

    return (
        <ModalContent
            title={type === 'CREATE_ROOM' ? formatMessage({id: 'chat.createRoom'}) : formatMessage({id: 'chat.joinRoom'})}
            width={type === 'CREATE_ROOM' ? 500 : 350}
            visible={visible}
            handleCancel={handleCancel}
            handleOk={handleOk}
            confirmLoading={loadingButton}
            content={
                type === 'CREATE_ROOM' ? (
                    <FormCreateRoom form={form} visible={visible} />
                ) : (
                    <FormJoinRoom form={form} />
                )
            }
        />
    );
}
