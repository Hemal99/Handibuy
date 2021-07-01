$(document).ready(function () {
  // Handler for .ready() called.

  const wooClientKey = "ck_e9c78043460fb66b77fc8583b6a71f30c44b9ad9";
  const wooClientSecret = "cs_4d18b5cdd33874cd2532c0b64f2e11cf419a79a3";

  const newArrivals = document.querySelectorAll(".glider")[2];

  //const gliderTrack = document.querySelector('.glider-track')

  //topTenProducts.classList.add('glider-track')
  const card = document.querySelector("card");
  const otherCat = document.getElementById("otherCategories");
  const modalContent = document.getElementById("modalContent");
  const cart = document.getElementById("myCart");

 

  function basicAuth(key, secret) {
    let hash = btoa(key + ":" + secret);
    return "Basic " + hash;
  }

  let auth = basicAuth(wooClientKey, wooClientSecret);

  const addToCart = (data) => {
    const ele = document.createElement("div");

    ele.innerHTML = `
    <div class='cardItems'style="width:100%; margin-top:20px ">
    <div class='row' >
       <div class='col-8 col-md-8 col-lg-8' style="padding-top: 20px; padding-left: 25px;">
         <div style=" white-space: nowrap; 
         width: 100%; 
         overflow: hidden;
         text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</div>
         <div>Sale by : HandyBuy.lk</div>
         <div>amount x price</div>
       </div>
       <div class='col-4 col-md-4 col-lg-4' style="padding: 0;">
           <img  width=100%  src=${data.images.length && data.images[0].src} />
       </div>
     </div> 
     <hr class="solid" style="margin-left: 20px; margin-right: 20px;">
     <div style="padding-right: 10px; padding-left: 10px;">
       <span><button type="submit" name="add-to-cart" value="4334" class="single_add_to_cart_button button alt" style="width: 100%; font-size: 12px;font-family: Poppins,sans-serif; background-color: #e7e7e7; color:#222529;border-color:#e7e7e7 ; border: 0;">VIEW CART</button></span>
     </div>
     <div style="margin-top: 10px; padding-right: 10px; padding-left: 10px;">
       <span><button type="submit" name="add-to-cart" value="4334" class="single_add_to_cart_button button alt" style="width: 100%;font-family: Poppins,sans-serif;font-size: 12px;background-color:#222529; color: #e7e7e7; border: 0;">CHECKOUT</button></span>
     </div>
   </div>
    `;

    cart.appendChild(ele);
  };

  const displayModal = (data) => {
    modalContent.innerHTML = "";
    console.log("prod data=======", data);
    const ele = document.createElement("div");
    let category = `${data.categories[0].name}`;
    let subImage = ``;

    let h5 = "";
    let disCountEle = "";

    let discount =
      ((data.regular_price - data.sale_price) / data.regular_price) * 100;
    discount = Math.floor(discount);
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let regular_price = numberWithCommas(data.regular_price);
    let sale_price = numberWithCommas(data.sale_price);
    if (data.on_sale) {
      h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
      disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
    } else {
      h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
      disCountEle = "";
    }

    for (let i = 1; i < data.categories.length; i++) {
      category += `${data.categories[i].name}`;
    }

    let imageDiv = ` <div class="carousel-item active">
    <div class='imageContainer2'>
  <img
  class="card-img-top-2"
  src=${data.images.length && data.images[0].src}
  alt="Card image cap"
  loading="lazy"
 />


 ${disCountEle}
</div>
  </div>`;

    for (let i = 0; i < data.images.length; i++) {
      `${imageDiv}  
    <div class="carousel-item active">
      <img class="d-block w-100" src=${data.images[i].src}>
    </div> `;
      subImage += `<img class="d-block w-100" src=${data.images[i].src}> `;
    }

    ele.innerHTML = `
    <div class="modal-content" >
    <div class="modal-header">
      
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="width:100%; margin: 0;">
          
            <div class="carousel-inner">
             
            ${imageDiv}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="images">
           ${subImage}
             
        </div>

        
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6  itemName">
          <h2>   <a href=""> ${data.name}</a></h2>
          <div>
            <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
            <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
            <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
            <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
            <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
          </div>
          <div class="modalPrice">${h5}</div>
          <div class="description">${data.short_description}</div>
          
          <div><span style="font-size: .8rem; letter-spacing: .015em;
            text-transform: uppercase; color:#6c757d">CATEGORIES:</span><span><a href="" style="font-size: .8rem; color: #222529; font-weight: 700;  letter-spacing: -.015em;">${category}</a></span></div>
          <hr class="solid">
          <div>
            <button   type="button" class="btnMinus">-</button><input type="number" id="number" class="input-text qty text inputBtn" step="1" min="1" max="10" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" style="justify-content: center;"><button  type="button" class="btnPlus" onClick="incrementValue()">+</button>
            <span><button type="submit" name="add-to-cart" value="4334" class="single_add_to_cart_button button alt"><span class="">
              <i class="fal fa-shopping-bag" style=" font-weight: 400; margin-right: 10px;"></i>
            </span>Add to cart</button></span>
          </div>
          <hr class="solid">
          <div class="product-share" style="margin-top: 20px;">
            <div class="share-links" >
            <span><a href="https://www.facebook.com/sharer.php?u=https://handybuy.lk/product/andrea-hair-oil/"  style="text-decoration: none;"><i class="fab fa-facebook-f facebookIcon"></i></a></span>
            <span class=""><a href="https://www.facebook.com/sharer.php?u=https://handybuy.lk/product/andrea-hair-oil/"  style="text-decoration: none;"><i class="bi bi-twitter twiterIcon" ></i></a></span>
            <span class=""><a href="https://www.facebook.com/sharer.php?u=https://handybuy.lk/product/andrea-hair-oil/"  style="text-decoration: none;"><i class="fab fa-linkedin-in linkdinIcon"></i></a></span>
            <span class=""><a href="https://www.facebook.com/sharer.php?u=https://handybuy.lk/product/andrea-hair-oil/"  style="text-decoration: none;"><i class="fab fa-google-plus-g googleplusIcon"></i></a></span>
            <span class=""><a href="https://www.facebook.com/sharer.php?u=https://handybuy.lk/product/andrea-hair-oil/"  style="text-decoration: none;"><i class="fas fa-envelope gmailIcon" ></i></a></span> 
          </div>
        </div>
        </div>
        
      </div>
     
    </div>
    
    </div>
    `;

    const btnPlus = document.getElementById("number");
    console.log("btn", btnPlus);

    //     function incrementValue()
    //   {
    //     var value = parseInt(document.getElementById('number').value, 10);
    //     value = isNaN(value) ? 0 : value;
    //     value++;
    //     document.getElementById('number').value = value;
    // }

    //   btnPlus.addEventListener('click',incrementValue)

    modalContent.appendChild(ele);
  };

   function getProducts(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
      
     
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();

          for (const [i, data] of dataList.entries()) {
            
            const prodEl = document.createElement("div");
            let loader = `<div class="loader"></div>`;
          
            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";
            prodEl.innerHTML=loader

            let h5;
            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);
            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);
            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            

            //get Images thumbnail
            

            //let newImage= resizeImg(data.images[0].src,100,100,0)

            prodEl.innerHTML = `
            <div class='imageContainer imageContainer1'>
            <a href=${data.permalink}>
            <img
              class="card-img-top"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             /></a>
            <span class="imageIcon rounded-circle " style="padding-left:7.8px; padding-top: 5px; font-weight: 700;">${
              i + 1
            }<sup>o</sup></span>
            ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
              
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
           
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>${h5}</div>
            </div>
         `;
           
           
            element.appendChild(prodEl);
          
           
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev",
              next: ".glider-next",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: 1,
                  itemWidth: 300,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer =
            document.getElementsByClassName("imageContainer1");

          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");
          let link = document.createElement("a");
          console.log("list----------", dataList.entries());

          //toggle quickView
          //Slider card hover EventListener
          for (const [i, data] of dataList.entries()) {
            imageContainer[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer[i].appendChild(span);

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer[i].appendChild(newSpan);

              // newSpan.addEventListener("click", () => displayModal(data));
              //span.addEventListener("click", () => addToCart(data));
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
                dataList[i].images.length && dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getProductNew(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
     

      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
       
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";
            let h5;
            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);

            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);

            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer2'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-2"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             /></a>

             ${disCountEle}
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
               ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: 5,
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-1",
              next: ".glider-next-1",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: 1,
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer2");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-2");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-1";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              // newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
                dataList[i].images &&
                dataList[i].images.length &&
                dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getProductDeals(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
     

      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using .json()
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
          console.log("data", dataList);

          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            const matches = data.sale_price.match(/(\d+)/);
            let disCountEle;
            let discount =
              ((data.regular_price - matches[0]) / data.regular_price) * 100;
            discount = Math.floor(discount);
            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(matches[0]);

            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${data.price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer3'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-3"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             /></a>
          
             ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer; ">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; "><a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
               ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-2",
              next: ".glider-next-2",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: 1,
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer3");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-3");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-1";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              // newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
                dataList[i].images &&
                dataList[i].images.length &&
                dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getProductHome(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
          

          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;
            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);

            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);

            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer4'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-4"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
              loading="lazy"
             /></a>
          
            ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
                ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-3",
              next: ".glider-next-3",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: 1,
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer4");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-4");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
              dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-1";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              // newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
              dataList[i].images &&
              dataList[i].images.length &&
              dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getClothing(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
         

          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;

            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);
            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);
            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer5'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-5"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
              loading="lazy"
             /></a>
          
           ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
               ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-4",
              next: ".glider-next-4",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 5,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer5");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-5");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
              dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-1";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              //newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
              dataList[i].images &&
              dataList[i].images.length &&
              dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

 function getShoes(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
        

          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;

            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);
            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);
            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer6'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-6"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
              loading="lazy"
             /></a>
          
           ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
               ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-5",
              next: ".glider-next-5",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 5,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer6");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-6");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
              dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-2";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              // newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
              dataList[i].images &&
              dataList[i].images.length &&
              dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getHealth(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
        

          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;

            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);
            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);
            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer7'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-7"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
              loading="lazy"
             /></a>
          
           ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
               ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-6",
              next: ".glider-next-6",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 5,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer7");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-7");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
              dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-2";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              // newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });

              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
              dataList[i].images &&
              dataList[i].images.length &&
              dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getMobile(wooUrl, element) {
    try {
      let loader = `<div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
      element.innerHTML=loader;
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          let loadIcon = document.getElementById('lds-ellipsis');
          loadIcon.remove();
        

          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;

            let disCountEle;
            let discount =
              ((data.regular_price - data.sale_price) / data.regular_price) *
              100;
            discount = Math.floor(discount);
            function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            let regular_price = numberWithCommas(data.regular_price);
            let sale_price = numberWithCommas(data.sale_price);
            if (data.on_sale) {
              h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${regular_price}.00</del> Rs.${sale_price}.00</span></h5>`;
              disCountEle = ` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`;
            } else {
              h5 = `<h5><span style="font-weight: 600;">Rs.${regular_price}.00</span></h5>`;
              disCountEle = "";
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer8'>
            <a href=${data.permalink}>
            <img
              class="card-img-top-8"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
              loading="lazy"
             /></a>
          
           ${disCountEle}
           
            </div>
            <div class="card-body" style="cursor: pointer;">
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis; ">  <a><span style="font-size: 10px; color: #6c757d;" class="card-title">${data.slug.toUpperCase()}</span></a></div>
            <div style=" white-space: nowrap; 
            width: 100%; 
            overflow: hidden;
            text-overflow: ellipsis;"> <a><h6 class="card-title">${
              data.name
            }</h6></a></div>
              <p class="card-text">
               <span  style="font-size: 15px; color: #6c757d;">Sale by HandyBuy.lk</span>
              </p>
              <div>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star checked fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
                <span class="fa fa-star fa-xs" style="color: #6c757d;"></span>
              </div>
              <div>
               ${h5}
              </div>
            </div>
         `;

            element.appendChild(prodEl);
          }
          new Glider(element, {
            slidesToShow: "auto",
            slidesToScroll: 1,
            itemWidth: 200,
            draggable: true,
            scrollLock: false,
            dots: "#dots",
            rewind: true,
            arrows: {
              prev: ".glider-prev-7",
              next: ".glider-next-7",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 237,
                  slidesToShow: "auto",
                  exactWidth: true,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToScroll: 5,
                  slidesToShow: 5,
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 300,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 1,
                  dots: false,
                  arrows: true,
                  scrollLock: false,
                },
              },
            ],
          });

          const imageContainer2 =
            document.getElementsByClassName("imageContainer8");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-8");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (const [i, data] of dataList.entries()) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
              dataList[i].images && dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView-2";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
              // newSpan.addEventListener("click", () => displayModal(data));
              newSpan.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
              span.addEventListener("click", () => {
                window.location.href = `${data.permalink}`;
              });
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
              dataList[i].images &&
              dataList[i].images.length &&
              dataList[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  getProducts(
    "https://handybuy.lk/wp-json/wc/v3/products/?orderby=popularity",
    document.querySelectorAll(".glider")[1]
  );
  getProductNew(
    "https://handybuy.lk/wp-json/wc/v3/products/?orderby=date&per_page=14",
    document.querySelectorAll(".glider")[2]
  );
  getProductDeals(
    "https://handybuy.lk/wp-json/wc/v3/products/?on_sale=true",
    document.querySelectorAll(".glider")[3]
  );
  getProductHome(
    "https://handybuy.lk/wp-json/wc/v3/products?category=196&per_page=15",
    document.querySelectorAll(".glider")[4]
  );
  getClothing(
    "https://handybuy.lk/wp-json/wc/v3/products?category=226&page=2&per_page=15&orderby=popularity",
    document.querySelectorAll(".glider")[5]
  );
  getShoes(
    "https://handybuy.lk/wp-json/wc/v3/products?category=230&page=2&per_page=15",
    document.querySelectorAll(".glider")[6]
  );

  getHealth(
    "https://handybuy.lk/wp-json/wc/v3/products?category=163&page=2&per_page=15",
    document.querySelectorAll(".glider")[7]
  );

  getMobile(
    "https://handybuy.lk/wp-json/wc/v3/products?category=201&page=2&per_page=15",
    document.querySelectorAll(".glider")[8]
  );

 

 
});
