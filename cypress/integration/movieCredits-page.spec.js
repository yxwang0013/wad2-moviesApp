let id = 590995;
let cast;
let specifiedCast;

describe('movie credits page', () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US`
        )
          .then((response) => {
            cast = response.body.cast
            specifiedCast = cast[0]
          })
    })

    beforeEach(() => {
        cy.visit(`/`);
        cy.get(".card").eq(0).find("img").click();
        cy.get('.btn-primary').eq(0).click()
    })

    describe('layout render', () => {
        it('should get all the casts', () => {
            cy.get('tr').should('have.length', cast.length + 3)
        })
        it('should render title', () => {
            cy.get('thead').find('tr').find('th').eq(0).should('have.text', 'Photo')
        })
    })

    

})