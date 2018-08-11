import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  overflow: hidden;
  margin 0 auto;
 
  padding-top: 30px;
`;
export const HomeLeft = styled.div`
 float: left;
 width: 625px;
 .banner-img {
   width: 625px;
   height 270px;
 }
`
export const HomeRight = styled.div`
  width: 240px;
  float: right
`
export const TopicWrapper = styled.div`
 padding: 20px 0 10px 0;
 overflow: hidden;
 margin-left: -18px;
 border-bottom: 1px solid #dcdcdc
`

export const TopicItem = styled.div`
   float: left;
   height: 32px;
   line-height: 32px;
   font-size: 14px;
   margin-left: 18px;
   color: #000000;
   background: #f7f7f7;
   border: 1px solid #dcdcdc;
   padding-right: 10px;
   border-radius: 4px;
   margin-bottom: 10px
   .topic-pic {
     margin-right: 10px;
     width: 32px;
     height: 32px;
     float:left;
     display: block
   }
`
export const Morelink = styled.a`
float: left;
height: 32px;
line-height: 32px;
font-size: 14px;
margin-left: 18px;
color: #666666;
padding-right: 10px;
border-radius: 4px;
margin-bottom: 10px;
cursor: pointer; 
`;

export const ListItem = styled.div`
 padding: 20px 0;
 border-bottom: 1px solid #dcdcdc;
 overflow: hidden;
 .pic {
   width: 125px;
   height: 100px;
   display: block;
   float: right;
   border-radius: 10px;
 }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight:bold;
    color: #3333
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999999

  }
`;

export const RecommendItem = styled.div`
  margin-bottom 4px;
    .pic {
      width: 100%; 
      height: 50px
   }
`

export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  color: #ffffff;
  background: #a5a5a5;
  margin: 30px 0;
  text-align: center;
  cursor: pointer
`;
export const BackTop = styled.div`
 position: fixed;
 width: 60px;
 height: 60px;
 line-height: 60px;
 text-align: center;
 border: 1px solid #cccccc;
 right: 100px;
 bottom: 100px;
 font-size: 12px;
`