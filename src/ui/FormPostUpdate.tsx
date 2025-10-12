import { useState } from "react";

import { updatePost } from "../api/firebaseActions";

import ButtonForm from "./ButtonForm";

import type { BlogPost } from "../types/api";

interface FormPostUpdateProps {
  post: BlogPost;
  onClose: () => void;
}

function FormPostUpdate({ post, onClose }: FormPostUpdateProps) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await updatePost(post.id, title, content);
    setIsLoading(false);

    if (!result.success) return alert(result.error);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title-edit"
          className="mb-2 block text-sm text-gray-100/70"
        >
          Zmień tytuł artykułu:
        </label>
        <input
          id="title-edit"
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="focus input focus:outline-none"
          placeholder="Tytuł artykułu - na przykład 'Koniec ze śladami palców i odbiciami światła na ekranach w aucie!'"
        />
      </div>
      <div>
        <label
          htmlFor="content-edit"
          className="mb-2 block text-sm text-gray-100/70"
        >
          Wklej treść artykułu ( edytor treści - https://onlinehtmleditor.dev/):
        </label>
        <textarea
          id="content-edit"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
          className="input h-120 resize-none"
          placeholder="Treść artykułu - na przykład 'Nowoczesne samochody to synonim komfortu, technologii i…'"
        />
      </div>

      <ButtonForm type="save" margin="auto" isLoading={isLoading} />
    </form>
  );
}

export default FormPostUpdate;
