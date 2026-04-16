type Params = { game: string };

type PageProps = {
  params: Promise<{ game: string }>;
};

// fetches data(params) on the server
export default async function TeamPage({ params }: { params: Params }) {
  const { game } = await params;

  return <div>{game + ` page`}</div>;
}
