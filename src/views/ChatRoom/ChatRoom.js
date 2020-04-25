import React, { useEffect, useContext, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import { FetchDataLoading } from './../../components';
import Context from './../../context';
import allActions from '../../actions';
import { UsersList, ChatList } from './Components';

export default function ChatRoom() {
    const { idRoom } = useParams();
    const { userCurrent, socketRef } = useContext(Context);
    const loadingFetchData = useSelector(state => state.uiReducer.loadingFetchData);
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(allActions.chatsActions.checkJoinRoom(idRoom, userCurrent._id, history));
    }, [dispatch, idRoom, userCurrent._id, history]);

    useEffect(() => {
        const socket = socketRef.current;
        socket.emit('joinRoom', ({_id: userCurrent._id, idRoom}));
        
        return () => {
            socket.emit('unJoinRoom', ({_id: userCurrent._id, idRoom}));
        };
    }, [socketRef, userCurrent._id, idRoom]);
    useEffect(() => {
        const socket = socketRef.current;
        socket.on('sendMessageRoom', data => {
            dispatch(allActions.chatsActions.getMessageRoomAfter(data));
        })
        socket.on('joinRoom', data => {
            dispatch(allActions.chatsActions.getUserCurOnl(data));
        });
        socket.on('unJoinRoom', data => {
            dispatch(allActions.chatsActions.getUserCurOnl(data));
        });

        return () => {
            socket.off('sendMessageRoom');
            socket.off('joinRoom');
            socket.off('unJoinRoom');
        };
    }, [socketRef, dispatch]);
    
    const onSendMessage = useCallback(
        ({ message }) => {
            if (message) {
                socketRef.current.emit('sendMessageRoom', ({ message, idRoom, idUser: userCurrent._id }));
            }
        },
        [socketRef, idRoom, userCurrent._id]
    );

    if (loadingFetchData) return <FetchDataLoading />;
    return (
        <GridContent>
            <Row gutter={[16, 16]}>
                <Col xxl={10} xl={10} lg={10} md={10} sm={24} xs={24}>
                    <UsersList />
                </Col>
                <Col xxl={14} xl={14} lg={14} md={14} sm={24} xs={24}>
                    <ChatList
                        onSendMessage={onSendMessage}
                        userCurrent={userCurrent}
                    />
                </Col>
            </Row>
        </GridContent>
    );
}
