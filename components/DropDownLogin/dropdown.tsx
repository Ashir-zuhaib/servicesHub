import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import Link from 'next/link';

const DropdownComponent = () =>{
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
        if(key == "1"){
            window.location.href = './Login';
        }
        else{
            window.location.href = './Signup';
        }
      };
      const items = [
        {
          label: 'Login',
          key: '1',
        },
        {
          label: 'Sign up',
          key: '2',
        },
      ];
    return(
    <>
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Wann'a Login?
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </>
)
}
export default DropdownComponent;