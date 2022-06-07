import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/SideBarMenuItem.css';
import { actionCreators } from "../redux/IndexkeyStore";
const CHANGE_INDEX_KEY = "CHANGE_INDEX_KEY";
const CHANGE_SELECTED_INDEX = "CHANGE_SELECTED_INDEX";
interface stateType {
  indexKey: number;
  selectedIndex: number;
}
function SideBarMenuItem(props:any) {
  function setIndexToOne() {
    props.changeIndexKey(CHANGE_INDEX_KEY, 0);
    props.changeSelectedIndex(CHANGE_SELECTED_INDEX, 1);
  }
  return (
    <div>
      <Link to="./Notice/list" style={{ textDecoration: 'none' }} onClick={setIndexToOne}><div className="menu-item">공지사항</div></Link>
      <Link to="./content_summary/list" style={{ textDecoration: 'none' }} onClick={setIndexToOne}><div className="menu-item">방송 컨텐츠 정리</div></Link>
      <Link to="./collabo_suggest/list" style={{ textDecoration: 'none' }} onClick={setIndexToOne}><div className="menu-item">콜라보 제의</div></Link>
      <Link to="./content_confirm/list" style={{ textDecoration: 'none' }} onClick={setIndexToOne}><div className="menu-item">컨텐츠 활용 인증</div></Link>
      <Link to="./self_introduction/list" style={{ textDecoration: 'none' }} onClick={setIndexToOne}><div className="menu-item">자기 소개</div></Link>
    </div>
  );
}
function mapStateToProps(state: stateType) {
  return { state: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    changeIndexKey: (text: string, value:number) => dispatch(actionCreators.changeIndexKey(text,value)),
    changeSelectedIndex: (text: string, value:number) => dispatch(actionCreators.changeSelectedIndex(text,value)),
  };
}
export default  connect(mapStateToProps, mapDispatchToProps) (SideBarMenuItem);

