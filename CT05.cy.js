describe('CT05: Teste invalido com data futura', () => {
  it('Testa a criacao de uma pagina com data futura', () => {
    cy.visit('http://127.0.0.1:8000/admin/');

    // Login
    cy.get('input[name="username"]').type('user'); //digite seu usuario aqui
    cy.get('input[name="password"]').type('senha{enter}'); //digite sua senha aqui

    // Confirma se entrou no admin
    cy.url().should('include', '/admin/');

    // Acessa "Pages"
    cy.contains('Pages').click();
    cy.contains('Home').click();

    // Acessa a pagina de adicionar uma nova página
    cy.get('a[href="/admin/pages/3/add_subpage/"]').click();

    // Escolhe o tipo de página (blog page)
    cy.get('a[href="/admin/pages/add/home/blogpage/3/"]').click();

    // Preenche o formulário da nova página
    cy.get('input[name="title"]').type('Teste');
    cy.get('input[name="date"]').type('2026-10-08'); 
    cy.contains('a', 'Promote').click(); // navega para a aba "promote"
    cy.get('input[name="slug"]').clear().type('confira-esse-teste');

    // Salva a página
    cy.contains('Save draft').click();
  });
});
