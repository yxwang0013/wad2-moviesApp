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
            console.log(specifiedCast)
          })
    })

    beforeEach(() => {
        cy.visit(`/`);
        cy.get(".card").eq(0).find("img").click();
        cy.get('.btn-primary').eq(0).click()
    })

    describe('layout render', () => {
        it('should get all the casts', () => {
            cy.get('tr').should('have.length', cast.length + 1)
        })
        it('should render title', () => {
            cy.get('thead').find('tr').find('th').eq(0).should('have.text', 'Photo')
        })
    })

    describe('Specified cast', () => {
        it('should get specified cast', () => {
            cy.get('tbody').find('tr').find('td').eq(1).should('have.text', specifiedCast.name)
        })
        it('should get specified image', () => {
            cy.get('tbody').find('tr').find('td').eq(0).find('img').invoke('attr', 'src').should('contains', specifiedCast.profile_path)
        })
    })

})