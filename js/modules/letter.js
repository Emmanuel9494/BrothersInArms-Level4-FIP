export function letter() {
  // Canadian Letter
  const canadianLetterCon = document.querySelector(".canadian-letter");

  const canadianLetters = [
    {
      title: "From Lt. Hart Leech to his mother",
      paragraph:
        "Just a wee note. I am 'going over the parapet', and the chances of a 'sub' getting back alive are about nix. If I do get back, why you can give me the horse laugh. If not this'll let you know that I kicked out with my boots on. \n I’m going to tell you this in case my company commander forgets. Your son is a soldier, and a dog-gone good one, too, if he does say it himself as shouldn't. And if he gets pipped it'll be doing his blooming job.",
    },
    {
      title: "From Fred Adams writing to his aunt",
      paragraph:
        "This is the first day they have allowed us to write letters since this battle began and I have no doubt you are anxious to hear from me. Well, we have lost an awful lot of our fellows, and to those of us who are left it seems just a miracle that any of us came through alive. \n About two brigades of Canadians held about five times as many Germans. It would have done you good to see the boys. I did not see one show the white feather, but each had a set face and went right at it. \n It was just a nightmare, a hell, retreating across the ground, with the Jack Johnsons digging great holes and the shrapnel raining down upon us, and the bullets striking everywhere. We could see the boys falling everywhere, and it was just awful to hear them cry out.",
    },
    {
      title: "From Lieut. D. Lynn Dudley to a friend",
      paragraph:
        "Any person who went through that Passchendaele Advance can safely say we went through more mud and shell fire than was ever experienced in this God-forsaken hole called Europe. \n Although we went through a great many hardships, it is impossible to imagine what the Germans had to contend with. They were in a great deal more mud and water than we, and it was simply impossible for man or beast to live under shell fire. The ground we advanced over was simply one mass of dead 'Hunies' so you will have some idea of the number of men they lost. One prisoner who was captured said the Germans thought the Canadians were superhuman, and would not face them at all. It certainly looked like it, they way they disappeared when we started after them.",
    },
    {
      title: "From Capt. Charles Robertson to his family",
      paragraph:
        "My observer, the South African I told you about, was right on the job, as cool as a cucumber and working his two machine guns as though he were shooting at a bullseye in a shooting gallery. One came up under our tail knowing of course that that is our 'blind' and defenseless quarter. The other one did half circles around us from one side to the other and both kept pouring a continuous stream of lead into us at anywhere from ten to fifty yards range. A half dozen or so of the first bullets put our engine out of action and after that of course it was just a case of putting my machine into as many funny positions as possible so as to hamper their aim. That ceaseless pop-pop-pop-pop- on the right, on the left, behind, underneath- and the corresponding phit-phit-phit-phit of the bullets as they went past us or pierced some part of the machine never let either of us forget for a moment that there was a war on, believe me. I had no idea that you could do so many things with an aeroplane. I tried them all I think, all my idea being to get that old bus safe on terra firma again",
    },
    {
      title: "From Cpl. Amos Mayse",
      paragraph:
        "I tried to find something by which he might be identified but it was impossible – poor boy -  in some far away home in Canada some-one is mourning the loss of husband – son or sweetheart - & the saddest of all is, they will never know how he died – or where he is buried, & even now they may be clinging to the hope, that he is still alive, a prisoner, for he would be listed among the missing.  Talk about the “glory of war” there is no glory, it is hellish  devilish.  We saw places too where the trenches & ground around was literally bloodsoaked & here & there shell holes with blood & water still standing in them. \n Our Imperial Army & Canada have each sacrificed many of their bravest & best here, & Germany also had paid an awful price for her unholy ambition. \n In my spare time I have braved the occasional bursting shells which Fritz throws over once in a while to let us know that he is still in the vicinity, & wandered over the scene, it is an old German position, one of the strongest they held – considered almost impregnable they say that France alone [censored] of her [censored] take it – It is a high ridge running for miles & which commands a splendid view of the country in every direction, an ideal place for defense. ...",
    },
    {
      title: "From Cpl L G. Baxter to Mr & Mrs Anderson",
      paragraph:
        "Received your kind & welcomed letter & was glad to hear that you were keeping well. I hope you have by now got over the effects of your sad loss. It certainly was very hard indeed for Henry, unfortunate in fact, as he was the first man to go on leave in this 'Batt.' had he come through. Although he should have had it a long time ago. Jack Foster a close chum of Henry was killed not far from him about the same time they were buried in the 'Batt' cemetery in front of Thelus beside the nine Elms he had quiet a few things in his possession I should have liked to sent them on to you but someone else got them. I do not know who. I got the two boxes you sent on & thanks kindly for same. We lost our 3 Company Officers also the same morning as Andy was killed. He was in charge of the gun & I carried it when we went over. I don't think I have much to tell you about, but would be very pleased indeed to answer any letter you might send me, as Andy was a very Dear Chum to me all the time I have been in France. I was in his gun crew.",
    },
    {
      title: "From Andy to Marion",
      paragraph:
        "I received your letter last night but as it was dark I could not read the scribble by candle light and I am not very sure where I made it all out by daylight, but however I was glad to hear from you. This is the first day of the new year and I know that you will have just gone to bed and I bet you had a great time I wish I was there as it is awful cold in the trenches we nearly froze stiff I had two days in the dressing station [?] out but I am nearly all right again we are out for a few days for the new year we had a great feed of turkey last night a big tent was piched pitched on the snow and we had a fine time then we went to the show The Boys got up a pantomime called a [?] in France and there was ladies and fairies all acted out by the soldiers it was fine we could hear the guns booming away outside but we forgot all about them I got the Xmas cards when I was in the line and I was glad to know that you had not forgot me Wouldn't it be great if all the boys could get home again and we could have the same good times we used to have Well Marion I must close now with best love and kisses Remember me to Father and Mother and Dorothy and Pearl",
    },
    {
      title: "From Jackson Woods to friends",
      paragraph:
        "Well Mrs Johns I hardly know how to start this letter. Of course I know you's will have received the sad news of poor Earl's death It's the hardest thing I ever felt my duty to do. to write and inform you's of this news of your dear boy and my best friend I feel that the loss of Earl as friend is nearly as much as Son. But Mrs Johns don't grieve more than possible for I am sure that Earl felt it his duty no matter what the price was. He was has brave a soldier has I have ever met And was loved by all has knew him. He did not suffer at all for death came instantly And was buried in a Canadian cemetery. He got a proper burial The boys of his section burying him the same night has he died. He was not buried in the same cemetery has Clar(e Jones). For we were too far from it. I am sure you's have the deepest sympathy of the boys in your bereavement. But I am sure Earl was ready to meet his maker. So let our prayers be that we shall meet again. I must close asking you to accept my sincere sympathy. I remain",
    },
    {
      title: "From Roy to Mother & All",
      paragraph:
        "Just droping you a few lines to let you know that I am still well & kicking. I have sent wizz-bangs lately because we were out resting & billeted in barns some distance from Y.M.C.A.s & it was difficult to get paper. Had the pleasure of helping some French farmers pull their mangles and believe me we made short work of what would have been a weeks work for the farmer himself. In payment he gave us a light lunch which was sure appreciated even if it was light. \n It is beastly sloppy now & it looks as though it doesn't intend to stop raining until next spring. Those top boots you mentioned will sure come in handy this winter & please stick a few eats & smokes as I'm beastly hungry. \n Well mother this is all at present. Hoping this finds you all well.",
    },
    {
      title: "From J.K. to Miss Smith",
      paragraph:
        "Your very kind letter was most welcome and I do appreciate your past esteem and consequent sorrow at the loss of our gallant comrade John C. Oxborough. To properly put together a letter extending sympathy and condolence have ever considered beyond my efforts, and as in most cases, we find it a great boon to hand to our padre the known facts of each casualty, by doing so we feel assured that those who mourn are informed and possibly comforted. Where you so bravely ask for the bare facts of how it happened; you remove the greatest difficulty coupled with a natural desire to do everything possible when it has to do with 'little Chauncey.' I shall do my best to oblige. Oct. 31st Wed - about 5:30 PM Vapour Farm, P______ Ridge. In an advanced outpost. A 4.5 Howitzer shell landed on the ground about three feet distant. A small particle of shrapnel penetrated the head. The body was otherwise unmarked. Death was instantaneous. At the time we were expecting a counter-attack on that (then newly-won position). About two hours later when the bombardment had quieted down we buried our dead. ...",
    },
    {
      title: "From John to his Mother and Father",
      paragraph:
        "Just a short line this time to let you know I am as well as ever and standing the cold and wet and mind as well as any of the rest of them for we are having most miserable weather indeed. I suppose the winter is setting in now here but for the life of me I cannot figure out what kind of a winter it is. We are too situated in some kind of marsh woods, large and small trees, and there is hardly a tree standing but what has lost a limb with shelling or is scarred in hundreds of places with bullets. A hundred yards or so ahead is the front line trench and in either of these places most of our time is spent. \n To give you some idea of how the days and nights are spent and the difficult conditions one can run into from one day to another I am going to describe the change from the front line to this. You remember me telling you about one of the boys we lost. ...",
    },
    {
      title: "From George to his Mother",
      paragraph:
        "Just a line to let you know that we are both allright for which we must thank God for we have been through a terrible ordeal. I don't know if I am allowed to say much about it but you will see by the papers what a fierce fight the Canadians have been into. How we Mart & I came through without a scratch I can not tell as we have had terrible losses. It has been simply awful I cannot describe it in words but I know there has been nothing worse in this war. We did our eight days in allright and were bombarded pretty heavy all the time but did not suffer much. Then we came out for a rest. The next night they broke through and we had to go back. We had to make a charge in broad daylight but they were ready for us and opened up an awful fire on us we took what cover we could get in old trenches and were there all day. They opened up again two or three times in the night but we kept them back. That night we were supposed to be relieved but the relief could not get in so we had another awful 24 hrs during which they sent over the terrible high explosives & shrapnel but we held firm. ...",
    },
    {
      title: "From A. MacKinnon to his son, Neil",
      paragraph:
        "Received your note yesterday and sorry to hear about Ronnie. He done what he could and now it is all over. So we will have to be reconciled to the will of our Father in Heaven. It is hard on us all but it is worse for Lilly and the children. Go up and see them now and again to cheer them up and help her if you can. As for seeding, we can't get on the land. The land is covered with snow today all over. We have Minnie McArthur staying with us for the summer so I will manage the seeding alright. I would sooner have you come up haying or harvesting if possible. Should they try to force you into the army after you are 18 come home. Don't join up. It will be no disgrace for you. Your brothers have done your bit. It looks as if the war will not be over for a long time. No more, Neil. Thanking you for offering you to assist me and hoping this finds you all well. I will be down about the end of the month. If you see Ronnie's picture in any of the papers send it up to me.",
    },
  ];

  canadianLetters.forEach((canadianLetter) => {
    const canadianLetterDiv = document.createElement("div");
    canadianLetterDiv.classList.add(
      "letter-card",
      "col-span-full",
      "m-col-span-6",
      "l-col-span-4"
    );

    const canadianLetterImg = document.createElement("img");
    canadianLetterImg.src = "./images/letter-paper-1.png";
    canadianLetterImg.alt = "Letter Paper";

    const canadianLetterContentDiv = document.createElement("div");

    const canadianLetterParagraph = document.createElement("p");
    canadianLetterParagraph.textContent = canadianLetter.paragraph;

    const canadianLetterTitle = document.createElement("h5");
    canadianLetterTitle.textContent = canadianLetter.title;

    canadianLetterContentDiv.appendChild(canadianLetterTitle);
    canadianLetterContentDiv.appendChild(canadianLetterParagraph);

    canadianLetterDiv.appendChild(canadianLetterImg);
    canadianLetterDiv.appendChild(canadianLetterContentDiv);

    canadianLetterCon.appendChild(canadianLetterDiv);
  });

  // Indian Letter
  const indianLetterCon = document.querySelector(".indian-letter");

  const indianLetters = [
    {
      title: "From Muslim officer to his brother",
      paragraph:
        "Without death there is no victory, but I am alive and very well, and I tell you truly that I will return alive to India.",
    },
    {
      title: "From A Garhwali to his father",
      paragraph:
        "It is very hard to endure the bombs, father. [...] The numbers that have fallen cannot be counted.",
    },
    {
      title: "A wounded Sikh to his brother",
      paragraph:
        "There can be no confidence of life or of seeing again the dear children or of seeing you once more. [...] If I live I will write again",
    },
    {
      title: "From a wounded Sikh to his father",
      paragraph:
        "Tell my mother not to go wandering madly because her son, my brother, is dead. To be born and to die is God’s order. Some day we must die, sooner or later, and if I die here, who will remember me? It is a fine thing to die far from home. A saint said this, and, as he was a good man, it must be true.",
    },
    {
      title: "From a wounded Sikh to his brother",
      paragraph:
        "The battle is beginning and the men are dying like maggots. No one can count them - not in thousands but in hundreds of thousands of thousands. No one can count them.",
    },
    {
      title: "From a wounded Punjabi Rajput to a relative",
      paragraph:
        "Do not think that this is war. This is not war. It is the ending of the world",
    },
    {
      title: "From a South Indian Muslin to a Friend",
      paragraph:
        "If God enables me to see my people again, I shall look upon it as a new life",
    },
    {
      title: "From an unnamed soldier",
      paragraph: "What I saw in the course of the advance I shall never forget",
    },
    {
      title: "From Rifleman Amar Singh Rawat (Garhwal Rifles) to a friend",
      paragraph:
        "The scene was indescribable. If I survive I will tell you all",
    },
    {
      title: "From Jemadar Khan Muhammad to Lance Naik Sher Khan",
      paragraph:
        "In this calamity there is also the misfortune of separation from you. O young men, be careful and do not get confused: even if you die, show some bravery! One day we all have to die.",
    },
    {
      title: "From Rifleman Amar Singh Rawat to Dayaram Jhapaliyal",
      paragraph:
        "The condition of affairs in the war is like leaves falling off a tree, and no empty space remains on the ground. [...] One has to stay on top of the corpses and even sleep on them, because not an empty place remains anywhere [...] Such is the scene and one was powerless. Now I have not any sure confidence that I will see you people again; there is nothing but hopelessness",
    },
    {
      title: "From A Sikh sepoy to his brother",
      paragraph:
        "The war is a great sight at night. Here cannons are firing, there machine guns; here there are bright lights, there bombs hurl through the air. Bullets fly day and night incessantly drinking the blood of heroes",
    },
    {
      title: "Havildar Ghufran Khan to a friend",
      paragraph:
        "Our people have many lice in their clothes, and they bite terribly. They are worse than a rifle bullet. But there are no mosquitoes or other creatures which bite mankind, and no snakes or scorpions at all",
    },
    {
      title: "From Jemadar Indar Singh",
      paragraph:
        "Don’t be grieved at my death because I shall die arms in hand wearing the warrior’s clothes.  This is the most happy death that anyone can die.  I am very sorry that I have not been able to discharge my obligations towards my family because God has called me already.  Well, never mind you must forgive me.  I have abandoned to you all my worldly possessions which you must make use of without hesitation.  Don’t worry your grandparents after I am gone. ...",
    },
  ];

  indianLetters.forEach((indianLetter) => {
    const indianLetterDiv = document.createElement("div");
    indianLetterDiv.classList.add(
      "letter-card",
      "col-span-full",
      "m-col-span-6",
      "l-col-span-4"
    );

    const indianLetterImg = document.createElement("img");
    indianLetterImg.src = "./images/letter-paper-2.png";
    indianLetterImg.alt = "Letter Paper";

    const indianLetterContentDiv = document.createElement("div");

    const indianLetterParagraph = document.createElement("p");
    indianLetterParagraph.textContent = indianLetter.paragraph;

    const indianLetterTitle = document.createElement("h5");
    indianLetterTitle.textContent = indianLetter.title;

    indianLetterContentDiv.appendChild(indianLetterTitle);
    indianLetterContentDiv.appendChild(indianLetterParagraph);

    indianLetterDiv.appendChild(indianLetterImg);
    indianLetterDiv.appendChild(indianLetterContentDiv);

    indianLetterCon.appendChild(indianLetterDiv);
  });
}
