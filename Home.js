import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
            <div className="home__row">  
                <Product id="123344"
                title="The Lean Startup:How Const Innovation Creates Radically Successfully Businesses
                Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._325_BO1,204,203,200.jpg"
                />
                 <Product id="4354578"
                title="Samsung Galaxy S21 Ultra"
                price={250.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91dLTREdG1L._SL1500_.jpg"
                />
            </div> 
            
            
            <div className="home__row">
            <Product id="78978058"
                title="One Plus Nord : Best Phone In This Range"
                price={300.96}
                rating={5}
                image="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/16589-130-2.jpg"
                />
                 <Product id="2343442"
                title="One Plus Buds:Best Truely Wireless Earbuds"
                price={70.96}
                rating={4}
                image="https://image01.oneplus.net/ebp/202006/30/1-m00-15-97-rb8bwl77rhwatgyiaab-p75syzg370.png"
                />
                 <Product id="6581978939"
                title="Noise Buds POP:Best Truely Wireless Earbuds "
                price={55.96}
                rating={3}
                image="https://static.businessworld.in/article/article_extra_large_image/1614167191_iAakZY_Noise.jpg"
                />
            </div>
            
            
            <div className="home__row">
            <Product id="098239873"
                title="Sony Bravia:best price to buy Sony 50 inches Smart Full HD LED TV (TV) in India."
                price={700.96}
                rating={4}
                image="https://static.digit.in/default/b2c96dafbdeef53d2346889937caa00f7fd7b830.jpeg?tr=w-1200"
                />
            </div>
        </div>
    );
}

export default Home
