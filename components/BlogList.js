import Link from "next/link";
import { usePlausible } from "next-plausible";

const BlogList = ({ posts }) => {
	const plausible = usePlausible();

	const isPublicPost = (post) => !post.slug.startsWith("_");
	const publicPosts = posts.filter(isPublicPost);

	const reformatDate = (fullDate) => {
		const date = new Date(fullDate);
		return date.toDateString().slice(4);
	};

	const renderPost = (post) => (
		<div key={post.slug} className="blog__list__post">
			<time className="blog__list__post__date">
				{reformatDate(post.frontmatter.date)}
			</time>
			<br />
			<Link href={`/posts/${post.slug}`}>{post.frontmatter.title}</Link>
		</div>
	);

	return (
		<>
			<div>
				{publicPosts.length > 0 &&
					publicPosts
						.filter(isPublicPost)
						.map(renderPost)}
			</div>
		</>
	);
};

export default BlogList;
