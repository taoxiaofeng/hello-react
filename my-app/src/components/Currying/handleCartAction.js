export function handleCartAction (actionType) {
  console.log(`actionType -- `, actionType)
  return function (productId, quantity) {
    console.log(`productId -- `, productId)
    console.log(`quantity -- `, quantity)
    return function () {
      switch(actionType) {
        case 'ADD':
          console.log(`Adding ${quantity} of product ${productId} to cart.`);
          // 这里可以调用一个添加到购物车的API或更新状态
          break;
        case 'REMOVE':
          console.log(`Removing ${quantity} of product ${productId} from cart.`);
          // 这里可以调用一个从购物车移除的API或更新状态
          break;
        default:
          console.log('Unknown action type');
      }
    }
  }
}