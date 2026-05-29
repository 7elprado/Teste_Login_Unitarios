
Projeto de Testes Automatizados - Módulo de Login.

Sobre o Projeto:

Este projeto contém testes automatizados para validar o funcionamento de um sistema de login. Foram criados 5 cenários de teste que simulam diferentes situações que um usuário pode encontrar ao tentar acessar o sistema.

Cenários de Teste Implementados:

| ID | Cenário | Descrição | Resultado Esperado |



1 | CT-001 | Login com sucesso | Usuário digita credenciais válidas | Sistema exibe "Products" |

2 | CT-002 | Senha incorreta | Usuário correto, senha errada | Mensagem de erro: "Username and password do not match" |

3 | CT-003 | Usuário inválido | Usuário não cadastrado | Mensagem de erro: "Username and password do not match" |

4 | CT-004 | Múltiplas combinações | Testa 3 combinações de erro (Esquema de Cenário) | Cada combinação exibe o erro correspondente |

5 | CT-005 | Campos vazios | Login sem preencher campos | Mensagem: "Username is required" e "Password is required" |

Estrutura do Projeto

teste-login-completo/
├── cypress/
│   └── e2e/
│       ├── 1-getting-started/
│       │   └── todo.cy.js
│       ├── 2-advanced-examples/
│       │   ├── actions.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── aliasing.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── assertions.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── connectors.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── cookies.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── cypress_api.cy.js  -- testes comum pré configurado pelo cypers 
│       │   ├── files.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── location.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── misc.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── navigation.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── network_requests.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── querying.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── spies_stubs_clocks.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── storage.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── traversal.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── utilities.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── viewport.cy.js -- testes comum pré configurado pelo cypers 
│       │   ├── waiting.cy.js -- testes comum pré configurado pelo cypers 
│       │   └── window.cy.js -- testes comum pré configurado pelo cypers 
│       └── login_completo.cy.js
├── cypress.config.js
├── package.json
└── README.md

 Como Executar os Testes

(Instalar dependências)
npm install

Executar testes (modo gráfico)
npx cypress open

Depois clique em login_completo.cy.js

Executar apenas meus testes via terminal
npx cypress run --spec "cypress/e2e/login_completo.cy.js"

Resultado Esperado

Sistema de Login - Testes Completos
  ✓ CT-001: Login com credenciais válidas
  ✓ CT-002: Tentativa com senha incorreta
  ✓ CT-003: Tentativa com usuário inexistente
  ✓ CT-004: Múltiplas combinações de login inválido
  ✓ CT-005: Tentativa sem preencher campos

5 passing (Xms)

Detalhes dos Testes

CT-001: Login com sucesso
- Input: usuario standard_user, senha secret_sauce
- Validação: Mensagem "Products" é exibida

CT-002: Senha incorreta
- Input: usuario standard_user, senha senha_errada
- Validação: Mensagem de erro "Username and password do not match"

CT-003: Usuário inválido
- Input: usuario usuario_que_nao_existe, senha qualquer_senha
- Validação: Mensagem de erro "Username and password do not match"

CT-004: Múltiplas combinações (Esquema de Cenário)
- Combinação 1: usuario usuario_invalido_1, senha senha123
- Combinação 2: usuario usuario_invalido_2, senha senha456
- Combinação 3: usuario locked_out_user, senha secret_sauce
- Validação: Cada combinação exibe o erro correspondente

CT-005: Campos vazios
- Teste A: Clicar em login sem preencher nada
- Teste B: Preencher só o usuário
- Validação: Mensagens "Username is required" e "Password is required"

Tecnologias Utilizadas

- Cypress 13.6.0 - Framework de testes automatizados
- Node.js 20.x - Ambiente de execução
- JavaScript ES6+ - Linguagem dos testes

Status do Projeto

EXISTEM 5 cenários de teste implementados!
