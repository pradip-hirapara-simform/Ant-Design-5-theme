import { DownloadOutlined } from "@ant-design/icons/lib/icons";
import { Space } from "antd";
import { Button } from "../../Component/Button/Button";
import { Card } from "../../Component/Card/Card";
import { Container } from "../../Component/Container/Container";
import { Tooltip } from "../../Component/Tooltip/Tooltip.styles";

function About() {
  return (
    <Container>
    <Space direction="vertical" style={{ display: "flex" }}>
      <Card title="Button">
        <Space direction="vertical">
          <Space>
            <Button type="primary">Button</Button>
            <Button>Button</Button>
          </Space>
          <Space>
            <Button size="large">Button</Button>
            <Button size="middle">Button</Button>
            <Button size="small">Button</Button>
          </Space>
          <Space>
            <Button icon={<DownloadOutlined />}>Button</Button>
            <Button icon={<DownloadOutlined />} />
          </Space>
          <Space>
            <Button type="primary" icon={<DownloadOutlined />}>
              Button
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} />
          </Space>
        </Space>
      </Card>
      <Card title="Tooltip">
        <Space direction="vertical">
          <Space>
            <Tooltip title="Hi there!" placement="top">
              <Button size="middle">Top</Button>
            </Tooltip>
            <Tooltip title="Hi there!" placement="bottom">
              <Button size="middle">Bottom</Button>
            </Tooltip>
            <Tooltip title="Hi there!" placement="left">
              <Button size="middle">Left</Button>
            </Tooltip>
            <Tooltip title="Hi there!" placement="right">
              <Button size="middle">Right</Button>
            </Tooltip>
          </Space>
        </Space>
      </Card>
    </Space>
    </Container>
  );
}

export default About;
