// Test Subtract and Square functionality
define(['subtract', 'square'], function (sub, sq) {
	var that = this, a = 13, b = 121;
	describe("Subtract Square Functionality Testcase:", function() {
		beforeEach(function() {
				that.sub = sub;
				that.sq = sq;
		});

		it("Is Subtraction of 18 and 5 equals to 13", function() {
			expect(a).toBe(sub(18,5));
		});

		it("Is Subtraction of 18 and 3 equals to 13", function() {
			expect(a).toBe(sub(18,3));
		});

		it("Is Subtraction of 18 and 1 equals to 13", function() {
			expect(a).toBe(sub(18,1));
		});

		it("Is square of 11 equals 121", function() {
			expect(b).toBe(sq(11));
		});
	});