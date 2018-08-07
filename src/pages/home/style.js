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
`