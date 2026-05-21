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
];
