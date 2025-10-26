const { addItem, removeItem, getTotalItems } = require('../cart.js');

describe("cart functions", function () {
    let cart;
    const apple = { name: "Apple", price: 1.0 };
    const banana = { name: "Banana", price: 0.5 };

    beforeEach(() => {
        cart = [];
    });

    test("should add an item and its quantity to the cart",
        function () {
            addItem(cart, apple, 6)
            expect(cart).toEqual([{ item: apple, quantity: 6 }])
        }
    )
    test("should not work with negative",
        function () {
            expect(() => addItem(cart, apple, -3)).toThrow("Quantity must be positive");
        }
    )
    test("should allow adding an item with a quantity of 0", function () {
        addItem(cart, apple, 0);
        expect(getTotalItems(cart)).toBe(0)
    });
    test("should allow items to be removed from the cart", function () {
        addItem(cart, apple, 5);
        addItem(cart, banana, 5)
        removeItem(cart, apple);
        expect(getTotalItems(cart)).toBe(5);
    });
    test("should do nothing if trying to remove item not in cart", function () {
        addItem(cart, apple, 5);
        removeItem(cart, banana);
        expect(cart).toEqual([{ item: apple, quantity: 5 }]);
    })
    test("should remove the last item from the cart, leaving it empty", function () {
        addItem(cart, apple, 5);
        removeItem(cart, apple);
        expect(cart).toEqual([]);
    });
    test("should print out all the items in the cart", function () {
        addItem(cart, apple, 5);
        addItem(cart, banana, 8);
        expect(getTotalItems(cart)).toBe(13);
    });
    test("should handle an empty cart", function () {
        addItem(cart, apple, 2);
        removeItem(cart, apple);
        expect(getTotalItems(cart)).toBe(0);
    });
    test("should handle large quantities", function () {
        addItem(cart, apple, 100);
        addItem(cart, banana, 200);
        expect(getTotalItems(cart)).toBe(300);
    });
});