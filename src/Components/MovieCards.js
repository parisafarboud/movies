import {Card, CardDeck} from 'react-bootstrap'
import React, { Component } from 'react'

export class MovieCards extends Component {
    render() {
        return (
            <div className="container">
                <hr/>
                <h3>Movies and TV Shows</h3>
                <hr/>
                <CardDeck>
  <Card >
    <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/8RSxVHDu_dpqZcWEDQ1IFur1gyIJ92JgenbDVT2lJGOdz93OuWmeFpwvfIXBcmsKhipKMpcob74joXgNkPzWs0nvHAkzZ_ZNMIF-Qy0l8w" style={{height:"300px"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/91zBlQ1iqoL._RI_.jpg"  style={{height:"300px"}}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://lh5.googleusercontent.com/proxy/xpKgsWrNKcz4rKxfA4tk2IbDKuphr4_SImV9R0IKWBygMLA_dY8wOEd-fdpiffE8Yn960a1OvoX1drpB7WMqJhXajIwChQkCxKBeiRDvBithmkvM-xk" style={{height:"300px"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg" style={{height:"300px"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
            </div>
        )
    }
}

export default MovieCards
