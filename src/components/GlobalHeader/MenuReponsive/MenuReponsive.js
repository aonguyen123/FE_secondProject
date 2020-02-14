import React from 'react';
import { Menu } from 'antd';
import {
    LogoutOutlined,
    GlobalOutlined
} from '@ant-design/icons';
import {
    setLocale,
    FormattedMessage,
    formatMessage
} from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import { headerMenu } from './../../../constants/header-menu';

const { SubMenu } = Menu;

export default function MenuReponsive() {

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
    const renderHeaderMenu = () => (
        headerMenu.map(menu => (
            <Menu.Item key={menu.id}>
                <Link to={menu.link}>
                    {menu.icon}
                    <FormattedMessage id={menu.id} />
                </Link>
            </Menu.Item>
        ))
    )

    return (
        <Menu mode="inline" style={{ borderRight: 'none' }}>
            {renderHeaderMenu()}

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
                        <span role="img" aria-label={languageLabels[locale]}>
                            {languageIcons[locale]}
                        </span>{' '}
                        {languageLabels[locale]}
                    </Menu.Item>
                ))}
            </SubMenu>

            <Menu.Divider />
            <Menu.Item key={2}>
                <Link to="/logout">
                    <LogoutOutlined />
                    <FormattedMessage id="globalHeader.logout" />
                </Link>
            </Menu.Item>
        </Menu>
    );
}
