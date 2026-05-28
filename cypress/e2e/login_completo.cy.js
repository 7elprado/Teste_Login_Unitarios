describe('Sistema de Login - Testes Completos', () => {
  beforeEach(() => {
    cy.document().then(doc => {
      doc.body.innerHTML = `
        <div style="font-family: Arial; padding: 20px;">
          <h1>Login Teste</h1>
          <input type="text" data-test="username" placeholder="Usuário" style="display: block; margin: 10px 0; padding: 8px;">
          <input type="password" data-test="password" placeholder="Senha" style="display: block; margin: 10px 0; padding: 8px;">
          <button data-test="login-button" style="padding: 10px 20px; background: #4CAF50; color: white; border: none;">Login</button>
          <div data-test="error" style="color: red; margin-top: 10px;"></div>
          <div data-test="success" style="color: green; margin-top: 10px; font-size: 18px;"></div>
        </div>
      `;
      
      const loginBtn = doc.querySelector('[data-test="login-button"]');
      loginBtn.onclick = () => {
        const username = doc.querySelector('[data-test="username"]').value;
        const password = doc.querySelector('[data-test="password"]').value;
        const errorDiv = doc.querySelector('[data-test="error"]');
        const successDiv = doc.querySelector('[data-test="success"]');
        
        errorDiv.textContent = '';
        successDiv.textContent = '';
        
        if (!username) {
          errorDiv.textContent = 'Username is required';
          return;
        }
        if (!password) {
          errorDiv.textContent = 'Password is required';
          return;
        }
        if (username === 'standard_user' && password === 'secret_sauce') {
          successDiv.textContent = 'Products';
        } else if (username === 'locked_out_user') {
          errorDiv.textContent = 'Sorry, this user has been locked out';
        } else {
          errorDiv.textContent = 'Username and password do not match';
        }
      };
    });
  });
  
  // CT-001: Login com sucesso
  it('CT-001: Login com credenciais válidas', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="success"]').should('contain', 'Products');
  });
  
  // CT-002: Senha incorreta
  it('CT-002: Tentativa com senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
  
  // CT-003: Usuário inválido
  it('CT-003: Tentativa com usuário inexistente', () => {
    cy.get('[data-test="username"]').type('usuario_que_nao_existe');
    cy.get('[data-test="password"]').type('qualquer_senha');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
  
  // CT-004: Esquema com múltiplas combinações
  it('CT-004: Múltiplas combinações de login inválido', () => {
    const combinacoes = [
      { usuario: 'usuario_invalido_1', senha: 'senha123', erro: 'Username and password do not match' },
      { usuario: 'usuario_invalido_2', senha: 'senha456', erro: 'Username and password do not match' },
      { usuario: 'locked_out_user', senha: 'secret_sauce', erro: 'locked out' }
    ];
    
    combinacoes.forEach(combo => {
      cy.get('[data-test="username"]').clear().type(combo.usuario);
      cy.get('[data-test="password"]').clear().type(combo.senha);
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('contain', combo.erro);
    });
  });
  
  // CT-005: Campos vazios
  it('CT-005: Tentativa sem preencher campos', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
    
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Password is required');
  });
});
