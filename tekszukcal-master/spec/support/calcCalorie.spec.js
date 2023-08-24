describe("calcCalorie", function() {
    it("calcs calories nedded", function() {
        expect(calcCalorie(10, 50)).toEqual(1342);
        expect(calcCalorie(20, 50)).toEqual(1234);
        expect(calcCalorie(30, 10)).toEqual(1126);
    });
});