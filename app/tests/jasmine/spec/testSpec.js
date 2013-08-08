// Test Subtract and Square functionality
define(['subtract', 'square','multiply'], function (sub, sq, mul) {
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


    it("Is multiplication of 13 and 1 equals to 13", function() {
      expect(a).toBe(mul(13,1));
    });

    it("Is multiplication of 14 and 1 equals to 13", function() {
      expect(a).toBe(mul(14,1));
    });

		it("Is square of 11 equals 121", function() {
			expect(b).toBe(sq(11));
		});

	});
});
