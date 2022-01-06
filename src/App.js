import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [b_title, b_title_e] = useState([
    "새해 반도체 IP 거래소 '한국판 디자인앤드리유즈' 나온다",
    "키파운드리, 큐버모티브에 '2세대 하이브리드 공정' 제공",
    "해외 '반도체 IP' 가격 급등 ... '첨단공정' 속탄다",
    "올해 네이버 신규토자 1위 '블루닷'",
    "시스템반도체설계지원센터 5배 늘린다"
  ]);
  let [b_date, b_date_e] = useState([
    "2021-12-26",
    "2021-12-22",
    "2021-12-21",
    "2021-11-22",
    "2021-11-10"
  ])
  let [b_press, b_press_e] = useState([
    "전자신문",
    "전자신문",
    "전자신문",
    "전자신문",
    "전자신문"
  ])
  let [b_good, b_good_e] = useState([
    0,
    0,
    0,
    0,
    0
  ])
  let [viwmodal, viwmodal_e] = useState(false)
  let [modalTarget, modalTarget_e] = useState(0)

  let[inputval, inputval_e] = useState(['','','']);

  function goodplus(i){
    var a = [...b_good]
    a[i] = a[i]+1
    b_good_e(a)
  }
  function modcon(i){
    if(modalTarget==i){
      viwmodal_e(!viwmodal)
    }else{
      modalTarget_e(i)
    }
  }
  // function saveData(){
  //   var capyarry = [...b_title];
  //   capyarry.push(inputval);
  //   b_title_e(capyarry)
    
  // }
  return (
    <div className="App">
      <div className='App-header'>
        <h1>React Study</h1>
      </div>
      { b_title.map(function(item, i){
        return (
        <div className='list'>
          <h3 onClick={()=>{modcon(i)}}>{ b_title[i] } </h3>
          <p>{ b_date[i] }</p>
          <p>{ b_press[i] }</p>
          <div className='good' onClick={()=>{goodplus(i)}}><span>👍</span> { b_good[i] }</div>
          <hr/>
        </div>
        )
      }) }

      <div className='write'>
        <div>
          <span>타이틀</span>
          <input onChange={(e)=>{
            var copyarray = [...inputval];
            copyarray[0] = e.target.value;
            inputval_e(copyarray)
          }}/>
        </div>
        <div>
          <span>발행일</span>
          <input onChange={(e)=>{
            var copyarray = [...inputval];
            copyarray[1] = e.target.value;
            inputval_e(copyarray)
          }}/>
        </div>
        <div>
          <span>언론명</span>
          <input onChange={(e)=>{
            var copyarray = [...inputval];
            copyarray[2] = e.target.value;
            inputval_e(copyarray)
          }}/>
        </div>
        <button onClick={()=>{
          var copyarray = [...b_title];
          copyarray.unshift(inputval[0]);
          b_title_e(copyarray)
          copyarray = [...b_date];
          copyarray.unshift(inputval[1]);
          b_date_e(copyarray)
          copyarray = [...b_press];
          copyarray.unshift(inputval[2]);
          b_press_e(copyarray)
        }}>저장</button>
      </div>
      
      
      {
        viwmodal === true
        ? <Modal title={b_title} date={b_date} press={b_press} good={b_good} target={modalTarget}/>
        : null
      }
    </div>
  );
  
}
function Modal(props){
  return(
    <div className="modal">
      <div className='contents'>
        <h3>{props.title[props.target]}</h3>
        <p>{props.date[props.target]}</p>
        <p>{props.press[props.target]}</p>
        {/* <button onClick={()=>{viwmodal_e(false)}}>닫기</button> */}
        {/* <div className='good' onClick={()=>{goodplus(target)}}><span>👍</span> { b_good[target] }</div> */}
      </div>
    </div>
  );
}



export default App;
