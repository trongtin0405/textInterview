import React, { Component } from 'react';
import PropTypes from 'prop-types';
import add from '../../images/add.svg'
import timeline from '../../images/timeline-area-chart.svg'
import annotation from '../../images/annotation.svg'
import share from '../../images/document-share.svg'
import more from '../../images/more.svg'
import help from '../../images/help.svg'
import time from '../../images/time.svg'
import timelinebarchart from '../../images/timeline-bar-chart.svg'
import circle from '../../images/circle.svg'
import tickcircle from '../../images/tick-circle.svg'
import star from '../../images/star.svg'
import startempty from '../../images/star-empty.svg'
import calendar from '../../images/calendar.svg'
import heart from '../../images/heart.svg'
import { Button, Icon } from "@blueprintjs/core";
export class DefaultPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="detail-page">
        <header className="header">
          <div className="header-title">Test detail page</div>
        </header>
          <div className="body">
            <div className="left-block">
              <div className="top">
                <div className="container">
                  <div className="title">Đơn điệu hàm bậc nhất/Bậc nhất chứa tham số -</div>
                  <div className="icon">
                  <img src={add} alt=""></img>
                  </div>
                  <div className="icon">
                  <img src={timeline} alt=""></img>
                  </div>
                  <div className="icon">
                  <img src={annotation} alt=""></img>
                  </div>
                  <div className="icon">  
                  <img src={share} alt=""></img>
                  </div>
                  <div className="icon">
                  <img src={more} alt=""></img>
                  </div>
                </div>
                <div className="container">
                  <div className="title">Đề số 1</div>
                </div>
                <div className="info-container">
                  <div className="item">
                    <img src={help} alt=""></img>
                  </div>
                  <div className="title">
                    10 questions
                  </div>
                  <div className="item">
                    <img src={time} alt=""></img>
                  </div>
                  <div className="title">
                    50 minutes
                  </div>
                  <div className="item">
                    <img src={timelinebarchart} alt=""></img>
                  </div>
                  <div className="title">
                    14 access
                  </div>
                  <div className="item">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    nguyentrongdp
                  </div>
                  <div className="item">
                    <img src={tickcircle} alt=""></img>
                  </div>
                  <div className="item">
                    <img src={star} alt=""></img>
                  </div>
                  <div className="item">
                    <img src={star} alt=""></img>
                  </div>
                  <div className="item">
                    <img src={star} alt=""></img>
                  </div>
                  <div className="item">
                    <img src={star} alt=""></img>
                  </div>
                  <div className="item">
                    <img src={startempty} alt=""></img>
                  </div>
                </div>
                <div className="container-hashtag">
                  <button className="btn-hashtag">#Toan_Lop_12</button>
                </div>
                <div className="container-datetime">
                  <div className="item1" />
                  <div className="item">
                    <img src={calendar} alt=""></img>
                  </div>
                  <div className="item">
                  <div>23/03/2019</div>
                  </div>
                </div>
                <div className="header-btn">
                ĐƠN ĐIỆU HÀM BẬC NHẤT/BẬC NHẤT CHỨA THAM SỐ - ĐỀ SỐ 1
                </div>
                <div className="container-play">
                <Button 
                className="btn-container"
                icon="play">
                Play Test</Button>
              </div>
              </div>
              <div className="bot">
              <div className="container">
                <div className="title">Rating (2)</div>
              </div>
                <div className="info-container">
                  <div className="item">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    haho3003
                    <div className="item1">
                      <img src={heart} alt=""></img>
                    </div>
                  </div>
                  <div className="title">
                    5 months ago
                  </div>     
                </div>
                <div className="line">
              </div>
              </div>
                </div>
            <div className="right-block">
            <div className="container">
                <div className="title">Rank (9)</div>
              </div>
              <div className="info-container">
                  <div className="item-Gold">
                   ACE
                  </div>
                  <div className="item1">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    shinyumita
                    <div className="title1">
                      Nguyễn Phương Nga
                    </div>
                  </div>
                  <div className="title2">
                    9
                  </div>
                  <div className="title3">/ 10</div>       
                </div>
                <div className="info-container">
                  <div className="item-Silver">
                   ACE
                  </div>
                  <div className="item1">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    PaulSan
                    <div className="title1">
                     Nguyễn Quốc Bình
                    </div>
                  </div>
                  <div className="title2">
                    8
                  </div>
                  <div className="title3">/ 10</div>       
                </div>
                <div className="info-container">
                  <div className="item-Bronze">
                   ACE
                  </div>
                  <div className="item1">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    nhutienhn2001
                    <div className="title1">
                     Như Tiến
                    </div>
                  </div>
                  <div className="title2">
                    8
                  </div>
                  <div className="title3">/ 10</div>       
                </div>
                <div className="info-container">
                  <div className="item">
                   4
                  </div>
                  <div className="item1">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    Abcdef
                    <div className="title1">
                    
                    </div>
                  </div>
                  <div className="title2">
                    7
                  </div>
                  <div className="title3">/ 10</div>     
                </div>
                <div className="info-container">
                  <div className="item">
                   5
                  </div>
                  <div className="item1">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    Kieuoanh
                    <div className="title1">
                    Trần Kiều Oanh
                    </div>
                  </div>
                  <div className="title2">
                    7 
                  </div>
                  <div className="title3">/ 10</div>     
                </div>
                <div className="info-container">
                  <div className="item">
                   6
                  </div>
                  <div className="item1">
                    <img src={circle} alt=""></img>
                  </div>
                  <div className="title">
                    haho3003
                    <div className="title1">
                    Hà Cửu Long Hồ
                    </div>
                  </div>
                  <div className="title2">
                    7
                  </div>     
                  <div className="title3">/ 10</div>
                </div>

            </div>
           

        
        </div>
        
      </div>
    );
  }
}

/* istanbul ignore next */


/* istanbul ignore next */


export default DefaultPage;
