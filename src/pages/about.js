import React from "react"
import styled from "@emotion/styled"
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"

const FrontPageBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background: radial-gradient(circle at 55% 14.75%, #FFF4D4, transparent 50%),
    radial-gradient(circle at 50.68% 97.03%, #FBFFB7, transparent 30%),
    radial-gradient(circle at 53.49% 60.25%, #FBFFB7, transparent 30%),
    radial-gradient(circle at 7.08% 58.61%, #FDFFE9, transparent 65%),
    radial-gradient(circle at 88.33% 23.57%, #E7FFBF, transparent 100%),
    radial-gradient(circle at 90.16% 70.9%, #E7FFBF, transparent 100%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%);
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: fixed;
`

const LeftHeaderWrapper = styled.div`
  position: relative;
  margin-left: 100px;
  width: 100px;
`
const AboutHeader = styled.h3`
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  top: 0;
  font-family: 'Spectral, Noto Sans';
  font-style: italic;
  color: #AEF26B;
`
const BackLink = styled.p`
  bottom: 5%;
  position: absolute;
  font-size: 18px;
  font-family: 'Spectral';
  color: #43D15E;
`

const MidHeaderWrapper = styled.div`
  position: relative;
  width: 250px;
`
const TendernessKitText = styled.h1`
  font-family: 'Spectral';
  color: #22B573;
  font-style: italic;
  font-size: 30px;
  font-weight: 300;
  margin-top: 40px;
  letter-spacing: 4px;
  background: -webkit-linear-gradient(#43D15E, #11B783, #8CC63F, #11B783);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const AuthorText = styled.p`
  font-family: 'Spectral';
  color: #22B573;
  margin-bottom: 200px;
`
const UrduText = styled.h1`
  font-family: 'Noto Sans';
  font-size: 12px;
  font-weight: 200;
  color: #22B573;
  margin-left: 10px;
`
const ContributorsText = styled.p`
  font-family: 'Spectral';
  color: #22B573;
  font-size: 14px;
  margin: 0px;
`
const ContributorByText = styled(ContributorsText)`
  margin-bottom: 15px;
  margin-top: -60px;
`

const Content = styled.div`
  width: 500px;
  margin-right: 100px;
  margin-top: 200px;
  background: -webkit-linear-gradient(#43D15E, #11B783, #8CC63F, #11B783);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const ContentText = styled.p`
  font-family: 'Spectral';
  font-size: 14px;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const About = () => {
  return (
    <PageTransition>
      <FrontPageBackground>
        <Wrapper>
          <LeftHeaderWrapper>
            <AboutHeader>about</AboutHeader>
            <Link style={{ textDecoration: 'none' }} to="/fishGarden"><BackLink>back</BackLink></Link>
          </LeftHeaderWrapper>
          <MidHeaderWrapper>
            <TendernessKitText>tenderness kit </TendernessKitText>
            <TextWrapper>
              <AuthorText>A project by</AuthorText>
              <UrduText>سراب</UrduText>
            </TextWrapper>
            <ContributorByText> Contributions by: </ContributorByText>
            {
              [
                'Ali Samoo', 'Asad Alvi', 'Fazal Rizvi', 'Fiza Khatri', 'Jeanne Penjan Lassus',
                'Nosheen Ali', 'Omer Wasim', 'Rahma Mian', 'Sadia Khatri', 'Shahana Rajani',
                'Shayan Rajani', 'Sohail Abdullah', 'Zahra Malkani'
              ].map((contributor) => (<ContributorsText>{contributor}</ContributorsText>))
            }
 
          </MidHeaderWrapper>
          <Content>
            <ContentText>A collection of meditations, mediations, conjurings, and reflections on being together, while apart in Karachi. </ContentText>
            <ContentText> Over the last year, as we learned and practiced new rules of social distancing, we were confronted with a new form of interiority. Borders hardened around us: not just of the nation-state, but borders that relegate us to home and family. In these moments, we found ourselves disconnecting from our bodies, and from the new realities that were our present. As the world moved online, distances grew and expanded between us and the communities we inhabit. </ContentText>
            <ContentText> The tenderness kit emerged from a desire to share and exchange our collective present, experienced differently by each of us. Using our sensual registers and the power of the erotic, we hoped to return to our own bodies, and by extension to each other. It is a coming together of sorts, housed in a downloadable zipped folder.</ContentText>
          </Content>
        </Wrapper>
      </FrontPageBackground>
    </PageTransition>
  )
}

export default About;
