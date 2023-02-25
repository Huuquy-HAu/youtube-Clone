import React from 'react'
import { Html5Outlined,SmileOutlined, CodepenOutlined , HomeOutlined} from '@ant-design/icons';
import { Menu } from 'antd';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}


const items = [
    getItem('Trang Chủ', 'Mới', <HomeOutlined />),
    getItem('Nodemy', 'Nodemy', <CodepenOutlined />),
    getItem('Coding', 'Coding', <Html5Outlined />),
    getItem('Âm Nhạc', 'Âm Nhạc',<SmileOutlined />),
];

const SliderBar = ({selectedCategory,setSelectedCategory}) => {
    const onClick = (e) => {
        console.log('click ', e.key);
        setSelectedCategory(e.key)
        document.querySelector('.ant-input').value = '';
    };
    return (
        <div>
            <Menu
                onClick={onClick}
                style={{
                    width: '100%',
                    background:'#fff',
                    color:'#000',
                    hover: '#000',
                    height:'90vh'
                    
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    )
}

export default SliderBar