import { Card } from "../Card/Card"; 
import { BlogCardInfo, BlogCardTitle } from "./BlogCard.styles";
 

function BlogCard(props) {
  const { cover, title, description } = props;
  return (
    <Card hoverable cover={<img alt="example" src={cover} />}>
      <BlogCardTitle>{title}</BlogCardTitle>
      <BlogCardInfo>{description}</BlogCardInfo>
    </Card>
  );
}
export default BlogCard;