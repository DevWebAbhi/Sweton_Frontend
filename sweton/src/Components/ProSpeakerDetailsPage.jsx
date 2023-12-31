import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box,Button,Tselectort,Image } from '@chakra-ui/react'
import Footer from './Footer';
import {useDispatch,useSelector} from 'react-redux';
import '../Styles/ProSpeakerDetailsPage.css';
import CommonNavbar from './CommonNavbar';
import { setSpeakerData } from '../Redux/ProductDetailsPageData/action';
import { useNavigate } from 'react-router-dom';
const ProSpeakerDetailsPage = () => {
    const selector=useSelector(state=>state.productDetailsReducer.SpeakerDetailData);
    const detail=useSelector(state=>state.productDetailsReducer.speakerImages);
   const dispatch=useDispatch();
   const navigate=useNavigate();
    const responsive = {
      superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1 },
          items: 1,
          slidesToSlide: 1
        }
    };


    useEffect(()=>{
      const data=JSON.parse(localStorage.getItem('productDetailSweton'));
      dispatch(setSpeakerData(data));
      console.log(data);
        console.log(selector);
    },[])

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide } } = rest;
      return (
        <div className="carousel-button-group-details"> 
          <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >{'<'}</button>
          <button onClick={() => next()} >{'>'}</button>
          
        </div>
      );
    };
    function handleNav(e){
      navigate(e);
     }
     function handleNavSetCategory(e){
      localStorage.setItem("seriesTypeProloudspeaker",`${e}`);
      navigate('/proproducts/series');
    }
  return (
    <div>
        <CommonNavbar headdingName={"Specifications"}/>
        <div className='pro-series-navigator'>
          <p onClick={e=>handleNav('/')}>HOME</p>
          <p>|</p>
          <p onClick={e=>handleNav('/proproducts')}>PRO LOUDSPEAKER</p>
          <p>|</p>
          <p onClick={e=>handleNavSetCategory(selector.series)}>{selector.series!=undefined?selector.series.toUpperCase():""}</p>
          <p>|</p>
          <p>{selector.title!=undefined?selector.title.toUpperCase():""}</p>
         
        </div>
        <div className='pro-series-name-div'>{selector!=undefined && selector.title!=undefined?selector.title:""}</div>
        <div className='up-go-main-div-speaker-details-description'> <p>{selector!=undefined?selector.description:""}</p></div>
      <div className='main-div-speaker-detail'>
     
        <div>
       
        <Carousel
        
  
  
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
         keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        infinite={true}
        customDot={<CustomDot data={[1,2]} />}
        arrows={false} customButtonGroup={<ButtonGroup />}
        
      >
               {detail!=undefined?detail.map((ele,idx)=>{
        return <Image key={idx} src={ele} display='block' width='100%' marginBottom='2rem'/>
      }):""} 
      </Carousel>
     
        </div>
        <div>
        <div className='details-pro-product-main-div-div-div-key-features'>Key Features</div>
            <table className='details-pro-product-main-div-div-div-key-features-table'>
              <tr>
                <td>Program Power</td>
                <td>{selector!=undefined?selector.programPower:""}</td>
              </tr>
              <tr>
                <td>Voice Coil</td>
                <td>{selector!=undefined?selector.voiceCoil:""}</td>
              </tr>
              <tr>
                <td>Response</td>
                <td>{selector!=undefined?selector.response:""}</td>
              </tr>
              <tr>
                <td>Sensitivity 1W/1M</td>
                <td>{selector!=undefined?selector.senstivity:""}</td>
              </tr>
            </table>

            <div className='details-pro-product-main-div-div-div-div-specifications-parameters'>
              <div>
                <div className='details-pro-product-main-div-div-div-div-specifications-parameters-div-title'>Specification</div>
                <table className='details-pro-product-main-div-div-div-div-specifications-parameters-table'>
                <tr>
                <td>Nominal Diameter</td>
                <td>{selector!=undefined?selector.nominalDiameter:""}</td>
              </tr>
              <tr>
                <td>Nominal Impedance</td>
                <td>{selector!=undefined?selector.nominalImpedance:""}</td>
              </tr>
              <tr>
                <td>Response</td>
                <td>{selector!=undefined?selector.response:""}</td>
              </tr>
              
             
            </table>
              </div>
              <div>
              <div className='details-pro-product-main-div-div-div-div-specifications-parameters-div-title'>Parameters</div>
              <table className='details-pro-product-main-div-div-div-div-specifications-parameters-table'>
              <tr>
                <td>Resonant Frequency </td>
                <td><b>FS</b></td>
                <td>{selector!=undefined?selector.resonantFrequency:""}</td>
              </tr>
              <tr>
                <td>DC Resistance </td>
                <td><b>RE</b></td>
                <td>{selector!=undefined?selector.DCResistance:""}</td>
              </tr>
              <tr>
                <td>Electrical Q </td>
                <td><b>QES</b></td>
                <td>{selector!=undefined?selector.electrialQ:""}</td>
              </tr>
              
            </table>
              </div>
            </div>

            <div className='details-pro-product-main-div-div-div-div-specifications-parameters'>
              <div>
                <div className='details-pro-product-main-div-div-div-div-specifications-parameters-div-title'>Mounting Info</div>
                <table className='details-pro-product-main-div-div-div-div-specifications-parameters-table'>
                <tr>
                <td>Overall Diameter</td>
                <td>{selector!=undefined?selector.overAllDiameter:""}</td>
              </tr>
              <tr>
                <td>Bolt Circle Diameter</td>
                <td>{selector!=undefined?selector.boltCircleDiameter:""}</td>
              </tr>
              <tr>
                <td>Baffle Cutout Diameter</td>
                <td>{selector!=undefined?selector.baffleCutOutDiameter:""}</td>
              </tr>
              
             
            </table>
              </div>
              <div>
              <div className='details-pro-product-main-div-div-div-div-specifications-parameters-div-title'>Recone Kit</div>
              <table className='details-pro-product-main-div-div-div-div-specifications-parameters-table'>
              <tr>
                <td>Recone Kit Number </td>
                <td>{selector!=undefined?selector.reconeKitNumber:""}</td>
              </tr>
              
            </table>
              </div>
            </div>
            <Box marginTop={'2rem'}>
              <Button backgroundColor={'transparent'} padding={'0.3rem 0.4rem'} border={'1px solid red'}>Add To Cart</Button>
            </Box>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      data,
      carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = []
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        id='dot-button'
        
        className={active ? "active" : "inactive" } 
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

export default ProSpeakerDetailsPage
