## Griglia Campo Minato

nome repo: js-campominato-grid

# Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### SVOLGIMENTO

- Dopo aver impostato una pagina statica con l'elemento bottone e un input box con la difficoltà da selezionare
- Ascolto il suo evento e **genero una griglia**
- All'interno della griglia **genero gli elementi "cella" in base a quale difficoltà è stata selezionata**
- In ogni cella ascolterò il suo evento che mi permetterà di :
  - modificarne la classe del suo sfondo
  - prendere in considerazione il suo numero per poi stamparlo in console

**genero una griglia**

- Inserisco la funzione di creazione cella che creerà tante celle volte quante specificate dalla difficoltà selezionata e
  inserisco il tutto come .innerhtml in un elemento della pagina statico, precedentemente inizializzato

**genero gli elementi "cella"**

- creo l'elemento cella che avrà la classe necessaria per essere formattato
- ascolto il suo click per poter gestire il colore di sfondo
- stampa in console l'indice di generazione della cella, che equivarrà al numero di cella
