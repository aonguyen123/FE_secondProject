import React, { useState, lazy, Suspense } from 'react';
import { LazyLoading } from './../../../../components';
import { Card } from 'antd';

const ListPosts = lazy(() => import('./../ListPosts/ListPosts'));

export default function AccountRight({
    userIdById,
    userIdCurrent,
    postsById,
    likePostHome,
    dislikePostHome,
    hasMorePostsById,
    nextPageById,
    loadingFetchData
}) {
    const [tabKey, setTabKey] = useState('posts');
    const operationTabList = [
        {
            key: 'posts',
            tab: (
                <span>
                    Posts{' '}
                    <span
                        style={{
                            fontSize: 14
                        }}
                    >
                        {`(${postsById.length})`}
                    </span>
                </span>
            )
        }
    ];

    const renderChildrenByTabKey = (tabKey) => {
        if (tabKey === 'posts') {
            return (
                <ListPosts
                    userIdById={userIdById}
                    userIdCurrent={userIdCurrent}
                    postsById={postsById}
                    likePostHome={likePostHome}
                    dislikePostHome={dislikePostHome}
                    hasMorePostsById={hasMorePostsById}
                    nextPageById={nextPageById}
                    loadingFetchData={loadingFetchData}
                />
            );
        }
        return null;
    };

    const onTabChange = key => {
        setTabKey(key);
    };

    return (
        <Card
            className="tabCard"
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={onTabChange}
        >
            <Suspense fallback={<LazyLoading size="small" />}>
                {renderChildrenByTabKey(tabKey)}
            </Suspense>
        </Card>
    );
}
