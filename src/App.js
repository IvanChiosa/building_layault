import './App.css'
function App() {

  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
      cardTitle: "Bob Dylan",
      cardDescription:
        "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
      button: {
        url: "https://en.wikipedia.org/wiki/Bob_Dylan",
        label: "Go to wikipedia",
      },
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Paul_McCartney_black_and_white_2010.jpg/220px-Paul_McCartney_black_and_white_2010.jpg",
      cardTitle: "Paul McCartney",
      cardDescription:
        "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter and musician who gained worldwide fame as co-lead vocalist, co-songwriter and bassist for the Beatles.",
      button: {
        url: "https://en.wikipedia.org/wiki/Paul_McCartney",
        label: "Go to wikipedia",
      },
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jimi_Hendrix_1967.png/220px-Jimi_Hendrix_1967.png",
      cardTitle: "Jimi Hendrix",
      cardDescription:
        "James Marshall 'Jimi' Hendrix (born Johnny Allen Hendrix; November 27, 1942 – September 18, 1970) was an American guitarist, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century. ",
      button: {
        url: "https://en.wikipedia.org/wiki/Jimi_Hendrix",
        label: "Go to wikipedia",
      },
    },
  ]



  const infos = data.map((info, index) => {
    return (
      <div key={index} style={{width: "30%"}}>
        <div className="card m-5" >
          <img className="card-img-top" src={info.image} alt="Card ima cap"  style={{ height: "40%" }} />
          <div className="card-body">
            <h5 className="card-title">{info.cardTitle}</h5>
            <p className="card-text">{info.cardDescription}</p>
            <a href={info.button.url} className="btn btn-primary" >{info.button.label}</a>
          </div>
        </div>
      </div>
    )

  })

  return (
    <div className="container d-flex" >{infos}</div>

  )
}

export default App;
