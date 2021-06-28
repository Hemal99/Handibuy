$(document).ready(function () {
  // Handler for .ready() called.

  const wooClientKey = "ck_e9c78043460fb66b77fc8583b6a71f30c44b9ad9";
  const wooClientSecret = "cs_4d18b5cdd33874cd2532c0b64f2e11cf419a79a3";

  const newArrivals = document.querySelectorAll(".glider")[2];

  //const gliderTrack = document.querySelector('.glider-track')

  //topTenProducts.classList.add('glider-track')
  const card = document.querySelector("card");
  const otherCat = document.getElementById("otherCategories");

  function basicAuth(key, secret) {
    let hash = btoa(key + ":" + secret);
    return "Basic " + hash;
  }

  let auth = basicAuth(wooClientKey, wooClientSecret);

  function getProducts(wooUrl, element) {
    try {
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
     
          for (const [i,data] of dataList.entries()) {

            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";
           
            let h5;
            let disCountEle;
            let discount=((data.regular_price-data.sale_price)/data.regular_price)*100;
            discount=Math.ceil(discount)
            if(data.on_sale){
                h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${data.regular_price}</del> Rs.${data.sale_price}</span></h5>`
                disCountEle =` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`
            }
            else{
              h5=`<h5><span style="font-weight: 600;">Rs.${data.price}</span></h5>`
              disCountEle =''
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer imageContainer1'>
              <img
              class="card-img-top"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             />
          
            <span class="imageIcon rounded-circle " style="padding-left:7.8px; padding-top: 5px; font-weight: 700;">${i+1}<sup>o</sup></span>
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
            text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</h6></a></div>
           
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
                  slidesToScroll: "auto",
                  itemWidth: 280,
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

          const imageContainer =
            document.getElementsByClassName("imageContainer1");
          const imageContainer2 =
            document.getElementsByClassName("imageContainer2");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView
          //Slider card hover EventListener
          for (let i = 0; i < imageContainer.length; i++) {
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

          for (let i = 0; i < imageContainer2.length; i++) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                dataList[i].images.length > 1
                  ? dataList[i].images[1].src
                  : dataList[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
            });

            imageContainer2[i].addEventListener("mouseout", () => {
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
      // const response = await fetch(wooUrl, {
      //     headers: {"Authorization": basicAuth(wooClientKey, wooClientSecret)}
      // });
      // return await response.json();

      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using .json()
          return response.json();
        })
        .then(function (dataList) {
          for (const data of dataList) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";
            let h5;
            let disCountEle;
            let discount=((data.regular_price-data.sale_price)/data.regular_price)*100;
            discount=Math.ceil(discount)
            if(data.on_sale){
                h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${data.regular_price}</del> Rs.${data.sale_price}</span></h5>`
                disCountEle =` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`
            }
            else{
              h5=`<h5><span style="font-weight: 600;">Rs.${data.price}</span></h5>`
              disCountEle =''
            }

          
            prodEl.innerHTML = `
           
            <div class='imageContainer2'>
              <img
              class="card-img-top-2"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             />
          
            
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
            text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</h6></a></div>
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
              prev: ".glider-prev",
              next: ".glider-next",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 280,
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
            document.getElementsByClassName("imageContainer2");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-2");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (let i = 0; i < imageContainer2.length; i++) {
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

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
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
      // const response = await fetch(wooUrl, {
      //     headers: {"Authorization": basicAuth(wooClientKey, wooClientSecret)}
      // });
      // return await response.json();

      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using .json()
          return response.json();
        })
        .then(function (dataList) {
          console.log("data", dataList);

          for (const data of dataList) {
            const prodEl = document.createElement("div");

          

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            const matches = data.sale_price.match(/(\d+)/);
            let disCountEle;
            let discount=((data.regular_price-matches[0])/data.regular_price)*100;
            discount=Math.ceil(discount)
            if(data.on_sale){
                h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${data.regular_price}</del> Rs.${matches[0]}</span></h5>`
                disCountEle =` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`
            }
            else{
              h5=`<h5><span style="font-weight: 600;">Rs.${data.price}</span></h5>`
              disCountEle =''
            }

        

            prodEl.innerHTML = `
           
            <div class='imageContainer3'>
              <img
              class="card-img-top-3"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             />
          
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
            text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</h6></a></div>
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
              prev: ".glider-prev",
              next: ".glider-next",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 280,
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
            document.getElementsByClassName("imageContainer3");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-3");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (let i = 0; i < imageContainer2.length; i++) {
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

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
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
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          const newData = [];

          dataList.forEach((data) => {
            data.categories.forEach((cat) => {
              if (cat.id == 196 || cat.id == 202 || cat.id == 160) {
                newData.push(data);
              }
            });
          });

          for (const data of newData) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;
            let disCountEle;
            let discount=((data.regular_price-data.sale_price)/data.regular_price)*100;
            discount=Math.ceil(discount)
            if(data.on_sale){
                h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${data.regular_price}</del> Rs.${data.sale_price}</span></h5>`
                disCountEle =` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`
            }
            else{
              h5=`<h5><span style="font-weight: 600;">Rs.${data.price}</span></h5>`
              disCountEle =''
            }

          

            prodEl.innerHTML = `
           
            <div class='imageContainer4'>
              <img
              class="card-img-top-4"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             />
          
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
            text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</h6></a></div>
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
              prev: ".glider-prev",
              next: ".glider-next",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 280,
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
            document.getElementsByClassName("imageContainer4");
          const quickView = document.getElementsByClassName("quickView");

          const image = document.getElementsByClassName("card-img-top-4");

          const cartIcon = document.querySelector(".imageCartIcon");

          let span = document.createElement("SPAN");
          let icon = document.createElement("i");
          let newSpan = document.createElement("SPAN");

          //toggle quickView

          for (let i = 0; i < imageContainer2.length; i++) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                newData[i].images && newData[i].images.length > 1
                  ? newData[i].images[1].src
                  : newData[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
                newData[i].images &&
                newData[i].images.length &&
                newData[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  
  function getClothing(wooUrl, element) {
    try {
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          const newData = [];

          dataList.forEach((data) => {
            data.categories.forEach((cat) => {
              if (cat.id == 226) {
                newData.push(data);
              }
            });
          });

          for (const data of newData) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;
           
            let disCountEle;
            let discount=((data.regular_price-data.sale_price)/data.regular_price)*100;
            discount=Math.ceil(discount)
            if(data.on_sale){
                h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${data.regular_price}</del> Rs.${data.sale_price}</span></h5>`
                disCountEle =` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`
            }
            else{
              h5=`<h5><span style="font-weight: 600;">Rs.${data.price}</span></h5>`
              disCountEle =''
            }

            prodEl.innerHTML = `
           
            <div class='imageContainer5'>
              <img
              class="card-img-top-5"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             />
          
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
            text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</h6></a></div>
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
              prev: ".glider-prev",
              next: ".glider-next",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 280,
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

          for (let i = 0; i < imageContainer2.length; i++) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                newData[i].images && newData[i].images.length > 1
                  ? newData[i].images[1].src
                  : newData[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
                newData[i].images &&
                newData[i].images.length &&
                newData[i].images[0].src;
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getShoes(wooUrl, element) {
    try {
      fetch(wooUrl, {
        headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (dataList) {
          const newData = [];

          dataList.forEach((data) => {
            data.categories.forEach((cat) => {
              if (cat.id == 230) {
                newData.push(data);
              }
            });
          });

          for (const data of newData) {
            const prodEl = document.createElement("div");

            prodEl.className = "card";
            prodEl.style = "width: 18rem; margin: 5px;cursor: pointer;";

            let h5;
 
            let disCountEle;
            let discount=((data.regular_price-data.sale_price)/data.regular_price)*100;
            discount=Math.ceil(discount)
            if(data.on_sale){
                h5 = `<h5><span style="font-weight: 600;"><del style="color:#a7a7a7" ; font-size:0.8em>Rs.${data.regular_price}</del> Rs.${data.sale_price}</span></h5>`
                disCountEle =` <span class="saleIcon" style="padding-left:10px; padding-top: 2px; font-weight: 600;">-${discount}%</span>`
            }
            else{
              h5=`<h5><span style="font-weight: 600;">Rs.${data.price}</span></h5>`
              disCountEle =''
            }


            prodEl.innerHTML = `
           
            <div class='imageContainer6'>
              <img
              class="card-img-top-6"
              src=${data.images.length && data.images[0].src}
              alt="Card image cap"
             
             />
          
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
            text-overflow: ellipsis;"> <a><h6 class="card-title">${data.name}</h6></a></div>
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
              prev: ".glider-prev",
              next: ".glider-next",
            },
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToScroll: "auto",
                  itemWidth: 280,
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

          for (let i = 0; i < imageContainer2.length; i++) {
            imageContainer2[i].addEventListener("mouseover", () => {
              // quickView[0].classList.add("visible");

              image[i].src =
                newData[i].images && newData[i].images.length > 1
                  ? newData[i].images[1].src
                  : newData[i].images[0].src;

              span.className = "imageCartIcon";

              icon.className = "fal fa-shopping-bag";

              span.appendChild(icon);
              imageContainer2[i].appendChild(span);

              newSpan.className = "quickView";
              newSpan.setAttribute("data-toggle", "modal");
              newSpan.setAttribute("data-target", "#exampleModalCenter");
              newSpan.textContent = "Quick View";

              imageContainer2[i].appendChild(newSpan);
            });

            imageContainer2[i].addEventListener("mouseout", () => {
              // quickView[0].classList.remove("visible");
              span.className = "";
              icon.className = "";
              newSpan.className = "";
              newSpan.textContent = "";
              image[i].src =
                newData[i].images &&
                newData[i].images.length &&
                newData[i].images[0].src;
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
    "https://handybuy.lk/wp-json/wc/v3/products/?orderby=date",
    document.querySelectorAll(".glider")[2]
  );
  getProductDeals(
    "https://handybuy.lk/wp-json/wc/v3/products/?on_sale=true",
    document.querySelectorAll(".glider")[3]
  );
  getProductHome(
    "https://handybuy.lk/wp-json/wc/v3/products/?page=1&per_page=100",
    document.querySelectorAll(".glider")[4]
  );
  getClothing(
    "https://handybuy.lk/wp-json/wc/v3/products/?page=1&per_page=100",
    document.querySelectorAll(".glider")[5]
  );
  getShoes(
    "https://handybuy.lk/wp-json/wc/v3/products/?page=9&per_page=100",
    document.querySelectorAll(".glider")[6]
  );
  const getOtherProducts = () => {
    const products = [];
    const cakes = [];

    // for(let i =1; i<=2;i++){

    fetch(`https://handybuy.lk/wp-json/wc/v3/products/?page=&per_page=100`, {
      headers: { Authorization: basicAuth(wooClientKey, wooClientSecret) },
    })
      .then(function (response) {
        return response.json();
      })
      .then((dataList) => {
        dataList.forEach((data) => {
          data.categories.forEach((cat) => {
            if (cat.id == 479) {
              cakes.push(data);
            }
          });
        });
      });
    // }
    products.push(cakes);
  };

 
  getOtherProducts();
});
