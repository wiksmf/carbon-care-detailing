import ButtonLink from "../ui/ButtonLink";

function NotFound() {
  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center justify-center pt-30 lg:pt-35">
      <h1 className="txt-gradient mb-8 text-2xl leading-relaxed tracking-wide sm:text-3xl lg:text-4xl text-center">
        <strong className="font-medium">Ojej!</strong>
        <span className="block">
          Chyba nie możemy znaleźć strony, której szukasz.
        </span>
      </h1>

      <ButtonLink href="/" type="primary">
        Wróć na strone główną
      </ButtonLink>
    </div>
  );
}

export default NotFound;
