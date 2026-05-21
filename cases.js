// ═══════════════════════════════════════════════════
// STILLMISSING.US — CASE DATABASE
// ═══════════════════════════════════════════════════
// To add a new case, copy the template and paste
// it before the last ]; then push to GitHub.
//
// TEMPLATE:
// {
//   id: "sm-002",                    ← next ID in sequence
//   name: "Full Name",
//   age_missing: 25,                 ← age when they went missing
//   dob: "1990-01-15",              ← date of birth YYYY-MM-DD (leave blank if unknown)
//   date_missing: "2024-03-10",     ← date last seen YYYY-MM-DD
//   status: "active",               // "active" / "endangered" / "cold" / "found-safe" / "found-deceased"
//   city: "Chicago",
//   state: "IL",                    ← 2-letter state code
//   height: "5'8\"",
//   weight: "160 lbs",
//   hair: "Brown",
//   eyes: "Blue",
//   distinguishing: "Tattoo of eagle on left forearm",
//   circumstances: "Full description of disappearance.",
//   case_number: "",                 ← official case number if exists
//   namus_url: "",                   ← NamUs URL if listed
//   photo: ""                        ← leave blank or "images/filename.jpg"
// },
// ═══════════════════════════════════════════════════

var cases = [
  {
    id: "sm-001",
    name: "Shayln Shantel Harvey",
    age_missing: 16,
    dob: "",
    date_missing: "2026-05-02",
    status: "found-deceased",
    city: "Big Chimney",
    state: "WV",
    height: "5'3\"",
    weight: "160 lbs",
    hair: "Brown",
    eyes: "Brown",
    distinguishing: "Wrist tattoo reading '4-19-19 Lena B.' Necklace with letter 'J' charm. Last seen wearing black sweatpants and a blue shirt. May have left in a blue Dodge Ram pickup truck from the early 2000s.",
    circumstances: "Shayln was last seen in the Big Chimney area of Kanawha County, WV, on Saturday, May 2, 2026. The Kanawha County Sheriff's Office requested public assistance in locating her. She was 16 years old at the time of her disappearance.",
    case_number: "",
    namus_url: "",
    photo: "images/shalyn-harvey.png"
  },
{
    id: "sm-002",
    name: "Michael Allen Dillard",
    age_missing: 15,
    dob: "2002-12-13",
    date_missing: "2018-01-11",
    status: "active",
    city: "Calvin",
    state: "WV",
    height: "5'5\"",
    weight: "133 lbs",
    hair: "Brown",
    eyes: "Hazel",
    distinguishing: "Scars on arms. Was not wearing warm clothing at time of disappearance. Did not have his phone or glasses with him.",
    circumstances: "On January 11, 2018, 15-year-old Michael disappeared from his family home in Calvin, WV at approximately 4:30pm while helping his mother carry wood pellets from the car. Without a word, he ran into the woods behind the house and never returned. Temperatures that night dropped to around 20 degrees with rain and fog. Michael had no phone, no glasses, and no warm clothing — only two dollars in his pocket. A large search involving a helicopter, bloodhounds, and dive teams found only his jacket approximately 300 yards from his home, discovered about a week and a half later. Michael had been released from a mental health treatment center just three weeks prior. In October 2024, state police investigated a tip regarding possible remains but the lead was ruled not credible. The case remains active.",
    case_number: "NamUs 1318364",
    namus_url: "https://www.namus.gov/MissingPersons/Case#/1318364",
    photo: "images/michaelallendillard.jpg"
  },
  {
    id: "sm-003",
    name: "Charnayjia Peterkin",
    age_missing: 15,
    dob: "",
    date_missing: "2025-12-13",
    status: "found-safe",
    city: "Cross Lanes",
    state: "WV",
    height: "",
    weight: "",
    hair: "Black",
    eyes: "Brown",
    distinguishing: "Last seen wearing a cream-colored top and bottom sweatsuit. May have left in a boxy blue older model sedan.",
    circumstances: "Charnayjia, 15, went missing on December 13, 2025, from the Cross Lanes area of Kanawha County after leaving WVDHHR custody. She was located by the Kanawha County Sheriff's Office on March 11, 2026.",
    case_number: "NamUs 2071656",
    namus_url: "https://www.namus.gov/MissingPersons/Case#/2071656",
    photo: "images/Charnayija-Peterkin.jpg"
  },
];
