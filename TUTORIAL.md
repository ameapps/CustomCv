# TUTORIAL 

## COME MOSTRARE UN'IMMAGINE PRESENTE SU ONEDRIVE 
- click sui 3 puntini 
- cliccare in incorpora 
- generare l'elemento html da onedrive
- incollarlo nel html

## COME VISUALIZZARE UIN VIDEO DI ONEDRIVE IN STREAMING
- click sui 3 puntini 
- cliccare in incorpora 
- copiare il link al video nel browser
- verà farra una redirect
- copiare il link finale 
- creare un iframe

## COME AGGIUNGERE FONT A PROGETTO ANGULAR 
- cercare su google fonts il font desiderato 
- inserire nel file index.html i link href del font 
- nel styles.scss mettere nel body -> font-family: nome-font

## COME TOGLIERE I BORDI DI UN NUOVO PROGETTO ANGULAR 
Bisognava andare nel CSS globale ed indicare nella regola del body che il margine è 0. 

## COME IMPOSTARE L'ALTEZZA DELLA PAGINA ALL'ALTEZZA MASSIMA DELLO SCHERMO E NON DI PIu' 
Se si ha un container alto 100vh e si mette come primo elemento al suo interno (in verticale )
un elemento con altezza fissa, NON bisogna dare all'elemento successivo altezza 100%, perchè 
altrimenti costringerà il padre a diventare alto quanto tutto lo spazio disponibile per il secondo 
elemento (100%) + l'altezza fissa. 