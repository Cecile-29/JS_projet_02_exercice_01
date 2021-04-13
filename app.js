// dans cette fonction on cible par la méthode getElementById du DOM
// un élément dont l'id correspond à la chaîne de caractères spécifiée,
// on peut modifier l'attribut src de l'image (src="./image1_2.jpg") avec l'ID "img1"
function changePicture(toto){
  document.getElementById(toto).src="./image1_2.jpg";
}
