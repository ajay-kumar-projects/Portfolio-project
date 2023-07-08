import React from "react";
import "./OurTeam.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const OurTeam = () => {
  return (
    <>
      <div className="ourBg">
        <h1>
          Meet Our Team
          <br />
        </h1>
        <div className="cards">

          <div
            class="card m-3"
            data-aos="fade-right"
            data-aos-offset="170"
            data-aos-duration="1500"
          >
            <img class="card-img-top" src="./aj1.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Ajay kumar</h5>
              <p class="card-text">
                <b>Team Lead</b>
              </p>
              <p class="text-dark">
                {" "}
                I'm the team leader <br />
                In Our Project
              </p>
              <div className="text ">
                <a
                  class="text-dark"
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB"
                >
                  <FacebookIcon />
                </a>
                <a class="text-dark" href="https://twitter.com/i/flow/login">
                  <TwitterIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://www.instagram.com/accounts/login/"
                >
                  <InstagramIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2Ih7CmFX_j4Qj6zxqWK-jwJOFIgHICycst0IjwGec9X3d9dAx2s_caAgUZEALw_wcB&gclsrc=aw.ds"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div
            class="card m-3"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-duration="1500"
          >
            <img class="card-img-top" src="./vijay.jpg" />
            <div class="card-body">
              <h5 class="card-title">Vijay babu</h5>
              <p class="card-text">
                <b>Web Developer</b>
              </p>
              <p class="text-dark">
                {" "}
                I'm a web Developer <br />
                In Our Project
              </p>
              <div className="text">
                <a
                  class="text-dark"
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB"
                >
                  <FacebookIcon />
                </a>
                <a class="text-dark" href="https://twitter.com/i/flow/login">
                  <TwitterIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://www.instagram.com/accounts/login/"
                >
                  <InstagramIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2Ih7CmFX_j4Qj6zxqWK-jwJOFIgHICycst0IjwGec9X3d9dAx2s_caAgUZEALw_wcB&gclsrc=aw.ds"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div
            class="card m-4"
            data-aos="flip-left"
            data-aos-offset="245"
            data-aos-duration="1500"
          >
            <img class="card-img-top" src="./rat1.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title"> Sravani </h5>
              <p class="card-text">
                <b>Front-end Developer</b>
              </p>
              <p class="text-dark">
                {" "}
                I'm a front-end developer <br />
                In Our Project
              </p>
              <div className="text">
                <a
                  class="text-dark "
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB"
                >
                  <FacebookIcon />
                </a>
                <a class="text-dark" href="https://twitter.com/i/flow/login">
                  <TwitterIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://www.instagram.com/accounts/login/"
                >
                  <InstagramIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2Ih7CmFX_j4Qj6zxqWK-jwJOFIgHICycst0IjwGec9X3d9dAx2s_caAgUZEALw_wcB&gclsrc=aw.ds"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          
          <div
            class="card m-4"
            data-aos="fade-left"
            data-aos-offset="245"
            data-aos-duration="1500"
          >
            <img class="card-img-top" src="./js2.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title"> Jayasri </h5>
              <p class="card-text">
                <b>Back-end Developer</b>
              </p>
              <p class="text-dark">
                {" "}
                I'm a back-end developer
                <br />
                In Our Project
              </p>
              <div className="ikons">
                <a
                  class="text-dark "
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB"
                >
                  <FacebookIcon />
                </a>
                <a class="text-dark" href="https://twitter.com/i/flow/login">
                  <TwitterIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://www.instagram.com/accounts/login/"
                >
                  <InstagramIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2Ih7CmFX_j4Qj6zxqWK-jwJOFIgHICycst0IjwGec9X3d9dAx2s_caAgUZEALw_wcB&gclsrc=aw.ds"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div
            class="card  m-4"
            data-aos="zoom-in-right"
            data-aos-offset="180"
            data-aos-duration="1500"
          >
            <img class="card-img-top" src="./ks1.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title"> Kusuma </h5>
              <p class="card-text">
                <b>Front-end Developer</b>
              </p>
              <p class="text-dark">
                {" "}
                I'm a Front-end developer
                <br />
                In Our Project
              </p>
              <div className="ikons">
                <a
                  class="text-dark "
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB"
                >
                  <FacebookIcon />
                </a>
                <a class="text-dark" href="https://twitter.com/i/flow/login">
                  <TwitterIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://www.instagram.com/accounts/login/"
                >
                  <InstagramIcon />
                </a>
                <a
                  class="text-dark"
                  href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133&mcid=6844056167778418689&cid=&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2Ih7CmFX_j4Qj6zxqWK-jwJOFIgHICycst0IjwGec9X3d9dAx2s_caAgUZEALw_wcB&gclsrc=aw.ds"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
