import React from 'react'
import { Menu, Dropdown } from 'antd';
  
export default function ListaIdiomas() {
  
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
    
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Czech
              </Menu.Item>
              <Menu.Item key="1">
              German
              </Menu.Item>
              <Menu.Item key="2">
              English
              </Menu.Item>
              <Menu.Item key="3">
              Spanish
              </Menu.Item>
              <Menu.Item key="4">
              French
              </Menu.Item>
              <Menu.Item key="5">
              Portuguese
              </Menu.Item>
            </Menu>
          )}
          trigger={['click']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Open Dropdown
          </a>
        </Dropdown>
      </>
    </div>
  );
}