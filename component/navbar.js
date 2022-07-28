let navbar = ()=>{
    document.querySelector(".header").innerHTML = 
    `
    <div class="navbar">
    <div id="box1">
      <a href="">
        <img
          src="https://cdn.shopify.com/s/files/1/0997/6284/files/Frame_5cedad94-02ea-41c0-8358-07c2b789f67e.png?v=1634232985"
          alt=""
      /></a>
    </div>
    <div id="box2">
      <ul>
        <li><a href="">products</a></li>
        <li><a href="">noise labs</a></li>
        <li><a href="">support</a></li>
        <li><a href="">stories</a></li>
      </ul>
    </div>
    <div id="box3">
      <div class="search">
        <a href="">
          <img
            src="https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/search-icon.svg?v=133283639673881362841635748415"
            alt=""
        /></a>
      </div>
      <div class="cart">
        <a href="">
          <img
            src="https://cdn.shopify.com/s/files/1/0997/6284/files/cart-bag-new.svg?v=5749620504844230698"
            alt=""
        /></a>
      </div>
      <div class="profile">
        <a href="">
          <img
            src="https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/account-icon.svg?v=40610059353920805021635748414"
            alt=""
        /></a>
      </div>
    </div>
  </div>
    `
}

export default navbar