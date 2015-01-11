describe("Getting cookie", function () {

    var cookies = new Cookies();
    beforeEach(function() {
        cookies.set("foo", "bar");
    });

    it("should return non-existent value as null", function () {
        expect(cookies.get("abc")).toBeNull();
    });

    it("return true after setting a cookie", function () {
        expect(cookies.set("foo", "bar")).toBeTruthy();
    });

    it("should get proper value of set cookie", function () {
        expect(cookies.get("foo")).toBe("bar");
    });

    it("should handle setting of a non-string (object) gracefully", function() {
        cookies.set("obj", {foo: "bar"});
        expect(cookies.get("obj")).toBe("[object Object]");
    });

    it("should handle setting of a non-string (array) gracefully", function() {
        cookies.set("obj", [1, 2, 3]);
        expect(cookies.get("obj")).toBe("1,2,3");
    });

    it("should handle setting of a non-string (bool) gracefully", function() {
        cookies.set("obj", true);
        expect(cookies.get("obj")).toBe("true");
    });

});