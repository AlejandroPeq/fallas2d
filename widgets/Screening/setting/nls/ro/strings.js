﻿///////////////////////////////////////////////////////////////////////////
// Copyright � Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "Ft pătrați",
    "areaAcresUnit": "Acri",
    "areaSquareMetersUnit": "Metri pătrați",
    "areaSquareKilometersUnit": "Kilometri pătrați",
    "areaHectaresUnit": "Hectare",
    "areaSquareMilesUnit": "Mile pătrate",
    "lengthFeetUnit": "Picioare",
    "lengthMilesUnit": "Mile",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Kilometri"
  },
  "analysisTab": {
    "analysisTabLabel": "Analiză",
    "selectAnalysisLayerLabel": "Straturi tematice de analiză",
    "addLayerLabel": "Adăugare straturi tematice",
    "noValidLayersForAnalysis": "În harta web selectată nu a fost găsit niciun strat tematic valid.",
    "noValidFieldsForAnalysis": "În harta web selectată nu a fost găsit niciun câmp valid. Eliminați stratul selectat.",
    "allowGroupingLabel": "Grupare obiecte spațiale după câmpurile cu aceeași valoare",
    "groupingHintDescription": "Sugestie: În mod implicit, toate obiectele spațiale cu aceeași valoare pentru câmpurile selectate vor fi grupate pentru a fi afișate ca o singură intrare în raport. Dezactivați gruparea după atribute similare pentru a afișa o intrare pentru fiecare obiect spațial.",
    "addLayersHintText": "Sugestie: selectați straturile și câmpurile care sunt incluse în analiză și raport",
    "queryCapabilityHintText": "Vor fi listate doar straturile tematice cu capacități de interogare",
    "addLayerNameTitle": "Nume strat tematic",
    "addFieldsLabel": "Adăugare câmp",
    "addFieldsPopupTitle": "Selectare câmpuri",
    "addFieldsNameTitle": "Nume câmpuri",
    "aoiToolsLegendLabel": "Instrumente Zonă de interes",
    "aoiToolsDescriptionLabel": "Alegeți și etichetați instrumentele disponibile pentru a crea o Zonă de interes.",
    "placenameLabel": "Nume loc",
    "drawToolsLabel": "Alegeţi instrumentele de trasare",
    "uploadShapeFileLabel": "Încărcați un fișier shapefile",
    "coordinatesLabel": "Coordonate",
    "coordinatesDrpDwnHintText": "Sugestie: Alegeţi unitatea pentru a afişa transversalele introduse",
    "coordinatesBearingDrpDwnHintText": "Sugestie: Alegeţi azimutul pentru a afişa transversalele introduse",
    "allowShapefilesUploadLabel": "Se permite utilizatorilor să încarce shapefile în analiză",
    "allowShapefilesUploadLabelHintText": "Sugestie: adăugați o opțiune la fila Raport pentru a permite utilizatorilor să-și încarce datele proprii ca shapefile pentru includere în raport de analiză",
    "allowVisibleLayerAnalysisLabel": "Nu analizaţi și nu raportați rezultatele pentru straturile tematice care nu sunt vizibile",
    "allowVisibleLayerAnalysisHintText": "Sfat: Straturile tematice care au fost dezactivate sau nu sunt vizibile din cauza setărilor scalei de vizibilitate nu vor fi analizate sau incluse în rezultatele imprimate sau descărcate.",
    "areaUnitsLabel": "Unități pentru rezultate de analiză (zonă)",
    "lengthUnitsLabel": "Unități pentru rezultate de analiză (lungime)",
    "maxFeatureForAnalysisLabel": "Număr maxim de obiecte spaţiale pentru analiză",
    "maxFeatureForAnalysisHintText": "Sugestie: setați numărul maxim de obiecte spaţiale care vor fi incluse în analiză",
    "searchToleranceLabelText": "Toleranţă căutare",
    "searchToleranceHint": "Sugestie: toleranţa de căutare este utilizată la analizarea introducerilor de linii şi puncte",
    "placenameButtonText": "Nume loc",
    "drawToolsButtonText": "Trasare",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Coordonate",
    "invalidLayerErrorMsg": "Configuraţi câmpurile pentru",
    "drawToolSelectableLayersLabel": "Alegeți straturile tematice selectabile",
    "drawToolSelectableLayersHint": "Sugestie: selectați straturile care conțin obiectele spațiale care pot fi selectate folosind instrumentele de trasare Selectare",
    "drawToolsSettingsFieldsetLabel": "Instrumente de trasare",
    "drawToolPointLabel": "Punct",
    "drawToolPolylineLabel": "Linie poligonală",
    "drawToolExtentLabel": "Extindere",
    "drawToolPolygonLabel": "Poligon",
    "drawToolCircleLabel": "Cerc",
    "selectDrawToolsText": "Alegeți instrumentele de trasare disponibile pentru crearea Zonei de interes.",
    "selectingDrawToolErrorMessage": "Selectați cel puțin un instrument de trasare sau un strat de selectare pentru a utiliza opțiunea Instrument de trasare pentru Instrumente AOI.",
    "sortingSettingsLegend": "Sortare setări",
    "ascendingLabel": "Ascendent",
    "descendingLabel": "Descendent",
    "sortFieldSelectLabel": "Selectare câmp de sortare",
    "statisticsCountLabel": "Statistici: număr",
    "statisticsTotalLengthLabel": "Statistici: lungime totală",
    "statisticsTotalAreaLabel": "Statistici: suprafață totală"
  },
  "downloadTab": {
    "downloadLegend": "Setări descărcare",
    "reportLegend": "Setări raport",
    "downloadTabLabel": "Descărcare",
    "syncEnableOptionLabel": "Straturile tematice de obiecte spaţiale",
    "syncEnableOptionHint": "Sugestie: selectați straturile care pot fi descărcate și specificați formatele în care este disponibil fiecare strat. Seturile de date descărcate vor include acele caracteristici care se intersectează cu zona de interes.",
    "syncEnableOptionNote": "Notă: descărcarea fișierului bazei de date geografice și shapefile necesită straturi tematice de obiecte spaţiale cu sincronizare activată. Formatul shapefile este suportat doar cu straturi tematice de obiecte spațiale găzduite de ArcGIS Online.",
    "extractDataTaskOptionLabel": "Serviciul de geoprocesare Activitate de extragere a datelor",
    "extractDataTaskOptionHint": "Sugestie: Folosiţi un serviciu publicat de geoprocesare Activitate de extragere a datelor pentru a descărca obiecte spaţiale care se intersectează cu zona de interes în formatele bază de date geografică cu fişiere sau fişier shapefile.",
    "cannotDownloadOptionLabel": "Dezactivare descărcare",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nume strat tematic",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "FGDB",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Se permite descărcarea"
    },
    "setButtonLabel": "Setare",
    "GPTaskLabel": "Specificare URL către serviciul de geoprocesare",
    "printGPServiceLabel": "URL serviciu de imprimare",
    "setGPTaskTitle": "Specificare URL serviciu de geoprocesare necesar",
    "logoLabel": "Siglă",
    "logoChooserHint": "Sugestie: faceți clic pe pictograma imagine pentru a schimba logo-ul afișat în colțul din stânga sus al raportului",
    "footnoteLabel": "Notă de subsol",
    "columnTitleColorPickerLabel": "Culoarea titlului de coloană din raport",
    "reportTitleLabel": "Titlu raport",
    "displaySummaryLabel": "Afișare rezumat",
    "hideZeroValueRowLabel": "Ascundeți rândurile cu valoarea 0 pentru toate câmpurile de analiză",
    "hideNullValueRowLabel": "Ascundeți rândurile fără valoare (zero sau goale) pentru toate câmpurile de analiză",
    "errorMessages": {
      "invalidGPTaskURL": "Serviciu de geoprocesare nevalid. Selectaţi orice serviciu de geoprocesare care conţine o Activitate de extragere a datelor.",
      "noExtractDataTaskURL": "Selectaţi orice serviciu de geoprocesare care conţine o Activitate de extragere a datelor.",
      "duplicateCustomOption": "Există o dublură pentru  ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Lățime invalidă introdusă pentru ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Înălţime invalidă introdusă pentru ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unitate de pagină invalidă selectată pentru ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Eroare la preluarea informațiilor despre dimensiunea sarcinii neoficiale. Încercați din nou.",
      "failtofetchbuddyTaskName": "Eroare la preluarea numelui sarcinii neoficiale. Încercați din nou.",
      "failtofetchChoiceList": "Eroare la preluarea listei de alegeri de la serviciul de imprimare. Încercați din nou.",
      "invalidWidth": "Lățime nevalidă.",
      "invalidHeight": "Înălțime nevalidă."
    },
    "addCustomLayoutTitle": "Adăugare configuraţie particularizată",
    "customLayoutOptionHint": "Sugestie: adăugați o configurație din serviciul de imprimare la lista de opțiuni de imprimare.",
    "reportDefaultOptionLabel": "Aspect implicit",
    "pageSizeUnits": {
      "millimeters": "Milimetri",
      "points": "Puncte"
    },
    "noDataTextRepresentation": "Nu există valori date",
    "naTextRepresentation": "Nicio valoare aplicabilă",
    "noDataDefaultText": "Nicio dată",
    "notApplicableDefaultText": "N/A"
  },
  "generalTab": {
    "generalTabLabel": "Generalităţi",
    "tabLabelsLegend": "Etichete panou",
    "tabLabelsHint": "Sugestie: Specificaţi etichete",
    "AOITabLabel": "Panou Zonă de interes",
    "ReportTabLabel": "Panou Raport",
    "bufferSettingsLegend": "Setări buffer",
    "defaultBufferDistanceLabel": "Distanţă implicită zonă tampon",
    "defaultBufferUnitsLabel": "Unităţi buffer",
    "generalBufferSymbologyHint": "Sugestie: simbolismul trebuie utilizat pentru a indica zona de buffer din jurul zonei de interes definite",
    "aoiGraphicsSymbologyLegend": "Simbolism Zonă de interes",
    "aoiGraphicsSymbologyHint": "Sugestie: simbolismul utilizat pentru a defini zonele de interese punct, linie și poligon",
    "pointSymbologyLabel": "Punct",
    "previewLabel": "Previzualizare",
    "lineSymbologyLabel": "Linie",
    "polygonSymbologyLabel": "Poligon",
    "aoiBufferSymbologyLabel": "Simbolism buffer",
    "pointSymbolChooserPopupTitle": "Simbol adresă sau locaţie punct",
    "polygonSymbolChooserPopupTitle": "Simbol poligon",
    "lineSymbolChooserPopupTitle": "Simbol linie",
    "aoiSymbolChooserPopupTitle": "Simbol buffer",
    "aoiTabText": "AOI",
    "reportTabText": "Raport",
    "invalidSymbolValue": "Valoare nevalidă a simbolului."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Setări sursă căutare",
    "searchSourceSettingTitle": "Setări sursă căutare",
    "searchSourceSettingTitleHintText": "Adăugaţi şi configuraţi servicii de geocodificare sau straturi tematice de obiecte spaţiale ca surse de căutare. Aceste surse specificate stabilesc ce este căutabil în cadrul casetei de căutare",
    "addSearchSourceLabel": "Adăugare sursă căutare",
    "featureLayerLabel": "Strat tematic de obiecte spațiale",
    "geocoderLabel": "Geocodificator",
    "generalSettingLabel": "Setare generală",
    "allPlaceholderLabel": "Text substituent pentru căutarea tuturor:",
    "allPlaceholderHintText": "Sugestie: Introduceţi textul care va fi afişat ca substituent în timp ce căutaţi în toate straturile tematice şi în geocodificator",
    "generalSettingCheckboxLabel": "Afişaţi fereastra pop-up pentru obiectul spaţial sau locul găsit",
    "countryCode": "Cod(uri) ţară sau regiune",
    "countryCodeEg": "de ex. ",
    "countryCodeHint": "Dacă lăsaţi această valoare necompletată, vor fi căutate toate ţările şi regiunile",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Căutaţi doar în extinderea de hartă curentă",
    "locatorUrl": "URL geocodificator",
    "locatorName": "Nume geocodificator",
    "locatorExample": "Exemplu",
    "locatorWarning": "Această versiune de serviciu de geocodificare nu este acceptată. Widgetul acceptă serviciul de geocodificare versiunea 10.0 sau ulterioară.",
    "locatorTips": "Sugestiile nu sunt disponibile, deoarece serviciul de geocodificare nu acceptă capacitatea de sugestie.",
    "layerSource": "Sursă straturi tematice",
    "setLayerSource": "Setare sursă straturi tematice",
    "setGeocoderURL": "Setare URL geocodificator",
    "searchLayerTips": "Sugestiile nu sunt disponibile, deoarece serviciul de obiecte spațiale nu acceptă capacitatea de paginare.",
    "placeholder": "Text substituent",
    "searchFields": "Câmpuri de căutare",
    "displayField": "Câmp de afişare",
    "exactMatch": "Potrivire exactă",
    "maxSuggestions": "Sugestii de maxime",
    "maxResults": "Număr maxim de rezultate",
    "enableLocalSearch": "Activare căutare locală",
    "minScale": "Scară minimă",
    "minScaleHint": "Dacă scara hărţii este mai mare decât această scară, va fi aplicată căutarea locală",
    "radius": "Rază",
    "radiusHint": "Specifică raza unei suprafeţe din jurul centrului actual al hărţii, utilizată pentru a creşte clasificarea candidaţilor de geocodificare, astfel încât candidaţii cei mai apropiaţi de locaţie să fie returnaţi primii",
    "setSearchFields": "Setare câmpuri de căutare",
    "set": "Setare",
    "invalidUrlTip": "Adresa URL ${URL} este nevalidă sau inaccesibilă.",
    "invalidSearchSources": "Setări nevalide sursă căutare"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Finalizați câmpurile obligatorii",
    "bufferDistanceFieldsErrorMsg": "Introduceţi valori valide",
    "invalidSearchToleranceErrorMsg": "Introduceţi o valoare validă pentru toleranţa de căutare",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuraţie nevalidă: este necesar cel puţin un instrument Zonă de interes.",
    "noLayerAvailableErrorMsg": "Niciun strat tematic disponibil",
    "layerNotSupportedErrorMsg": "Neacceptat ",
    "noFieldSelected": "Utilizaţi acţiunea de editare pentru a selecta câmpurile pentru analiză.",
    "duplicateFieldsLabels": "Etichetă dublată \"${labelText}\" adăugată pentru: \"${itemNames}\"",
    "noLayerSelected": "Selectaţi cel puţin un strat tematic pentru analiză.",
    "errorInSelectingLayer": "Stratul tematic nu a putut fi selectat. Încercați din nou.",
    "errorInMaxFeatureCount": "Introduceţi un număr maxim valid pentru numărul de obiecte spaţiale pentru analiză."
  }
});