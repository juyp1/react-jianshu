import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavSearch,
    SearchWrapper,
    NavItem,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SerachSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, handlelogout, list, login } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? <NavItem className='right' onClick={handlelogout}>退出</NavItem> : <NavItem className='right'><Link to='/login'>登录</Link></NavItem>
                    }
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : ' iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea = () => {
        const { list, page, totalPage, handleMouseEnter, handleMouseLeave, focused, mouseIn, handleSwitch } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (focused || mouseIn) {
            if (newList.length) {
                for (let i = (page - 1) * 10; i < page * 10; i++) {
                    pageList.push(
                        <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门搜索
                        <SerachSwitch onClick={() => handleSwitch(page, totalPage, this.spinIcon)}><i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>换一批</SerachSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFoucs());
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleSwitch(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;
            console.log(`rotate(${originAngle}deg)`)
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },
        handlelogout() {
            dispatch(loginActionCreators.logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);