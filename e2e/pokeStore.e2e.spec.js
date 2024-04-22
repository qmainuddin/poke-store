describe('PokeStore', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('should display Pokemon list', async () => {
      await expect(element(by.id('pokemonList'))).toBeVisible();
    });
  
    it('should add item to cart', async () => {
        await expect(element(by.id('cartList'))).toBeVisible();
    });
  });