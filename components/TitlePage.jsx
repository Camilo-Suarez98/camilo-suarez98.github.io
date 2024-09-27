const TitlePage = ({ level = 2, value }) => {
  if (
    typeof level !== 'number' ||
    level < 1 ||
    level > 6
  ) {
    throw new Error(`Unrecognized heading level: ${level}`);
  };

  const HeadingTag = `h${level}`;

  return (
    <HeadingTag className="font-semibold text-4xl text-center my-4">{value}</HeadingTag>
  );
};

export default TitlePage;
