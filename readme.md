# Frequently Asked Questions

## json, handelbars

### Objectif
Le but est de créer une page de FAQ avec des appels ajax.
Pour représenter la faq, les balises `<dl>`, `<dt>` et `<dd>` ont été utilisées.

Il faudra:
- récupérer la liste de questions/réponses sur un serveur distant à l'adresse http://stuffs.istuffs.fr/faq/faq.json
- récutérer le template handelbars (qui est un fichier séparé faq.hbs)
- inserer les données du json selon le template avec handelbars dans `#faq`


#### tips

Il y a deux requetes a faire une pour le template handelbars et une pour le fichier json avec les questions et réponses.
[$.get()](https://api.jquery.com/jquery.get/)
[$.getJSON()](https://api.jquery.com/jQuery.getJSON/)
