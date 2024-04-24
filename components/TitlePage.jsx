const TitlePage = ({ level = 2, value }) => {
  if (
    typeof level !== 'number' ||
    level < 1 ||
    level > 6
  ) {
    throw new Error(`Unrecognized heading level: ${level}`);
  }

  const HeadintTag = `h${level}`;

  return (
    <HeadintTag className="font-semibold text-4xl text-center mt-4 mb-8">{value}</HeadintTag>
  );
};

export default TitlePage;
