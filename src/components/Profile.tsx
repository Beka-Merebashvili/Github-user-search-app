import styled from "styled-components";
import locationIcon from "../assets/icon-location.svg";
import websiteIcon from "../assets/icon-website.svg";
import twwiterIcon from "../assets/icon-twitter.svg"
import companyIcon from "../assets/icon-company.svg"
import moment from "moment";

export default function Profile(props: HeaderProps & UserInfoProps) {
  const createdAt = props.userInfo?.created_at;
  const formattedDate = moment(createdAt).format("DD MMM YYYY");
   
  const infoBoxes = [
    { name: 'Repos', stat: props.userInfo?.public_repos },
    { name: 'Followers', stat: props.userInfo?.followers },
    { name: 'Following', stat: props.userInfo?.following },
  ];
  
  const gitIfo = [
    { icon: locationIcon, alt: 'locationIcon', value: props.userInfo?.location },
    { icon: websiteIcon, alt: 'websiteIcon', value: props.userInfo?.blog },
  ]

  const gitIfo2 = [
    { icon: twwiterIcon, alt: 'websiteIcon', value: props.userInfo?.twitter_username },
    { icon: companyIcon, alt: 'companyIcon', value: props.userInfo?.company },
  ]


  return (
    <ProfileContainer isDark={props.isDark} userInfo={props.userInfo} >
      <div className="userInfo">
        <img src={props.userInfo?.avatar_url} alt="userAvatar" />
        <div className="mainInfo">
          <p className="name">{props.userInfo?.name}</p>
          <p className="login">@{props.userInfo?.login}</p>
          <p className="createdAt">Joined {formattedDate}</p>
        </div>
      </div>
      <p className="bio">{props.userInfo?.bio == null ? "This profile has no bio" : props.userInfo.bio}</p>
      <div className="followers">
    {infoBoxes.map((infoBox, index) => (
      <div className="infoBox" key={index}>
        <p className="statNme">{infoBox.name}</p>
        <p className="stat">{infoBox.stat}</p>
      </div>
    ))}
  </div>
  <div className="wrapper">
  {gitIfo.map((item, index) => (
    <div className={!item.value  ? "nullValue wrapperInfo" : "wrapperInfo"}  key={index}>
      <img src={item.icon} alt={item.alt} />
      {index==1 ? ( item.value ? <a target="blank" href={item.value ? item.value : ""} >{item.value}</a> :  <p>Not Available </p>) : <p>{!item.value  ? 'Not Available' : item.value}</p> }
    </div>
  ))}
</div>
<div className="wrapper2">
{gitIfo2.map((item, index) => (
    <div className={!item.value  ? "nullValue wrapperInfo" : "wrapperInfo"}  key={index}>
      <img src={item.icon} alt={item.alt} />
      <p >{!item.value  ? 'Not Available' : item.value}</p>
    </div>
  ))}
</div>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div<{ isDark: boolean , userInfo: Info | null ,}>`
  width: 328px;
  height: 518px;
  background: ${(props) => (props.isDark ? "#1E2A47" : "#FEFEFE")};
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 32px 0 0 24px;
  box-shadow: ${(props) =>
    !props.isDark ? " 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)" : null};
  .userInfo {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .userInfo img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
  }
  .mainInfo {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#2B3442")};
  }
  .login {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #0079ff;
  }
  .createdAt {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#697C9A")};
  }
  .bio {
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4B6A9B")} ;
    margin-top: 34px;
  }
  .followers {
    width: 280px;
    height: 85px;
    display: flex;
    gap: 28px;
    border-radius: 10px;
    background: ${(props) => (props.isDark ? "#141D2F" : "#F6F8FF")};
    margin: 24px 0;
    padding: 20px 0 0 40px;
  }
  .infoBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .statNme {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4B6A9B")};
  }
  .stat {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#2B3442")};
  }
  .wrapper , .wrapper2 {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .wrapper2 {
    margin-top: 18px;
  }
  .wrapperInfo {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .nullValue {
    opacity: 0.5;
}
  .wrapperInfo img {
    filter: ${(props)=> (props.isDark ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(326deg) brightness(1000%) contrast(102%)" : null)} ;
  }
  .wrapperInfo p , .wrapperInfo a ,  .nullValue p{
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#4b6a9b")}; 
  }
 
/* styles for tablet */

@media only screen and (min-width: 768px) {
  width: 574px;
  height: 480px;
  padding: 40px 0 0 40px;
  .userInfo {
    gap: 40px;
  }
  .userInfo img {
    width: 116px;
    height: 116px;
  }
  .name {
    font-size: 26px;
    line-height: 38px;
  }
  .login {
    font-size: 16px;
    line-height: 24px;
  }
  .createdAt {
    font-size: 15px;
    line-height: 22px;
  }
  .bio {
    font-size: 15px;
    margin-top: 24px;
  }
  .followers {
    width: 492px;
    gap: 98px;
    margin: 32px 0;
    padding: 16px 0 0 32px;
  }
  .infoBox {
    align-items: start;
  }
  .statNme {
    font-size: 13px;
    line-height: 19px;
  }
  .stat {
    font-size: 22px;
    line-height: 33px;
  }
  .wrapper , .wrapper2{
    display: flex;
    flex-direction: row;
    gap: 80px;
  }
  .wrapper p, .wrapper2 p {
    width: 150px;
  }
  .wrapperInfo {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .wrapperInfo a {
     max-width: 180px;
  }
  .wrapperInfo a:hover{
    text-decoration: underline;
  }
}


/* styles for desktop */

@media only screen and (min-width: 1440px) {
  width: 730px;
  height: 444px;
  padding: 48px 0 0 48px;
  position: relative;
  .userInfo {
    align-items: flex-start;
  }
  .mainInfo {
    gap: 2px;
  }
 .createdAt {
  position: absolute;
  top: 52px;
  right: 48px;
 }
 .bio {
  margin: -20px 0 0 154px;
 }
 .followers {
    width: 480px;
    gap: 98px;
    margin: 32px 0 36px 152px;
    padding: 16px 0 0 32px;
  }
  .wrapper , .wrapper2 {
    margin-left: 152px;
  }
}
`;
