describe("Test utility functions", function() {

    var cookies;
    beforeEach(function() {
        cookies = new Cookies();
        cookies.set("foo", "bar");
    });

    it("should return true when checking for existing cookie", function() {
        expect(cookies.has("foo")).toBe(true);
    });

    it("existing cookie name should be in keys() return", function() {
        expect(cookies.keys()).toContain("foo");
    });

});
