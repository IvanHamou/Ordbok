# Ordbok

1. Build tools är program som används i utveckling för att omvandla källkoden till en mer organiserat och slutlig form genom att paketera, kompilera och lägga ihop koden.
De får sidorna att fungera och ladda snabbare och hjälper med att automatisera repetitiva uppgifter som tex minifiera filer, hantera dependencies osv.

2. Hot module replacement används för att göra ändringar i koden utan att behöva uppdatera sidan. Det gör även utvecklingsprocessen lite snabbare när man ser direkt ändringarna man har gjort.

3. Code splitting är en metod som webpack använder för att ladda upp de viktigaste kodbitarna först och hämtar resten av koden senare när det behövs.
Att dela upp koden i mindre bitar som man gör här ökar sidans prestanda genom att ladda upp den snabbare. Minification är också ett sätt att göra sidan snabbare genom att minska storleken på filer.
Detta görs genom att ta bort alla onödiga karaktärer i koden som tex whitespace och kommentarer.

4. https://www.figma.com/file/LLijsGmpml6rpBUNGmp4Yj/Untitled?type=whiteboard&t=csW33gFRpGgJ9wfp-1

5. Tree Shaking tar bort oanvänd kod för att göra den mindre och snabbare. Den fungerar som en analys som kollar genom koden för att lista ut vilka rader faktiskt används och sen tar bort de som inte används.
