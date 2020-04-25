import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import { AccountInfo, AccountRight } from './components';
import Context from './../../context';

export default function Account(props) {
    const postsById = useSelector(state => state.postReducer.postsById)
    const { userCurrent } = useContext(Context);

    return (
        <GridContent>
            <Row gutter={16}>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    <AccountInfo
                        userInfo={userCurrent}
                    />
                </Col>
                <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                    <AccountRight 
                        userInfo={userCurrent} 
                        postsById={postsById}
                    />
                </Col>
            </Row>
        </GridContent>
    );
}
