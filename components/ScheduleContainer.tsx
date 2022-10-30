import styled from 'styled-components'

export const ScheduleContainer = () => {
  return (
    <Container>
      <Maintext>
        <MainTextContent1>
          <h3>Event</h3>
        </MainTextContent1>
        <MainTextContent2>
          <p>2023年5月4日（木）</p>
        </MainTextContent2>
        <MainTextContent2>
          <p style={{ marginBottom: 0 }}>挙式</p>
        </MainTextContent2>
        <MainTextContent2>
          <p style={{ margin: 0 }}>17時00分（受付　16時30分）</p>
        </MainTextContent2>
        <MainTextContent2>
          <p style={{ marginBottom: 0 }}>披露宴</p>
        </MainTextContent2>
        <MainTextContent2>
          <p style={{ margin: 0 }}>18時00分</p>
        </MainTextContent2>
      </Maintext>
    </Container>
  )
}

const Container = styled.div`
  width: 410px;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Maintext = styled.div`
  box-sizing: border-box;

  width: 270px;
  height: 166px;
  left: 56px;
  top: 941px;

  //   background: #fbf5e5;
  border: 1px solid #ffffff;
`
const MainTextContent1 = styled.div`
  width: 284px;
  height: 28px;
  top: 435px;

  margin: 0px;

  font-family: 'MS PMincho';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
`
const MainTextContent2 = styled.div`
  width: 284px;
  height: 28px;
  top: 435px;

  margin: 0px;

  font-family: 'Shippori Mincho', 'serif';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;

  color: #000000;
`
