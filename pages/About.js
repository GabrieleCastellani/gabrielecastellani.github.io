import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";

import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Gabriele Castellani Blog | About me</title>
        </Head>
        <Container>
          <Intro />
          <p>
            <img
              style={{
                marginRight: "10px",
                marginBottom: "10px",
                float: "left",
              }}
              src="/assets/gablow.jpg"
            />
            Gabriele Castellani is Technical Evangelist Management at Microsoft.
            His background spans Web Development, Enterprise Software
            Architecture, Cloud Software Architecture and Modern App
            development.
          </p>

          <p>
            Gabriele Castellani started working in IT more than 17 years ago; he
            founded his own company in 1995 called Leonardo Da Vinci Engineering
            Srl while he was studying for Computer Engineering in Florence. The
            primary focus of the company was on custom development and was of
            the first companies specialized on web development. In 1999 he moved
            to Milan and joined mondadori.com startup as developer and trainer
            the startup was founded by one of the biggest editorial group in
            Italy. Mondadori at that time was also the biggest IT Training
            Center, driving the biggest IT conference in Italy called WPC.
            During this timeframe, Gabriele started to deliver technical session
            and keynotes at WPC and he still is a keynote speaker after 14
            editions.
          </p>

          <p>
            In 2001 he joined Microsoft as Technical Lead for msn.it and he
            could apply his knowledge about Web Architecture on msn.it portal
            working on the content management system with focus on editorial
            partnership. Around 2003 he joined the newly created Developer &amp;
            Platform Evangelism Group where he covered several roles until now.
            He started as ISV Developer Evangelist where he have been accounting
            major ISVs in Italy helping them to develop new opportunities
            leveraging the Microsoft platform, modernizing their application.
          </p>

          <p>
            In 2007 he became Developer &amp; ITPro Evangelist Manager being
            responsible for marketing and evangelism activities inside DPE. In
            this role he delivered the first Italian Live HD streaming event. In
            2011 took the role of manager of the ISV and Partner team working
            with Evangelist and PAM driving the engagement of the first wave of
            Windows Phone, Windows 8 and Cloud app developers. Today he is
            Director Technical Evangelist Management being responsible of the
            evangelism activities and the startup ecosystem driving them around
            the new waves of innovation and still leading the ISV Board inside
            Microsoft Italy .
          </p>
        </Container>
      </Layout>
    </>
  );
}
