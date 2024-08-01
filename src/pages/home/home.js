
import React from 'react';
import Slider from '../../components/slider/Slider';
import"./Home.scss"
import HomeInfoBox from './HomeInfoBox';
import { productData, productData2, productData3, productData4, productData5, productData6 } from '../../components/corousel/data';
import CarouselItem from '../../components/corousel/CarouselItem';
import ProductCarousel from '../../components/corousel/Carousel';
import ProductCategory from './ProductCategory';
import FooterLinks from '../../components/footer/FooterLinks';

const PageHeading = ({heading, btnText}) => {
    return(
        <>
            <div className="--flex-between">
                <h2 className= "--fw-thin">{heading}</h2>
                <button className="--btn">
                    {btnText}
                </button>
            </div>
            <div className= "--hr"></div>
        </>
    )
} ;
const Home = ()=>{
    const productss = productData.map((item)=>(
    <div key={item.id}>
        <CarouselItem name={item.name}
                      url={item.imageurl}
                      price={item.price}
                      description={item.description}     
        />
    </div>
    
    ))

    const productss2 = productData2.map((item)=>(
        <div key={item.id}>
            <CarouselItem url={item.imageurl}
            />
        </div>
        
        ))
        const productss3 = productData3.map((item)=>(
            <div key={item.id}>
                <CarouselItem url={item.imageurl}
                />
            </div>
            
            ))
            const productss4 = productData4.map((item)=>(
                <div key={item.id}>
                    <CarouselItem url={item.imageurl}
                    />
                </div>
                
                ))
                const productss5 = productData5.map((item)=>(
                    <div key={item.id}>
                        <CarouselItem url={item.imageurl}
                        />
                    </div>
                    
                    ))
                    const productss6 = productData6.map((item)=>(
                        <div key={item.id}>
                            <CarouselItem url={item.imageurl}
                            />
                        </div>
                        
                        ))
    return(
        <>
            <Slider/>
            <section>
                <div className="container">
                    <HomeInfoBox/>
                    <PageHeading  heading={"Pre-Wedding 0.1"} />
                    <ProductCarousel products={productss2}/>
                </div>
            </section>
            <section>
                <div className="container">
                    
                    <PageHeading  heading={"Pre-Wedding 0.2"} />
                    <ProductCarousel products={productss3}/>
                </div>
            </section>
            <section className="--bg-grey">
                <div className="container">
                 <h3>Categories</h3>
                 <ProductCategory/>
                </div>
            </section>
            <section>
                <div className="container">
                    
                    <PageHeading  heading={"Bridal Potrait 0.1"} />
                    <ProductCarousel products={productss4}/>
                </div>
            </section>
            <section>
                <div className="container">
                    
                    <PageHeading  heading={"Bridal Potrait 0.2"} />
                    <ProductCarousel products={productss5}/>
                </div>
            </section>
            <section>
                <div className="container">
                    
                    <PageHeading  heading={"Couple Shoot"} />
                    <ProductCarousel products={productss6}/>
                </div>
            </section>
            <FooterLinks/>
        </>
    )
}
export default Home
