import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Box = styled.div `
padding: 0px 2px;
`

const InputNome = styled.input `
	width: 20%;
`

const InputMensagem = styled.input `
	width: 68%;
`

export class Mensagem extends React.Component {
	state = {
		pessoas: [
			{
				nome: "Lis",
				mensagem: "Olá!",
			},
		],
		valorInputPessoa: "",
		valorInputMensagem: "",
	};

	adicionaPessoa = () => {
		const novaPessoa = {
			nome: this.state.valorInputPessoa,
			mensagem: this.state.valorInputMensagem,
		};

		const novoPessoas = [...this.state.pessoas, novaPessoa];
		this.state.valorInputPessoa = ""
		this.state.valorInputMensagem = ""

		this.setState({ pessoas: novoPessoas });
	};
	
	onChangeInputPessoa = (event) => {
		this.setState({ valorInputPessoa: event.target.value });
		
	};
	
	onChangeInputMensagem = (event) => {
		this.setState({ valorInputMensagem: event.target.value });
	};
	onChanceApagarMensagem = () => {}
	render() {
		const listaDeComponentes = this.state.pessoas.map((pessoa) => {
			return (
				<p>
					<strong> {pessoa.nome}: </strong> {pessoa.mensagem}
				</p>
			);
		});

		return (

			<div>
				<div>{listaDeComponentes}</div>
				<Box>
					<InputNome
						value={this.state.valorInputPessoa}
						onChange={this.onChangeInputPessoa}
						placeholder={"Usuário"}
					/>
					<InputMensagem
						value={this.state.valorInputMensagem}
						onChange={this.onChangeInputMensagem}
						placeholder={"Mensagem"}
					/>
					<button onClick={this.adicionaPessoa}>Enviar</button>
				</Box>
			</div>
		);
	}
}
