import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallRight, HiOutlineArrowSmallRight } from "react-icons/hi2";

import { getPosts } from "../api/firestoreService";

import TextSlicer from "../ui/TextSlicer";
import Spinner from "../ui/Spinner";

import type { BlogPost } from "../types/api";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const result = await getPosts();
      setPosts(result.data);
      setSuccess(result.success);
      setError(result.error);
      setIsLoading(false);
    }

    loadPosts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl pt-30 lg:pt-35">
      <h1 className="txt-gradient mb-8 text-2xl leading-tight tracking-wide sm:text-3xl lg:text-4xl">
        <strong className="font-medium">Blog Carbon Care Detailing</strong>
      </h1>

      <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
        Zajrzyj na nasz blog i odkryj praktyczne porady, ciekawostki oraz
        nowości ze świata detailingu i pielęgnacji samochodów. Znajdziesz tu
        wskazówki, jak dbać o lakier, wnętrze i ochronę auta, niezależnie od
        jego wieku czy klasy – od miejskich modeli, przez auta premium, aż po
        wyjątkowe klasyki.
      </p>

      <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
        Nie przegap naszych inspiracji i najnowszych realizacji – śledź nas
        także na{" "}
        <Link
          to="https://www.facebook.com/share/1B82rC4PTh/"
          className="focus text-accent font-medium"
        >
          Facebooku <HiArrowSmallRight className="inline" aria-hidden="true" />
        </Link>{" "}
        i{" "}
        <Link
          to="https://www.instagram.com/carboncaredetailing/"
          className="focus text-accent font-medium"
        >
          Instagramie{" "}
          <HiArrowSmallRight className="inline" aria-hidden="true" />
        </Link>
        , gdzie regularnie dzielimy się poradami i efektami naszej pracy.
      </p>

      <section aria-labelledby="blog-posts">
        <h2 id="blog-posts" className="sr-only">
          Lista artykułów na blogu
        </h2>

        {isLoading ? (
          <Spinner />
        ) : success && posts?.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className={` ${
                  index === 0 ? "md:col-span-2" : "col-span-1"
                } focus bg-opacity-80 hover:border-accent cursor-pointer rounded-2xl border-4 border-gray-500/30 bg-[linear-gradient(82deg,#030712_10%,#0c121e_40%,#030712_80%,transparent)] px-6 py-5 shadow-xs transition duration-200 ease-in-out`}
              >
                <article>
                  <header className="mb-4">
                    <time
                      dateTime={new Date(post.createdAt).toISOString()}
                      className="text-sm leading-relaxed text-gray-100/80 capitalize sm:text-base lg:text-lg"
                    >
                      {new Date(post.createdAt).toLocaleDateString(
                        "pl-PL",
                        options,
                      )}
                    </time>

                    <h3 className="txt-gradient my-5 text-xl font-medium sm:text-2xl lg:text-3xl">
                      <strong className="font-medium">{post.title}</strong>
                    </h3>
                  </header>

                  <TextSlicer maxLength={index === 0 ? 55 : 15}>
                    {post.content}
                  </TextSlicer>
                </article>

                <button
                  className="text-accent mt-3 cursor-pointer text-sm leading-relaxed sm:text-base lg:text-lg"
                  aria-label={`Czytaj więcej o ${post.title}`}
                >
                  Czytaj więcej{" "}
                  <HiOutlineArrowSmallRight
                    className="inline"
                    aria-hidden="true"
                  />
                </button>
              </Link>
            ))}
          </div>
        ) : error ? (
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Nie udało się załadować artykułów.
          </p>
        ) : (
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            Brak artykułów do wyświetlenia.
          </p>
        )}
      </section>
    </div>
  );
}

export default Blog;
