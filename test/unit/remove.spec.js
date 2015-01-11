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

});