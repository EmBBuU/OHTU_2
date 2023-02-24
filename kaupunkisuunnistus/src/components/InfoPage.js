import React from 'react'
import { Link } from 'react-router-dom'

const InfoPage = () => {
  return (
    <div>
      <h2 className='eventinfoHeading'>Skriptin fuksiaiset tms tapahtumaotsikko</h2>
      <p className='eventinfo'>Mitä? Tervetuloa Skriptin fuksiaisiin!
        <br/>
        <br/>
        <br/>
        Miten? Ryhmien tehtävänä on keksiä ryhmälleen nimi. Nimen mukaan perustatte ryhmälle Instagram tilin. Kun tili on valmis, seuraatte Skriptin instagramtiliä IG: @skriptiry
        <br/>
        <br/>
        Tämä tili toimii välineenä, johon dokumentoitte kaikki tehtävät joita matkallanne määrätään,sekä niin paljon lisätehtäviä kuin vaan aikaan saatte. Tehtävät pisteytetään sekä piilossa oleviapisteytyksiä on luvassa. Tämä on kilpailu joten voittajille luvassa mainetta ja kunniaa jonka jakaateidän ainut ja oikea Skripti ry. Tilien on oltava piilotettuja ja teidän on hyväksyttävä Skripti seuraajaksi.
        <br/>
        <br/>
        Tapahtuma alkaa kunnon mittelöillä tiedepuiston kentällä klo 17 ja päättyy klo 21 paikassajonka sijannin saatte viimeiseltä rastilta.Onnea ja menestystä!
        <br/>
        <br/>
        <br/>
        Missä? Tiedepuiston kentältä aloitetaan klo 17:00</p>

      <button>
        <Link to="/">Takaisin</Link>
      </button>
    </div>
  )
}

export default InfoPage
