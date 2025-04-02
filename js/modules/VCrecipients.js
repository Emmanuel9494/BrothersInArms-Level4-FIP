export function recipient() {
  // Indian Recipients
  const indianRecipientCon = document.querySelector(
    ".indian-recipients .content-wrapper"
  );

  const indianRecipients = [
    {
      name: "Mir Dast",
      paragraph:
        "55th Coke’s Rifles (Frontier Force), awarded for bravery during the Battle of Ypres (1915).",
    },
    {
      name: "Khudadad Khan",
      paragraph:
        "129th Duke of Connaught’s Own Baluchis, first Indian VC recipient for heroism at Hollebeke (1914).",
    },
    {
      name: "Naik Darwan Singh Negi",
      paragraph:
        "1st Battalion, 39th Garhwal Rifles, honored for gallantry at Festubert (1914).",
    },
    {
      name: "Rifleman Gabar Singh Negi",
      paragraph:
        "9th Bhopal Infantry, recognized for rescuing an officer under fire in Mesopotamia (1916).",
    },
    {
      name: "Sepoy Chatta Singh",
      paragraph:
        "9th Bhopal Infantry, recognized for rescuing an officer under fire in Mesopotamia (1916).",
    },
    {
      name: "Rifleman Kulbir Thapa",
      paragraph:
        "3rd Gurkha Rifles, first Gurkha VC for saving wounded soldiers in France (1915).",
    },
    {
      name: "Dafadar Gobind Singh",
      paragraph:
        "28th Light Cavalry, awarded for bravery under heavy fire in Cambrai (1917).",
    },
    {
      name: "Naik Lala",
      paragraph:
        "41st Dogras, posthumously honored for defending a position in Mesopotamia (1916).",
    },
    {
      name: "Ressaidar Badlu Singh",
      paragraph:
        "14th Murray’s Jat Lancers, posthumously awarded for single-handedly attacking a German position (1918).",
    },
    {
      name: "Rifleman Karanbahadur Rana",
      paragraph: "3rd Gurkha Rifles, recognized for heroism in Egypt (1918).",
    },
    {
      name: "Naik Shahamad Khan",
      paragraph:
        "89th Punjabis, awarded for defending a post alone in Mesopotamia (1916).",
    },
  ];

  indianRecipients.forEach((indianRecipient) => {
    const indianRecipientDiv = document.createElement("div");
    indianRecipientDiv.classList.add(
      "recipient-card",
      "col-span-full",
      "m-col-span-4"
    );

    const indianRecipientParagraph = document.createElement("p");
    indianRecipientParagraph.textContent = indianRecipient.paragraph;

    const indianRecipientName = document.createElement("h3");
    indianRecipientName.textContent = indianRecipient.name;

    indianRecipientDiv.appendChild(indianRecipientName);
    indianRecipientDiv.appendChild(indianRecipientParagraph);

    indianRecipientCon.appendChild(indianRecipientDiv);
  });

  // Canadian Recipients
  const canadianRecipientCon = document.querySelector(
    ".canadian-recipients .content-wrapper"
  );
  const canadianRecipients = [
    {
      name: "Lt. Frederick William Campbell",
      paragraph:
        "1st Battalion, CEF – Led a daring machine-gun assault at Givenchy (posthumous).",
    },
    {
      name: "Pte. John Chipman Kerr",
      paragraph:
        "49th Battalion, CEF – Single-handedly captured a German trench despite wounds.",
    },
    {
      name: "L/Cpl. Frederick Fisher",
      paragraph:
        "13th Battalion, CEF – Bravely operated a machine gun under fire at St. Julien (posthumous).",
    },
    {
      name: "Lt. Col. William Avery 'Billy' Bishop",
      paragraph:
        "RFC (later RAF) – Legendary flying ace awarded for solo raid on a German airfield.",
    },
    {
      name: "Capt. Thomas Orde Lawder Wilkinson",
      paragraph:
        "7th Battalion, Loyal North Lancs (Canadian-born) – Led a charge under heavy fire (posthumous).",
    },
    {
      name: "Lt. Frederick Maurice Watson Harvey",
      paragraph:
        "Lord Strathcona's Horse – Charged a German machine-gun nest on horseback.",
    },
    {
      name: "Cpl. Lionel Beaumaurice Clarke",
      paragraph:
        "2nd Battalion, CEF – Fought alone to clear a German trench (posthumous).",
    },
    {
      name: "Pte. John Bernard Croak",
      paragraph:
        "13th Battalion, CEF – Charged enemy positions despite severe wounds (posthumous).",
    },
    {
      name: "Pte. Thomas Dinesen",
      paragraph:
        "42nd Battalion, CEF (Danish-born) – Single-handedly killed 12 Germans in a trench raid.",
    },
    {
      name: "Pte. James Peter Robertson",
      paragraph:
        "27th Battalion, CEF – Rescued wounded under fire before being killed (posthumous).",
    },
    {
      name: "Pte. Michael James O'Rourke",
      paragraph:
        "7th Battalion, CEF – Repeatedly rescued wounded under fire at Hill 70.",
    },
    {
      name: "Pte. Harry Brown",
      paragraph:
        "10th Battalion, CEF – Delivered a critical message while mortally wounded (posthumous).",
    },
    {
      name: "Capt. Francis Alexander Caron Scrimger",
      paragraph:
        "Canadian Army Medical Corps – Saved wounded under heavy fire at Ypres.",
    },
    {
      name: "Capt. Thain Wendell MacDowell",
      paragraph:
        "38th Battalion, CEF – Captured two German machine-gun nests single-handedly.",
    },
    {
      name: "Pte. William Johnstone Milne",
      paragraph:
        "16th Battalion, CEF – Silenced two German machine guns (posthumous).",
    },
    {
      name: "Lt. Robert Grierson Combe",
      paragraph: "27th Battalion, CEF – Led a charge under fire (posthumous).",
    },
    {
      name: "Cpl. Filip Konowal",
      paragraph:
        "47th Battalion, CEF (Ukrainian-born) – Cleared a German bunker system single-handedly.",
    },
    {
      name: "Sgt. George Harry Mullin",
      paragraph:
        "PPCLI – Captured a German sniper post and machine-gun nest at Passchendaele.",
    },
    {
      name: "Maj. Okill Massey Learmonth",
      paragraph:
        "2nd Battalion, CEF – Held off German attack despite mortal wounds (posthumous).",
    },
    {
      name: "Pte. James Edward Tait",
      paragraph: "78th Battalion, CEF – Led a charge under fire (posthumous).",
    },
    {
      name: "Pte. Thomas William Holmes",
      paragraph:
        "4th CMR – Single-handedly captured a German machine-gun nest at 17 years old.",
    },
    {
      name: "Pte. Cecil John Kinross",
      paragraph:
        "49th Battalion, CEF – Charged a German machine-gun position alone.",
    },
    {
      name: "Pte. John George Pattison",
      paragraph:
        "50th Battalion, CEF – Destroyed a machine-gun nest (posthumous).",
    },
    {
      name: "Lt. Hugh McKenzie",
      paragraph: "PPCLI – Led a suicidal charge at Passchendaele (posthumous).",
    },
    {
      name: "Lt. George Fraser Kerr",
      paragraph:
        "3rd Battalion, CEF – Led a daring trench raid under heavy fire.",
    },
    {
      name: "Lt. Samuel Lewis Honey",
      paragraph:
        "78th Battalion, CEF – Repeatedly led attacks under fire (posthumous).",
    },
    {
      name: "Lt. Wallace Lloyd Algie",
      paragraph: "20th Battalion, CEF – Led a charge under fire (posthumous).",
    },
    {
      name: "Lt. Gordon Muriel Flowerdew",
      paragraph:
        "Lord Strathcona's Horse – Led a cavalry charge at Moreuil Wood (posthumous).",
    },
    {
      name: "Lt. Milton Fowler Gregg",
      paragraph: "RCR – Led repeated attacks under fire at Cambrai.",
    },
    {
      name: "Pte. John Francis Young",
      paragraph: "87th Battalion, CEF – Rescued wounded under heavy fire.",
    },
    {
      name: "Lt. Alan Arnett McLeod",
      paragraph:
        "RFC (RAF) – Youngest Canadian air VC (18) for downing planes while wounded.",
    },
    {
      name: "Lt. George Burdon McKean",
      paragraph: "14th Battalion, CEF – Led a daring trench raid under fire.",
    },
    {
      name: "Lt. Graham Thomson Lyall",
      paragraph: "102nd Battalion, CEF – Captured multiple enemy positions.",
    },
    {
      name: "Lt. Jean Brillant",
      paragraph:
        "22nd Battalion, CEF – Led multiple charges while wounded (posthumous).",
    },
    {
      name: "Lt. Joseph Kaeble",
      paragraph:
        "22nd Battalion, CEF – Held off German attack alone (posthumous).",
    },
    {
      name: "Lt. Harcus Strachan",
      paragraph: "Fort Garry Horse – Led a cavalry charge behind enemy lines.",
    },
    {
      name: "Lt. Frederick George Coppins",
      paragraph: "8th Battalion, CEF – Led a desperate charge under fire.",
    },
    {
      name: "Lt. Robert Spall",
      paragraph: "PPCLI – Held off Germans with a Lewis gun (posthumous).",
    },
    {
      name: "Sgt. Raphael Louis Zengel",
      paragraph: "5th Battalion, CEF – Held off German attack single-handedly.",
    },
    {
      name: "Cpl. Colin Fraser Barron",
      paragraph:
        "3rd Battalion, CEF – Single-handedly captured a machine-gun nest.",
    },
    {
      name: "Pte. Michael O'Leary",
      paragraph:
        "Irish Guards (Canadian-born) – Captured German positions single-handedly.",
    },
  ];

  canadianRecipients.forEach((canadianRecipient) => {
    const canadianRecipientDiv = document.createElement("div");
    canadianRecipientDiv.classList.add(
      "recipient-card",
      "col-span-full",
      "m-col-span-4"
    );

    const canadianRecipientParagraph = document.createElement("p");
    canadianRecipientParagraph.textContent = canadianRecipient.paragraph;

    const canadianRecipientName = document.createElement("h3");
    canadianRecipientName.textContent = canadianRecipient.name;

    canadianRecipientDiv.appendChild(canadianRecipientName);
    canadianRecipientDiv.appendChild(canadianRecipientParagraph);

    canadianRecipientCon.appendChild(canadianRecipientDiv);
  });
}
