import styled from 'styled-components'
import { useEffect, useState } from 'react'

export const CountDownContainer = () => {
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const CountDown = () => {
    const d1 = new Date()
    //ターゲット日時
    const d2 = new Date('2023/05/04 00:00') //令和元年
    //時差（ミリ秒）
    const d3 = Number(d2) - Number(d1)
    // ミリ秒から秒に
    const d3_Sec = Math.floor(d3 / 1000)

    //分、時、日の秒数
    const Minute_Sec = 60
    const Hour_Sec = 60 * 60
    const Day_Sec = 60 * 60 * 24

    //あと何日
    const d4_Day = Math.floor(d3_Sec / Day_Sec)

    //あと何時間
    const d5_Hour = Math.floor((d3_Sec / Hour_Sec) % 24)

    //あと何分
    const d6_Minute = Math.floor((d3_Sec / Minute_Sec) % 60)

    //あと何秒
    const d7_Sec = Math.floor(d3_Sec % 60)

    //カウントダウン

    setDate(String(d4_Day))
    setHour(String(d5_Hour))
    setMin(String(d6_Minute))
    setSec(String(d7_Sec))

    //1秒ごとに実行
    setTimeout(CountDown, 1000)
  }

  useEffect(() => {
    CountDown()
  }, [sec])

  return (
    <Container>
      <NatureImage src="/nature-g.jpg" alt="nature-g" />
      <Maintext>
        <h3>COUNTDOWN</h3>
        <h3 style={{ marginBottom: '8px' }}>{date}</h3>
        <h3 style={{ margin: 0 }}>DAYS</h3>
        <SubText>
          <div style={{ marginLeft: '8px' }}>
            <h4 style={{ marginBottom: '8px' }}>{hour}</h4>
            <h4 style={{ margin: 0 }}>HOURS</h4>
          </div>
          <div style={{ marginLeft: '8px' }}>
            <h4 style={{ marginBottom: '8px' }}>{min}</h4>
            <h4 style={{ margin: 0 }}>MINUTES</h4>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>{sec}</h4>
            <h4 style={{ margin: 0 }}>SECONDS</h4>
          </div>
        </SubText>
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

const NatureImage = styled.img`
  width: 410px;
  height: 230px;
  top: 686px;

  mix-blend-mode: normal;
  opacity: 1;
`

const Maintext = styled.div`
  position: absolute;
  width: 410px;
  height: 215px;
  top: 827px;

  font-family: 'MS PMincho';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
`

const SubText = styled.div`
  width: 410px;
  height: 81px;

  font-weight: 400;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`
