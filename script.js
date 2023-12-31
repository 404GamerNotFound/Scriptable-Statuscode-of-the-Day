// Script für ein Scriptable-Widget, das den "Statuscode of the Day" anzeigt

const url = "https://api.http-statuscode.com/?statusCodeOfTheDay=true";
const req = new Request(url);
const res = await req.loadJSON();

const widget = new ListWidget();

// Titel hinzufügen
const title = widget.addText("Statuscode of the Day");
title.font = Font.boldSystemFont(16);

// Abstand hinzufügen
widget.addSpacer(5);

// Hauptinformationen hinzufügen
const statusCode = widget.addText(`Code: ${res.statuscode_code}`);
statusCode.font = Font.systemFont(14);

const statusLabel = widget.addText(`Label: ${res.statuscode_label}`);
statusLabel.font = Font.systemFont(14);

// Statusgruppeninformationen hinzufügen, wenn Widget größer ist
if (config.widgetFamily === 'medium' || config.widgetFamily === 'large') {
    const statusGroup = widget.addText(`Statusgruppe: ${res.statusGroupInfo.statusGroup_name}`);
    statusGroup.font = Font.systemFont(12);

    const statusGroupRange = widget.addText(`Bereich: ${res.statusGroupInfo.statusGroup_range_from}-${res.statusGroupInfo.statusGroup_range_to}`);
    statusGroupRange.font = Font.systemFont(12);
}

// Abstand hinzufügen
widget.addSpacer(5);

// Spezifikationslink hinzufügen
const specLink = widget.addText(`Spezifikation: ${res.statusCode_spezification_link}`);
specLink.font = Font.systemFont(12);
specLink.textColor = Color.blue();
specLink.url = res.statusCode_spezification_link;

// Link zum Öffnen bei Klick hinzufügen
widget.url = res.infoLink;

// Weitere Formatierung und Layout-Optionen
widget.backgroundColor = new Color("#000");
widget.setPadding(10, 10, 10, 10);

// Widget anzeigen
if (!config.runsInWidget) {
  await widget.presentMedium();
}

Script.setWidget(widget);
Script.complete();
