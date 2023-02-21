import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Layout, Col, Row, Space, Menu } from "antd";
import { CategoryCard } from "@/components/Home/categories-card/categories-card";
import { HomeCarousel } from "@/components/Home/home-carousel/home-carousel";
const { Header, u } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="bg-white">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1"><Link href="/login">Log In</Link></Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Row justify="center" gutter={[16, 16]}>
          <Col span={20}>
            <Row justify="center" gutter={[16, 16]}>
              <Col span={6}>
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <CategoryCard
                    imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    redirectionLink="#"
                  />
                  <CategoryCard
                    imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    redirectionLink="#"
                  />
                </Space>
              </Col>
              <Col span={18}>
                <HomeCarousel />
              </Col>
              <Col span={6}>
                <CategoryCard
                  imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  redirectionLink="#"
                />
              </Col>
              <Col span={6}>
                <CategoryCard
                  imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  redirectionLink="#"
                />
              </Col>
              <Col span={6}>
                <CategoryCard
                  imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  redirectionLink="#"
                />
              </Col>
              <Col span={6}>
                <CategoryCard
                  imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  redirectionLink="#"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
