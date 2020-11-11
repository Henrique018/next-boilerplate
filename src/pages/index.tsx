import Head from 'next/head';

type Props = {
	title: string;
};

export default function Home({ title = 'hello world' }: Props) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>{title}</h1>
			</main>
		</div>
	);
}
