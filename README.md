# CreditScoringUi
[![Build Status](https://github.com/JoaoSimino/credit-scoring-ui/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/JoaoSimino/credit-scoring-ui/actions/workflows/ci-cd.yml)



## Sumário

- [Descrição](#descrição)
- [Arquitetura e Tecnologias](#arquitetura-e-tecnologias)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar](#como-rodar)
- [Contribuindo](#contribuindo)
- [Pipeline CI/CD](#pipeline-cicd)
- [Licença](#licença)

## Descrição

Este projeto foi gerado com o Angular CLI, versão 20.1.0, e faz parte de um ecossistema de microsserviços voltado para operações financeiras. Com Objetivo de desenvolver uma aplicação front-end fluida e intuitiva que permita ao cliente final:

- Realizar cadastro de dados pessoais
- Solicitar propostas de crédito
- Selecionar a opção de pagamento mais adequada
- Acompanhar o status de faturas em tempo real

## Arquitetura e Tecnologias
- Estrutura modular com navegação por rotas Angular
- Consumo de APIs REST de forma desacoplada
- Integração assíncrona e transparente com backend via API Gateway
- Cada tela do front-end se conecta somente ao serviço necessário, mantendo a abstração para o usuário final

## Funcionalidades

A aplicação se comunica de forma transparente com um API Gateway construído com YARP (.NET). Esse gateway roteia dinamicamente as requisições para os serviços corretos, garantindo desacoplamento entre o front-end e os microsserviços subjacentes, como:
- Serviço de Cadastro de Clientes e  Análise de Crédito
- Serviço de Faturamento
- Serviço de Pagamento (futuramente)

## Pré-requisitos

- Angular 20.1.0
- TypeScript

## Como rodar

Clone o repositório e rode o comando:

```bash
ng serve
```

Assim que o servidor estiver em execução, abra seu navegador e navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente sempre que você modificar qualquer um dos arquivos de origem.

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie uma branch feature com o padrão `feature/nome-da-feature`
3. Faça commits claros e descritivos
4. Abra um Pull Request detalhando as alterações

Por favor, siga o padrão de commits [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Pipeline CI/CD

O projeto utiliza GitHub Actions para:

- Validar o código a cada push/PR na branch `main`
- Executar testes automaticamente
- Buildar e preparar o pacote para release, e subir ja um container atualizar para o Docker hub. 

O workflow está disponível em `.github/workflows/ci-cd.yml`.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Obrigado por usar o CreditScoringUi!  
Para dúvidas ou sugestões, abra uma issue ou entre em contato comigo.