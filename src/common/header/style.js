import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
 position: relative;
 height: 56px;
 border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div `
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333333
  &.left {
    float: left
  }
  &.right {
    float: right
    color: #969696
  }
  &.active {
    color: #ea6f5a
  }
`;
export const SearchWrapper = styled.div `
  float: left;
  position: relative;  
  .slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 240px
  }
  .slide-exit {
    width: 160px;
    transition: all .2s ease-out;
  }
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px
    line-height: 30px;
    text-align:center;
    border-radius:15px;
    &.focused {
      background: #777777;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-left: 20px;
  background:#eeeeee;
  margin-top: 9px;
  box-sizing: border-box;
  padding:0 30px 0 20px;
  font-size: 14px;
  color: #666666;
  &::placeholder {
    color: #999999;
  }
  &.focused {
    width: 240px
  }
`;
export const Addition = styled.div `
  position: absolute;
  right: 0;
  top 0;
  height: 56px
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px
  &.reg {
    color:#ec6149
  }
  &.writting {
    color: #fff;
    background: #ec6149
  }
`;

export const SearchInfo = styled.div `
 position: absolute;
 left: 0;
 top: 56px;
 width: 240px
 padding: 0 20px;
 box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696
  
`

export const SerachSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer
  .spin {
    display: block;
    float: left;
    font-size 12px
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center
  }
`
export const SearchInfoList = styled.div `
  overflow:hidden;
`
export const SearchInfoItem = styled.a `
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #dddddd;
  color #787878;
  display: block;
  float: left;
  border-radius: 3px;
  margin-right:10px;
  margin-bottom 5px
`

