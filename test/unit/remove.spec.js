describe("Removing cookie", function () {

    var cookies;
    beforeEach(function() {
        cookies = new Cookies();
        cookies.set("foo", "bar");
        cookies.remove("foo");
    });

    it("remove() should return true", function () {
        cookies.set("foo", "bar");
        expect(cookies.remove("foo")).toBe(true);
    });

    it("Cookie foo should be null", function () {
        expect(cookies.get("foo")).toBeNull();
    });

    it("has() should be false", function () {
        expect(cookies.has("foo")).toBe(false);
    });

    it("should handle remove with path properly when match", function () {

    });

    it("should handle remove with domain properly when match", function () {

    });

    it("should handle remove with path and domain properly when match", function () {

    });

    it("should handle remove with path properly when do not match", function () {

    });

    it("should handle remove with domain properly when do not match", function () {

    });

    it("should handle remove with path and domain properly when do not match", function () {

    });

});