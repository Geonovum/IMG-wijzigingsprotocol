let respecConfig = 
{
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Wijzigingsprotocol informatiemodel Geluid",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "WV",                 // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                 // HandReiking
  //specType: "WA",                 // Werkafspraak
  specType: "BD",                   // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
    //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "img",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by-nd",              // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "IMG-wijzigingsprotocol",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-11-14",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2023-11-14",
  previousMaturity: "def",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
    {
      name: "Michel Grothe",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
    {
      name: "Pieter Bresters",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Michel Grothe",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },   
    {
      name: "Thomas Hofman",
      company: "RIVM",
      companyURL: "https://www.rivm.nl/"
    },
    {
      name: "Tyora van der Meulen",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Monique van Scherpenzeel",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },
    {
      name: "Wilko Quak",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    },   
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/IMG-wijzigingsprotocol/",
  // Create PDF and link to file in header (optional):
};
