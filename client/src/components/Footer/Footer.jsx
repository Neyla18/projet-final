import React from 'react'

import { Link } from 'react-router-dom'
import './footer.css'




const Footer = () => {
	return (
	<footer>
		<section id='contact'>

		<h2> Contact </h2>
			<p>Vous souhaitez nous contacter ? </p>


			<p>N'hésitez pas à nous envoyer un message,</p>
			<p>nous serons ravis de répondre à vos questions, suggestions ou tout autre besoin d'assistance. </p>
			<p>Votre satisfaction est notre priorité à la Bibliothèque Émeraude, alors n'hésitez pas à nous contacter dès maintenant !</p>
	

		   
					<h3>Adresse</h3>
					<p>5 Rue du Bourg l'Abbe</p>
					<p>75003 Paris</p>
					<p>Tél : 01 77 19 19 14</p>
				
		
					<h3>Horaires d'ouverture</h3>
					<p>Lundi au vendredi : 13h00-18h00</p>

			
		 </section>
	
  
		 <div className="reseaux">

</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="200" frameborder="0" style={{ border: 0 }}></iframe>
		


<nav className="menu-pied-page">
    <Link to='/condition-d-utilisation'>Conditions d'utilisation</Link>
    <Link to='politique-de-confidentialite'>Politique de confidentialité</Link>
    <Link to='/mention-legale'>Mentions légales</Link>
</nav>


</footer>


	)
}

export default Footer

