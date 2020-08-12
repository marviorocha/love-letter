import React, {useState, useEffect} from 'react';
import Algorithmia from 'algorithmia';




const Latter = (props) =>{

    const [name, setName] = useState(null);
    const [latter, setLatter] = useState(null);

        useEffect(() => {

        const from = setName(["Marvio", "Juliana"])
        Algorithmia.client("sim+YMGX9ZZYp62nds7WsTe3WPd1")
                .algo("../../../../v1/web/algo/ngram/GenerateRandomLoveLetter/0.1.0?timeout=300") // timeout is optional
                .pipe(from)
                .then(function(response) {
                console.log(response.get());
                });
            }
        )

        return (

                <div>
                        <h1>Latter</h1>
                </div>
        )

}

export default Latter;