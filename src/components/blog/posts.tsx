import * as React from "react";
import { Stack } from "@chakra-ui/react";
import { articles } from "data/posts/articles";
import PostCard from "./post-card";
import { PageSlideFade, StaggerChildren } from "components/page-transitions";
import Header from "components/header";
import { MotionBox } from "components/motion";
import useFetch from "use-http";

const TURQUOISE = "#06b6d4";

const Posts = () => {
  const { get, loading, error, data } = useFetch("https://api.rss2json.com/v1/api.json");
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    get("?rss_url=https://medium.com/feed/@krishnendupatra").then(res => {
      const blogsList = res.items;
      setBlogs(
        blogsList?.sort((a, b) => { 
          const x = new Date(b.pubDate);
          const y = new Date(a.pubDate);
          return Number(x) - Number(y);
        })
      );
      console.log(res);
    });
  }, []);

  return (
    <PageSlideFade>
      <Header underlineColor={TURQUOISE} mt={0} mb={0}>
        Featured Articles
      </Header>
      <StaggerChildren>
        <Stack spacing={4} mt={12}>
          {blogs?.map((article, index) => (
              <PostCard article={article} />
          ))}
        </Stack>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default Posts;
