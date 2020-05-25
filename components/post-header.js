import Avatar from "../components/avatar";
import DateFormater from "../components/date-formater";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        {coverImage ? <CoverImage title={title} src={coverImage} /> : ""}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block  mb-6">
          {author ? (
            <Avatar name={author.name} picture={author.picture} />
          ) : (
            <Avatar
              name={"Gabriele Castellani"}
              picture={"/assets/blog/authors/gab.jpeg"}
            />
          )}
        </div>
        <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
        </div>
      </div>
    </>
  );
}
