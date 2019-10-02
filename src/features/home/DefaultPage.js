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
import { Button } from "@blueprintjs/core"
import axios from 'axios'
import { CHEVRON_UP } from '@blueprintjs/icons/lib/esm/generated/iconContents';
import { height } from 'window-size';
export class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      rank: [],
    }
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: 'http://5d94ba79a961920014e93803.mockapi.io/api/test-detail/1'
    }).then(res => {
      console.log('res.data', res.data);
      this.setState({
        detail: res.data
      })
    }).catch(err => {
      console.log(err);
    })
    axios({
      method: "GET",
      url: 'http://5d94ba79a961920014e93803.mockapi.io/api/rank'
    }).then(res1 => {
      console.log('res1.data', res1.data);
      this.setState({
        rank: res1.data
      })
    }).catch(err1 => {
      console.log(err1);
    })
  }
  
  renderBot() {
    const { detail } = this.state
    return (
      <div className="bot">
        <div className="info-container">
          {this.showDetail(detail)}
        </div>
        <div className="line">
        </div>
      </div>
    );
  }
  renderRightBlock() {
    const { rank } = this.state
    return (
      <div className="right-block">
        <div className="info-container">
          {this.showRank(rank)}
         </div>

      </div>
    )
  }
  showDetail = ({ title, content, createdAt }) => {
    return (
      <div className="bot">
        <div className="info-container">
          <div className="title">{title}</div>
          <div className="title">{content}></div>
          <div className="title">{createdAt}</div>
        </div>
       
      </div>
    );
  }
  showRank = (rank) => { 
    return rank.map(({id, name}) => {
        return (
          <div className="right-block">
            <div className="info-container">
              <div className="title">{id}</div>
              <div className="title">{name}</div>
             </div>
          </div>
        )
      })
    } 
    
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
              {this.renderBot()}
            </div>

          </div>
          <div className="right-block">
            <div className="container">
              <div className="title">Rank (9)</div>
            </div>
            {this.renderRightBlock()}
          </div>




        </div>

      </div>
    );
  }
}

/* istanbul ignore next */


/* istanbul ignore next */


export default DefaultPage;
