import { useEffect, useState } from "react";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { addPost, removePost } from "../api/firebaseActions";

import ButtonForm from "./ButtonForm";
import TextSlicer from "./TextSlicer";
import Modal from "./Modal";
import FormPostUpdate from "./FormPostUpdate";
import Spinner from "./Spinner";

import type { BlogPost } from "../types/api";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function FormPost() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: BlogPost[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()
          ? doc.data().createdAt.toDate().toISOString()
          : new Date().toISOString(),
      })) as BlogPost[];

      setPosts(data);
      setIsLoadingData(false);
    });

    return () => unsubscribe();
  }, []);

  console.log(posts);

  const handleAddPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const titleInput = form.elements.namedItem("title") as HTMLInputElement;
    const contentInput = form.elements.namedItem(
      "content",
    ) as HTMLTextAreaElement;

    if (!titleInput.value || !contentInput.value) return;

    const result = await addPost(titleInput.value, contentInput.value);
    setIsLoading(false);

    if (!result.success) return alert(result.error);

    form.reset();
  };

  async function handleRemovePost(id: string) {
    if (!window.confirm("Czy na pewno chcesz usunąć artykuł?")) return;
    setIsLoading(true);

    const result = await removePost(id);
    setIsLoading(false);

    if (!result.success) return alert(result.error);
  }

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="mb-5 text-xl">Dodaj nowy artykuł</h2>
      <form onSubmit={handleAddPost} className="mb-8 space-y-4">
        <div className="flex flex-col items-start">
          <label
            htmlFor="post-title"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wpisz tytuł artykułu:
          </label>
          <input
            type="text"
            name="title"
            id="post-title"
            required
            className="input"
            placeholder="Tytuł artykułu - na przykład 'Koniec ze śladami palców i odbiciami światła na ekranach w aucie!'"
          />
        </div>
        <div className="flex flex-col items-start">
          <label
            htmlFor="post-content"
            className="text-md mb-2 block text-gray-100/70"
          >
            Wklej treść artykułu (edytor treści -
            https://onlinehtmleditor.dev/):
          </label>
          <textarea
            name="content"
            id="post-content"
            required
            className="input max-h-60"
            placeholder="Treść artykułu - na przykład 'Nowoczesne samochody to synonim komfortu, technologii i…'"
          />
        </div>
        <ButtonForm type="add" isLoading={isLoading} />
      </form>

      {isLoadingData ? (
        <Spinner />
      ) : (
        <>
          <h2 className="mb-5 text-xl">Aktualnie dodane artykuły</h2>
          <div className="flex flex-wrap gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-opacity-80 max-w-100 rounded-2xl border-4 border-gray-500/30 bg-gray-900/80 p-3 shadow-xs shadow-gray-800/40 backdrop-blur-lg backdrop-filter"
              >
                <div className="flex flex-col gap-3">
                  <time
                    dateTime={new Date(post.createdAt).toISOString()}
                    className="text-sm leading-relaxed text-gray-100/80 capitalize sm:text-base lg:text-lg"
                  >
                    {new Date(post.createdAt).toLocaleDateString(
                      "pl-PL",
                      options,
                    )}
                  </time>

                  <TextSlicer maxLength={6}>{post.title}</TextSlicer>
                  <TextSlicer maxLength={40}>{post.content}</TextSlicer>
                </div>
                <div className="mt-4 flex gap-2">
                  <ButtonForm
                    type="edit"
                    onClick={() => handleEdit(post)}
                    isLoading={isLoading}
                  />
                  <ButtonForm
                    type="remove"
                    onClick={() => handleRemovePost(post.id)}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPost && (
          <FormPostUpdate post={selectedPost} onClose={handleCloseModal} />
        )}
      </Modal>
    </>
  );
}

export default FormPost;
