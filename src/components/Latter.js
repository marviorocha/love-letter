import React, {useState, useEffect} from 'react';
import Algorithmia from 'algorithmia';
import Footer from './Footer.js'



const Latter = (props) =>{

      const [recipient, setRecipient] = useState("");
      const [sender, setSender] = useState("");
      const [email, setEmail] = useState("");
      const [latter, setLatter] = useState("...");



      const handle = (event) => {


      }

      const generator = (event) => {

        const from = [recipient, sender]

        Algorithmia.client("sim+YMGX9ZZYp62nds7WsTe3WPd1")
                .algo("../../../../v1/web/algo/ngram/GenerateRandomLoveLetter/0.1.0?timeout=300") // timeout is optional
                .pipe(from)
                .then(function(response) {
                setLatter(response.get());
                });

        

        }


        useEffect(() => {
         const card = generator
         return () => clearInterval(card)
        },
        [latter])



        return (

        <div> <h1>Love Latter Gen</h1>
        <div className="postcard">
         <div className="letter">

          <form action="" className="message_form">
              <p className="push">Dear</p>
              <input onChange={e => setRecipient(e.target.value)} className="push" name="recipient" value={recipient} type="text" placeholder="name of recipient"/> <p>,</p><br></br>

        <p className="push">{latter} </p>

              <br></br>
              <p>Yours Lovingly, <br></br>{sender} </p><br></br>
            <input onChange={e => setSender(e.target.value)} className="push" type="text" value={sender} name="sender" placeholder="your name" />
          </form>

         </div>

         <div  className="address">
        <img src="http://i44.photobucket.com/albums/f9/dandee114/stamp_zpsvbuxiwih.png" alt="My" className="mail_stamp" />

        <form action="#" method="post" className="message_form">
        <input onChange={e => setEmail(e.target.value)} name="email" value={email} type="email" required placeholder="recipient's e-mail" />
        </form>

        <p>{email},<br></br>

          <button onClick={generator}>Generator Letter</button>
        </p>

      </div>

        </div>
        <Footer />
       </div>
        )


}

export default Latter;