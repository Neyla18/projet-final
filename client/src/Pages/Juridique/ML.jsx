import React from 'react'
import { Link } from 'react-router-dom'
const ML = () => {
  return (
   <main>
<h1>Mentions Légales</h1>

<h2>Bibliothèque Emeraude</h2>
<p>Adresse : 123 Rue Fictive, Ville Imaginaire
Téléphone : +12 3456 7890
E-mail : contact@exemple.com</p>

<h2>Directeur de la Publication</h2>
<p>Nom : John Doe
Adresse : 456 Avenue Illusoire, Cité Fictionnelle
Téléphone : +23 4567 8901
E-mail : john.doe@exemple.com</p>

<h2>Hébergement</h2>
<p>Ce site est hébergé par Imaginary Hosting
Adresse : 789 Rue Imaginée, Ville Virtuelle
Téléphone : +34 5678 9012
E-mail : hosting@imaginaryhosting.com</p>


<h2>Propriété Intellectuelle</h2>

<p>Tous les contenus présents sur ce site, y compris les textes, images, vidéos, et autres éléments, sont protégés par les lois sur la propriété intellectuelle.</p> 
<p>Toute reproduction, distribution, ou utilisation non autorisée de ces contenus est strictement interdite.</p>

<h2>Protection des Données Personnelles</h2>

<p>Pour en savoir plus sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <Link to="/politique-de-confidentialite"> Politique de Confidentialité</Link>.</p>


<h2>Liens Externes</h2>

<p>Ce site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites.</p>

<p> Contact</p>


<p>Si vous avez des questions concernant nos conditions d'utilisation, veuillez nous contacter à l'adresse suivante : emeraude@gmail.com.</p>

   </main>
  )
  }

export default ML