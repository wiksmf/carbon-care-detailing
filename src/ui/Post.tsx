import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowSmallLeft, HiOutlineClock } from "react-icons/hi2";
import parse from "html-react-parser";

import { getPost } from "../api/firestoreService";

import type { BlogPost } from "../types/api";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function calculateReadingTime(text: string, wordsPerMinute = 200) {
  const cleanText = text.replace(/<[^>]+>/g, "");
  const words = cleanText.trim().split(" ").length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

function Post() {
  const [post, setPost] = useState<BlogPost>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { postId: id } = useParams<{ postId: string }>();

  useEffect(() => {
    async function loadPhotos() {
      if (!id) return;

      const result = await getPost(id);
      setPost(result.data || undefined);
      setSuccess(result.success);
      setError(result.error);
    }
    loadPhotos();
  }, [id]);

  console.log(post);

  const readingTime = post ? calculateReadingTime(post.content) : 0;

  return (
    <>
      {success && post ? (
        <article className="mx-auto max-w-7xl pt-30 lg:pt-35">
          <div className="mb-12">
            <Link
              to="/blog"
              className="focus hover:text-accent cursor-pointer gap-2 text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg"
            >
              <HiOutlineArrowSmallLeft className="inline" aria-hidden="true" />{" "}
              Wróć do wszystkich artykułów
            </Link>
          </div>

          <header className="mb-10">
            <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
              <strong className="font-medium">{post?.title}</strong>
            </h1>

            <div className="mb-3 flex items-center justify-between text-gray-300">
              <time
                dateTime={new Date(post?.createdAt).toLocaleDateString(
                  "pl-PL",
                  options,
                )}
                className="text-sm leading-relaxed text-gray-100/80 capitalize sm:text-base lg:text-lg"
              >
                {new Date(post?.createdAt).toLocaleDateString("pl-PL", options)}
              </time>

              <span className="flex items-center gap-1">
                <HiOutlineClock size={18} />
                {readingTime}
                {readingTime === 1 && " minuta"}
                {(readingTime === 2 ||
                  readingTime === 3 ||
                  readingTime === 4) &&
                  " minuty"}
                {readingTime > 4 && " minut"}
              </span>
            </div>
          </header>

          {parse(post.content)}
        </article>
      ) : error ? (
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Nie udało się załadować artykułów.
        </p>
      ) : (
        <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
          Brak artykułów do wyświetlenia.
        </p>
      )}
    </>
  );
}

export default Post;
