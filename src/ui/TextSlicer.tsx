function TextSlicer({
  children,
  maxLength,
}: {
  children: string;
  maxLength: number;
}) {
  if (!children) return null;

  const cleanText = children.replace(/<[^>]+>/g, "");

  return (
    <p className="text-sm leading-relaxed sm:text-base lg:text-lg">{`${cleanText.split(" ").slice(0, maxLength).join(" ")} ...`}</p>
  );
}

export default TextSlicer;
