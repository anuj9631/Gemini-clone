import './Main.css';
import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

         {!showResult
         ?<>
          <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful places to see on an upcoming road trip </p>
            <img src={assets.compass_icon} alt=""/>
          </div>

          <div className="card">
            <p>Explore the economic and environmental benefits of transitioning to renewable sources </p>
            <img src={assets.bulb_icon} alt=""/>
          </div>

          <div className="card">
            <p>Delve into the latest advancements in solar, wind, and hydroelectric power </p>
            <img src={assets.message_icon} alt=""/>
          </div>

          <div className="card">
            <p>Discover how machine learning algorithms are reshaping data analysis and predictive modeling </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
         </>: <div class="result">
                  <div class="result-title">
                    <img src={assets.user_icon} alt=""/>
                    <p>{recentPrompt}</p>
                  </div>
                  <div class="result-data">
                    <img src={assets.gemini_icon} alt=""/>
                     { loading 
                     ? <div class="loader">
                     <hr />
                     <hr />
                     <hr />
                     </div>
                     :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                     }
                    
                  </div>
               </div>
        }

       
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt=""/>
              <img src={assets.mic_icon} alt=""/>
             {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt=""/>:null} 
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
