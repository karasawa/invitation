import styled from 'styled-components'

export const CoupleImageContainer = () => {
  return (
    <Container>
      <CoupleImage src="/couple.jpg" alt="couple" />
      <Maintext>Wedding Invitation</Maintext>
      <SubText>
        <SubTextContent>Keita ＆ Kanon</SubTextContent>
        <SubTextContent>2023.5.4 Thu</SubTextContent>
      </SubText>
    </Container>
  )
}

const Container = styled.div`
  width: 41px;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoupleImage = styled.img`
  width: 410px;
  height: 410px;
`

const Maintext = styled.div`
  position: absolute;
  width: 300px;
  height: 101px;
  top: 22px;

  font-family: 'Shippori Mincho', 'serif';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 114px;
  text-align: center;
  text-transform: capitalize;

  color: #e1d2aa;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SubText = styled.div`
  position: absolute;
  width: 185px;
  height: 41px;
  top: 136px;

  color: #e1d2aa;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const SubTextContent = styled.h4`
  margin: 0;

  font-family: 'Shippori Mincho', 'serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  text-transform: capitalize;
`
