import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from "next/router";

const DropdownComponent = () =>{
  const router = useRouter();

    const onClick = ({ key}) => {
        message.info(`Page loading...` );
        if(key == "1"){
            router.push('./Login');
        }
        else{
            router.push('./Signup');
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