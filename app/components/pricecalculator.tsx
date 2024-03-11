"use client";

import { info } from "console";
import { useState } from "react";

export function Pricecalculator() {
  const videoproductie = [
    {
      name: "Videoproductie",
      price: 175,
      titleOne: "Productiesoort",
      titleTwo: "Aantal woorden",
      itemlistTwo: [
        { item: "0 - 250", price: 0 },
        { item: "250 - 1000", price: 50 },
        { item: "500 - 1000", price: 150 },
        { item: "1000 - 1500", price: 225 },
        { item: "1500+" },
      ],
      titleThree: "Extra Opties",
      itemlistThree: [
        {
          item: "Audio Cleanup",
          price: 50,
          infoText:
            "Al onze opnames worden standaard onbewerkt opgeleverd. Er kunnen dus ademhalingen, smakjes en andere oneffenheden te horen zijn. Kies Audio Cleanup wanneer je een volledig opgeschoond en geprocessed bestand wilt ontvangen dat kant en klaar te gebruiken is.",
        },
        {
          item: "Editing",
          price: 50,
          infoTexT:
            "Onder deze categorie vallen producties zoals bedrijfsfilms, documentaires, audiotours, etc.",
        },
        {
          item: "Mixage",
          price: 100,
          infoText:
            "Opname uitzendklaar door ons laten afmixen? Wij maken de perfecte radio- tv, of webmixage voor je zodat je productie goed klinkt en meteen gebruikt kan worden. Om mixing als extra dienst te selecteren moet je ook editing afnemen.",
        },
        {
          item: "Sound Design",
          price: 100,
          infoText:
            "Heeft jouw productie een passend geluidsontwerp nodig? Wij voorzien de opnames in overleg met jou van passende geluidseffecten en leveren een kant en klaar eindproduct op. Om sounddesign als extra dienst te selecteren moet je ook editing & mixing afnemen.",
        },
        {
          item: "Klantregie",
          price: 75,
          infoText:
            "Live meeluisteren en regisseren tijdens de opnames? Dat kan met Klantregie. Via een eenvoudige weblink kun je meeluisteren en feedback geven alsof je in de studio zit",
        },
        {
          item: "Copywriting",
          price: 125,
          infoText:
            "Je scripts nog beter laten klinken? Kies Copywriting wanneer je jouw basistekst door ons wilt laten redigeren tot goed in te spreken copy die overbrengt wat de bedoeling is.",
        },
        {
          item: "Inspreken op beeld",
          price: 75,
          infoText:
            "Wil je dat jouw script op beeld wordt ingesproken? Stuur ons je video en we dubben de voice-over onder het beeld, zodat je qua timing altijd goed zit!",
        },
      ],
    },
  ];

  const eLearning = [
    {
      name: "E-learning",
      price: 200,
      titleOne: "Productiesoort",
      titleTwo: "Aantal woorden",
      itemlistTwo: [
        { item: "0 - 500", price: 0 },
        { item: "500 - 1000", price: 100 },
        { item: "100 - 1500", price: 175 },
        { item: "1500 - 2000", price: 250 },
        { item: "2000+" },
      ],
      titleThree: "Extra Opties",
      itemlistThree: [
        {
          item: "Audio Cleanup",
          price: 50,
          infoText:
            "Al onze opnames worden standaard onbewerkt opgeleverd. Er kunnen dus ademhalingen, smakjes en andere oneffenheden te horen zijn. Kies Audio Cleanup wanneer je een volledig opgeschoond en geprocessed bestand wilt ontvangen dat kant en klaar te gebruiken is.",
        },
        {
          item: "Editing",
          price: 50,
          infoTexT:
            "Onder deze categorie vallen producties zoals bedrijfsfilms, documentaires, audiotours, etc.",
        },
        {
          item: "Mixage",
          price: 100,
          infoText:
            "Opname uitzendklaar door ons laten afmixen? Wij maken de perfecte radio- tv, of webmixage voor je zodat je productie goed klinkt en meteen gebruikt kan worden. Om mixing als extra dienst te selecteren moet je ook editing afnemen.",
        },
        {
          item: "Sound Design",
          price: 100,
          infoText:
            "Heeft jouw productie een passend geluidsontwerp nodig? Wij voorzien de opnames in overleg met jou van passende geluidseffecten en leveren een kant en klaar eindproduct op. Om sounddesign als extra dienst te selecteren moet je ook editing & mixing afnemen.",
        },
        {
          item: "Klantregie",
          price: 75,
          infoText:
            "Live meeluisteren en regisseren tijdens de opnames? Dat kan met Klantregie. Via een eenvoudige weblink kun je meeluisteren en feedback geven alsof je in de studio zit",
        },
        {
          item: "Copywriting",
          price: 125,
          infoText:
            "Je scripts nog beter laten klinken? Kies Copywriting wanneer je jouw basistekst door ons wilt laten redigeren tot goed in te spreken copy die overbrengt wat de bedoeling is.",
        },
        {
          item: "Inspreken op beeld",
          price: 75,
          infoText:
            "Wil je dat jouw script op beeld wordt ingesproken? Stuur ons je video en we dubben de voice-over onder het beeld, zodat je qua timing altijd goed zit!",
        },
      ],
    },
  ];

  const radiocommercial = [
    {
      name: "Radiocommercial",
      price: 150,
      titleOne: "Productiesoort",
      titleTwo: "Aantal versies",
      explainText:
        "Aantal versies inclusief eventuele tag-ons. Bijvoorbeeld: wanneer je één commercial plus één tag-on nodig hebt, vul hier dan 'twee' in.",
      itemlistTwo: [
        { item: "1", price: 0 },
        { item: "2", price: 190 },
        { item: "3", price: 310 },
        { item: "4", price: 410 },
        { item: "5", price: 490 },
      ],
      titleThree: "Extra Opties",
      itemlistThree: [
        {
          item: "Audio Cleanup",
          price: 75,
          infoText:
            "Al onze opnames worden standaard onbewerkt opgeleverd. Er kunnen dus ademhalingen, smakjes en andere oneffenheden te horen zijn. Kies Audio Cleanup wanneer je een volledig opgeschoond en geprocessed bestand wilt ontvangen dat kant en klaar te gebruiken is.",
        },
        {
          item: "Editing",
          price: 75,
          infoTexT:
            "Onder deze categorie vallen producties zoals bedrijfsfilms, documentaires, audiotours, etc.",
        },
        {
          item: "Mixage",
          price: 150,
          infoText:
            "Opname uitzendklaar door ons laten afmixen? Wij maken de perfecte radio- tv, of webmixage voor je zodat je productie goed klinkt en meteen gebruikt kan worden. Om mixing als extra dienst te selecteren moet je ook editing afnemen.",
        },
        {
          item: "Sound Design",
          price: 150,
          infoText:
            "Heeft jouw productie een passend geluidsontwerp nodig? Wij voorzien de opnames in overleg met jou van passende geluidseffecten en leveren een kant en klaar eindproduct op. Om sounddesign als extra dienst te selecteren moet je ook editing & mixing afnemen.",
        },
        {
          item: "Klantregie",
          price: 75,
          infoText:
            "Live meeluisteren en regisseren tijdens de opnames? Dat kan met Klantregie. Via een eenvoudige weblink kun je meeluisteren en feedback geven alsof je in de studio zit",
        },
        {
          item: "Copywriting",
          price: 125,
          infoText:
            "Je scripts nog beter laten klinken? Kies Copywriting wanneer je jouw basistekst door ons wilt laten redigeren tot goed in te spreken copy die overbrengt wat de bedoeling is.",
        },
      ],
      uitzendgebied: [
        { name: "regionaal", price: 0 },
        { name: "nationaal", price: 250 },
      ],
    },
  ];

  const tvCommercial = [
    {
      name: "TV Commercial",
      price: 250,
      titleOne: "Productiesoort",
      titleTwo: "Aantal versies",
      explainText:
        "Aantal versies inclusief eventuele tag-ons. Bijvoorbeeld: wanneer je één commercial plus één tag-on nodig hebt, vul hier dan 'twee' in.",
      itemlistTwo: [
        { item: "1", price: 0 },
        { item: "2", price: 190 },
        { item: "3", price: 310 },
        { item: "4", price: 410 },
        { item: "5", price: 490 },
      ],
      titleThree: "Extra Opties",
      itemlistThree: [
        {
          item: "Audio Cleanup",
          price: 75,
          infoText:
            "Al onze opnames worden standaard onbewerkt opgeleverd. Er kunnen dus ademhalingen, smakjes en andere oneffenheden te horen zijn. Kies Audio Cleanup wanneer je een volledig opgeschoond en geprocessed bestand wilt ontvangen dat kant en klaar te gebruiken is.",
        },
        {
          item: "Editing",
          price: 75,
          infoTexT:
            "Onder deze categorie vallen producties zoals bedrijfsfilms, documentaires, audiotours, etc.",
        },
        {
          item: "Mixage",
          price: 150,
          infoText:
            "Opname uitzendklaar door ons laten afmixen? Wij maken de perfecte radio- tv, of webmixage voor je zodat je productie goed klinkt en meteen gebruikt kan worden. Om mixing als extra dienst te selecteren moet je ook editing afnemen.",
        },
        {
          item: "Sound Design",
          price: 150,
          infoText:
            "Heeft jouw productie een passend geluidsontwerp nodig? Wij voorzien de opnames in overleg met jou van passende geluidseffecten en leveren een kant en klaar eindproduct op. Om sounddesign als extra dienst te selecteren moet je ook editing & mixing afnemen.",
        },
        {
          item: "Klantregie",
          price: 75,
          infoText:
            "Live meeluisteren en regisseren tijdens de opnames? Dat kan met Klantregie. Via een eenvoudige weblink kun je meeluisteren en feedback geven alsof je in de studio zit",
        },
        {
          item: "Copywriting",
          price: 125,
          infoText:
            "Je scripts nog beter laten klinken? Kies Copywriting wanneer je jouw basistekst door ons wilt laten redigeren tot goed in te spreken copy die overbrengt wat de bedoeling is.",
        },
        {
          item: "Inspreken op beeld",
          price: 100,
          infoText:
            "Wil je dat jouw script op beeld wordt ingesproken? Stuur ons je video en we dubben de voice-over onder het beeld, zodat je qua timing altijd goed zit!",
        },
      ],
      uitzendgebied: [
        { name: "regionaal", price: 0 },
        { name: "nationaal", price: 300 },
      ],
    },
  ];

  const webCommercial = [
    {
      name: "Web Commercial",
      price: 400,
      titleOne: "Productiesoort",
      titleTwo: "Aantal versies",
      explainText:
        "Aantal versies inclusief eventuele tag-ons. Bijvoorbeeld: wanneer je één commercial plus één tag-on nodig hebt, vul hier dan 'twee' in.",
      itemlistTwo: [
        { item: "1", price: 0 },
        { item: "2", price: 300 },
        { item: "3", price: 635 },
        { item: "4", price: 860 },
        { item: "5", price: 1040 },
      ],
      titleThree: "Extra Opties",
      itemlistThree: [
        {
          item: "Audio Cleanup",
          price: 75,
          infoText:
            "Al onze opnames worden standaard onbewerkt opgeleverd. Er kunnen dus ademhalingen, smakjes en andere oneffenheden te horen zijn. Kies Audio Cleanup wanneer je een volledig opgeschoond en geprocessed bestand wilt ontvangen dat kant en klaar te gebruiken is.",
        },
        {
          item: "Editing",
          price: 75,
          infoTexT:
            "Onder deze categorie vallen producties zoals bedrijfsfilms, documentaires, audiotours, etc.",
        },
        {
          item: "Mixage",
          price: 150,
          infoText:
            "Opname uitzendklaar door ons laten afmixen? Wij maken de perfecte radio- tv, of webmixage voor je zodat je productie goed klinkt en meteen gebruikt kan worden. Om mixing als extra dienst te selecteren moet je ook editing afnemen.",
        },
        {
          item: "Sound Design",
          price: 150,
          infoText:
            "Heeft jouw productie een passend geluidsontwerp nodig? Wij voorzien de opnames in overleg met jou van passende geluidseffecten en leveren een kant en klaar eindproduct op. Om sounddesign als extra dienst te selecteren moet je ook editing & mixing afnemen.",
        },
        {
          item: "Klantregie",
          price: 75,
          infoText:
            "Live meeluisteren en regisseren tijdens de opnames? Dat kan met Klantregie. Via een eenvoudige weblink kun je meeluisteren en feedback geven alsof je in de studio zit",
        },
        {
          item: "Copywriting",
          price: 125,
          infoText:
            "Je scripts nog beter laten klinken? Kies Copywriting wanneer je jouw basistekst door ons wilt laten redigeren tot goed in te spreken copy die overbrengt wat de bedoeling is.",
        },
        {
          item: "Inspreken op beeld",
          price: 100,
          infoText:
            "Wil je dat jouw script op beeld wordt ingesproken? Stuur ons je video en we dubben de voice-over onder het beeld, zodat je qua timing altijd goed zit!",
        },
      ],
      uitzendgebied: [
        { name: "regionaal", price: 0 },
        { name: "nationaal", price: 250 },
      ],
    },
  ];

  const voiceResponse = [
    {
      name: "Voice response",
      price: 150,
      titleOne: "Productiesoort",
      titleTwo: "Aantal woorden",
      itemlistTwo: [
        { item: "0 - 500", price: 0 },
        { item: "500 - 1000", price: 100 },
        { item: "100 - 1500", price: 175 },
        { item: "1500 - 2000", price: 250 },
        { item: "2000+" },
      ],
      titleThree: "Extra Opties",
      itemlistThree: [
        {
          item: "Audio Cleanup",
          price: 50,
          infoText:
            "Al onze opnames worden standaard onbewerkt opgeleverd. Er kunnen dus ademhalingen, smakjes en andere oneffenheden te horen zijn. Kies Audio Cleanup wanneer je een volledig opgeschoond en geprocessed bestand wilt ontvangen dat kant en klaar te gebruiken is.",
        },
        {
          item: "Editing",
          price: 50,
          infoTexT:
            "Onder deze categorie vallen producties zoals bedrijfsfilms, documentaires, audiotours, etc.",
        },
        {
          item: "Mixage",
          price: 100,
          infoText:
            "Opname uitzendklaar door ons laten afmixen? Wij maken de perfecte radio- tv, of webmixage voor je zodat je productie goed klinkt en meteen gebruikt kan worden. Om mixing als extra dienst te selecteren moet je ook editing afnemen.",
        },
        {
          item: "Sound Design",
          price: 100,
          infoText:
            "Heeft jouw productie een passend geluidsontwerp nodig? Wij voorzien de opnames in overleg met jou van passende geluidseffecten en leveren een kant en klaar eindproduct op. Om sounddesign als extra dienst te selecteren moet je ook editing & mixing afnemen.",
        },
        {
          item: "Klantregie",
          price: 75,
          infoText:
            "Live meeluisteren en regisseren tijdens de opnames? Dat kan met Klantregie. Via een eenvoudige weblink kun je meeluisteren en feedback geven alsof je in de studio zit",
        },
        {
          item: "Copywriting",
          price: 125,
          infoText:
            "Je scripts nog beter laten klinken? Kies Copywriting wanneer je jouw basistekst door ons wilt laten redigeren tot goed in te spreken copy die overbrengt wat de bedoeling is.",
        },
        {
          item: "Inspreken op beeld",
          price: 75,
          infoText:
            "Wil je dat jouw script op beeld wordt ingesproken? Stuur ons je video en we dubben de voice-over onder het beeld, zodat je qua timing altijd goed zit!",
        },
      ],
    },
  ];

  // What's selected in the first list
  const [selectedProduction, setSelectedProduction] = useState(
    videoproductie[0].name
  );

  // What's selected in the second list
  const [selected2ndList, setSelected2ndList] = useState("0 - 250");

  return (
    <section>
      <div className="h-screen flex justify-center items-center gap-4">
        {/* COLUMN 1: Productiesoort */}
        <div className="w-[200px] bg-slate-400">
          <div>
            {/* (1) Videoproductie - List 1 */}
            {videoproductie.map((object, index) => (
              <div key={index}>
                <input
                  defaultChecked
                  type="radio"
                  id={object.name}
                  name="list-1"
                  value={object.name}
                  onChange={() => setSelectedProduction(object.name)}
                />
                <label htmlFor={object.name}>{object.name}</label>
              </div>
            ))}
            {/* (2) E-learning - List 1 */}
            {eLearning.map((object, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={object.name}
                  name="list-1"
                  value={object.name}
                  onChange={() => setSelectedProduction(object.name)}
                />
                <label htmlFor={object.name}>{object.name}</label>
              </div>
            ))}
            {/* (3) Radiocommercial - List 1 */}
            {radiocommercial.map((object, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={object.name}
                  name="list-1"
                  value={object.name}
                  onChange={() => setSelectedProduction(object.name)}
                />
                <label htmlFor={object.name}>{object.name}</label>
              </div>
            ))}
            {/* (4) Tv Commercial - List 1 */}
            {tvCommercial.map((object, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={object.name}
                  name="list-1"
                  value={object.name}
                  onChange={() => setSelectedProduction(object.name)}
                />
                <label htmlFor={object.name}>{object.name}</label>
              </div>
            ))}
            {/* (5) Web Commercial - List 1 */}
            {webCommercial.map((object, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={object.name}
                  name="list-1"
                  value={object.name}
                  onChange={() => setSelectedProduction(object.name)}
                />
                <label htmlFor={object.name}>{object.name}</label>
              </div>
            ))}
            {/* (6) Voice Response - List 1 */}
            {voiceResponse.map((object, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={object.name}
                  name="list-1"
                  value={object.name}
                  onChange={() => setSelectedProduction(object.name)}
                />
                <label htmlFor={object.name}>{object.name}</label>
              </div>
            ))}
          </div>
        </div>
        {/* COLUMN 2: Aantal woord | Aantal versies */}
        <div className="w-[200px] bg-slate-400">
          <div>
            {selectedProduction === "Videoproductie" ? (
              <div>
                {videoproductie[0].itemlistTwo.map((object, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={object.item}
                      name="list-2"
                      value={object.item}
                      onChange={() => setSelected2ndList(object.item)}
                    />
                    <label htmlFor={object.item}>{object.item}</label>
                  </div>
                ))}
              </div>
            ) : selectedProduction === "E-learning" ? (
              <div>
                {eLearning[0].itemlistTwo.map((object, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={object.item}
                      name="list-2"
                      value={object.item}
                      onChange={() => setSelected2ndList(object.item)}
                    />
                    <label htmlFor={object.item}>{object.item}</label>
                  </div>
                ))}
              </div>
            ) : selectedProduction === "Radiocommercial" ? (
              <div>
                {radiocommercial[0].itemlistTwo.map((object, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={object.item}
                      name="list-2"
                      value={object.item}
                      onChange={() => setSelected2ndList(object.item)}
                    />
                    <label htmlFor={object.item}>{object.item}</label>
                  </div>
                ))}
              </div>
            ) : selectedProduction === "TV Commercial" ? (
              <div>
                {tvCommercial[0].itemlistTwo.map((object, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={object.item}
                      name="list-2"
                      value={object.item}
                      onChange={() => setSelected2ndList(object.item)}
                    />
                    <label htmlFor={object.item}>{object.item}</label>
                  </div>
                ))}
              </div>
            ) : selectedProduction === "Web Commercial" ? (
              <div>
                {webCommercial[0].itemlistTwo.map((object, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={object.item}
                      name="list-2"
                      value={object.item}
                      onChange={() => setSelected2ndList(object.item)}
                    />
                    <label htmlFor={object.item}>{object.item}</label>
                  </div>
                ))}
              </div>
            ) : selectedProduction === "Voice response" ? (
              <div>
                {voiceResponse[0].itemlistTwo.map((object, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={object.item}
                      name="list-2"
                      value={object.item}
                      onChange={() => setSelected2ndList(object.item)}
                    />
                    <label htmlFor={object.item}>{object.item}</label>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>Couldn't read the list</p>
              </div>
            )}
          </div>
        </div>
        {/* COLUMN 3: Extra Opties */}
        <div className="w-[180px] bg-slate-400">
          {selectedProduction === "Videoproductie" &&
          selected2ndList === "0 - 250" ? (
            <div>
              {videoproductie[0].itemlistThree.map((object, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={object.item}
                    name="list-3"
                    value={object.item}
                    onChange={() => setSelected2ndList(object.item)}
                  />
                  <label htmlFor={object.item}>{object.item}</label>
                </div>
              ))}
            </div>
          ) : selected2ndList === "250 - 1000" ? (
            <div></div>
          ) : selected2ndList === "500 - 1000" ? (
            <div></div>
          ) : selected2ndList === "1000 - 1500" ? (
            <div></div>
          ) : selected2ndList === "1500+" ? (
            <div></div>
          ) : (
            <div>
              <p>Couldn't read the list</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
