import type { Metadata } from "next";
// type Params = { game: string };

type PageProps = {
  params: Promise<{ game: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { game } = await params;

  // fetch team data from db using this game id

  return {
    title: `EaOSU`,
    description: `Check out the ${game} roster at EaOSU`,
    openGraph: {
      title: `${game} roster`,
      description: ``,
      images: [],
    },
  };
}

// fetches data(params) on the server
export default async function TeamPage({ params }: PageProps) {
  const { game } = await params;

  return <div>{game + ` page`}</div>;
}
