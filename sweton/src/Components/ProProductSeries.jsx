import React, { useState } from 'react'
import CommonNavbar from './CommonNavbar'
import axios from 'axios'
import '../Styles/ProProducts.css';
import { Box,Button,Text,Image } from '@chakra-ui/react'
import {setSeriesDisplayType, setSpeakerData} from '../Redux/ProductDetailsPageData/action';
import {useNavigate, useNavigation} from 'react-router-dom';
import Footer from './Footer';
import '../Styles/ProSpeakerDetailsPage.css';
import {useDispatch,useSelector} from 'react-redux';
const ProProductSeries = () => {
    const [Data,setData]=useState([]);
    const [series,setSeries]=useState([]);
    const navigate=useNavigate();
    const selector=useSelector(state=>state.productDetailsReducer);
    const dispatch=useDispatch();
    const responsive = {
      superLargeDesktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };
  
    function handleDetailPageNavigation(e){
        
    localStorage.setItem("productDetailSweton",JSON.stringify(Data[e.target.className]));
      navigate('/proproducts/proLoudSpeakerDetail');
    }
    function handleNavSetCategory(e){
      localStorage.setItem("seriesTypeProloudspeaker",`${e}`);
      dispatch(setSeriesDisplayType(e));
    }
  
    async function getData(){
      try {
        const data=await axios.get('http://localhost:8080/proloud');
        const serieses=await axios.get('http://localhost:8080/proSPKSeries');
        setData(data.data.data);
        setSeries(serieses.data.data);
      } catch (error) {
        console.log(error)
      }
    }
  
    useState(()=>{
       const data=localStorage.getItem('seriesTypeProloudspeaker');
       dispatch(setSeriesDisplayType(data));
      getData();
    },[])
  
    function handleNav(e){
      navigate(e);
     }
  
    return (
      <div>
        <CommonNavbar headdingName={"Pro Loudspeaker"}/>
        <div className='pro-series-navigator' >
         <p onClick={e=>handleNav('/')}>HOME</p>
          <p>|</p>
          <p onClick={e=>handleNav('/proproducts')}>PRO LOUDSPEAKER</p>
          <p>|</p>
          <p onClick={e=>handleNav('/'+selector.series)}>{selector.series!=undefined?selector.series.toUpperCase():""}</p>
          <p>|</p>
          <p>{selector.title!=undefined?selector.title.toUpperCase():""}</p>
         
        </div>
        <div className='series-button-div'>
        {
          series.map((e,idx)=>(
            <button  key={idx} className='series-button-div-button' onClick={et=>handleNavSetCategory(e.title)}>{e.title}</button>
          ))
        }
         </div>
        {
         
            <>
            <div className='pro-series-name-div'>{selector!=undefined?selector.series:""}</div>
            <div>
            {
    Data.map((ex,idxd) => {
    
      
    
      return selector.series.toLowerCase() === ex.series.toLowerCase() ? (
        <div key={ex.id} className='pro-product-main-div'>
          <div className='pro-product-main-div-div'>
            <div>
              <div className='pro-product-main-div-div-div-div-title'>{ex.title}</div>
              <p>{ex.description}</p>
              <div className='pro-product-main-div-div-div-image'>
              
              <Image  src={ex.images[0]} display='block' width='100%' alt="Image" />
                  
       
              </div>
            </div>
            <div>
              <div className='pro-product-main-div-div-div-key-features'>Key Features</div>
              <table className='pro-product-main-div-div-div-key-features-table'>
                <tr>
                  <td>Program Power</td>
                  <td>{ex.programPower}</td>
                </tr>
                <tr>
                  <td>Voice Coil</td>
                  <td>{ex.voiceCoil}</td>
                </tr>
                <tr>
                  <td>Response</td>
                  <td>{ex.response}</td>
                </tr>
                <tr>
                  <td>Sensitivity 1W/1M</td>
                  <td>{ex.senstivity}</td>
                </tr>
              </table>
  
              <div className='pro-product-main-div-div-div-div-specifications-parameters'>
                <div>
                  <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Specification</div>
                  <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
                  <tr>
                  <td>Nominal Diameter</td>
                  <td>{ex.nominalDiameter}</td>
                </tr>
                <tr>
                  <td>Nominal Impedance</td>
                  <td>{ex.nominalImpedance}</td>
                </tr>
                <tr>
                  <td>Response</td>
                  <td>{ex.response}</td>
                </tr>
                
               
              </table>
                </div>
                <div>
                <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Parameters</div>
                <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
                <tr>
                  <td>Resonant Frequency </td>
                  <td><b>FS</b></td>
                  <td>{ex.resonantFrequency}</td>
                </tr>
                <tr>
                  <td>DC Resistance </td>
                  <td><b>RE</b></td>
                  <td>{ex.DCResistance}</td>
                </tr>
                <tr>
                  <td>Electrical Q </td>
                  <td><b>QES</b></td>
                  <td>{ex.electrialQ}</td>
                </tr>
                
              </table>
                </div>
              </div>
  
              <div className='pro-product-main-div-div-div-div-specifications-parameters'>
                <div>
                  <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Mounting Info</div>
                  <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
                  <tr>
                  <td>Overall Diameter</td>
                  <td>{ex.overAllDiameter}</td>
                </tr>
                <tr>
                  <td>Bolt Circle Diameter</td>
                  <td>{ex.boltCircleDiameter}</td>
                </tr>
                <tr>
                  <td>Baffle Cutout Diameter</td>
                  <td>{ex.baffleCutOutDiameter}</td>
                </tr>
                
               
              </table>
                </div>
                <div>
                <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Recone Kit</div>
                <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
                <tr>
                  <td>Recone Kit Number </td>
                  <td>{ex.reconeKitNumber}</td>
                </tr>
                
              </table>
                </div>
              </div>
              
            </div>
            <div >
              <div>
                <Image width='100%'  src={ex.responseCurve}/>
              </div>
              <div className='ReadMore-for-proloudspk'>
                <button className={idxd} onClick={handleDetailPageNavigation}>Read More</button>
              </div>
              <Box marginTop={'2rem'}>
              <Button backgroundColor={'transparent'} padding={'0.3rem 0.4rem'} border={'1px solid red'}>Add To Cart</Button>
            </Box>
            </div>
          </div>
        </div>
      ) : (
        ""
      );
    })
  }
            </div>
            </>
         
        }
       <Footer/>
      </div>
    )
}

export default ProProductSeries
