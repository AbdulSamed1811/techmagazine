let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideALLSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideALLSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false )

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true )

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products


let products = [
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664419042/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/246499_0_tr8twb.png/mxw_640,f_auto',
        image2: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664425826/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/246500_0_sqwdti.png/mxw_640,f_auto',
        old_price:'$400',
        curr_price:'$300',
    },
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'http://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-610-brown.png?v=1613730933',
        image2: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1643119171/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/220168_wldfie.png/mxw_640,f_auto',
        old_price:'$400',
        curr_price:'$300',
    },
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'https://in.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4b5941ad/JBL_TUNE220TWS_ProductImage_Blue_ChargingCase%20Open.png?sw=537&sfrm=png',
        image2: 'https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2aeb5c75/JBL_TUNE220TWS_ProductImage_Green_Open.png?sw=537&sfrm=png',
        old_price:'$400',
        curr_price:'$300',
    },
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'https://www.jbl.com.my/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6f4edb79/JBL_JR310_Product%20Image_Detail%202_Red.png?sw=537&sfrm=png',
        image2: 'https://www.jbl.com.au/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfc6c6116/JBL_JR310_Product%20Image_Detail%202_Blue.png?sw=537&sfrm=png',
        old_price:'$400',
        curr_price:'$300',
    },
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_4183b1b0-db4c-40b5-8912-9b3a768773b8_600x.png?v=1658824212',
        image2: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_c8ee2092-a201-41d5-a17e-7ae4bc16af8d_600x.png?v=1658824212',
        old_price:'$400',
        curr_price:'$300',
    },
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'https://media.croma.com/image/upload/v1612526581/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/232436_zkrkpy.png',
        image2: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d6c575d-bb23-4ba3-a144-eeabb6ae0a9a_600x.png?v=1625045497',
        old_price:'$400',
        curr_price:'$300',
    },
    {
        name:'JBL E55BT KEY BLACK',
        image1: 'http://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-mediumspinggreen_43d63b08-d281-4c88-aa0c-ab9fab9add89.png?v=1622527413',
        image2: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3c53a1e3-bffe-4c6d-b102-cc409c1bfe71_600x.png?v=1625045117',
        old_price:'$400',
        curr_price:'$300',
    },
    
]

let products_list = document.querySelector('#latest-products')
let best_products_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
    <div class="col-3 col-md-6 col-sm-12">
    <div class="product-card">
        <div class="product-card-img">
            <img src="${e.image1}" alt="">
            <img src="${e.image2}" alt="">
        </div>
        <div class="product-card-info">
            <div class="product-btn">
                <button class="btn-flat btn-hover btn-shop-now">Shop Now</button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class='bx bxs-cart-add' ></i>
                </button>
                <button class="btn-flat btn-hover btn-cart-add">
                    <i class='bx bxs-heart' ></i>
                </button>
            </div>
            <div class="product-card-name">
                ${e.name}
            </div>
            <div class="product-card-price">
                <span><del>${e.old_price}</del></span>
                <span class="curr-price">${e.curr_price}</span>
            </div>
        </div>
    </div>
</div>
    `

   products_list.insertAdjacentHTML("beforeend", prod) 
   best_products_list.insertAdjacentHTML("afterbegin", prod) 
})