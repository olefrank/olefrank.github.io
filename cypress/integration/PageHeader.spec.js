describe('Curriculum', () => {
	it('should be available on server', () => {
		cy.visit('/');
	});
});

describe('PageHeader', () => {
	it('should collapse when scrolling a bit down', () => {
		cy.get('[data-e2e=PageHeader]')
		.should('have.css', 'height', '163px');
		
		cy.scrollTo(0, 100)
		
		cy.get('[data-e2e=PageHeader]')
		.should('have.css', 'height', '40px');
	});
	
	it('should "uncollapse" when scrolling up again', () => {
		cy.scrollTo(0, 100)
		
		cy.get('[data-e2e=PageHeader]')
		.should('have.css', 'height', '40px');
		
		cy.scrollTo(0, 0)
		
		cy.get('[data-e2e=PageHeader]')
		.should('have.css', 'height', '163px');
	});
});
