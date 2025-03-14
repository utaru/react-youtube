export default function Footer() {
    
    const simdi = new Date().getHours();
    console.log(simdi);
    const acilisZaman = 10;
    const kapanisZaman = 23;

    const isOpen = simdi >= acilisZaman && simdi <= kapanisZaman;
    console.log(isOpen);

    return (
        <footer>
            {
                // && = ve yada and True ise çalış
               isOpen ? (
                <p>Akşam {kapanisZaman}'e kadar şipariş verebilirsiniz.</p>
               ) : (
                <p>Maalesef, kapanış saatine ulaştık.</p>
               )
                
                

            }

        </footer>
    );
}