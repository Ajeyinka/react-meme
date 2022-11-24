import React from "react";


export default function Toggle() {
    const [contact, setContact] = React.useState({
        firstname:"Olayika",
        lastname:"Ajelolu",
        phone:"+234 8107673409",
        email:"olayina.com",
        isFavorite:false,
    })
    

    let starIcon =contact.isFavorite? "https://i.postimg.cc/267ZqgcK/star-filled.png" : "https://i.postimg.cc/nzJmhnkm/star-empty.png"

    function toggleFavorite(){
        setContact (prevContact=>({ ...prevContact, isFavorite:!prevContact.isFavorite
        })

        )
    }

    
        return (
            <main>
                <article className="card">
                    <img src="https://i.postimg.cc/FzPkp3Qb/user.png" className="card--image" alt="alvatar" />
                    <div className="card--info">
                        <img 
                            src={`${starIcon}`} 
                            className="card--favorite"
                            onClick={toggleFavorite}
                        />
                        <h2 className="card--name">
                            {contact.firstname} {contact.lastname}
                            
                        </h2>
                        <p className="card--contact">{contact.phone}</p>
                        <p className="card--contact">{contact.email}</p>
                    </div>
                    
                </article>
            </main>
        )
    
}