import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { LogoutOutlined, GlobalOutlined } from '@ant-design/icons';
import {
    setLocale,
    getLocale,
    FormattedMessage,
    formatMessage
} from 'umi-plugin-react/locale';
import { NavLink } from 'react-router-dom';
import allActions from './../../../actions';
import { headerMenu } from './../../../constants/header-menu';

const { SubMenu } = Menu;

function MenuReponsive() {
    const dispatch = useDispatch();
    const history = useHistory();

    const lang = getLocale();
    const changeLang = ({ key }) => setLocale(key);
    const locales = ['vi-VN', 'en-US'];
    const languageLabels = {
        'vi-VN': formatMessage({ id: 'globalHeader.vietnamese' }),
        'en-US': formatMessage({ id: 'globalHeader.english' })
    };
    const languageIcons = {
        'vi-VN': '🇨🇳',
        'en-US': '🇺🇸'
    };
    const renderHeaderMenu = () =>
        headerMenu.map(menu => (
            <Menu.Item key={menu.id}>
                <NavLink to={menu.link} activeStyle={{color: '#1890FF'}}>
                    {menu.icon}
                    <FormattedMessage id={menu.id} />
                </NavLink>
            </Menu.Item>
        ));
    const onLogout = () => {
        dispatch(allActions.authenticatedActions.signout(history));
    }

    return (
        <>
            <Menu
                mode="inline"
                style={{ borderRight: 'none' }}
            >
                {renderHeaderMenu()}
            </Menu>
            <Menu 
                mode='inline' 
                style={{ borderRight: 'none' }}
                defaultSelectedKeys={lang}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <GlobalOutlined />
                            <FormattedMessage id="globalHeader.lang" />
                        </span>
                    }
                    onClick={changeLang}
                >
                    {locales.map(locale => (
                        <Menu.Item key={locale}>
                            <span
                                role="img"
                                aria-label={languageLabels[locale]}
                            >
                                {languageIcons[locale]}
                            </span>{' '}
                            {languageLabels[locale]}
                        </Menu.Item>
                    ))}
                </SubMenu>
                <Menu.Divider />
                <Menu.Item key='logout' onClick={onLogout}>
                        <LogoutOutlined />
                        <FormattedMessage id="globalHeader.logout" />
                </Menu.Item>
            </Menu>
        </>
    );
}
export default MenuReponsive;