/*global describe, it, expect, Cookies */
"use strict";

(function () {
    describe("elementaryjs-cookies Jasmine Test", function () {

        var cookies = new Cookies();

        describe("Integration test of the global Cookie variable", function () {
            it("Should not be empty.", function () {
                expect(cookies).toBeDefined();
            });
        });

        describe("Get non-existing cookie", function () {
            it("Should be empty", function () {
                expect(cookies.get("foo")).toBeNull();
            });
        });

        describe("Setting cookie", function () {
            it("Should return true", function () {
                expect(cookies.set("foo", "bar")).toBeTruthy();
            });
            it("Cookie foo should equal bar", function () {
                expect(cookies.get("foo")).toBe("bar");
            });
        });

        describe("Getting cookie", function () {
            it("Cookie foo should equal bar", function () {
                expect(cookies.get("foo")).toBe("bar");
            });
        });

        describe("Test has()", function() {
            it("Should contain foo", function() {
                expect(cookies.has("foo")).toBe(true);
            });
        });

        describe("Test keys()", function() {
            it("Should contain foo", function() {
                expect(cookies.keys()).toContain("foo");
            });
        });

        describe("Removing cookie", function () {
            it("remove() should return true", function () {
                expect(cookies.remove("foo")).toBe(true);
            });

            it("Cookie foo should be null", function () {
                expect(cookies.get("foo")).toBeNull();
            });

            it("has() should be false", function () {
                expect(cookies.has("foo")).toBe(false);
            });
        });

    });
})();
