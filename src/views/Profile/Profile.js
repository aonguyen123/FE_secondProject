import React, { useEffect, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import { AccountInfo, AccountRight } from './../Account/components';
import { FetchDataLoading } from './../../components';
import allActions from '../../actions';
import Context from './../../context';

export default function Profile(props) {
    const postsById = useSelector(state => state.postReducer.postsById);
    const userById = useSelector(state => state.userReducer.userById);
    const loadingFetchData = useSelector(
        state => state.uiReducer.loadingFetchData
    );
    const dispatch = useDispatch();
    const { idUser } = useParams();
    const { userCurrent } = useContext(Context);

    useEffect(() => {
        dispatch(allActions.userActions.fetchUserById(idUser));
        dispatch(allActions.postActions.fetchPostById(idUser, 1, 10));

        return () => {
            dispatch(allActions.postActions.unmountPostById());
        };
    }, [idUser, dispatch]);

    const memoAccountInfo = useMemo(() => {
        return <AccountInfo userInfo={userById} userCurrentId={userCurrent._id} />;
    }, [userById, userCurrent._id]);

    if (loadingFetchData) return <FetchDataLoading />;
    return (
        <GridContent>
            <Row gutter={16}>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                    {memoAccountInfo}
                </Col>
                <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                    <AccountRight userId={userById._id} postsById={postsById} />
                </Col>
            </Row>
        </GridContent>
    );
}
