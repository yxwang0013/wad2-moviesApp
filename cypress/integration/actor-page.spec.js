let stars
let specifiedStar;


describe('actor page', () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")
            .then((response) => {
                stars = response.results
                specifiedStar = stars[0]
            })
    })
    beforeEach(() => {
        cy.visit("/")
        cy.get("nav").find("li").eq(1).find("a").click();
    });

    describe("actor layout", () => {
        it("should display page header", () => {
            cy.get("h2").contains("Famous Actor");
            cy.get(".badge").contains(20);
        });
        it('should render actor cards', () => {
            cy.get(".card").should("have.length", stars.length);
        })
    })

   
})