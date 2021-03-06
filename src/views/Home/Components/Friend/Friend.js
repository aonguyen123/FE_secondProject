import React from 'react';
import { Card } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import SearchBox from './../SearchBox';
import ListFriend from './../ListFriend';

export default function Friend({
    searchUser,
    loadingData,
    searchUsers,
    isSearchUser,
    searchEmpty,
    showCardUser,
    friends,
    cancelFriend
}) {
    return (
        <Card title={formatMessage({ id: 'home.friends.title' })} size="small">
            <SearchBox
                searchUser={searchUser}
                loadingData={loadingData}
                searchEmpty={searchEmpty}
            />
            <ListFriend
                searchUsers={searchUsers}
                isSearchUser={isSearchUser}
                showCardUser={showCardUser}
                friends={friends}
                cancelFriend={cancelFriend}
            />
        </Card>
    );
}
