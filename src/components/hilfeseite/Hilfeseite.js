import React from "react";
import "./Hilfeseite.css";
const Hilfeseite = () => {
  return (
    <div>
      <main className="HilfeSeite">
        <header className="header">Hilfeseite</header>
        <div className="HilfeArtikel">
          <div>
            <h2 className="HilfeTips">Tipps erstellen:</h2>
            <div>
              <h3 className="HilfeHeadline">
                1. Formulieren Sie die Fragen neutral
              </h3>
              <p>
                <span className="emphasise">
                  "Wir sind der Meinung, unsere Servicemitarbeiter sind wirklich
                  hilfsbereit. Wie hilfsbereit finden Sie sie?"
                </span>
              </p>
              <p>
                Diese Art von Fragestellung ist nicht objektiv. Es wird
                lediglich nach einer Bestätigung einer bereits vorgefertigten
                Meinung gefragt. Besser:
                <i>"Wie finden Sie unsere Servicemitarbeiter?"</i>
              </p>
            </div>

            <div>
              <h3 className="HilfeHeadline">
                2. Geben sie nicht nur einseitige Antwortoptionen vor bspw.
              </h3>
              <p>
                <span className="emphasise">
                  1.Äußerst hilfsbereit 2.Sehr hilfsbereit 3.Hilfsbereit
                </span>
              </p>
            </div>

            <div>
              <h3 className="HilfeHeadline">
                3. Fragen Sie nicht zwei Dinge gleichzeitig.
              </h3>
              <p>
                <span className="emphasise">
                  "Wie bewerten Sie unseren Kundenservice und die
                  Zuverlässigkeit unserer Produkte?"
                </span>
              </p>
            </div>

            <div>
              <h3 className="HilfeHeadline">
                4. Nutzen Sie nicht immer dieselben Fragestellungen.
              </h3>

              <p>
                Eine Umfrage ist wie eine Unterhaltung. Daher ist es ratsam bei
                den Fragestellungen ein wenig Variation reinzubringen. Wenn Sie
                immer nach Schema F vorgehen, ist ihr Umfrageteilnehmer unter
                Umständen sehr schnell gelangweilt und füllt ihre Umfrage nicht
                bis zum Ende aus. Weiterhin sollten siees vermeiden, persönliche
                Fragen (bspw.demographischen Fragen.) gleich an den Anfang der
                Umfrage zu setzen. Bei einer Unterhaltung würden sie auch erst
                einmal mit etwas Small Talk beginnen. Machen Sie es genauso bei
                der Erstellung der Umfrage, fangen Sie mit etwas leichtem an.
              </p>
            </div>

            <div>
              <h3 className="HilfeHeadline">
                5. Achten Sie darauf, das ihre Umfrage nicht zu lang wird.
              </h3>

              <p>
                Unsere Erfahrungen haben gezeigt, das bei Umfragen mit mehr als
                15 Fragen, die Bereitschaft der Teilnahme stark nachlässt.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hilfeseite;
