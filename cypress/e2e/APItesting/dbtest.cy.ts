describe("database testing",()=>{
    it("validate columns",()=>{
        cy.task('queryDb','select * from new_schema.mock_data where id=1').then((result: any)=>{
            expect(result[0].first_name).to.equal("Doyle")
            expect(result[0].last_name).to.equal("Pardey")
            expect(result[0].email).to.equal("dpardey0@dropbox.com")    
        })
    })
})