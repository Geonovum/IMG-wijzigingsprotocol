## Gebruik van het wijzigingsprotocol

Het wijzigingsprotocol schrijft een vast stramien voor het wijzigen van de IMG standaard voor. Het protocol benoemt de fasen en de op te leveren resultaten. Belangrijk zijn de randvoorwaarden en uitgangspunten. De gebruikers, dsekudigen en stakeholders van het informatiemodel Geluid worden bij het wijzigen van het informatiemodel Geluid nauw betrokken. 

Het wijzigingsprotocol voor het Informatiemodel Geluid geeft: 

<ul>

<li>Inzicht in het behandel- en besluitproces dat ten grondslag ligt aan het versiebeheer;</li>
<li>Inzicht in de wijzigingsverzoeken;</li>
<li>Inzicht in een voorgestelde wijziging van de standaard;</li>
<li>Stabiliteit aan de standaard;</li>
<li>Continuïteit aan de standaard;</li>
<li>Een eenduidige aanpak.</li>

</ul>

### <a name='_Ref503261397'></a><a name='_Ref503261402'></a><a name='_Ref503261548'></a>Releasebeleid

#### Nieuwe versie van de standaard

Een release van een standaard is een nieuwe uitgave van de standaard. De wijzigingen binnen een release wordt gedocumenteerd en vastgelegd in Bijlage A van het informatiemodel. De gebruiker kan zo nagaan op welke plaatsen de betreffende standaard gewijzigd is. De nieuwe release kenmerkt zich ten opzichte van de oude versie door een hoger versienummer. Bij de release is ieder product van de standaard voorzien van een nieuw versienummer conform Semantic Versioning (SemVer). Binnen SemVer heeft elk product zijn eigen versienummer conform de X.Y.Z schrijfwijze, bijvoorbeeld versie 2.1.0 (=X.Y.Z):

<ul>

<li><b>X-wijzigingen</b> Alle wijzigingen die vragen om heraanlevering van gegevens (bestaande gegevens passen niet meer in het nieuwe XML schema) zijn X wijzigingen. De volgende wijzigingen vragen om een heraanlevering:</li>

- Het verwijderen van een objecttype of attribuut;
- Het toevoegen van een verplicht objecttype of attribuutsoort;
- Het wijzigen van de definitie of toelichting van een objecttype of attribuutsoort, zodanig dat het impact heeft op de aan te leveren gegevens*

Frequentie</u>: in overleg met de opdrachtgever.</li>
</ul>

<ul>

<li><b>Y-wijzigingen</b> Dit zijn wijzigingen die geen heraanlevering van gegevens vragen. Deze wijzigingen zijn backwards compatible. Frequentie: in overleg met de opdrachtgever.</li>

</ul>

<ul>

<li><b>Z-wijzigingen</b> Dit zijn bugs/fouten in een definitie of toelichting, die geen impact hebben op de aan te leveren gegevens. Deze wijzigingen zijn backwards compatible. Frequentie: zo spoedig mogelijk na constatering.</li>

</ul>

*Dit wordt vastgesteld door voorzitter van de stuurgroep CVGG.

Na het uitbrengen van een nieuwe versie van een standaard is deze nieuwe versie beschikbaar en vindbaar via de <a href='https://www.geonovum.nl/geo-standaarden/informatiemodel-geluid' target='_blank'>website</a> en de registers (de <a href='https://definities.geostandaarden.nl' target='_blank'>conceptenbibliotheek</a>, het <a href='https://register.geostandaarden.nl' target='_blank'>technisch register</a> en het <a href='https://docs.geostandaarden.nl' target='_blank'>documentenregister</a>).

#### Oudere versie van de standaard

De SemVer-methodiek schrijft backwards compatibility voor op het Y-niveau. Een nieuwe versie dwingt daarmee geen directe overstap af bij de gebruikers, tenzij anders (bijvoorbeeld wettelijk) bepaald. Na het uitbrengen van de nieuwe versie van een standaard wordt de ontwikkeling van de oude versie stop gezet.

Voor het onderhoud en de ondersteuning van een oude versie van een standaard gelden de volgende uitgangspunten:

<ul>

<li>Aan een oude versie worden geen nieuwe features toegevoegd, geen aanpassingen gedaan op X en Y niveau na het uitbrengen van een nieuwe versie. Verzoeken om aanpassing en wijziging voor nieuwe functionaliteit worden niet meer voor de oude standaard in behandeling genomen maar doorgegeven aan het ontwikkelteam. Correcties (Z-wijzigingen) worden wel uitgevoerd op de vorige versies zolang deze nog ondersteund worden.</li>

<li>Bij oplevering van een nieuwe versie wordt de voorgaande versie nog een van te voren vastgestelde periode ondersteund. De duur van de overgangsperiode wordt mede bepaald door de omvang van de wijzigingen (X, Y en Z wijzigingen op de vorige versies), de staat van ontwikkeling van de standaard, en of de standaard in voorlopig dan wel permanent beheer is.</li>

<li>De duur van de ondersteuningsperiode voor de diverse soorten versies moet nog worden vastgesteld. Tot aan inwerkingtreden van de Omgevingswet, waar de Informatiemodel Geluid ook onder valt, zal naar verwachting de ondersteuningsperiode van verschillende versies anders zijn, dan in de periode van permanent beheer zonder dat daarnaast nog grootschalige ontwikkeling van de standaard plaatsvindt.</li>

Na het uitbrengen van een nieuwe versie van een standaard blijven oudere versies beschikbaar en zijn vindbaar via de <a href='https://www.geonovum.nl/geo-standaarden/informatiemodel-geluid' target='_blank'>website</a> en de registers (de <a href='https://definities.geostandaarden.nl' target='_blank'>conceptenbibliotheek</a>, het <a href='https://register.geostandaarden.nl' target='_blank'>technisch register</a> en het <a href='https://docs.geostandaarden.nl' target='_blank'>documentenregister</a>).

</ul>

### <a name='_Ref482110995'></a>Proces varianten

In paragraaf <a href='#_Ref503261402'>releasebeleid<a></a> zijn de X, Y en Z wijzigingen uitgelegd. Wijzigingen kennen drie procesvarianten: eén voor X wijzigingen, één voor Y wijzigingen en één voor Z wijzigingen.

De start van het proces is voor alle varianten hetzelfde. Op de <a href='https://www.geonovum.nl/geo-standaarden/informatiemodel-geluid' target='_blank'>website</a> wordt een wijzigingsverzoek ingediend bij de IMG Helpdesk. De impact van deze wijziging wordt door het technisch beheer beoordeeld in samenwerking met het functioneel beheerd in een impactanalyse. Deze eerste impactanalyse beoordeelt tot welke SemVer categorie de wijziging hoort, welke betrokken partijen geraakt worden door de wijziging en wat de secundaire effecten van de wijziging zijn (bijvoorbeeld ontstaan extra validatieregels in het CVGG). Naast de impactanalyse wordt, indien mogelijk, een oplossing aangedragen voor het wijzigingsverzoek. 

<b>Proces voor X en Y wijzigingen</b>

X en Y wijzigingen vergen volledige afstemming en het doorlopen van alle in paragraaf <a href='#fasen-en-resultaten'>2.4<a></a> beschreven fasen: Inhoud, Toetsing, Besluitvorming en Implementatie. Voor de inhoudelijke fase wordt een (ad hoc) werkgroep gestart met daarin deskundigen (experts) vanuit vertegenwoordiging van de stakeholders die door de wijziging worden geraakt volgens de impactanalyse. Het resultaat van de werkgroep is een wijzigingsvoostel dat in het overleg van de Adviesgroep wordt besproken. X wijzigingen worden altijd voorgelegd aan de stuurgroep CVGG. De voorzitter van de stuurgroep CVGG stelt een nieuwe versie van de informatiemodel Geluid standaard vast. Y wijzigingen worden alleen voorgelegd aan de stuurgroep als de adviesgroep hier aanleiding toe geeft. Y wijzigingen kunnen zonder betrokkenheid van de stuurgroep door de voorzitter van de CVGG stuurgroep worden vastgesteld. Indien nodig wordt met software leveranciers een convenant afgesloten of een bestaand convenant uitgebreid, waarin wordt afgesproken dat software leveranciers (onderdelen van) de standaard gaan ondersteunen.

<b>Implementatie van X wijzigingen</b> 

De implementatiefase van X wijzigingen wijkt af van die van Y wijzigingen, de implementatie van X wijzigingen vraagt namelijk altijd om een heraanlevering van geluidgegevens door bronhouders. 

<b>Proces voor Z wijzigingen</b>

In overleg met het functioneel beheer worden Z wijzigingen in de volgende release opgenomen. De inhoudelijke fase wordt door het technisch beheer van de standaard uitgevoerd. Besluitvorming vindt plaats in afstemming met de functioneel beheer. Implementatie vindt plaats door het publiceren van de wijziging op de <a href='https://www.geonovum.nl/geo-standaarden/informatiemodel-geluid' target='_blank'>website</a>.

### <a name='_Ref503261432'></a>Fasen en resultaten

Het volledige wijzigingsproces doorloopt de fasen Inhoud, Toetsing, Besluitvorming en Implementatie, zoals weergegeven in <a href='#_Ref503260625'>Figuur 1<a></a>.

<figure style="width: 35%;">

<a name='_Ref503260625'></a><img src="media/image3.png" alt="media/image3.png"/></img>

<figcaption><a name='_Ref503260625'></a>Fasen wijzigingsproces</figcaption>

</figure>

<b>Inhoud</b>

In de fase inhoud wordt voor ieder wijzigingsverzoek bepaald of deze wordt opgenomen in de nieuwe versie van de standaard of niet. Dit wordt door de Helpdesk intern vastgelegd en is raadpleegbaar via de <a href='(https://www.geonovum.nl/geo-standaarden/meldingen)' target='_blank'>website</a>. Voor ieder wijzigingsverzoek dat wordt meegenomen in de nieuwe versie van de standaard, wordt een impactanalyse uitgevoerd en oplossingen uitgewerkt. Deze impactanalyse beoordeelt tot welke SemVer categorie de wijziging hoort, welke betrokken partijen geraakt worden door de wijziging en wat de secundaire effecten van de wijziging zijn (e.g. er ontstaan extra validatieregels in het CVGG). 

Wanneer tijdens de impactanalyse is vastgesteld dat het om een X of Y wijzigingverzoek gaat, wordt een werkgroep ingepland met de deskundigen en stakeholders (indieners van het wijzigingsverzoek). Afhankelijk van de omvang van de wijziging ten opzichte van de voorgaande versie en afhankelijk van welke gebruikersgroepen geraakt worden door de wijziging, verandert de samenstelling van deze werkgroep. De werkgroep wordt vooraf geïnformeerd over het wijzigingsvoorstel en indien mogelijk wordt een eerste probleemschets en oplossing aangedragen voorafgaand aan de werkgroep door het technisch beheer. De resultaten van de werkgroep worden in een wijzigingsvoorstel voorgelegd aan de adviesgroep.

<b>Toetsing</b>

De fase Toetsing vormt een brug tussen de inhoud en besluitvorming. In deze fase wordt wordt voor een X of Y wijziging door de adviesgroep het wijzigingsvoorstel getoetst en van een advies voorzien voor besluitvorming. Met deze consultatie vragen wij de gebruikers van de standaard actief hun reactie te geven op het wijzigingsvoorstel. Het wijzigingsvoorstel inclusief de terugkoppeling uit de consultatie wordt verwerkt als release candidate van het Informatiemodel Geluid.

<b>Besluitvorming</b>

Bij Besluitvorming wordt besloten om de gewijzigde IMG  standaard vast te stellen en te publiceren. Afhankelijk van het type wijziging (X, Y of Z, zie paragraaf <a href='#_Ref482110995'>proces varianten<a></a>), besluit de voorzitter van de stuurgroep CVGG dan wel het beheeroverleg.

<b>Implementatie</b>

Het in gebruik nemen van de nieuwe IMG standaard in de praktijk staat centraal in deze fase. Hiervoor levert het beheer verschillende technische bestanden op. De technische bestanden zijn bijvoorbeeld testbestanden. Deze bestanden ondersteunen bij de implementatie van de standaard in de software. Beheerders van de CVGG nemen het niuewe informatiemodel Geluid in gebruik. Het functioneel en technisch beheer ondersteunt de implementatie bovendien door de werking van het informatiemodel toe te lichten tijdens bijvoorbeeld bijeenkomsten of 'inloopspreekuren' voor de gebruikers en software leveranciers. Resultaat van deze fase is dat de gebruikers geluidsgegevens kunnen maken en uitwisselen conform de nieuwe IMG standaard. In <a href='#tussentijdse-werkafspraken'>Hoofdstuk 5<a></a> lichten we de implementatie verder toe.

### Betrokkenen

De volgende actoren (organisaties en bedrijven) en hun rollen zijn betrokken bij het wijzigingsproces van het Informatiemodel Geluid: 
|    <br>Rol                                                                                                                                                                                        |    <br>Stakeholder                                                  |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
|    <br>**Opdrachtgever** (eigenaar   en  financier) van het CVGG en het   informatiemodel Geluid.                                                                                                     |    <br>Ministerie van Infrastructuur en Waterstaat (IenW)           |
|    <br>**Bronhouder** m.b.t. geluidgegevens voor rijkswegen, hoofdspoorwegen, luchthavens met nationale betekenis.                                                                                    |    <br>Rijksoverheden (Rijkswaterstaat, ProRail, NLR)               |
|    <br>**Bronhouders** m.b.t. geluidgegevens over provinciale wegen, luchthavens van regionale betekenis en lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar.    |    <br>Provincies                                                   |
|    <br>**Bronhouders** van geluidgegevens t.b.v. voor lokale wegen, activiteiten, verzamelingen van activiteiten.                                                                                    |    <br>Agglomeratie-gemeenten, omgevingsdiensten, waterschappen     |
|    <br>**Functioneel beheer** van het informatiemodel Geluid en beheer van het CVGG.  |    <br>Rijksinstituut voor Volksgezondheid en Milieu (RIVM)         |
|    <br>**Technisch beheer** van het informatiemodel Geluid.                                                                                                                                           |    <br>Geonovum                                                     |
|    <br>**Software leverancier** levert de software voor de bronhouders voor het verwerken van geluidsgegevens conform het informatiemodel Geluid.                                                     |    <br>Software bedrijven                                           |