import * as S from './styles';

const Main = () => {
	return (
		<S.Wrapper>
			<S.Logo
				src="/img/logo.svg"
				alt="Imagem de um átomo e React avançado escrito ao lado"
			/>
			<S.Title>React avançado</S.Title>
			<S.Description>
				TypeScript, React, NextJS e Styled Components
			</S.Description>
			<S.Ilustration
				src="/img/hero-illustration.svg"
				alt="Desenvolvedor de frente para o computador."
			/>
		</S.Wrapper>
	);
};

export default Main;
