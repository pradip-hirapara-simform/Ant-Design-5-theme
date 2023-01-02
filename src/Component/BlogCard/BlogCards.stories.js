import { Images } from "../../ThemeConfig/Images";
import BlogCard from "./BlogCard";

export default {
  title: "Blog Card",
  component: BlogCard, 
};

const Template = (args) => <BlogCard {...args} />;

export const Default = {
  args: {
    cover: Images.blogThumb,
    title: "Blog Card Title",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
  },
};
