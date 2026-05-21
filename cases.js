// ═══════════════════════════════════════════════════
// STILLMISSING.US — CASE DATABASE
// ═══════════════════════════════════════════════════
// To add a new case, copy the template and paste
// it before the last ]; then push to GitHub.
//
// TEMPLATE:
// {
//   id: "sm-008",                    ← next ID in sequence
//   name: "Full Name",
//   age_missing: 25,                 ← age when they went missing
//   dob: "1990-01-15",              ← date of birth YYYY-MM-DD
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
//   case_number: "NamUs MP12345",    ← official case number if exists
//   namus_url: "https://www.namus.gov/MissingPersons/Case#/12345",
//   photo: ""                        ← leave blank or "images/filename.jpg"
// },
// ═══════════════════════════════════════════════════

var cases = [
  {
    id: "sm-001",
    name: "Maria Elena Vasquez",
    age_missing: 17,
    dob: "2006-08-12",
    date_missing: "2024-11-03",
    status: "active",
    city: "San Antonio",
    state: "TX",
    height: "5'4\"",
    weight: "125 lbs",
    hair: "Black",
    eyes: "Brown",
    distinguishing: "Small scar above left eyebrow. Birthmark on right shoulder.",
    circumstances: "Maria was last seen leaving Jefferson High School on the afternoon of November 3rd, 2024. She told friends she was walking home but never arrived. Her phone last pinged near the corner of Flores Street and Commerce Street at 3:47pm. She was wearing a red hoodie and jeans. Her backpack and school ID were later found in a dumpster two blocks from school.",
    case_number: "SAPD 2024-111203",
    le_contact: "San Antonio Police Department — 210-207-7273",
    namus_url: "",
    photo: ""
  },
  {
    id: "sm-002",
    name: "James Robert Calloway",
    age_missing: 34,
    dob: "1989-03-22",
    date_missing: "2023-07-14",
    status: "cold",
    city: "Nashville",
    state: "TN",
    height: "6'1\"",
    weight: "185 lbs",
    hair: "Brown",
    eyes: "Green",
    distinguishing: "Full sleeve tattoo on right arm. Missing tip of left index finger from a childhood accident.",
    circumstances: "James left his apartment on July 14th 2023 telling his roommate he was going for a run along the Cumberland River trail. His running shoes, keys, and wallet were found on the trail near Shelby Bottoms Park. His phone was never located. He had no history of depression and no known enemies. His car remained in the apartment parking lot.",
    case_number: "MNPD 23-087441",
    le_contact: "Metro Nashville Police — 615-862-8600",
    namus_url: "",
    photo: ""
  },
  {
    id: "sm-003",
    name: "Destiny Renee Williams",
    age_missing: 14,
    dob: "2009-12-01",
    date_missing: "2024-08-22",
    status: "endangered",
    city: "Detroit",
    state: "MI",
    height: "5'2\"",
    weight: "110 lbs",
    hair: "Black",
    eyes: "Brown",
    distinguishing: "Braces on upper teeth. Small heart tattoo on left wrist.",
    circumstances: "Destiny was last seen leaving her grandmother's home on the east side of Detroit at approximately 9pm on August 22nd 2024. She told her grandmother she was walking to a friend's house two blocks away. The friend reported Destiny never arrived. Destiny had been in contact via text with an unknown individual in the days prior to her disappearance. Detroit Police consider her endangered.",
    case_number: "DPD 2024-089234",
    le_contact: "Detroit Police Department — 313-267-4600",
    namus_url: "",
    photo: ""
  },
  {
    id: "sm-004",
    name: "Thomas Alan Kowalski",
    age_missing: 67,
    dob: "1956-05-30",
    date_missing: "2024-01-08",
    status: "active",
    city: "Green Bay",
    state: "WI",
    height: "5'10\"",
    weight: "200 lbs",
    hair: "White",
    eyes: "Blue",
    distinguishing: "Wears glasses. Large scar on chin from a car accident. Walks with slight limp.",
    circumstances: "Thomas was last seen at his home by his wife on the morning of January 8th 2024. She left for work at 7am and returned at 5pm to find him gone. His car was in the driveway, his wallet and phone were on the kitchen table, and his coat was on the hook. Thomas had been recently diagnosed with early-stage dementia. Temperatures that night dropped to -12 degrees. Search parties covered a 10-mile radius without result.",
    case_number: "GBPD 2024-000891",
    le_contact: "Green Bay Police Department — 920-448-3200",
    namus_url: "",
    photo: ""
  },
  {
    id: "sm-005",
    name: "Aaliyah Simone Johnson",
    age_missing: 19,
    dob: "2004-09-17",
    date_missing: "2023-03-31",
    status: "cold",
    city: "Atlanta",
    state: "GA",
    height: "5'6\"",
    weight: "140 lbs",
    hair: "Black",
    eyes: "Brown",
    distinguishing: "Dimple on left cheek. Nose piercing. Tattoo of a rose on right ankle.",
    circumstances: "Aaliyah was a freshman at Spelman College. She was last seen leaving a party near campus at approximately 1am on March 31st 2023. Friends said she had called an rideshare but the driver reported she never entered the vehicle. Her last cell phone activity was at 1:23am. Despite extensive investigation by Atlanta PD and the FBI, no significant leads have emerged. Her case received limited media attention.",
    case_number: "APD 2023-042891",
    le_contact: "Atlanta Police Department Missing Persons Unit — 404-614-6544",
    namus_url: "",
    photo: ""
  },
  {
    id: "sm-006",
    name: "Connor Michael Hayes",
    age_missing: 22,
    dob: "2001-11-08",
    date_missing: "2024-09-15",
    status: "active",
    city: "Portland",
    state: "OR",
    height: "6'0\"",
    weight: "170 lbs",
    hair: "Red",
    eyes: "Blue",
    distinguishing: "Freckles across nose and cheeks. Small anchor tattoo behind left ear.",
    circumstances: "Connor was last seen at Powell's Books on Burnside Street on the afternoon of September 15th 2024. He was captured on store security footage browsing the travel section at 2:15pm. His roommate reported him missing when he failed to return that night. His bank account has not been accessed since September 14th. He had no known mental health concerns and had recently started a new job he was enthusiastic about.",
    case_number: "PPB 2024-234567",
    le_contact: "Portland Police Bureau — 503-823-3333",
    namus_url: "",
    photo: ""
  },
  {
    id: "sm-007",
    name: "Rosa Linda Gutierrez",
    age_missing: 42,
    dob: "1981-02-14",
    date_missing: "2022-06-19",
    status: "cold",
    city: "Albuquerque",
    state: "NM",
    height: "5'3\"",
    weight: "135 lbs",
    hair: "Black",
    eyes: "Brown",
    distinguishing: "Gold cross necklace she never removed. Tattoo of her children's names on inner left wrist.",
    circumstances: "Rosa was a mother of three who worked the night shift at Presbyterian Hospital. She was last seen by coworkers at the end of her shift at 7am on June 19th 2022. She never picked up her children from school that day. Her car was found parked at a gas station on Central Avenue with her purse and phone inside. Her case has received minimal media coverage despite being open for over two years.",
    case_number: "APD 2022-091234",
    le_contact: "Albuquerque Police Department — 505-242-COPS",
    namus_url: "",
    photo: ""
  }
];
