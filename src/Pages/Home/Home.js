import { Col, Row } from "antd";
import BlogCard from "../../Component/BlogCard/BlogCard";
import { Container } from "../../Component/Container/Container";
import { Images } from "../../ThemeConfig/Images";
import { BlogListHead, BlogListSec } from "./Home.style";

const BlogList = [
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  }
]
function Home() {
  return (
    <BlogListSec className="App">
      <Container>
        <BlogListHead>
          <h1>Blog</h1>
        </BlogListHead>
        <Row gutter={[16, 16]}>
          {BlogList.map((item, i) => {
            return (
              <Col key={i} span={6}>
                <BlogCard
                  cover={item.blogThumb}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </BlogListSec>
  );
}

export default Home;
