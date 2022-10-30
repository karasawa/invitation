import styled from 'styled-components'

export const GreetingContainer = () => {
  return (
    <Container>
      <GreetingText1>Message</GreetingText1>
      <Image src="/rectangle.jpg" alt="rectangle" />
      <GreetingText2>謹啓</GreetingText2>
      <GreetingText2>皆様におかれましては</GreetingText2>
      <GreetingText2>ますますご清祥のこととお慶び申し上げます</GreetingText2>
      <GreetingText2>
        このたび　私たちは結婚をすることになりました
      </GreetingText2>
      <GreetingText2>
        つきましては　日頃お世話になっております皆様に
      </GreetingText2>
      <GreetingText2>
        感謝を込めて　ささやかな小宴を催したく存じます
      </GreetingText2>
      <GreetingText2>ご多用中　誠に恐縮ではございますが</GreetingText2>
      <GreetingText2>
        ぜひご出席をいただきたく　ご案内申し上げます
      </GreetingText2>
      <GreetingText2>謹白</GreetingText2>
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
const Image = styled.img`
  margin-bottom: 10px;
`

const GreetingText1 = styled.div`
  width: 274px;
  height: 65px;
  top: 435px;

  margin-bottom: 5px;
  margin-top: 30px;

  font-family: 'Shippori Mincho', 'serif';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;

  color: #000000;
`
const GreetingText2 = styled.div`
  width: 304px;
  height: 65px;
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
