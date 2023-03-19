const style = (backgroundURL: string) => `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		position: relative;
		width: 592px;
		height: 592px;
		background-image: url(${backgroundURL});
		background-size: cover;
		background-position: center center;
	}

	h1 {
		font-family: "Merienda", cursive;
		font-size: 64px;
		position: absolute;
		top: 24px;
		left: 32px;
		color: crimson;
		text-shadow: 1px 0 0 crimson, -1px 0 0 crimson, 0 1px 0 crimson, 0 -1px 0 crimson, 1px 1px crimson, -1px -1px 0 crimson, 1px -1px 0 crimson, -1px 1px 0 crimson;
	}

	h2 {
		position: absolute;
		left: 32px;
		top: 104px;
		font-size: 28px;
		width: 80%;
		color: #2b2020;
		font-family: "Handlee", cursive;
		font-style: italic;
		text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
	}

	#versiculo {
		position: absolute;
		bottom: 24px;
		right: 24px;
		width: 50%;
		font-size: 22px;
		color: #cacaca;
		background: #13131380;
		padding: 16px;
	}
`;

interface Props {
	backgroundURL: string;
	verticle: {
		text: string;
		book: string;
		chapter: string;
		number: string;
	};
	message: string;
	title: string;
}

export function getTemplate({
	message,
	backgroundURL,
	verticle,
	title,
}: Props) {
	return (
		<html>
			<meta charSet="utf-8" />
			<title>Bom Dia</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap"
				rel="stylesheet"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
				rel="stylesheet"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<style dangerouslySetInnerHTML={{ __html: style(backgroundURL) }} />
			<body>
				<h1>
					{title}
					{"!".repeat(Math.floor(Math.random() * (3 - 1) + 1))}
				</h1>
				<h2>{message}</h2>
				<div id="versiculo">
					<p>"{verticle.text}"</p>
					<span>
						({verticle.book} {verticle.chapter}:{verticle.number})
					</span>
				</div>
			</body>
		</html>
	);
}
/**{messages[Math.floor(Math.random() * (messages.length - 1 - 0) + 0)]} */
