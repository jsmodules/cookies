describe("setting cookie test suite", function () {

    var cookies = new Cookies();
    beforeEach(function() {
        cookies.set("foo", "bar");
    });

    it("return true after setting a cookie", function () {
        expect(cookies.set("foo", "bar")).toBeTruthy();
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

    it("should properly set default cookie expiration", function() {

    });

    it("should properly set cookie expiration when number supplied", function() {

    });

    it("should properly set cookie expiration when string supplied", function() {

    });

    it("should properly set cookie expiration when date supplied", function() {

    });

    it("should properly set default cookie domain", function() {

    });

    it("should properly set explicit cookie domain", function() {

    });

    it("should properly set default cookie path", function() {

    });

    it("should properly set explicit cookie path", function() {

    });

    it("should properly set default cookie secure flag", function() {

    });

    it("should properly set 'true' cookie secure flag", function() {

    });

    it("should properly set 'false' cookie secure flag", function() {

    });

});