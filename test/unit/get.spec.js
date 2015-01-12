describe("Getting cookie", function () {

    var cookies = new Cookies();
    beforeEach(function() {
        cookies.set("foo", "bar");
    });

    it("should return non-existent value as null", function () {
        expect(cookies.get("abc")).toBeNull();
    });

    it("should get proper value of set cookie", function () {
        expect(cookies.get("foo")).toBe("bar");
    });

});