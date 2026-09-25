/* ============================= CONTENT ============================= */
const CONTENT = {
en: {
  appName:"Post-operative care for ACL reconstruction",
  dayLabel:"days since surgery", untilLabel:"days until surgery", editDate:"Edit your surgery details",
  aboutAclTitle:"About Your ACL Injury",
  aboutAclIntro:"A quick look at what actually happened inside the knee, and roughly what recovery looks like over time.",
  aboutAclAnatomyCaption:"The ACL runs through the centre of the knee and tears under a sudden twisting or pivoting force.",
  aboutAclCareCaption:"Recovery moves in stages — early rest and support, then walking unaided, then a gradual return to running.",
  aboutAclAttribution:"Illustration: Assoc. Prof. Sorawut Thamyongkit, M.D. · from Easyortho",
  homeDisclaimer:"This app is a general guide only. Please confirm with your physician before starting any activity or exercise.",
  roadmapTitle:"Your Recovery Roadmap", todayTitle:"Today's Reminders",
  goalsTitle:"Goals After Surgery",
  goals:[
    ["Settle the swelling","Get the knee fully straight","Walk without a limp"],
    ["Get the knee fully straight","Wake up your thigh muscle","Control pain and swelling"],
    ["Walk without a limp","Bend the knee further","Start loading the leg again"],
    ["Reach full range of motion","Build single-leg strength","Protect the graft while you load it"],
    ["Pass the running checks","Run in a straight line","Land softly and in control"],
    ["Restore power and speed","Change direction with confidence","Complete your sport programme"],
    ["Keep training twice a week","Protect against re-injury","Stay confident in the knee"]
  ],
  surgeonLabel:"Your surgeon",
  resetBtn:"Reset App Data",
  resetConfirm:"This will erase your surgery details, exercise progress, measurements, and recovery surveys on this device. This can't be undone. Continue?",
  deviceStorageNote:"Your details are stored only on this device. Using a shared or public device? Clear them below when you're done.",
  hnPrefix:"HN: ",
  tabHome:"Home", tabCare:"Care", tabExercises:"Exercises", tabProgress:"Progress", tabResources:"Resources", tabSOS:"Alert",
  sosTitle:"When to Get Help", sosSub:"If you notice any of the signs below, contact your care team right away.",
  emergencyNote:"For a life-threatening emergency, call 1669 (Thailand emergency medical services) immediately.",
  emergencyCallBtn:"Emergency — Call 1669",
  appDisclaimer:"This app provides general guidance only and does not replace advice from your surgeon or physiotherapist. Always follow the instructions given by your care team.",
  onboardTitle:"Welcome — let's set up your recovery",
  onboardLead:"This helps the app show you the right recovery phase, the right exercises, and any extra protection your surgery needs.",
  onboardDateLabel:"Date of your knee surgery",
  onboardHNLabel:"Hospital Number (HN)",
  onboardHNHint:"Helps hospital staff find your records quickly.",
  onboardGraftLabel:"Which graft was used?",
  onboardGraftHint:"If you are not sure, choose \"Not sure\" and ask at your next visit.",
  graftOptions:{ unsure:"Not sure / as advised", hamstring:"Hamstring tendon", bpb:"Patellar tendon (BTB)", quad:"Quadriceps tendon", allograft:"Donor graft (allograft)" },
  onboardMeniscusLabel:"Did you also have a meniscus repair?",
  meniscusOptions:{ none:"No — ACL only", yes:"Yes — my meniscus was repaired" },
  onboardSave:"Save & Continue",
  consentTitle:"Your Privacy",
  consentText:"By continuing, you agree that your HN, surgery date, exercise progress, and recovery measurements will be recorded and shared with your care team to support your recovery, in line with Thailand's Personal Data Protection Act (PDPA).",
  consentCheckboxLabel:"I have read and agree to the above.",
  consentValidation:"Please confirm to continue.",
  dateRequiredValidation:"Please enter your surgery date to continue.",
  hnFormatValidation:"Please check your HN — use only letters, numbers, - or /, up to 20 characters.",
  dateRangeValidation:"Please check that date — it should be within the last 5 years and no more than a year from now.",
  addHomeTitle:"Add to Home Screen?",
  addHomeBody:"Add this app to your home screen for one-tap access anytime, just like a regular app.",
  addHomeAccept:"Add to Home Screen",
  addHomeDecline:"Not Now",
  addHomeGotIt:"Got it",
  addHomeIOSSteps:"Tap the Share icon in your browser, then choose \"Add to Home Screen.\"",
  addHomeGenericSteps:"Look for \"Add to Home Screen\" or \"Install App\" in your browser's menu.",
  noDateChip:"Set your surgery date",
  noDateDesc:"Tap \"Edit your surgery details\" above so we can show your current recovery phase.",
  callBtnPrefix:"For appointment — Call ",

  /* ---- Phases ---- */
  phaseNames:["Get Ready","Protect","Move","Build","Run","Train","Stay Strong"],
  phaseShort:["Prep","Protect","Move","Build","Run","Train","Maintain"],
  phaseWeeks:["Before surgery","Weeks 0–2","Weeks 2–6","Weeks 6–12","Months 3–5","Months 5–9+","After return to sport"],
  phaseTitles:[
    "Preoperative Preparation","Protect & Recover","Move & Activate","Build Strength","Run & Control","Train for Sport","Long-term Knee Health"
  ],
  phaseDesc:[
    "Settle the swelling, get the knee fully straight, and wake up your thigh muscle before surgery.",
    "Control pain and swelling, get the knee fully straight, and start switching the quadriceps back on.",
    "Normalise your walking, restore bending, and begin loading the leg again.",
    "Full range of motion, single-leg control, and real strength — while the graft is remodelling.",
    "Add running, jumping and landing once your knee passes the running checks.",
    "Restore power, change of direction, and confidence, with graded exposure to your sport.",
    "Keep training. Re-injury risk stays higher for the first two years after returning."
  ],
  completeChip:"1-Year Recovery Timeline Complete",
  completeDesc:"You've reached the end of the guided timeline. Keep up your maintenance and prevention work — see the Stay Strong phase.",

  todayReminders:[
    [ "Ice and elevate to settle the swelling before surgery.",
      "Practise straightening the knee fully — compare it with your other leg.",
      "Work on walking without a limp.",
      "Arrange help at home and bring your HN and ID to hospital." ],
    [ "Getting the knee fully straight is the single most important goal right now.",
      "Never put a pillow under your knee — put it under your heel instead.",
      "Ice and elevate several times a day.",
      "Use your crutches and brace exactly as instructed. No twisting or pivoting." ],
    [ "Keep working on full straightening every day.",
      "Aim to walk smoothly without a limp before you leave the crutches behind.",
      "If the knee is more swollen the morning after exercise, you did too much.",
      "Check the Exercises tab for today's movements." ],
    [ "Your graft is remodelling — load it in straight lines, not with twisting.",
      "Swelling and warmth after training are signals to back off, not to push on.",
      "Build single-leg strength — this is what running will be built on.",
      "No pivoting, cutting or contact sport yet." ],
    [ "Do not start running because a date arrived — check the Progress tab first.",
      "Land softly, with the knee over the foot, not falling inwards.",
      "Keep your heavy strength work going alongside the running.",
      "Increase one thing at a time: distance, or speed, or direction changes." ],
    [ "Return to sport is a staircase, not a door — go one level at a time.",
      "Confidence matters as much as strength. Tell your team if the knee feels unreliable.",
      "Keep testing both legs, not just the operated one.",
      "Check the Progress tab before moving to contact or competition." ],
    [ "Keep your strength work going at least twice a week.",
      "Continue your landing and change-of-direction technique work.",
      "Warm up with an injury-prevention routine before every session.",
      "New swelling, giving way, or locking means get it checked." ]
  ],

  exerciseCaution:[
    "This is preparation. A knee that is fully straight, barely swollen, and walking without a limp gives you a much better starting point after surgery.",
    "Full straightening comes before everything else. Do not place a pillow under the knee. No twisting, pivoting or kneeling.",
    "Increase load gradually. Swelling that is worse the next morning means the last session was too much.",
    "Your graft is at its biologically weakest around this time. Load it hard in straight lines — but no pivoting, cutting or contact.",
    "Running is unlocked by your knee, not by the calendar. Check the Progress tab before you start.",
    "Progress through sport exposure one level at a time: individual drills, then non-contact practice, then full practice, then competition.",
    "Passing a test does not make the knee invincible. Keep training, and keep your prevention routine."
  ],

  exercises:[
    /* 0 — Before surgery */
    [ {id:"pre_1", name:"Quadriceps setting", desc:"Tighten the thigh and press the back of the knee down into the bed. Hold 5 seconds."},
      {id:"pre_2", name:"Heel prop for full straightening", desc:"Rest the heel on a rolled towel with nothing under the knee, and let it hang straight."},
      {id:"pre_3", name:"Heel slides", desc:"Slide the heel towards your buttock to bend the knee, then slide it back out."},
      {id:"pre_4", name:"Straight-leg raise", desc:"Tighten the thigh, keep the knee locked straight, and lift the leg."},
      {id:"pre_5", name:"Walking practice without a limp", desc:"Short, even steps. Aim for a smooth, symmetrical walking pattern before surgery."},
      {id:"pre_6", name:"Practise using your crutches", desc:"Try stairs and getting in and out of a chair before you actually need to."},
      {id:"pre_7", name:"Prepare home and arrange help", desc:"Clear walkways, set essentials within reach, and arrange help for the first few days."} ],
    /* 1 — Weeks 0-2 */
    [ {id:"p1_1", name:"Heel prop (passive straightening)", desc:"Heel on a support, nothing under the knee, 10 minutes several times a day. This is your priority exercise."},
      {id:"p1_2", name:"Quadriceps setting", desc:"Tighten the thigh and press the knee flat. Watch the kneecap slide upwards."},
      {id:"p1_3", name:"Ankle pumps", desc:"Point and flex the foot regularly through the day to keep the circulation moving."},
      {id:"p1_4", name:"Heel slides", desc:"Bend the knee gently within your allowed range, then straighten fully.", req:["flex"]},
      {id:"p1_5", name:"Straight-leg raise", desc:"Only once you can lift without the knee sagging. Keep the knee locked straight."},
      {id:"p1_6", name:"Kneecap mobilisation", desc:"Move the kneecap gently up, down and sideways with your fingers, knee relaxed and straight."},
      {id:"p1_7", name:"Walking practice", desc:"Follow your weight-bearing instruction, take even steps, and let the knee straighten fully as you step."},
      {id:"p1_8", name:"Ice and elevate", desc:"Ice 15–20 minutes, leg raised above the heart. Several times a day while swollen."} ],
    /* 2 — Weeks 2-6 */
    [ {id:"p2_1", name:"Prone hang", desc:"Lie face down with the knee off the edge of the bed and let gravity straighten it."},
      {id:"p2_2", name:"Stationary bike", desc:"Start with partial turns, then full revolutions with the seat high and no resistance.", req:["flex110"]},
      {id:"p2_3", name:"Mini squats (0–60°)", desc:"Shallow squat with even weight through both legs, knees tracking over the toes.", req:["fwb"]},
      {id:"p2_4", name:"Terminal knee extension with band", desc:"Band behind the knee, push the knee back into full straightening.", req:["fwb"]},
      {id:"p2_5", name:"Step-ups (low step)", desc:"Step up slowly and control the way down. Keep the knee from falling inwards.", req:["fwb"]},
      {id:"p2_6", name:"Calf raises (both legs)", desc:"Rise onto the toes and lower slowly."},
      {id:"p2_7", name:"Balance work", desc:"Double-leg balance, then progress to single-leg standing as control improves.", req:["fwb"]},
      {id:"p2_8", name:"Hamstring curls", desc:"Lying on your front, bend the knee against light resistance.", req:["ham"]} ],
    /* 3 — Weeks 6-12 */
    [ {id:"p3_1", name:"Single-leg press", desc:"Press through the operated leg alone, controlled, with no locking out under load.", req:["fwb"]},
      {id:"p3_2", name:"Split squats", desc:"Split stance, lower straight down, keep the front knee over the foot.", req:["fwb","flex110"]},
      {id:"p3_3", name:"Step-downs", desc:"Stand on the operated leg and lower slowly off a step. Control matters more than depth.", req:["fwb"]},
      {id:"p3_4", name:"Knee extension (90° to 40°)", desc:"Seated knee extension through a limited arc, avoiding the last 40 degrees for now.", req:["okc"]},
      {id:"p3_5", name:"Hamstring bridges", desc:"Heels on a bench or ball, lift the hips and hold. Progress to single-leg.", req:["ham"]},
      {id:"p3_6", name:"Single-leg calf raises", desc:"Rise and lower on one leg, holding a support for balance."},
      {id:"p3_7", name:"Balance with perturbation", desc:"Single-leg stand while catching a ball or on an unstable surface.", req:["fwb"]},
      {id:"p3_8", name:"Bike, swimming or elliptical", desc:"Low-impact conditioning to build fitness while the graft remodels."} ],
    /* 4 — Months 3-5 */
    [ {id:"p4_1", name:"Walk–jog progression", desc:"Alternate walking and jogging in a straight line on a flat, even surface.", req:["run"]},
      {id:"p4_2", name:"Continuous straight-line running", desc:"Build up time before you build up speed.", req:["run"]},
      {id:"p4_3", name:"Double-leg jump and land", desc:"Jump and land softly on both feet, absorbing through hips and knees.", req:["fwb"]},
      {id:"p4_4", name:"Single-leg hop with controlled landing", desc:"Hop and hold the landing for three seconds without wobbling.", req:["run"]},
      {id:"p4_5", name:"Heavy squats and leg press", desc:"Progressive heavy strength work through a comfortable range.", req:["fwb","flex110"]},
      {id:"p4_6", name:"Deceleration drills", desc:"Run and stop under control, absorbing the stop through the whole leg.", req:["run"]},
      {id:"p4_7", name:"Nordic hamstring curls", desc:"Lower slowly from kneeling with the ankles held. Build up gradually.", req:["ham","kneel"]} ],
    /* 5 — Months 5-9+ */
    [ {id:"p5_1", name:"Plyometric progression", desc:"Bounding, hopping and repeated jumps with quiet, controlled landings.", req:["run"]},
      {id:"p5_2", name:"Sprint mechanics and acceleration", desc:"Build up to near-maximum straight-line speed.", req:["run"]},
      {id:"p5_3", name:"Change-of-direction drills", desc:"Planned direction changes, starting wide and gradually getting sharper.", req:["pivot"]},
      {id:"p5_4", name:"Cutting and agility drills", desc:"Reactive agility where you respond to a signal rather than a planned pattern.", req:["pivot"]},
      {id:"p5_5", name:"Sport-specific individual drills", desc:"The specific movements of your sport, practised alone at controlled intensity.", req:["pivot"]},
      {id:"p5_6", name:"Non-contact team practice", desc:"Train with the team, but stay out of contact and contested situations.", req:["pivot"]},
      {id:"p5_7", name:"Controlled full practice", desc:"Full practice including contact, before any competitive match.", req:["pivot"]} ],
    /* 6 — Stay Strong */
    [ {id:"p6_1", name:"Strength maintenance, twice weekly", desc:"Keep squatting, pressing and hinging. Strength lost is re-injury risk gained."},
      {id:"p6_2", name:"Single-leg control work", desc:"Single-leg squats, step-downs and balance. Check both legs, not just the operated one."},
      {id:"p6_3", name:"Jump and landing technique", desc:"Practise landing softly with the knee over the foot rather than falling inwards."},
      {id:"p6_4", name:"Nordic hamstring / eccentric work", desc:"Strong hamstrings protect the graft. Keep this in your programme."},
      {id:"p6_5", name:"Injury-prevention warm-up", desc:"Use a structured neuromuscular warm-up before every training session and match."},
      {id:"p6_6", name:"Sport conditioning", desc:"Keep your fitness at the level your sport actually demands."} ]
  ],
  progressLabel:(done,total)=> done+" of "+total+" done today",
  exercisePhaseReadonly:"You're viewing a different phase for reference. Exercises are only tracked in your current phase.",

  /* ---- Restrictions ---- */
  restrictWB:"Weight on the operated leg",
  restrictFlex:"Bending limit",
  restrictBrace:"Brace",
  restrictPivot:"Twisting and pivoting",
  restrictKneel:"Kneeling",
  restrictHam:"Resisted hamstring work",
  wbValues:{ NWB:"No weight — crutches only", TTWB:"Toe-touch only", PWB:"Partial weight", FWB:"Full weight as comfortable" },
  braceValue:"Wear as instructed",
  pivotValue:"Not yet",
  kneelValue:"Avoid direct kneeling",
  hamValue:"Delayed for now",
  untilWeek:(w)=> "until week "+w,
  untilCleared:"until your surgeon clears it",
  lockReason:{
    fwb:"Unlocks when you are allowed full weight on the leg.",
    flex:"Stay within your current bending limit.",
    flex110:"Unlocks when you are allowed to bend past 110°.",
    ham:"Delayed while your hamstring graft site heals.",
    kneel:"Avoid direct kneeling while the graft site is tender.",
    okc:"Delayed while your graft site heals.",
    pivot:"Twisting and pivoting are not allowed yet.",
    run:"Unlocks when you pass the running checks in the Progress tab."
  },

  /* ---- Progress / readiness ---- */
  progressTitle:"Am I Ready?",
  progressIntro:"The calendar tells us when to check. Your knee tells us when to progress.",
  progressDisclaimer:"These checks support the conversation with your surgeon and physiotherapist. They do not replace their assessment, and passing them is not by itself permission to return to sport.",

  /* ---- IKDC Subjective Knee Evaluation ---- */
  ikdcTitle:"Knee Recovery Survey",
  ikdcIntro:"A short questionnaire your care team uses to track your knee's recovery. It's asked at 2, 6, 12, 25 and 52 weeks after surgery.",
  ikdcOverdueNote:"This survey is overdue — please complete it when you can.",
  ikdcOpenBtn:"Start Survey",
  ikdcSubmitBtn:"Submit Survey",
  ikdcCancelBtn:"Cancel",
  ikdcHistoryTitle:"Your Knee Recovery Score Over Time",
  ikdcValidation:"Please answer every question before submitting.",
  ikdcSyncPending:"Saved on this device — sending to your care team…",
  ikdcSyncConfirmed:"Received by your care team",
  ikdcSyncRetrying:"Couldn't confirm yet — will keep trying",
  ikdcSyncNeedsHn:"Saved on this device only. Add your HN in \"Edit your surgery details\" to send it to your care team.",
  ikdcTimepointLabels:{ w2:"2-week", w6:"6-week", w12:"12-week", w25:"25-week", w52:"52-week (1-year)" },
  ikdcSectionSymptoms:"Symptoms",
  ikdcSectionSports:"Sports Activity",
  ikdcSectionFunction:"Function",
  ikdcInstructionActivity:"Grade your symptoms at the highest level of activity you could function at, even if you are not actually performing activities at this level.",
  ikdcInstructionQ9:"For each activity below, indicate the degree of difficulty you have experienced in the last 4 weeks because of your knee.",
  ikdcActivityOptions:{
    hi4:"Very strenuous activities like jumping or pivoting, as in basketball or soccer",
    hi3:"Strenuous activities like heavy physical work, skiing or tennis",
    hi2:"Moderate activities like moderate physical work, running or jogging",
    hi1:"Light activities like walking, housework or yard work"
  },
  ikdcActivityZero:{
    q1:"Unable to perform any of the above activities due to knee pain",
    q5:"Unable to perform any of the above activities due to knee swelling",
    q7:"Unable to perform any of the above activities due to your knee giving way",
    q8:"Unable to perform any of the above activities due to your knee"
  },
  ikdcStiffOptions:["Not at all","Mildly","Moderately","Very","Extremely"],
  ikdcDiffOptions:["No difficulty at all","Minimal difficulty","Moderate difficulty","Extreme difficulty","Unable to do"],
  ikdcLockOptions:["No","Yes"],
  ikdcVasLabels:{
    q2:["Constant pain","Never"],
    q3:["Worst pain imaginable","No pain"],
    q10a:["Unable to perform daily activities","Normal, excellent function"],
    q10b:["Unable to perform daily activities","Normal, excellent function"]
  },
  ikdcLabels:{
    q1:"What is the highest level of activity you can perform without significant knee pain?",
    q2:"During the past 4 weeks, or since your injury, how often have you had pain?",
    q3:"If you have pain, how severe is it?",
    q4:"During the past 4 weeks, or since your injury, how stiff or swollen was your knee?",
    q5:"What is the highest level of activity you can perform without significant swelling in your knee?",
    q6:"During the past 4 weeks, or since your injury, did your knee lock or catch?",
    q7:"What is the highest level of activity you can perform without significant giving way in your knee?",
    q8:"What is the highest level of activity you can participate in on a regular basis?",
    q9a:"Going up stairs",
    q9b:"Going down stairs",
    q9c:"Kneeling on the front of your knee",
    q9d:"Squatting",
    q9e:"Sitting with your knee bent",
    q9f:"Rising from a chair",
    q9g:"Running straight ahead",
    q9h:"Jumping and landing on your involved leg",
    q9i:"Stopping and starting quickly",
    q10a:"How would you rate the current function of your knee?",
    q10b:"How would you rate the function of your knee prior to your injury?"
  },

  runGateTitle:"Ready to run?",
  runGateSub:"Running is usually considered from about 3 months, but only once these are met.",
  rtsGateTitle:"Ready to return to sport?",
  rtsGateSub:"Meeting these is the start of a graded return, not a green light for full competition.",
  gatePass:"All checks met",
  gateFail:"Not yet",
  gateUnknown:"Some measurements are missing",
  gateNotYet:"This check opens later in your recovery.",
  crit:{
    ext:"Knee straightens fully",
    flex:"Bending at least 125°",
    quad80:"Thigh strength at least 80% of the other leg",
    quad90:"Thigh strength at least 90% of the other leg",
    ham80:"Hamstring strength at least 80% of the other leg",
    ham90:"Hamstring strength at least 90% of the other leg",
    hop90:"Hop tests at least 90% of the other leg",
    noRestrict:"No weight-bearing or bending restrictions left",
    week12:"At least 12 weeks since surgery",
    month9:"At least 9 months since surgery",
    runCleared:"Cleared for running by your care team"
  },
  metrics:{
    extDeficit:"How far short of fully straight?",
    flexion:"How far can you bend the knee?",
    quadLSI:"Thigh strength vs your other leg",
    hamLSI:"Hamstring strength vs your other leg",
    hopLSI:"Hop distance vs your other leg",
    noLimp:"Can you walk without a limp?",
    offCrutches:"Are you off your crutches?",
    runCleared:"Cleared for running by your care team"
  },
  metricUnits:{ extDeficit:"°", flexion:"°", quadLSI:"%", hamLSI:"%", hopLSI:"%" },
  metricHints:{
    extDeficit:"Lie on your back with the heel propped. 0 means it straightens as far as the other leg.",
    flexion:"Degrees of bend. Your other knee is usually around 135°.",
    quadLSI:"Measured at your clinic. The other leg also gets weaker after surgery, so this can read higher than your true strength.",
    hamLSI:"Measured at your clinic.",
    hopLSI:"Measured at your clinic."
  },
  yes:"Yes", no:"No", notSet:"—",
  metricsIntro:"Track your own numbers here. Ask your physiotherapist for the strength and hop figures at each visit, then enter them so you can see the trend.",
  metricAdd:"Add",
  metricPlaceholder:"Value",
  metricNoReadings:"No readings yet.",
  metricNeedMore:"Add one more reading to see the trend.",
  metricReadings:(n)=> n===1 ? "1 reading" : n+" readings",
  metricUndo:"Remove last reading",
  metricTarget:(v)=> "target "+v,
  metricToday:"Saved for today",

  /* ---- Understanding Your Healing (Home tab) ---- */
  healingTitle:"Understanding Your Healing",
  healingItems:[
    "Your new graft is strongest on the day it is fixed. Over the following months your body remodels it into a living ligament, and during that process it passes through a weaker phase.",
    "This is why the middle months feel deceptive: you feel well, the swelling has settled, and the graft is still maturing underneath.",
    "It is also why straight-line loading is encouraged early, while twisting, pivoting and contact are held back much longer.",
    "Muscle soreness after training is expected. Sharp pain, a giving-way sensation, or new swelling are not — report them.",
    "The knee that lets you down twice is usually the one that stopped training after returning to sport."
  ],

  /* ---- Care ---- */
  care:[
    { icon:"🏥", title:"Before Your Surgery", items:[
      "Follow the fasting and medication instructions from your surgical team, and bring your HN and ID.",
      "Go into surgery with the knee as straight, as un-swollen, and as strong as you can get it — this is one of the strongest predictors of a smooth recovery.",
      "Arrange help at home for the first few days, and clear a path from your bed to the bathroom."
    ]},
    { icon:"📏", title:"Getting Your Knee Fully Straight", items:[
      "This is the single most important thing in the first weeks. A knee that does not fully straighten leads to a limp, thigh weakness, and pain at the front of the knee.",
      "Rest your heel on a rolled towel with nothing under the knee, and let the knee hang straight for 10 minutes at a time, several times a day.",
      "Never sleep or rest with a pillow under the knee. Put the pillow under your heel instead.",
      "Compare with your other leg regularly — that is your target, not just 'nearly straight'."
    ]},
    { icon:"🩼", title:"Crutches & Weight Bearing", items:[
      "Follow the weight-bearing instruction shown on your Home screen. If you had a meniscus repair, this may be more restrictive than for an ACL alone.",
      "Take even, unhurried steps and let the knee straighten fully as your heel lands.",
      "Leave the crutches behind only when you can walk without a limp, not simply when the pain settles.",
      "On stairs: good leg up first, operated leg down first."
    ]},
    { icon:"🦵", title:"Your Brace", items:[
      "Wear the brace exactly as instructed, including the setting your surgeon chose. Do not change the range settings yourself.",
      "Check the skin under the straps daily for redness or rubbing.",
      "If the brace slips down repeatedly, it needs adjusting — ask your team rather than tightening it painfully."
    ]},
    { icon:"🧊", title:"Swelling & Ice", items:[
      "Ice for 15–20 minutes with the leg raised above the level of your heart, several times a day in the first weeks.",
      "Swelling inside the knee switches the thigh muscle off. Controlling it is not just about comfort — it is how you protect your strength.",
      "A knee that is more swollen the morning after exercise is telling you the last session was too much."
    ]},
    { icon:"🩹", title:"Wound Care", items:[
      "Keep the dressing clean, dry and in place until your follow-up visit unless told otherwise.",
      "A small amount of blood-tinged ooze in the first 24–48 hours is normal.",
      "Do not put lotion, ointment or powder near the wounds unless instructed."
    ]},
    { icon:"🚿", title:"Showering", items:[
      "Showering is usually allowed, but do not let water run directly onto the wounds until they are sealed.",
      "Avoid baths, pools and the sea until your team confirms the wounds are fully healed.",
      "Stitches are usually removed at 10–14 days."
    ]},
    { icon:"🛏️", title:"Positioning & Sleep", items:[
      "Sleep with the knee straight, with the pillow under your heel and not under your knee.",
      "Some people are more comfortable with the operated leg slightly raised on a folded blanket — as long as the knee itself stays straight.",
      "Move your ankle regularly and change position through the night to keep the circulation moving."
    ]},
    { icon:"🩸", title:"Preventing Blood Clots", items:[
      "Do ankle pumps regularly through the day, and get up to move little and often rather than sitting for hours."
    ]},
    { icon:"🚗", title:"Driving & Activity", items:[
      "Do not drive while on crutches, in a locked brace, or taking prescription pain medication.",
      "Most people return to desk work within a few weeks, and to physical work considerably later — ask your surgeon for your own timeline."
    ]},
    { icon:"🚭", title:"Smoking & Nicotine", items:[
      "Avoid smoking and nicotine products. They reduce blood supply to the healing graft."
    ]},
    { icon:"🥩", title:"If You Also Had a Meniscus Repair", items:[
      "A repaired meniscus needs longer protection of deep knee bending than an ACL reconstruction alone — usually 6 weeks.",
      "Deep squatting, deep bending under load, and twisting are usually held back longer.",
      "Where the ACL programme and your meniscus instructions disagree, follow the more protective one — and ask your surgeon.",
      "Repeated catching, locking, or a knee that will not fully straighten needs to be assessed rather than pushed through."
    ]},
    { icon:"📅", title:"Follow-up Visits", items:[
      "Usually around 10–14 days for wound review, then at intervals your surgeon will set.",
      "Bring the app with you — your recovery surveys and measurements are useful at each visit.",
      "Bring any questions about work, driving, travel or sport with you rather than guessing between visits."
    ]}
  ],

  normalNote:"Normal in the first days: moderate swelling, bruising that spreads down the calf or into the thigh, a mild temperature under 38.0°C (100.4°F), and numbness around the wounds or the outer part of the shin.",
  emergencyLabel:"Emergency — Contact Clinic or ER Immediately",
  emergencyFlags:[
    "Calf pain, tightness or swelling that is getting worse",
    "Chest pain, sudden breathlessness, or coughing up blood — seek emergency care immediately",
    "Fever above 38.3°C (101°F), persistent chills, or feeling generally unwell",
    "Spreading redness, warmth or red streaks around the wounds",
    "Pus-like, foul-smelling or cloudy discharge from a wound",
    "The knee suddenly locks and will not straighten, or gives way with sudden severe pain",
    "Severe, unrelenting pain that is not helped by your pain medication and rest"
  ],

  resourcesTitle:"Additional Resources",
  resourcesIntro:"A few outside resources you may find helpful during your recovery.",
  resourcesEmpty:"No resources have been added yet.",
  resources:[
    { icon:"🌐", type:"website", title:"Rue Ortho — Our Clinic Website",
      desc:"Visit our clinic website for more information and how to reach us.",
      source:"rueortho.vercel.app",
      url:"https://rueortho.vercel.app" },
    { icon:"🛡️", type:"article", title:"Exercises to prevent ACL injury",
      desc:"A warm-up, strengthening and cool-down programme built around stopping the knee collapsing inwards — band squats, band hamstring curls, lunges, Y-balance and jump landing. Good material for your Stay Strong phase.",
      source:"Faculty of Physical Therapy, Mahidol University",
      url:"https://pt.mahidol.ac.th/ptcenter/knowledge-article/prevention-acl-injury/" },
    { icon:"🦵", type:"article", title:"Understanding ACL Injury",
      desc:"How the ACL tears, how it's diagnosed, and the treatment options — a plain-language explainer to read alongside this app.",
      source:"Easyortho — Assoc. Prof. Sorawut Thamyongkit, M.D.",
      url:"https://rueortho.vercel.app/en/conditions/acl-injury/" },
    { icon:"🏃", type:"article", title:"Knee Rehabilitation Overview",
      desc:"The general principles behind knee rehab programmes — useful background on why this app's phases and exercises are structured the way they are.",
      source:"Easyortho — Assoc. Prof. Sorawut Thamyongkit, M.D.",
      url:"https://rueortho.vercel.app/en/rehabilitation/knee-rehab/" }
  ],
},
th: {
  appName:"การดูแลหลังผ่าตัดสร้างเอ็นไขว้หน้า",
  dayLabel:"วันหลังผ่าตัด", untilLabel:"วันก่อนถึงวันผ่าตัด", editDate:"แก้ไขข้อมูลการผ่าตัดของท่าน",
  aboutAclTitle:"รู้จักการบาดเจ็บเอ็นไขว้หน้าเข่าของท่าน",
  aboutAclIntro:"ทำความเข้าใจคร่าว ๆ ว่าเกิดอะไรขึ้นภายในเข่า และเส้นทางการฟื้นตัวโดยรวมเป็นอย่างไร",
  aboutAclAnatomyCaption:"เอ็นไขว้หน้าอยู่กลางข้อเข่า และมักฉีกขาดจากแรงบิดหรือหมุนเข่าอย่างกะทันหัน",
  aboutAclCareCaption:"การฟื้นตัวเป็นไปทีละขั้น เริ่มจากพักและใช้อุปกรณ์ช่วยพยุง ตามด้วยเดินได้เอง และค่อย ๆ กลับไปวิ่งในที่สุด",
  aboutAclAttribution:"ภาพ: รศ. นพ. สรวุฒิ ธรรมยงค์กิจ · จาก Easyortho",
  homeDisclaimer:"แอปนี้เป็นเพียงคำแนะนำทั่วไป กรุณาปรึกษาแพทย์ของท่านก่อนเริ่มกิจกรรมหรือการออกกำลังกายใด ๆ",
  roadmapTitle:"เส้นทางการฟื้นตัวของท่าน", todayTitle:"สิ่งที่ควรทำวันนี้",
  goalsTitle:"เป้าหมายหลังผ่าตัด",
  goals:[
    ["ลดอาการบวม","เหยียดเข่าให้สุด","เดินโดยไม่กะเผลก"],
    ["เหยียดเข่าให้สุด","กระตุ้นกล้ามเนื้อต้นขาด้านหน้า","ควบคุมความปวดและอาการบวม"],
    ["เดินโดยไม่กะเผลก","งอเข่าให้ได้มากขึ้น","เริ่มลงน้ำหนักขาอีกครั้ง"],
    ["ให้พิสัยการเคลื่อนไหวกลับมาเต็มที่","สร้างความแข็งแรงของขาข้างเดียว","ปกป้องเอ็นขณะเพิ่มการลงน้ำหนัก"],
    ["ผ่านเกณฑ์การเริ่มวิ่ง","วิ่งในแนวตรงได้","ลงน้ำหนักได้นุ่มนวลและควบคุมได้"],
    ["ฟื้นกำลังและความเร็ว","เปลี่ยนทิศทางได้อย่างมั่นใจ","ผ่านโปรแกรมเฉพาะกีฬาครบถ้วน"],
    ["ฝึกต่อเนื่องสัปดาห์ละ 2 ครั้ง","ป้องกันการบาดเจ็บซ้ำ","คงความมั่นใจในเข่า"]
  ],
  surgeonLabel:"ศัลยแพทย์ของท่าน",
  resetBtn:"รีเซ็ตข้อมูลแอป",
  resetConfirm:"การดำเนินการนี้จะลบข้อมูลการผ่าตัด ความคืบหน้าท่าบริหาร ผลการวัด และแบบสำรวจการฟื้นตัวทั้งหมดบนอุปกรณ์นี้ และไม่สามารถย้อนกลับได้ ต้องการดำเนินการต่อหรือไม่?",
  deviceStorageNote:"ข้อมูลของท่านถูกเก็บไว้ในอุปกรณ์นี้เท่านั้น หากใช้อุปกรณ์ร่วมกับผู้อื่นหรือเครื่องสาธารณะ กรุณาล้างข้อมูลด้านล่างเมื่อใช้งานเสร็จแล้ว",
  hnPrefix:"HN: ",
  tabHome:"หน้าแรก", tabCare:"การดูแล", tabExercises:"ท่าบริหาร", tabProgress:"ความก้าวหน้า", tabResources:"แหล่งข้อมูล", tabSOS:"แจ้งเตือน",
  sosTitle:"เมื่อใดควรขอความช่วยเหลือ", sosSub:"หากพบอาการต่อไปนี้ ให้ติดต่อทีมผู้ดูแลทันที",
  emergencyNote:"หากเป็นเหตุฉุกเฉินที่อาจเป็นอันตรายถึงชีวิต โปรดโทร 1669 (สายด่วนการแพทย์ฉุกเฉิน) ทันที",
  emergencyCallBtn:"ฉุกเฉิน — โทร 1669",
  appDisclaimer:"แอปนี้ให้ข้อมูลทั่วไปเท่านั้น ไม่สามารถใช้แทนคำแนะนำจากแพทย์ผู้ผ่าตัดหรือนักกายภาพบำบัดของท่าน กรุณาปฏิบัติตามคำแนะนำของทีมผู้ดูแลเสมอ",
  onboardTitle:"ยินดีต้อนรับ — มาตั้งค่าการฟื้นตัวของท่านกัน",
  onboardLead:"ข้อมูลนี้จะช่วยให้แอปแสดงระยะการฟื้นตัว ท่าบริหาร และข้อควรระวังเพิ่มเติมที่เหมาะกับการผ่าตัดของท่าน",
  onboardDateLabel:"วันที่ท่านผ่าตัดเข่า",
  onboardHNLabel:"หมายเลขประจำตัวผู้ป่วย (HN)",
  onboardHNHint:"ช่วยให้เจ้าหน้าที่โรงพยาบาลค้นหาประวัติของท่านได้รวดเร็วขึ้น",
  onboardGraftLabel:"ใช้เอ็นชนิดใดในการสร้างเอ็นไขว้หน้า?",
  onboardGraftHint:"หากไม่แน่ใจ ให้เลือก \"ไม่แน่ใจ\" แล้วสอบถามในวันนัดครั้งถัดไป",
  graftOptions:{ unsure:"ไม่แน่ใจ / ตามที่แพทย์แจ้ง", hamstring:"เอ็นกล้ามเนื้อต้นขาด้านหลัง (Hamstring)", bpb:"เอ็นสะบ้า (Patellar tendon / BTB)", quad:"เอ็นกล้ามเนื้อต้นขาด้านหน้า (Quadriceps tendon)", allograft:"เอ็นจากผู้บริจาค (Allograft)" },
  onboardMeniscusLabel:"ท่านได้รับการเย็บซ่อมหมอนรองกระดูกเข่าด้วยหรือไม่?",
  meniscusOptions:{ none:"ไม่ได้เย็บ — ผ่าตัดเอ็นไขว้หน้าอย่างเดียว", yes:"ใช่ — มีการเย็บซ่อมหมอนรองกระดูก" },
  onboardSave:"บันทึกและดำเนินการต่อ",
  consentTitle:"ความเป็นส่วนตัวของท่าน",
  consentText:"เมื่อดำเนินการต่อ ท่านยินยอมให้บันทึกและส่งข้อมูลหมายเลข HN วันที่ผ่าตัด ความคืบหน้าการทำท่าบริหาร และผลการวัดการฟื้นตัวของท่าน ให้แก่ทีมผู้ดูแลเพื่อติดตามการฟื้นตัว ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)",
  consentCheckboxLabel:"ข้าพเจ้าได้อ่านและยินยอมตามข้อความข้างต้น",
  consentValidation:"กรุณายืนยันเพื่อดำเนินการต่อ",
  dateRequiredValidation:"กรุณาระบุวันที่ผ่าตัดเพื่อดำเนินการต่อ",
  hnFormatValidation:"กรุณาตรวจสอบหมายเลข HN — ใช้ได้เฉพาะตัวอักษร ตัวเลข เครื่องหมาย - หรือ / ไม่เกิน 20 ตัว",
  dateRangeValidation:"กรุณาตรวจสอบวันที่อีกครั้ง ควรอยู่ภายใน 5 ปีที่ผ่านมา และไม่เกิน 1 ปีข้างหน้า",
  addHomeTitle:"เพิ่มลงหน้าจอหลักหรือไม่?",
  addHomeBody:"เพิ่มแอปนี้ลงหน้าจอหลักของท่าน เพื่อเปิดใช้งานได้ทันทีเหมือนแอปทั่วไป",
  addHomeAccept:"เพิ่มลงหน้าจอหลัก",
  addHomeDecline:"ไว้ภายหลัง",
  addHomeGotIt:"รับทราบ",
  addHomeIOSSteps:"แตะไอคอนแชร์ในเบราว์เซอร์ แล้วเลือก \"เพิ่มไปยังหน้าจอโฮม\"",
  addHomeGenericSteps:"มองหาเมนู \"เพิ่มลงหน้าจอหลัก\" หรือ \"ติดตั้งแอป\" ในเบราว์เซอร์ของท่าน",
  noDateChip:"กรุณาระบุวันที่ผ่าตัด",
  noDateDesc:"แตะ \"แก้ไขข้อมูลการผ่าตัดของท่าน\" ด้านบน เพื่อให้แอปแสดงระยะการฟื้นตัวปัจจุบันของท่าน",
  callBtnPrefix:"สำหรับนัดหมาย — โทร ",

  phaseNames:["เตรียมพร้อม","ปกป้อง","เคลื่อนไหว","สร้างกำลัง","เริ่มวิ่ง","ฝึกเพื่อกีฬา","คงความแข็งแรง"],
  phaseShort:["เตรียม","ปกป้อง","เคลื่อนไหว","สร้างกำลัง","วิ่ง","ฝึกกีฬา","คงสภาพ"],
  phaseWeeks:["ก่อนผ่าตัด","สัปดาห์ที่ 0–2","สัปดาห์ที่ 2–6","สัปดาห์ที่ 6–12","เดือนที่ 3–5","เดือนที่ 5–9 ขึ้นไป","หลังกลับไปเล่นกีฬา"],
  phaseTitles:[
    "การเตรียมตัวก่อนผ่าตัด","ปกป้องและฟื้นตัว","เคลื่อนไหวและกระตุ้นกล้ามเนื้อ","สร้างความแข็งแรง","เริ่มวิ่งและควบคุมการเคลื่อนไหว","ฝึกซ้อมเพื่อกลับสู่กีฬา","สุขภาพเข่าระยะยาว"
  ],
  phaseDesc:[
    "ลดอาการบวม เหยียดเข่าให้สุด และกระตุ้นกล้ามเนื้อต้นขาก่อนเข้ารับการผ่าตัด",
    "ควบคุมความปวดและอาการบวม เหยียดเข่าให้สุด และเริ่มกระตุ้นกล้ามเนื้อต้นขาด้านหน้า",
    "ปรับการเดินให้เป็นปกติ ฟื้นการงอเข่า และเริ่มลงน้ำหนักขาอีกครั้ง",
    "พิสัยการเคลื่อนไหวเต็มที่ ควบคุมขาข้างเดียวได้ และสร้างความแข็งแรงจริง ในช่วงที่เอ็นกำลังปรับสภาพ",
    "เพิ่มการวิ่ง การกระโดดและการลงน้ำหนัก เมื่อเข่าผ่านเกณฑ์การเริ่มวิ่งแล้ว",
    "ฟื้นกำลัง ความสามารถในการเปลี่ยนทิศทาง และความมั่นใจ โดยค่อย ๆ เพิ่มความเข้มข้นของกีฬา",
    "ฝึกต่อเนื่อง ความเสี่ยงบาดเจ็บซ้ำยังสูงกว่าปกติในช่วง 2 ปีแรกหลังกลับไปเล่นกีฬา"
  ],
  completeChip:"ครบระยะการฟื้นตัว 1 ปีแล้ว",
  completeDesc:"ท่านผ่านครบทุกระยะตามแผนการฟื้นตัวที่แนะนำแล้ว กรุณาฝึกต่อเนื่องเพื่อคงความแข็งแรงและป้องกันการบาดเจ็บซ้ำ",

  todayReminders:[
    [ "ประคบเย็นและยกขาสูงเพื่อลดอาการบวมก่อนผ่าตัด",
      "ฝึกเหยียดเข่าให้สุด โดยเทียบกับขาอีกข้างเป็นเป้าหมาย",
      "ฝึกเดินให้ไม่กะเผลก",
      "จัดเตรียมผู้ช่วยที่บ้าน และนำบัตรประชาชนกับหมายเลข HN ไปโรงพยาบาล" ],
    [ "การเหยียดเข่าให้สุดคือเป้าหมายสำคัญที่สุดในขณะนี้",
      "ห้ามวางหมอนไว้ใต้เข่า ให้วางไว้ใต้ส้นเท้าแทน",
      "ประคบเย็นและยกขาสูงหลายครั้งต่อวัน",
      "ใช้ไม้ค้ำยันและอุปกรณ์พยุงเข่าตามที่แพทย์สั่งอย่างเคร่งครัด ห้ามบิดหมุนเข่า" ],
    [ "ฝึกเหยียดเข่าให้สุดทุกวันอย่างต่อเนื่อง",
      "ควรเดินได้เรียบไม่กะเผลกก่อนเลิกใช้ไม้ค้ำยัน",
      "หากเช้าวันถัดมาเข่าบวมมากขึ้น แสดงว่าเมื่อวานออกกำลังมากเกินไป",
      "ดูท่าบริหารของวันนี้ได้ที่แท็บท่าบริหาร" ],
    [ "เอ็นที่สร้างใหม่กำลังปรับสภาพ ให้ออกแรงในแนวตรง หลีกเลี่ยงการบิดหมุน",
      "อาการบวมและร้อนหลังฝึกเป็นสัญญาณให้ลดลง ไม่ใช่ให้ฝืนต่อ",
      "สร้างความแข็งแรงของขาข้างเดียว เพราะเป็นพื้นฐานของการวิ่ง",
      "ยังไม่ควรบิดหมุน เปลี่ยนทิศทางกะทันหัน หรือเล่นกีฬาปะทะ" ],
    [ "อย่าเริ่มวิ่งเพียงเพราะครบกำหนดเวลา ให้ตรวจสอบที่แท็บความก้าวหน้าก่อน",
      "ลงน้ำหนักให้นุ่มนวล เข่าอยู่ในแนวเดียวกับเท้า ไม่บิดเข้าด้านใน",
      "ฝึกกล้ามเนื้อให้แข็งแรงควบคู่ไปกับการวิ่งเสมอ",
      "เพิ่มทีละอย่าง: ระยะทาง หรือความเร็ว หรือการเปลี่ยนทิศทาง" ],
    [ "การกลับไปเล่นกีฬาเป็นบันได ไม่ใช่ประตู ให้ขึ้นทีละขั้น",
      "ความมั่นใจสำคัญไม่แพ้ความแข็งแรง หากรู้สึกว่าเข่าไม่มั่นคง ให้แจ้งทีมผู้ดูแล",
      "ควรตรวจวัดทั้งสองขา ไม่ใช่เฉพาะขาที่ผ่าตัด",
      "ตรวจสอบแท็บความก้าวหน้าก่อนเข้าสู่การฝึกแบบปะทะหรือการแข่งขัน" ],
    [ "ฝึกความแข็งแรงต่อเนื่องอย่างน้อยสัปดาห์ละ 2 ครั้ง",
      "ฝึกเทคนิคการลงน้ำหนักและการเปลี่ยนทิศทางอย่างสม่ำเสมอ",
      "อบอุ่นร่างกายด้วยโปรแกรมป้องกันการบาดเจ็บก่อนซ้อมและก่อนแข่งทุกครั้ง",
      "หากมีอาการบวมใหม่ เข่าทรุด หรือเข่าล็อก ควรเข้ารับการตรวจ" ]
  ],

  exerciseCaution:[
    "ระยะนี้เป็นการเตรียมตัว เข่าที่เหยียดสุด บวมน้อย และเดินไม่กะเผลก จะทำให้ท่านเริ่มต้นหลังผ่าตัดได้ดีกว่ามาก",
    "การเหยียดเข่าให้สุดสำคัญเป็นอันดับแรก ห้ามวางหมอนใต้เข่า ห้ามบิดหมุนเข่าและห้ามคุกเข่า",
    "เพิ่มการลงน้ำหนักอย่างค่อยเป็นค่อยไป หากเช้าวันถัดมาบวมมากขึ้น แสดงว่าฝึกหนักเกินไป",
    "เอ็นที่สร้างใหม่อ่อนแรงที่สุดในเชิงชีวภาพในช่วงนี้ ให้ออกแรงในแนวตรงได้เต็มที่ แต่ห้ามบิดหมุน เปลี่ยนทิศทางกะทันหัน หรือปะทะ",
    "การเริ่มวิ่งขึ้นอยู่กับสภาพเข่า ไม่ใช่ปฏิทิน กรุณาตรวจสอบแท็บความก้าวหน้าก่อนเริ่ม",
    "เพิ่มระดับการฝึกทีละขั้น: ฝึกเดี่ยว จากนั้นซ้อมแบบไม่ปะทะ ซ้อมเต็มรูปแบบ แล้วจึงแข่งขัน",
    "การผ่านเกณฑ์ไม่ได้แปลว่าเข่าจะไม่บาดเจ็บอีก ควรฝึกต่อเนื่องและคงโปรแกรมป้องกันการบาดเจ็บไว้"
  ],

  exercises:[
    [ {id:"pre_1", name:"เกร็งกล้ามเนื้อต้นขาด้านหน้า", desc:"เกร็งต้นขาและกดด้านหลังเข่าลงกับที่นอน ค้างไว้ 5 วินาที"},
      {id:"pre_2", name:"หนุนส้นเท้าเพื่อเหยียดเข่าให้สุด", desc:"วางส้นเท้าบนผ้าม้วน โดยไม่มีอะไรรองใต้เข่า ปล่อยให้เข่าเหยียดตรง"},
      {id:"pre_3", name:"ไถส้นเท้า", desc:"ไถส้นเท้าเข้าหาก้นเพื่องอเข่า แล้วไถกลับออกมาจนเหยียดสุด"},
      {id:"pre_4", name:"ยกขาเหยียดตรง", desc:"เกร็งต้นขา ล็อกเข่าให้ตรง แล้วยกขาขึ้น"},
      {id:"pre_5", name:"ฝึกเดินไม่ให้กะเผลก", desc:"ก้าวสั้นและสม่ำเสมอ ตั้งเป้าให้เดินได้เรียบและสมมาตรก่อนผ่าตัด"},
      {id:"pre_6", name:"ฝึกใช้ไม้ค้ำยัน", desc:"ลองขึ้นลงบันไดและลุกนั่งจากเก้าอี้ก่อนถึงเวลาที่ต้องใช้จริง"},
      {id:"pre_7", name:"เตรียมบ้านและจัดหาผู้ช่วย", desc:"เก็บทางเดินให้โล่ง วางของใช้ในระดับที่หยิบง่าย และจัดผู้ช่วยในช่วงแรก"} ],
    [ {id:"p1_1", name:"หนุนส้นเท้า (เหยียดเข่าแบบไม่ออกแรง)", desc:"วางส้นเท้าบนที่รอง ไม่มีอะไรใต้เข่า ครั้งละ 10 นาที หลายครั้งต่อวัน ท่านี้สำคัญที่สุด"},
      {id:"p1_2", name:"เกร็งกล้ามเนื้อต้นขาด้านหน้า", desc:"เกร็งต้นขาและกดเข่าให้แนบพื้น สังเกตให้ลูกสะบ้าเลื่อนขึ้น"},
      {id:"p1_3", name:"กระดกข้อเท้าขึ้นลง", desc:"กระดกปลายเท้าขึ้นลงบ่อย ๆ ตลอดวัน เพื่อช่วยการไหลเวียนเลือด"},
      {id:"p1_4", name:"ไถส้นเท้า", desc:"งอเข่าเบา ๆ ภายในองศาที่อนุญาต แล้วเหยียดกลับให้สุด", req:["flex"]},
      {id:"p1_5", name:"ยกขาเหยียดตรง", desc:"เริ่มเมื่อยกขาได้โดยเข่าไม่ตก ล็อกเข่าให้ตรงตลอดการยก"},
      {id:"p1_6", name:"ขยับลูกสะบ้า", desc:"ใช้นิ้วขยับลูกสะบ้าขึ้น ลง และไปด้านข้างเบา ๆ ขณะเข่าเหยียดและผ่อนคลาย"},
      {id:"p1_7", name:"ฝึกเดิน", desc:"ลงน้ำหนักตามที่แพทย์กำหนด ก้าวให้สม่ำเสมอ และปล่อยให้เข่าเหยียดสุดขณะลงส้นเท้า"},
      {id:"p1_8", name:"ประคบเย็นและยกขาสูง", desc:"ประคบเย็น 15–20 นาที ยกขาสูงกว่าระดับหัวใจ ทำหลายครั้งต่อวันขณะยังบวม"} ],
    [ {id:"p2_1", name:"นอนคว่ำห้อยเข่า", desc:"นอนคว่ำให้เข่าพ้นขอบเตียง ปล่อยให้แรงโน้มถ่วงช่วยเหยียดเข่า"},
      {id:"p2_2", name:"ปั่นจักรยานอยู่กับที่", desc:"เริ่มจากปั่นครึ่งรอบ แล้วจึงปั่นครบรอบ ตั้งเบาะสูงและไม่ใส่แรงต้าน", req:["flex110"]},
      {id:"p2_3", name:"ย่อเข่าตื้น (0–60°)", desc:"ย่อเข่าตื้น ลงน้ำหนักสองขาเท่ากัน เข่าอยู่ในแนวเดียวกับปลายเท้า", req:["fwb"]},
      {id:"p2_4", name:"เหยียดเข่าด้วยยางยืด", desc:"คล้องยางยืดหลังเข่า แล้วดันเข่าไปด้านหลังจนเหยียดสุด", req:["fwb"]},
      {id:"p2_5", name:"ก้าวขึ้นกล่องเตี้ย", desc:"ก้าวขึ้นช้า ๆ และควบคุมจังหวะลง ระวังไม่ให้เข่าบิดเข้าด้านใน", req:["fwb"]},
      {id:"p2_6", name:"เขย่งปลายเท้าสองข้าง", desc:"เขย่งขึ้นแล้วลดลงช้า ๆ"},
      {id:"p2_7", name:"ฝึกการทรงตัว", desc:"เริ่มจากยืนสองขา แล้วค่อยพัฒนาเป็นยืนขาเดียวเมื่อควบคุมได้ดีขึ้น", req:["fwb"]},
      {id:"p2_8", name:"งอเข่าต้านแรง", desc:"นอนคว่ำ งอเข่าต้านแรงต้านเบา ๆ", req:["ham"]} ],
    [ {id:"p3_1", name:"ดันน้ำหนักด้วยขาข้างเดียว", desc:"ดันด้วยขาข้างที่ผ่าตัดอย่างควบคุม ไม่ล็อกเข่าขณะรับน้ำหนัก", req:["fwb"]},
      {id:"p3_2", name:"ย่อเข่าท่าก้าวขา", desc:"ยืนก้าวขาหน้าหลัง ย่อตัวลงตรง ๆ เข่าหน้าอยู่ในแนวเดียวกับเท้า", req:["fwb","flex110"]},
      {id:"p3_3", name:"ก้าวลงจากกล่อง", desc:"ยืนขาข้างที่ผ่าตัดแล้วค่อย ๆ ก้าวลง เน้นการควบคุมมากกว่าความสูง", req:["fwb"]},
      {id:"p3_4", name:"เหยียดเข่าในช่วง 90°–40°", desc:"นั่งเหยียดเข่าในพิสัยจำกัด ยังไม่เหยียดถึง 40 องศาสุดท้าย", req:["okc"]},
      {id:"p3_5", name:"ยกสะโพกด้วยกล้ามเนื้อต้นขาหลัง", desc:"วางส้นเท้าบนม้านั่งหรือลูกบอล ยกสะโพกขึ้นค้างไว้ แล้วพัฒนาเป็นขาเดียว", req:["ham"]},
      {id:"p3_6", name:"เขย่งปลายเท้าขาเดียว", desc:"เขย่งขึ้นลงด้วยขาข้างเดียว โดยมีที่จับช่วยทรงตัว"},
      {id:"p3_7", name:"ฝึกทรงตัวขณะถูกรบกวน", desc:"ยืนขาเดียวพร้อมรับส่งลูกบอล หรือยืนบนพื้นที่ไม่มั่นคง", req:["fwb"]},
      {id:"p3_8", name:"จักรยาน ว่ายน้ำ หรือเครื่องเดินวงรี", desc:"ออกกำลังแบบแรงกระแทกต่ำเพื่อสร้างความฟิตระหว่างที่เอ็นกำลังปรับสภาพ"} ],
    [ {id:"p4_1", name:"สลับเดิน–วิ่งเหยาะ", desc:"สลับเดินและวิ่งเหยาะในแนวตรงบนพื้นเรียบสม่ำเสมอ", req:["run"]},
      {id:"p4_2", name:"วิ่งต่อเนื่องในแนวตรง", desc:"เพิ่มระยะเวลาก่อน แล้วจึงค่อยเพิ่มความเร็ว", req:["run"]},
      {id:"p4_3", name:"กระโดดและลงน้ำหนักสองขา", desc:"กระโดดและลงพื้นด้วยสองเท้าอย่างนุ่มนวล ซับแรงที่สะโพกและเข่า", req:["fwb"]},
      {id:"p4_4", name:"กระโดดขาเดียวและควบคุมการลง", desc:"กระโดดขาเดียวแล้วค้างท่าลงพื้น 3 วินาทีโดยไม่เซ", req:["run"]},
      {id:"p4_5", name:"ย่อเข่าและดันน้ำหนักแบบหนัก", desc:"เพิ่มน้ำหนักอย่างต่อเนื่องในพิสัยที่ไม่เจ็บ", req:["fwb","flex110"]},
      {id:"p4_6", name:"ฝึกชะลอและหยุด", desc:"วิ่งแล้วหยุดอย่างควบคุม ซับแรงด้วยทั้งขา", req:["run"]},
      {id:"p4_7", name:"Nordic hamstring", desc:"คุกเข่าโดยมีคนจับข้อเท้า แล้วค่อย ๆ ลดตัวลงช้า ๆ เพิ่มระดับทีละน้อย", req:["ham","kneel"]} ],
    [ {id:"p5_1", name:"ฝึกพลัยโอเมตริก", desc:"กระโดดต่อเนื่อง กระโดดไกล และกระโดดขาเดียว โดยลงพื้นเบาและควบคุมได้", req:["run"]},
      {id:"p5_2", name:"ฝึกเทคนิคการวิ่งเร็ว", desc:"เพิ่มความเร็วในแนวตรงจนใกล้เต็มความสามารถ", req:["run"]},
      {id:"p5_3", name:"ฝึกเปลี่ยนทิศทาง", desc:"เปลี่ยนทิศทางตามแบบแผนที่กำหนดไว้ เริ่มจากมุมกว้างแล้วค่อยแคบลง", req:["pivot"]},
      {id:"p5_4", name:"ฝึกความคล่องตัวและการตัดตัว", desc:"ฝึกตอบสนองต่อสัญญาณ แทนการเคลื่อนไหวตามรูปแบบที่รู้ล่วงหน้า", req:["pivot"]},
      {id:"p5_5", name:"ฝึกทักษะเฉพาะกีฬา", desc:"ฝึกท่าเฉพาะของกีฬาที่ท่านเล่น โดยฝึกคนเดียวในความเข้มข้นที่ควบคุมได้", req:["pivot"]},
      {id:"p5_6", name:"ซ้อมกับทีมแบบไม่ปะทะ", desc:"ซ้อมร่วมกับทีมได้ แต่ยังไม่เข้าปะทะหรือแย่งบอล", req:["pivot"]},
      {id:"p5_7", name:"ซ้อมเต็มรูปแบบ", desc:"ซ้อมเต็มรูปแบบรวมการปะทะ ก่อนลงแข่งขันจริง", req:["pivot"]} ],
    [ {id:"p6_1", name:"ฝึกความแข็งแรงสัปดาห์ละ 2 ครั้ง", desc:"ฝึกย่อเข่า ดันน้ำหนัก และงอสะโพกต่อเนื่อง ความแข็งแรงที่หายไปคือความเสี่ยงที่เพิ่มขึ้น"},
      {id:"p6_2", name:"ฝึกควบคุมขาข้างเดียว", desc:"ย่อเข่าขาเดียว ก้าวลงจากกล่อง และฝึกทรงตัว ตรวจทั้งสองขา ไม่ใช่เฉพาะข้างที่ผ่าตัด"},
      {id:"p6_3", name:"ฝึกเทคนิคการกระโดดและลงน้ำหนัก", desc:"ฝึกลงพื้นให้นุ่มนวล เข่าอยู่ในแนวเดียวกับเท้า ไม่บิดเข้าด้านใน"},
      {id:"p6_4", name:"ฝึกกล้ามเนื้อต้นขาหลังแบบยืดต้าน", desc:"กล้ามเนื้อต้นขาหลังที่แข็งแรงช่วยปกป้องเอ็นที่สร้างใหม่ ควรฝึกต่อเนื่อง"},
      {id:"p6_5", name:"อบอุ่นร่างกายเพื่อป้องกันการบาดเจ็บ", desc:"ใช้โปรแกรมอบอุ่นร่างกายที่เป็นระบบก่อนซ้อมและก่อนแข่งทุกครั้ง"},
      {id:"p6_6", name:"ฝึกความฟิตเฉพาะกีฬา", desc:"รักษาระดับความฟิตให้เพียงพอกับความต้องการของกีฬาที่ท่านเล่น"} ]
  ],
  progressLabel:(done,total)=> "ทำแล้ว "+done+" จาก "+total+" ท่าในวันนี้",
  exercisePhaseReadonly:"ท่านกำลังดูระยะอื่นเพื่อเป็นข้อมูลอ้างอิง การติดตามท่าออกกำลังกายทำได้เฉพาะในระยะปัจจุบันของท่านเท่านั้น",

  restrictWB:"การลงน้ำหนักขาข้างที่ผ่าตัด",
  restrictFlex:"ขีดจำกัดการงอเข่า",
  restrictBrace:"อุปกรณ์พยุงเข่า",
  restrictPivot:"การบิดหมุนเข่า",
  restrictKneel:"การคุกเข่า",
  restrictHam:"การฝึกกล้ามเนื้อต้นขาหลังแบบต้านแรง",
  wbValues:{ NWB:"ห้ามลงน้ำหนัก — ใช้ไม้ค้ำยันเท่านั้น", TTWB:"แตะปลายเท้าได้เท่านั้น", PWB:"ลงน้ำหนักได้บางส่วน", FWB:"ลงน้ำหนักได้เต็มที่เท่าที่สบาย" },
  braceValue:"สวมตามที่แพทย์สั่ง",
  pivotValue:"ยังไม่อนุญาต",
  kneelValue:"หลีกเลี่ยงการคุกเข่าโดยตรง",
  hamValue:"ชะลอไว้ก่อน",
  untilWeek:(w)=> "จนถึงสัปดาห์ที่ "+w,
  untilCleared:"จนกว่าแพทย์จะอนุญาต",
  lockReason:{
    fwb:"จะปลดล็อกเมื่อท่านลงน้ำหนักขาได้เต็มที่",
    flex:"กรุณาอยู่ในขีดจำกัดการงอเข่าปัจจุบันของท่าน",
    flex110:"จะปลดล็อกเมื่อท่านงอเข่าได้เกิน 110 องศา",
    ham:"ชะลอไว้ระหว่างที่ตำแหน่งเก็บเอ็นต้นขาด้านหลังกำลังหาย",
    kneel:"หลีกเลี่ยงการคุกเข่าขณะที่ตำแหน่งเก็บเอ็นยังเจ็บ",
    okc:"ชะลอไว้ระหว่างที่ตำแหน่งเก็บเอ็นกำลังหาย",
    pivot:"ยังไม่อนุญาตให้บิดหมุนเข่าในระยะนี้",
    run:"จะปลดล็อกเมื่อท่านผ่านเกณฑ์การเริ่มวิ่งในแท็บความก้าวหน้า"
  },

  progressTitle:"ฉันพร้อมหรือยัง?",
  progressIntro:"ปฏิทินบอกว่าเมื่อไรควรตรวจ แต่สภาพเข่าของท่านเป็นตัวบอกว่าเมื่อไรควรก้าวต่อ",
  progressDisclaimer:"เกณฑ์เหล่านี้ใช้ประกอบการปรึกษากับแพทย์ผู้ผ่าตัดและนักกายภาพบำบัด ไม่ใช่การประเมินแทน และการผ่านเกณฑ์เพียงอย่างเดียวไม่ถือเป็นการอนุญาตให้กลับไปเล่นกีฬา",

  /* ---- แบบประเมินเข่า IKDC ---- */
  ikdcTitle:"แบบสำรวจการฟื้นตัวของเข่า",
  ikdcIntro:"แบบสอบถามสั้น ๆ ที่ทีมผู้ดูแลใช้ติดตามการฟื้นตัวของเข่าท่าน โดยจะให้ทำที่ 2, 6, 12, 25 และ 52 สัปดาห์หลังผ่าตัด",
  ikdcOverdueNote:"แบบประเมินนี้เลยกำหนดแล้ว กรุณาทำเมื่อสะดวก",
  ikdcOpenBtn:"เริ่มทำแบบประเมิน",
  ikdcSubmitBtn:"ส่งแบบประเมิน",
  ikdcCancelBtn:"ยกเลิก",
  ikdcHistoryTitle:"คะแนนการฟื้นตัวของเข่าตามช่วงเวลา",
  ikdcValidation:"กรุณาตอบทุกข้อก่อนส่งแบบประเมิน",
  ikdcSyncPending:"บันทึกในเครื่องแล้ว — กำลังส่งให้ทีมผู้ดูแล…",
  ikdcSyncConfirmed:"ทีมผู้ดูแลได้รับข้อมูลแล้ว",
  ikdcSyncRetrying:"ยังไม่สามารถยืนยันได้ — ระบบจะลองส่งใหม่ให้อัตโนมัติ",
  ikdcSyncNeedsHn:"บันทึกไว้ในเครื่องนี้เท่านั้น กรุณาเพิ่มหมายเลข HN ที่ \"แก้ไขข้อมูลการผ่าตัดของท่าน\" เพื่อส่งให้ทีมผู้ดูแล",
  ikdcTimepointLabels:{ w2:"2 สัปดาห์", w6:"6 สัปดาห์", w12:"12 สัปดาห์", w25:"25 สัปดาห์", w52:"52 สัปดาห์ (1 ปี)" },
  ikdcSectionSymptoms:"อาการ",
  ikdcSectionSports:"กิจกรรมกีฬา",
  ikdcSectionFunction:"การใช้งาน",
  ikdcInstructionActivity:"ให้ประเมินอาการที่ระดับกิจกรรมสูงสุดที่ท่านคิดว่าตนเองทำได้ แม้จะไม่ได้ทำกิจกรรมระดับนั้นจริงในขณะนี้",
  ikdcInstructionQ9:"สำหรับแต่ละกิจกรรมด้านล่าง ให้ระบุระดับความยากลำบากที่ท่านพบใน 4 สัปดาห์ที่ผ่านมาเนื่องจากเข่าของท่าน",
  ikdcActivityOptions:{
    hi4:"กิจกรรมที่หนักมาก เช่น กระโดดหรือบิดหมุนตัว อย่างบาสเกตบอลหรือฟุตบอล",
    hi3:"กิจกรรมที่หนัก เช่น งานที่ใช้แรงมาก สกี หรือเทนนิส",
    hi2:"กิจกรรมปานกลาง เช่น งานที่ใช้แรงปานกลาง วิ่ง หรือจ๊อกกิ้ง",
    hi1:"กิจกรรมเบา เช่น เดิน งานบ้าน หรืองานสวน"
  },
  ikdcActivityZero:{
    q1:"ไม่สามารถทำกิจกรรมข้างต้นได้เลยเนื่องจากปวดเข่า",
    q5:"ไม่สามารถทำกิจกรรมข้างต้นได้เลยเนื่องจากเข่าบวม",
    q7:"ไม่สามารถทำกิจกรรมข้างต้นได้เลยเนื่องจากเข่าทรุด",
    q8:"ไม่สามารถทำกิจกรรมข้างต้นได้เลยเนื่องจากปัญหาที่เข่า"
  },
  ikdcStiffOptions:["ไม่เลย","เล็กน้อย","ปานกลาง","มาก","มากที่สุด"],
  ikdcDiffOptions:["ไม่ลำบากเลย","ลำบากเล็กน้อย","ลำบากปานกลาง","ลำบากมาก","ทำไม่ได้"],
  ikdcLockOptions:["ไม่มี","มี"],
  ikdcVasLabels:{
    q2:["ปวดตลอดเวลา","ไม่เคยปวดเลย"],
    q3:["ปวดมากที่สุดเท่าที่เคยเป็น","ไม่ปวดเลย"],
    q10a:["ทำกิจวัตรประจำวันไม่ได้เลย","ปกติ ใช้งานได้ดีเยี่ยม"],
    q10b:["ทำกิจวัตรประจำวันไม่ได้เลย","ปกติ ใช้งานได้ดีเยี่ยม"]
  },
  ikdcLabels:{
    q1:"ระดับกิจกรรมสูงสุดที่ท่านทำได้โดยไม่ปวดเข่ามากคือระดับใด?",
    q2:"ใน 4 สัปดาห์ที่ผ่านมา หรือตั้งแต่บาดเจ็บ ท่านมีอาการปวดบ่อยเพียงใด?",
    q3:"หากมีอาการปวด ปวดรุนแรงเพียงใด?",
    q4:"ใน 4 สัปดาห์ที่ผ่านมา หรือตั้งแต่บาดเจ็บ เข่าของท่านตึงหรือบวมเพียงใด?",
    q5:"ระดับกิจกรรมสูงสุดที่ท่านทำได้โดยไม่บวมเข่ามากคือระดับใด?",
    q6:"ใน 4 สัปดาห์ที่ผ่านมา หรือตั้งแต่บาดเจ็บ เข่าของท่านล็อกหรือติดขัดหรือไม่?",
    q7:"ระดับกิจกรรมสูงสุดที่ท่านทำได้โดยเข่าไม่ทรุดมากคือระดับใด?",
    q8:"ระดับกิจกรรมสูงสุดที่ท่านทำเป็นประจำได้คือระดับใด?",
    q9a:"การขึ้นบันได",
    q9b:"การลงบันได",
    q9c:"การคุกเข่ากดน้ำหนักที่หัวเข่า",
    q9d:"การนั่งยอง",
    q9e:"การนั่งงอเข่า",
    q9f:"การลุกจากเก้าอี้",
    q9g:"การวิ่งเส้นตรง",
    q9h:"การกระโดดและลงน้ำหนักด้วยขาข้างที่บาดเจ็บ",
    q9i:"การหยุดและออกตัวอย่างรวดเร็ว",
    q10a:"ท่านให้คะแนนการใช้งานเข่าในปัจจุบันเท่าใด?",
    q10b:"ท่านให้คะแนนการใช้งานเข่าก่อนบาดเจ็บเท่าใด?"
  },

  runGateTitle:"พร้อมเริ่มวิ่งหรือยัง?",
  runGateSub:"โดยทั่วไปจะพิจารณาเริ่มวิ่งได้ตั้งแต่ประมาณ 3 เดือน แต่ต้องผ่านเกณฑ์เหล่านี้ก่อน",
  rtsGateTitle:"พร้อมกลับไปเล่นกีฬาหรือยัง?",
  rtsGateSub:"การผ่านเกณฑ์เหล่านี้คือจุดเริ่มต้นของการกลับไปเล่นแบบค่อยเป็นค่อยไป ไม่ใช่ไฟเขียวให้ลงแข่งเต็มรูปแบบทันที",
  gatePass:"ผ่านเกณฑ์ครบทุกข้อ",
  gateFail:"ยังไม่ผ่าน",
  gateUnknown:"ยังขาดผลการวัดบางรายการ",
  gateNotYet:"เกณฑ์นี้จะเปิดในระยะถัดไปของการฟื้นตัว",
  crit:{
    ext:"เหยียดเข่าได้สุด",
    flex:"งอเข่าได้อย่างน้อย 125 องศา",
    quad80:"กำลังกล้ามเนื้อต้นขาหน้าอย่างน้อย 80% ของขาอีกข้าง",
    quad90:"กำลังกล้ามเนื้อต้นขาหน้าอย่างน้อย 90% ของขาอีกข้าง",
    ham80:"กำลังกล้ามเนื้อต้นขาหลังอย่างน้อย 80% ของขาอีกข้าง",
    ham90:"กำลังกล้ามเนื้อต้นขาหลังอย่างน้อย 90% ของขาอีกข้าง",
    hop90:"ผลทดสอบกระโดดอย่างน้อย 90% ของขาอีกข้าง",
    noRestrict:"ไม่มีข้อจำกัดการลงน้ำหนักหรือการงอเข่าเหลืออยู่",
    week12:"ผ่านไปอย่างน้อย 12 สัปดาห์หลังผ่าตัด",
    month9:"ผ่านไปอย่างน้อย 9 เดือนหลังผ่าตัด",
    runCleared:"ได้รับอนุญาตให้เริ่มวิ่งจากทีมผู้ดูแล"
  },
  metrics:{
    extDeficit:"เหยียดเข่าได้ไม่สุดกี่องศา?",
    flexion:"งอเข่าได้กี่องศา?",
    quadLSI:"กำลังกล้ามเนื้อต้นขาหน้าเทียบกับขาอีกข้าง",
    hamLSI:"กำลังกล้ามเนื้อต้นขาหลังเทียบกับขาอีกข้าง",
    hopLSI:"ระยะกระโดดเทียบกับขาอีกข้าง",
    noLimp:"ท่านเดินได้โดยไม่กะเผลกหรือไม่?",
    offCrutches:"ท่านเลิกใช้ไม้ค้ำยันแล้วหรือยัง?",
    runCleared:"ทีมผู้ดูแลอนุญาตให้เริ่มวิ่งแล้ว"
  },
  metricUnits:{ extDeficit:"°", flexion:"°", quadLSI:"%", hamLSI:"%", hopLSI:"%" },
  metricHints:{
    extDeficit:"นอนหงายและหนุนส้นเท้า ค่า 0 หมายถึงเหยียดได้สุดเท่ากับขาอีกข้าง",
    flexion:"องศาการงอเข่า โดยทั่วไปเข่าข้างปกติจะงอได้ประมาณ 135°",
    quadLSI:"วัดที่คลินิก ขาอีกข้างก็อ่อนแรงลงหลังผ่าตัดเช่นกัน ค่านี้จึงอาจสูงกว่ากำลังจริงของท่าน",
    hamLSI:"วัดที่คลินิก",
    hopLSI:"วัดที่คลินิก"
  },
  yes:"ใช่", no:"ไม่", notSet:"—",
  metricsIntro:"บันทึกค่าต่าง ๆ ของท่านได้ที่นี่ กรุณาสอบถามค่ากำลังกล้ามเนื้อและผลทดสอบกระโดดจากนักกายภาพบำบัดในวันนัด แล้วนำมาบันทึกเพื่อดูแนวโน้ม",
  metricAdd:"บันทึก",
  metricPlaceholder:"ค่า",
  metricNoReadings:"ยังไม่มีข้อมูล",
  metricNeedMore:"บันทึกอีก 1 ครั้งเพื่อดูแนวโน้ม",
  metricReadings:(n)=> "บันทึกแล้ว "+n+" ครั้ง",
  metricUndo:"ลบค่าล่าสุด",
  metricTarget:(v)=> "เป้าหมาย "+v,
  metricToday:"บันทึกของวันนี้แล้ว",

  healingTitle:"ทำความเข้าใจการหายของเอ็น",
  healingItems:[
    "เอ็นที่สร้างใหม่แข็งแรงที่สุดในวันที่ยึดเสร็จ หลังจากนั้นร่างกายจะค่อย ๆ ปรับให้กลายเป็นเอ็นที่มีชีวิต และระหว่างกระบวนการนี้จะผ่านช่วงที่อ่อนแรงลง",
    "นี่คือเหตุผลที่ช่วงกลางของการฟื้นตัวหลอกความรู้สึก: ท่านรู้สึกดี อาการบวมหายไปแล้ว แต่เอ็นยังปรับสภาพอยู่ภายใน",
    "และเป็นเหตุผลที่แนะนำให้ออกแรงในแนวตรงได้เร็ว ขณะที่การบิดหมุน การเปลี่ยนทิศทาง และการปะทะต้องรอนานกว่ามาก",
    "อาการเมื่อยกล้ามเนื้อหลังฝึกเป็นเรื่องปกติ แต่อาการปวดแปลบ เข่าทรุด หรือบวมใหม่ ไม่ใช่ — กรุณาแจ้งทีมผู้ดูแล",
    "เข่าที่บาดเจ็บซ้ำมักเป็นเข่าของคนที่หยุดฝึกหลังกลับไปเล่นกีฬาแล้ว"
  ],

  care:[
    { icon:"🏥", title:"ก่อนเข้ารับการผ่าตัด", items:[
      "ปฏิบัติตามคำแนะนำเรื่องการงดน้ำงดอาหารและการหยุดยาจากทีมผ่าตัด และนำบัตรประชาชนกับหมายเลข HN ไปด้วย",
      "เข้ารับการผ่าตัดด้วยเข่าที่เหยียดสุด บวมน้อย และแข็งแรงที่สุดเท่าที่ทำได้ ซึ่งเป็นปัจจัยทำนายการฟื้นตัวที่ดีที่สุดอย่างหนึ่ง",
      "จัดหาผู้ช่วยที่บ้านในช่วงไม่กี่วันแรก และเก็บทางเดินจากเตียงไปห้องน้ำให้โล่ง"
    ]},
    { icon:"📏", title:"การเหยียดเข่าให้สุด", items:[
      "นี่คือสิ่งสำคัญที่สุดในช่วงสัปดาห์แรก เข่าที่เหยียดไม่สุดจะทำให้เดินกะเผลก กล้ามเนื้อต้นขาอ่อนแรง และปวดด้านหน้าเข่า",
      "วางส้นเท้าบนผ้าม้วนโดยไม่มีอะไรรองใต้เข่า ปล่อยให้เข่าเหยียดตรงครั้งละ 10 นาที หลายครั้งต่อวัน",
      "ห้ามนอนหรือพักโดยมีหมอนรองใต้เข่า ให้วางหมอนไว้ใต้ส้นเท้าแทน",
      "เทียบกับขาอีกข้างเป็นระยะ เพราะนั่นคือเป้าหมาย ไม่ใช่แค่ \"เกือบตรง\""
    ]},
    { icon:"🩼", title:"ไม้ค้ำยันและการลงน้ำหนัก", items:[
      "ปฏิบัติตามคำแนะนำการลงน้ำหนักที่แสดงในหน้าแรก หากท่านได้รับการเย็บซ่อมหมอนรองกระดูกด้วย ข้อจำกัดอาจเข้มงวดกว่าการผ่าตัดเอ็นไขว้หน้าอย่างเดียว",
      "ก้าวเดินสม่ำเสมอ ไม่รีบ และปล่อยให้เข่าเหยียดสุดขณะลงส้นเท้า",
      "เลิกใช้ไม้ค้ำยันเมื่อเดินได้โดยไม่กะเผลก ไม่ใช่เพียงเพราะหายปวด",
      "ขึ้นบันได: ก้าวขาข้างดีขึ้นก่อน ลงบันได: ก้าวขาข้างที่ผ่าตัดลงก่อน"
    ]},
    { icon:"🦵", title:"อุปกรณ์พยุงเข่า", items:[
      "สวมอุปกรณ์พยุงเข่าตามที่แพทย์กำหนดอย่างเคร่งครัด รวมถึงองศาที่ตั้งไว้ ห้ามปรับองศาเอง",
      "ตรวจผิวหนังใต้สายรัดทุกวันว่ามีรอยแดงหรือการเสียดสีหรือไม่",
      "หากอุปกรณ์เลื่อนหลุดบ่อย ควรให้ทีมผู้ดูแลปรับให้ ไม่ควรรัดแน่นจนเจ็บ"
    ]},
    { icon:"🧊", title:"อาการบวมและการประคบเย็น", items:[
      "ประคบเย็น 15–20 นาที โดยยกขาสูงกว่าระดับหัวใจ ทำหลายครั้งต่อวันในช่วงสัปดาห์แรก",
      "น้ำในข้อเข่าจะยับยั้งการทำงานของกล้ามเนื้อต้นขา การควบคุมอาการบวมจึงไม่ใช่แค่เรื่องความสบาย แต่เป็นการรักษาความแข็งแรงไว้",
      "หากเช้าวันถัดมาเข่าบวมมากขึ้น แสดงว่าการฝึกครั้งที่ผ่านมาหนักเกินไป"
    ]},
    { icon:"🩹", title:"การดูแลแผลผ่าตัด", items:[
      "รักษาแผลให้สะอาดและแห้ง และคงผ้าปิดแผลไว้จนถึงวันนัดตรวจ เว้นแต่แพทย์แนะนำเป็นอย่างอื่น",
      "การมีเลือดซึมเล็กน้อยใน 24–48 ชั่วโมงแรกถือเป็นเรื่องปกติ",
      "ห้ามทาโลชั่น ครีม หรือแป้งบริเวณแผล เว้นแต่ได้รับคำแนะนำ"
    ]},
    { icon:"🚿", title:"การอาบน้ำ", items:[
      "โดยทั่วไปอาบน้ำได้ แต่อย่าให้น้ำไหลลงบนแผลโดยตรงจนกว่าแผลจะปิดสนิท",
      "หลีกเลี่ยงการแช่อ่าง สระว่ายน้ำ และทะเล จนกว่าทีมผู้ดูแลจะยืนยันว่าแผลหายดีแล้ว",
      "โดยทั่วไปตัดไหมที่ 10–14 วัน"
    ]},
    { icon:"🛏️", title:"ท่านอนและการจัดท่า", items:[
      "นอนโดยให้เข่าเหยียดตรง วางหมอนไว้ใต้ส้นเท้า ไม่ใช่ใต้เข่า",
      "บางท่านสบายขึ้นเมื่อยกขาข้างที่ผ่าตัดสูงเล็กน้อยด้วยผ้าห่มพับ ตราบใดที่เข่ายังเหยียดตรง",
      "ขยับข้อเท้าเป็นระยะและเปลี่ยนท่าระหว่างคืน เพื่อช่วยการไหลเวียนเลือด"
    ]},
    { icon:"🩸", title:"การป้องกันลิ่มเลือด", items:[
      "กระดกข้อเท้าขึ้นลงบ่อย ๆ ตลอดวัน และลุกขยับบ่อยครั้งแทนการนั่งนานหลายชั่วโมง"
    ]},
    { icon:"🚗", title:"การขับรถและกิจกรรม", items:[
      "ห้ามขับรถขณะใช้ไม้ค้ำยัน ขณะใส่อุปกรณ์พยุงเข่าแบบล็อก หรือขณะรับประทานยาแก้ปวดที่แพทย์สั่ง",
      "ส่วนใหญ่กลับไปทำงานนั่งโต๊ะได้ภายในไม่กี่สัปดาห์ ส่วนงานที่ใช้แรงจะช้ากว่านั้นมาก กรุณาสอบถามแพทย์สำหรับกรณีของท่านเอง"
    ]},
    { icon:"🚭", title:"บุหรี่และนิโคติน", items:[
      "หลีกเลี่ยงการสูบบุหรี่และผลิตภัณฑ์นิโคติน เพราะลดเลือดที่ไปเลี้ยงเอ็นที่กำลังหาย"
    ]},
    { icon:"🥩", title:"หากท่านได้รับการเย็บซ่อมหมอนรองกระดูกด้วย", items:[
      "หมอนรองกระดูกที่เย็บซ่อมต้องการการปกป้องการงอเข่าลึกนานกว่าการผ่าตัดเอ็นไขว้หน้าอย่างเดียว โดยทั่วไปประมาณ 6 สัปดาห์",
      "การนั่งยอง การงอเข่าลึกขณะรับน้ำหนัก และการบิดหมุน มักถูกชะลอไว้นานกว่า",
      "หากโปรแกรมเอ็นไขว้หน้ากับคำสั่งเรื่องหมอนรองกระดูกขัดกัน ให้ยึดข้อที่ระมัดระวังมากกว่า และสอบถามแพทย์ผู้ผ่าตัด",
      "อาการสะดุด เข่าล็อก หรือเหยียดเข่าไม่สุดที่เกิดซ้ำ ควรได้รับการตรวจ ไม่ควรฝืนทำต่อ"
    ]},
    { icon:"📅", title:"การนัดตรวจติดตาม", items:[
      "โดยทั่วไปนัดตรวจแผลที่ประมาณ 10–14 วัน จากนั้นตามระยะที่แพทย์กำหนด",
      "นำแอปมาด้วยในวันนัด เพราะแบบสำรวจการฟื้นตัวและผลการวัดมีประโยชน์ต่อการประเมิน",
      "รวบรวมคำถามเรื่องการทำงาน การขับรถ การเดินทาง หรือกีฬา มาถามในวันนัด แทนการคาดเดาเอง"
    ]}
  ],

  normalNote:"อาการที่พบได้ในช่วงแรก: บวมปานกลาง รอยช้ำที่ลามลงน่องหรือขึ้นต้นขา ไข้ต่ำไม่เกิน 38.0°C และอาการชารอบแผลหรือบริเวณด้านนอกของหน้าแข้ง",
  emergencyLabel:"ฉุกเฉิน — ติดต่อคลินิกหรือห้องฉุกเฉินทันที",
  emergencyFlags:[
    "ปวดน่อง น่องตึง หรือน่องบวมมากขึ้นเรื่อย ๆ",
    "เจ็บหน้าอก หายใจลำบากเฉียบพลัน หรือไอเป็นเลือด — ให้ไปห้องฉุกเฉินทันที",
    "ไข้สูงกว่า 38.3°C หนาวสั่นต่อเนื่อง หรือรู้สึกไม่สบายทั้งตัว",
    "รอยแดง ร้อน หรือรอยแดงเป็นทางลามออกจากแผลผ่าตัด",
    "มีหนอง สารคัดหลั่งขุ่น หรือมีกลิ่นเหม็นจากแผล",
    "เข่าล็อกกะทันหันจนเหยียดไม่ได้ หรือเข่าทรุดพร้อมปวดรุนแรงเฉียบพลัน",
    "ปวดรุนแรงต่อเนื่องที่ไม่ทุเลาด้วยยาแก้ปวดและการพัก"
  ],

  resourcesTitle:"แหล่งข้อมูลเพิ่มเติม",
  resourcesIntro:"แหล่งข้อมูลภายนอกที่อาจเป็นประโยชน์ระหว่างการฟื้นตัวของท่าน",
  resourcesEmpty:"ยังไม่มีการเพิ่มแหล่งข้อมูล",
  resources:[
    { icon:"🌐", type:"website", title:"Rue Ortho — เว็บไซต์คลินิกของเรา",
      desc:"เยี่ยมชมเว็บไซต์คลินิกของเราเพื่อดูข้อมูลเพิ่มเติมและช่องทางการติดต่อ",
      source:"rueortho.vercel.app",
      url:"https://rueortho.vercel.app" },
    { icon:"🛡️", type:"article", title:"ออกกำลังกายป้องกันเอ็นไขว้หน้าเข่าบาดเจ็บทำได้…อย่างไร",
      desc:"โปรแกรมอบอุ่นร่างกาย ฝึกความแข็งแรง และผ่อนคลายกล้ามเนื้อ เพื่อลดโอกาสเกิดเข่าฉิ่ง (knee valgus) ประกอบด้วยสควอทและงอเข่าด้วยยางยืด ลันจ์ Y balance และการฝึกกระโดดลงพื้น เหมาะกับระยะคงความแข็งแรง",
      source:"ศูนย์กายภาพบำบัด คณะกายภาพบำบัด มหาวิทยาลัยมหิดล",
      url:"https://pt.mahidol.ac.th/ptcenter/knowledge-article/prevention-acl-injury/" },
    { icon:"🦵", type:"article", title:"ทำความเข้าใจการบาดเจ็บเอ็นไขว้หน้าเข่า",
      desc:"เอ็นไขว้หน้าเข่าฉีกขาดได้อย่างไร วินิจฉัยอย่างไร และมีทางเลือกการรักษาแบบใดบ้าง อธิบายด้วยภาษาที่เข้าใจง่าย อ่านประกอบแอปนี้ได้",
      source:"Easyortho — รศ. นพ. สรวุฒิ ธรรมยงค์กิจ",
      url:"https://rueortho.vercel.app/conditions/acl-injury/" },
    { icon:"🏃", type:"article", title:"ภาพรวมการฟื้นฟูข้อเข่า",
      desc:"หลักการทั่วไปของโปรแกรมฟื้นฟูข้อเข่า ข้อมูลพื้นฐานที่ช่วยให้เข้าใจว่าทำไมระยะและท่าบริหารในแอปนี้จึงถูกจัดลำดับเช่นนี้",
      source:"Easyortho — รศ. นพ. สรวุฒิ ธรรมยงค์กิจ",
      url:"https://rueortho.vercel.app/rehabilitation/knee-rehab/" }
  ],
}
};

/* ============================= CONFIG ============================= */
const CLINIC_NAME  = { en:"Dr. Sorawut Thamyongkit", th:"นพ.สรวุฒิ ธรรมยงค์กิจ" };
const CLINIC_PHONE = "02 839 6000";
// Apps Script Web App URL for the ACL IKDC-survey sheet.
// This must point at the ACL sheet, not the shoulder app's — the payload shape is different.
// After editing the Apps Script, redeploy as a NEW VERSION or this URL keeps serving the old code.
const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwmRBX8XVfvtF84HqGqvbh0I5wUr9dDrrXGcJZeiCe4G_BHsni355CxLdBSuYSb9PHP/exec";

// Overall phase index: 0 = pre-op, 1-6 = postop phases (postop day 1 = day of surgery).
const POSTOP_BOUNDS = [ [1,14], [15,42], [43,84], [85,150], [151,273], [274,10000] ];
const RING_MAX_DAY = 365;

// Which c.exercises[] source arrays feed each phase tab's checklist.
const EXERCISE_SOURCES = [ [0], [1], [1,2], [2,3], [3,4], [4,5], [6] ];

const EX_ICONS = {
  pre_1:"💪", pre_2:"📏", pre_3:"🔄", pre_4:"🦵", pre_5:"🚶", pre_6:"🩼", pre_7:"🏠",
  p1_1:"📏", p1_2:"💪", p1_3:"🦶", p1_4:"🔄", p1_5:"🦵", p1_6:"⚪", p1_7:"🚶", p1_8:"🧊",
  p2_1:"📐", p2_2:"🚴", p2_3:"🏋️", p2_4:"🎗️", p2_5:"🪜", p2_6:"🦶", p2_7:"⚖️", p2_8:"🔙",
  p3_1:"🦿", p3_2:"🏋️", p3_3:"🪜", p3_4:"🪑", p3_5:"🌉", p3_6:"🦶", p3_7:"⚖️", p3_8:"🏊",
  p4_1:"🚶", p4_2:"🏃", p4_3:"⬆️", p4_4:"🦵", p4_5:"🏋️", p4_6:"🛑", p4_7:"🔙",
  p5_1:"🤸", p5_2:"💨", p5_3:"↔️", p5_4:"⚡", p5_5:"🏀", p5_6:"👥", p5_7:"🏟️",
  p6_1:"🏋️", p6_2:"⚖️", p6_3:"⬇️", p6_4:"🔙", p6_5:"🔥", p6_6:"🏃"
};

/* ============================= RESTRICTION LAYER ============================= */
// One phase engine, plus restriction modifiers that expire. Where two sources disagree,
// resolveRestrictions() keeps the more protective value — so "follow the more protective
// surgical instruction" is a function, not a note in the copy.
const BASE_RESTRICT = { wb:"FWB", wbWeeks:0, flexCeiling:null, flexWeeks:0, braceWeeks:2, pivotWeeks:21, hamWeeks:0, kneelWeeks:0, okcWeeks:6 };

const MENISCUS_PRESETS = {
  none:      null,
  protected: { wb:"PWB", wbWeeks:6, flexCeiling:90, flexWeeks:6, braceWeeks:6, pivotWeeks:24 }
};

const GRAFT_PRESETS = {
  unsure:    {},
  hamstring: { hamWeeks:6 },
  bpb:       { kneelWeeks:12 },
  quad:      { okcWeeks:12 },
  allograft: {}
};

const WB_RANK = { NWB:0, TTWB:1, PWB:2, FWB:3 };

// Merge sources, keeping the most conservative value for each field.
function mergeRestrict(target, src){
  if(!src) return target;
  if(src.wb && src.wbWeeks !== undefined){
    if(WB_RANK[src.wb] < WB_RANK[target.wb] || (WB_RANK[src.wb] === WB_RANK[target.wb] && src.wbWeeks > target.wbWeeks)){
      target.wb = src.wb; target.wbWeeks = src.wbWeeks;
    }
  }
  if(src.flexCeiling != null){
    if(target.flexCeiling == null || src.flexCeiling < target.flexCeiling) target.flexCeiling = src.flexCeiling;
    target.flexWeeks = Math.max(target.flexWeeks, src.flexWeeks || 0);
  }
  ["braceWeeks","pivotWeeks","hamWeeks","kneelWeeks","okcWeeks"].forEach(k=>{
    if(src[k] !== undefined) target[k] = Math.max(target[k], src[k]);
  });
  return target;
}

// Returns the restrictions in force at a given postoperative week.
function resolveRestrictions(week){
  let r = Object.assign({}, BASE_RESTRICT);
  r = mergeRestrict(r, GRAFT_PRESETS[STATE.graft] || {});
  if(STATE.meniscus === "yes") r = mergeRestrict(r, MENISCUS_PRESETS.protected);

  const active = {
    wb:            week < r.wbWeeks ? r.wb : "FWB",
    wbUntil:       week < r.wbWeeks ? r.wbWeeks : null,
    flexCeiling:   week < r.flexWeeks ? r.flexCeiling : null,
    flexUntil:     week < r.flexWeeks ? r.flexWeeks : null,
    brace:         week < r.braceWeeks,
    braceUntil:    week < r.braceWeeks ? r.braceWeeks : null,
    noPivot:       week < r.pivotWeeks,
    pivotUntil:    week < r.pivotWeeks ? r.pivotWeeks : null,
    noHam:         week < r.hamWeeks,
    hamUntil:      week < r.hamWeeks ? r.hamWeeks : null,
    noKneel:       week < r.kneelWeeks,
    kneelUntil:    week < r.kneelWeeks ? r.kneelWeeks : null,
    noOKC:         week < r.okcWeeks,
    okcUntil:      week < r.okcWeeks ? r.okcWeeks : null
  };
  active.strict = active.wb !== "FWB" || active.flexCeiling != null;
  return active;
}

// Requirement tags that actually lock an exercise. "flex" is advisory only.
function exerciseLockReason(reqs, R){
  if(!reqs) return null;
  for(const q of reqs){
    if(q === "fwb"     && R.wb !== "FWB")                     return "fwb";
    if(q === "flex110" && R.flexCeiling != null && R.flexCeiling < 110) return "flex110";
    if(q === "ham"     && R.noHam)                            return "ham";
    if(q === "kneel"   && R.noKneel)                          return "kneel";
    if(q === "okc"     && R.noOKC)                            return "okc";
    // Cutting and pivoting sit above running on the ladder, so the calendar alone must not
    // unlock them while the running checks are still unmet. Report whichever blocker applies,
    // so the reason text points at the step the patient actually has to clear next.
    if(q === "pivot"   && R.noPivot)                          return "pivot";
    if(q === "pivot"   && !runningAllowed())                  return "run";
    if(q === "run"     && !runningAllowed())                  return "run";
  }
  return null;
}
function exerciseAdvisory(reqs, R){
  if(reqs && reqs.indexOf("flex") >= 0 && R.flexCeiling != null) return "flex";
  return null;
}
function runningAllowed(){
  if(STATE.flags && STATE.flags.runCleared === "yes") return true;
  return evalGate("run").status === "pass";
}

/* ============================= STATE ============================= */
let STATE = {
  lang:"th", surgeryDate:null, hn:"", graft:"unsure", meniscus:"none", protection:"standard",
  logDate:null, doneIds:[],
  metricLog:{},   // { quadLSI:[{d:'2026-08-01', v:85}, ...] } — dated so we can chart it
  flags:{},       // { runCleared:'yes', ... }
  ikdc:{},        // { w2:{date, answers, score, idempotencyKey, syncStatus}, w6:{...}, ... w52:{...} }
  consentGiven:false, homeScreenPromptShown:false
};
let currentExPhase = 0;

// Local calendar date, not UTC — toISOString() would roll the day over at
// 07:00 in Thailand (UTC+7) instead of midnight.
function localISO(d){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function todayISO(){ return localISO(new Date()); }

function checkDayRollover(){
  if(STATE.logDate !== todayISO()){
    STATE.logDate = todayISO();
    STATE.doneIds = [];
    return true;
  }
  return false;
}

async function loadState(){
  try{
    const raw = localStorage.getItem('aclcare-app-state');
    if(raw) STATE = Object.assign(STATE, JSON.parse(raw));
  }catch(e){ /* no saved state yet, or storage unavailable (private browsing) */ }
  if(!STATE.metricLog) STATE.metricLog = {};
  if(!STATE.flags) STATE.flags = {};
  if(!STATE.ikdc) STATE.ikdc = {};
  STATE.hn = normalizeHn(STATE.hn); // HNs saved before validation existed may carry stray spaces/Thai digits
  migrateIkdcSyncFields();
  checkDayRollover();
}
// One-time migration for entries saved before idempotency keys/syncStatus
// existed (the old schema only had a `synced` boolean). An entry the old
// code had already marked synced:true is left confirmed as-is — we have no
// idempotencyKey for it to verify against, and re-sending it under a fresh
// key would risk creating a duplicate row on the sheet if the original
// blind POST actually landed. An entry that was never marked synced is
// retried once under the new flow; if its original POST silently
// succeeded server-side despite never being confirmed, that can produce
// one duplicate row — see backend/ikdc-sync.gs's migration note.
function migrateIkdcSyncFields(){
  for(const k in STATE.ikdc){
    const entry = STATE.ikdc[k];
    if(!entry.idempotencyKey) entry.idempotencyKey = genUuidV4();
    if(!entry.syncStatus) entry.syncStatus = entry.synced ? 'confirmed' : 'pending';
    delete entry.synced;
    // An entry already in 'retrying' was sent at least once by an earlier
    // build that didn't track this — assume it reached the server so it
    // isn't blindly re-sent to a backend that can't dedupe.
    if(entry.posted === undefined) entry.posted = entry.syncStatus === 'retrying';
  }
}
async function saveState(){
  try{ localStorage.setItem('aclcare-app-state', JSON.stringify(STATE)); }catch(e){ console.error('save failed', e); }
}
function handleResetApp(){
  if(!confirm(CONTENT[STATE.lang].resetConfirm)) return;
  try{ localStorage.removeItem('aclcare-app-state'); }catch(e){ console.error('reset failed', e); }
  location.reload();
}
document.addEventListener('visibilitychange', () => {
  if(!document.hidden){
    if(checkDayRollover()){ saveState(); renderAll(); }
    trySyncPendingIkdc();
  }
});
window.addEventListener('online', trySyncPendingIkdc);

/* ============================= I18N ============================= */
function t(key){ return CONTENT[STATE.lang][key]; }
function applyStaticI18n(){
  document.querySelectorAll('[data-t]').forEach(el=>{
    const val = CONTENT[STATE.lang][el.getAttribute('data-t')];
    if(typeof val === 'string') el.textContent = val;
  });
  document.documentElement.lang = STATE.lang;
  document.getElementById('btn-lang-en').classList.toggle('active', STATE.lang==='en');
  document.getElementById('btn-lang-th').classList.toggle('active', STATE.lang==='th');
}
function setLang(lang, keepOnboardOpen){
  STATE.lang = lang; saveState(); renderAll();
  if(keepOnboardOpen) refreshOnboardLang();
}
function refreshOnboardLang(){
  const c = CONTENT[STATE.lang];
  // selects hold live values, so repopulate them in the new language
  fillSelect('input-graft',      c.graftOptions,      document.getElementById('input-graft').value);
  fillSelect('input-meniscus',   c.meniscusOptions,   document.getElementById('input-meniscus').value);
  document.getElementById('ob-lang-en').classList.toggle('active', STATE.lang==='en');
  document.getElementById('ob-lang-th').classList.toggle('active', STATE.lang==='th');
}

/* ============================= TIME / PHASE ============================= */
function daySinceOffset(){
  if(!STATE.surgeryDate) return null;
  const surgery = new Date(STATE.surgeryDate+'T00:00:00');
  const now = new Date(); now.setHours(0,0,0,0);
  return Math.round((now - surgery)/86400000);
}
function postopDay(){ const o = daySinceOffset(); return o===null||o<0 ? null : o+1; }
function postopWeek(){ const d = postopDay(); return d===null ? 0 : Math.floor((d-1)/7); }
function currentPhaseIndex(offset){
  if(offset===null || offset<0) return 0;
  const d = offset+1;
  for(let i=0;i<POSTOP_BOUNDS.length;i++){
    if(d>=POSTOP_BOUNDS[i][0] && d<=POSTOP_BOUNDS[i][1]) return i+1;
  }
  return 6;
}

/* ============================= ADD TO HOME SCREEN ============================= */
let deferredInstallPrompt = null;
const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const IS_STANDALONE = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredInstallPrompt = e; });
function maybeShowAddHomePrompt(){
  if(IS_STANDALONE || STATE.homeScreenPromptShown) return;
  document.getElementById('addhome-steps').classList.add('hidden');
  document.getElementById('addhome-buttons').classList.remove('hidden');
  document.getElementById('addhome-modal').classList.remove('hidden');
}
async function acceptAddHome(){
  const c = CONTENT[STATE.lang];
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    try{ await deferredInstallPrompt.userChoice; }catch(e){}
    deferredInstallPrompt = null;
    closeAddHomePrompt();
  } else {
    document.getElementById('addhome-steps-text').textContent = IS_IOS ? c.addHomeIOSSteps : c.addHomeGenericSteps;
    document.getElementById('addhome-steps').classList.remove('hidden');
    document.getElementById('addhome-buttons').classList.add('hidden');
  }
}
function closeAddHomePrompt(){
  STATE.homeScreenPromptShown = true; saveState();
  document.getElementById('addhome-modal').classList.add('hidden');
}

/* ============================= IKDC SUBJECTIVE KNEE EVALUATION =============================
 * Best-effort transcription of the standard 18-item IKDC form (2000, Irrgang et al.) from
 * trained knowledge — this environment could not reach any external medical/document site to
 * verify against the official scoring manual (network egress blocked). Item wording, response
 * options and the scoring formula below should be checked against the official IKDC form and
 * scoring instructions by the care team before the score is relied on clinically. Preferably
 * source a published, validated Thai translation for the Thai copy rather than translating the
 * English text directly. */
const IKDC_TIMEPOINTS = [
  { key:'w2',  day:14  },
  { key:'w6',  day:42  },
  { key:'w12', day:84  },
  { key:'w25', day:175 },
  { key:'w52', day:364 }
];
const IKDC_WINDOW_OPEN_DAYS = 7; // the due card opens this many days before the target day; no hard close

// scale: 'activity5' (5-tier, 4..0), 'stiff5' (5-tier, 4..0), 'diff5' (5-tier, 4..0),
// 'lock' (No=1/Yes=0), 'vas10'/'func10' (0..10). scored:false items are collected but excluded.
const IKDC_ITEMS = [
  { id:"q1",  scale:"activity5" },
  { id:"q2",  scale:"vas10" },
  { id:"q3",  scale:"vas10" },
  { id:"q4",  scale:"stiff5" },
  { id:"q5",  scale:"activity5" },
  { id:"q6",  scale:"lock" },
  { id:"q7",  scale:"activity5" },
  { id:"q8",  scale:"activity5" },
  { id:"q9a", scale:"diff5" },
  { id:"q9b", scale:"diff5" },
  { id:"q9c", scale:"diff5" },
  { id:"q9d", scale:"diff5" },
  { id:"q9e", scale:"diff5" },
  { id:"q9f", scale:"diff5" },
  { id:"q9g", scale:"diff5" },
  { id:"q9h", scale:"diff5" },
  { id:"q9i", scale:"diff5" },
  { id:"q10a", scale:"func10" },
  { id:"q10b", scale:"func10", scored:false }
];
const IKDC_SCORED_ITEMS = IKDC_ITEMS.filter(it => it.scored !== false);
const IKDC_RAW_MAX = 87; // sum of best-case points across all 18 scored items (self-consistent with the scales above)

function ikdcDueTimepoint(){
  const day = postopDay();
  if(day === null) return null;
  for(const tp of IKDC_TIMEPOINTS){
    if(!STATE.ikdc[tp.key] && day >= tp.day - IKDC_WINDOW_OPEN_DAYS) return tp;
  }
  return null;
}
function computeIkdcScore(answers){
  let sum = 0, count = 0;
  IKDC_SCORED_ITEMS.forEach(it=>{
    const v = answers[it.id];
    if(typeof v === 'number'){ sum += v; count++; }
  });
  if(count === 0) return null;
  // Missing answers are pro-rated using the mean of the items that were answered.
  const prorated = (sum / count) * IKDC_SCORED_ITEMS.length;
  return Math.round(Math.max(0, Math.min(100, (prorated / IKDC_RAW_MAX) * 100)));
}

let ikdcFormKey = null;
let ikdcAnswers = {};

function renderIkdcCard(){
  const c = CONTENT[STATE.lang];
  const wrap = document.getElementById('ikdc-wrap');
  if(!wrap) return;
  const due = ikdcDueTimepoint();
  let html = '';
  if(due){
    const day = postopDay();
    const overdue = day !== null && day > due.day + IKDC_WINDOW_OPEN_DAYS;
    html += `<div class="gate-card fail">
      <div class="gate-title">${c.ikdcTitle}</div>
      <div class="gate-sub">${c.ikdcTimepointLabels[due.key]} — ${overdue ? c.ikdcOverdueNote : c.ikdcIntro}</div>
      <button class="primary-btn" data-action="open-ikdc-form" data-key="${due.key}">${c.ikdcOpenBtn}</button>
    </div>`;
  }
  html += ikdcSyncStatusHtml();
  html += ikdcHistoryHtml();
  wrap.innerHTML = html;
}
// Small status line for the most recent not-yet-confirmed submission.
// Confirmed entries show nothing here — once acknowledged, there's nothing
// left to communicate.
function ikdcSyncStatusHtml(){
  const c = CONTENT[STATE.lang];
  const pendingKeys = IKDC_TIMEPOINTS
    .map(tp=>tp.key)
    .filter(k => STATE.ikdc[k] && STATE.ikdc[k].syncStatus !== 'confirmed');
  if(!pendingKeys.length) return '';
  const mostRecent = pendingKeys[pendingKeys.length-1];
  const entry = STATE.ikdc[mostRecent];
  const label = !isValidHn(STATE.hn) ? c.ikdcSyncNeedsHn
    : entry.syncStatus === 'retrying' ? c.ikdcSyncRetrying
    : c.ikdcSyncPending;
  return `<div class="ikdc-sync-status" id="ikdc-sync-status">
    <span class="ikdc-sync-dot"></span>${label}
  </div>`;
}
function ikdcHistoryHtml(){
  const c = CONTENT[STATE.lang];
  const series = IKDC_TIMEPOINTS
    .filter(tp => STATE.ikdc[tp.key])
    .map(tp => ({ d: STATE.ikdc[tp.key].date, v: STATE.ikdc[tp.key].score }));
  if(series.length < 2) return '';
  const latest = series[series.length-1].v;
  return `<div class="metric-card">
    <div class="metric-top"><div class="metric-name">${c.ikdcHistoryTitle}</div><div class="metric-latest">${latest}</div></div>
    ${sparkSvg(series, {target:100, better:'up', min:0, max:100})}
  </div>`;
}

function ikdcOptionRow(item){
  const c = CONTENT[STATE.lang];
  const sel = ikdcAnswers[item.id];
  let options; // array of {label, value}
  if(item.scale === 'activity5'){
    options = [
      { label:c.ikdcActivityOptions.hi4, value:4 },
      { label:c.ikdcActivityOptions.hi3, value:3 },
      { label:c.ikdcActivityOptions.hi2, value:2 },
      { label:c.ikdcActivityOptions.hi1, value:1 },
      { label:c.ikdcActivityZero[item.id], value:0 }
    ];
  } else if(item.scale === 'stiff5'){
    options = c.ikdcStiffOptions.map((label,i)=>({label, value:4-i}));
  } else if(item.scale === 'diff5'){
    options = c.ikdcDiffOptions.map((label,i)=>({label, value:4-i}));
  } else if(item.scale === 'lock'){
    options = [ { label:c.ikdcLockOptions[0], value:1 }, { label:c.ikdcLockOptions[1], value:0 } ];
  }
  if(options){
    const rows = options.map(o=>
      `<div class="ikdc-opt ${sel===o.value?'selected':''}" data-action="select-ikdc-option" data-id="${item.id}" data-value="${o.value}">${o.label}</div>`
    ).join('');
    return `<div class="ikdc-q" id="ikdc-q-${item.id}"><div class="ikdc-q-label">${c.ikdcLabels[item.id]}</div>${rows}</div>`;
  }
  // vas10 / func10 — 0..10 scale, reuses the pain-dot look
  const endLabels = c.ikdcVasLabels[item.id];
  const dots = Array.from({length:11}, (_,i)=>
    `<div class="pain-dot ${sel===i?'selected':''}" data-action="select-ikdc-option" data-id="${item.id}" data-value="${i}">${i}</div>`
  ).join('');
  return `<div class="ikdc-q" id="ikdc-q-${item.id}">
    <div class="ikdc-q-label">${c.ikdcLabels[item.id]}</div>
    <div class="pain-scale">${dots}</div>
    <div class="pain-scale-labels"><span>${endLabels[0]}</span><span>${endLabels[1]}</span></div>
  </div>`;
}
function ikdcFormHtml(){
  const c = CONTENT[STATE.lang];
  const bySection = [
    { title:c.ikdcSectionSymptoms, note:c.ikdcInstructionActivity, ids:["q1","q2","q3","q4","q5","q6","q7"] },
    { title:c.ikdcSectionSports,   note:c.ikdcInstructionActivity, ids:["q8"] },
    { title:c.ikdcSectionFunction, note:c.ikdcInstructionQ9,       ids:["q9a","q9b","q9c","q9d","q9e","q9f","q9g","q9h","q9i","q10a","q10b"] }
  ];
  return bySection.map(sec=>{
    const rows = sec.ids.map(id => ikdcOptionRow(IKDC_ITEMS.find(it=>it.id===id))).join('');
    return `<div class="ikdc-section"><h3>${sec.title}</h3><p class="muted" style="font-size:12.5px;">${sec.note}</p>${rows}</div>`;
  }).join('') + `<div class="checkin-validation" id="ikdc-validation"></div>`;
}
function selectIkdcOption(id, value){
  ikdcAnswers[id] = value;
  document.getElementById('ikdc-validation').textContent = '';
  document.getElementById('ikdc-modal-body').innerHTML = ikdcFormHtml();
}
function openIkdcForm(key){
  ikdcFormKey = key;
  ikdcAnswers = {};
  document.getElementById('ikdc-modal-body').innerHTML = ikdcFormHtml();
  document.getElementById('ikdc-modal').classList.remove('hidden');
}
function closeIkdcForm(){
  document.getElementById('ikdc-modal').classList.add('hidden');
  ikdcFormKey = null;
}
async function submitIkdcForm(){
  const c = CONTENT[STATE.lang];
  const missing = IKDC_ITEMS.find(it => typeof ikdcAnswers[it.id] !== 'number');
  if(missing){
    document.getElementById('ikdc-validation').textContent = c.ikdcValidation;
    const el = document.getElementById('ikdc-q-'+missing.id);
    if(el){
      el.classList.add('missing');
      el.scrollIntoView({behavior:'smooth', block:'center'});
    }
    return;
  }
  const score = computeIkdcScore(ikdcAnswers);
  const key = ikdcFormKey;
  STATE.ikdc[key] = {
    date: todayISO(),
    answers: Object.assign({}, ikdcAnswers),
    score,
    idempotencyKey: genUuidV4(),
    syncStatus: 'pending', // 'pending' | 'retrying' | 'confirmed' — see syncOneIkdc()
    posted: false          // true once a POST has reached the server
  };
  saveState();
  closeIkdcForm();
  renderIkdcCard();
  await syncOneIkdc(key);
}

/* ============================= METRICS ============================= */
// Every numeric measurement is stored as a dated series so the Progress tab can chart it.
const METRIC_KEYS  = ["extDeficit","flexion","quadLSI","hamLSI","hopLSI"];
const FLAG_KEYS    = ["noLimp","offCrutches","runCleared"];
// target line drawn on each chart, and which direction counts as improving
const METRIC_META = {
  extDeficit:{ target:0,   better:"down", min:0,  max:15  },
  flexion:   { target:125, better:"up",   min:0,  max:140 },
  quadLSI:   { target:90,  better:"up",   min:0,  max:100 },
  hamLSI:    { target:90,  better:"up",   min:0,  max:100 },
  hopLSI:    { target:90,  better:"up",   min:0,  max:100 }
};

function metricSeries(key){
  const s = (STATE.metricLog && STATE.metricLog[key]) || [];
  return s.slice().sort((a,b)=> a.d < b.d ? -1 : 1);
}
function latestVal(key){
  const s = metricSeries(key);
  return s.length ? s[s.length-1].v : null;
}
function addMetric(key){
  const input = document.getElementById('mi-'+key);
  if(!input) return;
  const raw = input.value.trim();
  if(raw === '') return;
  const v = Number(raw);
  if(isNaN(v)) return;
  if(!STATE.metricLog[key]) STATE.metricLog[key] = [];
  const today = todayISO();
  const existing = STATE.metricLog[key].find(p=>p.d===today);
  if(existing) existing.v = v; else STATE.metricLog[key].push({d:today, v:v});
  input.value = '';
  saveState(); renderProgress(); renderExerciseList();
}
function undoMetric(key){
  const s = metricSeries(key);
  if(!s.length) return;
  const last = s[s.length-1];
  STATE.metricLog[key] = STATE.metricLog[key].filter(p=>!(p.d===last.d && p.v===last.v));
  saveState(); renderProgress(); renderExerciseList();
}
function setFlag(key, value){
  if(!STATE.flags) STATE.flags = {};
  STATE.flags[key] = (STATE.flags[key] === value) ? '' : value;
  saveState(); renderProgress(); renderExerciseList();
}

/* ============================= GATES ============================= */
// ok === true (met), false (not met), null (not measured yet)
function gte(v, n){ return v===null ? null : v >= n; }
function lte(v, n){ return v===null ? null : v <= n; }
function flagOk(key){
  const f = STATE.flags && STATE.flags[key];
  return (f === undefined || f === '' || f === null) ? null : f === 'yes';
}
function evalGate(which){
  const R = resolveRestrictions(postopWeek());
  const w = postopWeek();
  const d = postopDay();
  const items = [];
  const push = (key, ok)=> items.push({key, ok});

  if(which === "run"){
    push("week12", d===null ? null : w >= 12);
    push("ext", lte(latestVal("extDeficit"), 0));
    push("flex", gte(latestVal("flexion"), 125));
    push("quad80", gte(latestVal("quadLSI"), 80));
    push("ham80", gte(latestVal("hamLSI"), 80));
    push("noRestrict", R.wb === "FWB" && R.flexCeiling == null);
  } else {
    push("month9", d===null ? null : d >= 274);
    push("ext", lte(latestVal("extDeficit"), 0));
    push("flex", gte(latestVal("flexion"), 125));
    push("quad90", gte(latestVal("quadLSI"), 90));
    push("ham90", gte(latestVal("hamLSI"), 90));
    push("hop90", gte(latestVal("hopLSI"), 90));
    push("runCleared", flagOk("runCleared"));
  }

  let status = "pass";
  if(items.some(i=>i.ok === false)) status = "fail";
  else if(items.some(i=>i.ok === null)) status = "unknown";
  return { items, status };
}

/* ============================= RENDER: HOME ============================= */
function renderRestrictions(){
  const c = CONTENT[STATE.lang];
  const wrap = document.getElementById('restrict-wrap');
  if(daySinceOffset()===null || daySinceOffset()<0){ wrap.innerHTML=''; return; }
  const R = resolveRestrictions(postopWeek());
  const rows = [];
  const until = (w)=> w==null ? '' : `<span class="restrict-until">${c.untilWeek(w)}</span>`;

  if(R.wb !== "FWB")      rows.push([c.restrictWB,   c.wbValues[R.wb],   R.wbUntil]);
  if(R.flexCeiling!=null) rows.push([c.restrictFlex, R.flexCeiling+"°",  R.flexUntil]);
  if(R.brace)             rows.push([c.restrictBrace,c.braceValue,       R.braceUntil]);
  if(R.noHam)             rows.push([c.restrictHam,  c.hamValue,         R.hamUntil]);
  if(R.noKneel)           rows.push([c.restrictKneel,c.kneelValue,       R.kneelUntil]);
  if(R.noPivot)           rows.push([c.restrictPivot,c.pivotValue,       R.pivotUntil]);

  if(!rows.length){ wrap.innerHTML=''; return; }
  wrap.innerHTML = `
    <div class="restrict-card ${R.strict?'strict':''}">
      ${rows.map(r=>`<div class="restrict-row"><div class="restrict-label">${r[0]}</div><div class="restrict-value">${r[1]}${until(r[2])}</div></div>`).join('')}
    </div>`;
}

function renderHome(){
  const c = CONTENT[STATE.lang];
  const offset = daySinceOffset();
  const isPreop = offset!==null && offset < 0;
  const pDay = offset!==null ? offset + 1 : null;
  const phaseIdx = currentPhaseIndex(offset);
  const ringDayEl = document.getElementById('ring-day');
  const dayLabelEl = document.getElementById('ring-daylabel');
  const chipEl = document.getElementById('ring-phase-chip');
  const descEl = document.getElementById('ring-phase-desc');
  const ringFg = document.getElementById('ring-fg');
  const circumference = 440;

  if(offset===null){
    ringDayEl.textContent = "—";
    dayLabelEl.textContent = c.dayLabel;
    chipEl.textContent = c.noDateChip;
    descEl.textContent = c.noDateDesc;
    ringFg.style.strokeDashoffset = circumference;
  } else if(isPreop){
    ringDayEl.textContent = -offset;
    dayLabelEl.textContent = c.untilLabel;
    chipEl.textContent = c.phaseNames[0] + " · " + c.phaseWeeks[0];
    descEl.textContent = c.phaseTitles[0] + " — " + c.phaseDesc[0];
    ringFg.style.strokeDashoffset = circumference;
  } else {
    ringDayEl.textContent = pDay;
    dayLabelEl.textContent = c.dayLabel;
    if(pDay > RING_MAX_DAY){
      chipEl.textContent = c.completeChip;
      descEl.textContent = c.completeDesc;
      ringFg.style.strokeDashoffset = 0;
    } else {
      chipEl.textContent = c.phaseNames[phaseIdx] + " · " + c.phaseWeeks[phaseIdx];
      descEl.textContent = c.phaseTitles[phaseIdx] + " — " + c.phaseDesc[phaseIdx];
      ringFg.style.strokeDashoffset = circumference * (1 - Math.min(pDay/RING_MAX_DAY, 1));
    }
  }

  const stepper = document.getElementById('home-stepper');
  stepper.innerHTML = c.phaseShort.map((label,i)=>{
    let cls = 'step';
    if(offset!==null){
      const complete = !isPreop && pDay > RING_MAX_DAY;
      if(i < phaseIdx || complete) cls += ' done';
      else if(i === phaseIdx && !complete) cls += ' current';
    }
    return `<div class="${cls}"><div class="dot">${i+1}</div><div class="lbl">${label}</div></div>`;
  }).join('');

  const reminders = c.todayReminders[phaseIdx] || c.todayReminders[0];
  document.getElementById('today-reminders').innerHTML = reminders.map(r=>`• ${r}`).join('<br><br>');
  const goals = c.goals[phaseIdx] || c.goals[0];
  document.getElementById('goals-list').innerHTML = goals.map(g=>`<div class="goal-item">🎯 ${g}</div>`).join('');
  document.getElementById('healing-list').innerHTML = c.healingItems.map(g=>'• '+g).join('<br><br>');
  document.getElementById('header-hn').textContent = STATE.hn ? (c.hnPrefix + STATE.hn) : '';
  document.getElementById('surgeon-name').textContent = CLINIC_NAME[STATE.lang] || CLINIC_NAME.en;
  renderWatermark();

  renderRestrictions();
  renderIkdcCard();
}

/* ============================= IKDC SYNC ============================= */
// Generates a RFC4122-ish v4 UUID without relying on crypto.randomUUID(),
// which requires a secure context and isn't reliably available on file://.
// crypto.getRandomValues() has no such restriction.
function genUuidV4(){
  const bytes = new Uint8Array(16);
  if(window.crypto && crypto.getRandomValues){ crypto.getRandomValues(bytes); }
  else { for(let i=0;i<16;i++) bytes[i] = Math.floor(Math.random()*256); }
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10
  const hex = [...bytes].map(b=>b.toString(16).padStart(2,'0'));
  return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`;
}

// Best-effort: fires the write. Apps Script web apps don't reliably return
// readable CORS headers on POST, so this alone never confirms anything —
// confirmSyncStatus() below is what actually marks an entry confirmed.
// A hung/unreachable network must never stall the UI indefinitely — every
// sync-related fetch is bounded by this timeout.
const IKDC_SYNC_TIMEOUT_MS = 8000;
function fetchWithTimeout(url, opts){
  const ctrl = new AbortController();
  const timer = setTimeout(()=>ctrl.abort(), IKDC_SYNC_TIMEOUT_MS);
  return fetch(url, Object.assign({}, opts, {signal: ctrl.signal})).finally(()=>clearTimeout(timer));
}
// Post-op day on which the assessment was taken — not "today", since an
// upload can be retried days after the survey was actually filled in.
function postopDayOn(isoDate){
  if(!STATE.surgeryDate) return null;
  const surgery = new Date(STATE.surgeryDate+'T00:00:00');
  const on = new Date(isoDate+'T00:00:00');
  return Math.round((on - surgery)/86400000) + 1;
}
async function postIkdcSubmission(key, entry){
  const payload = {
    type: 'ikdc',
    idempotencyKey: entry.idempotencyKey,
    timepoint: key,
    date: entry.date,
    hn: STATE.hn,
    surgeryDate: STATE.surgeryDate || "",
    postopDay: postopDayOn(entry.date),
    graft: STATE.graft,
    meniscusRepair: STATE.meniscus === "yes" ? STATE.protection : "none",
    score: entry.score,
    answers: entry.answers
  };
  await fetchWithTimeout(SHEET_WEBHOOK_URL, {
    method:'POST',
    mode:'no-cors', // Apps Script web apps don't return CORS headers; response is opaque
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body: JSON.stringify(payload)
  });
}

// Reads a real, readable ack. GET requests to an Apps Script /exec URL are,
// in practice, more reliably readable cross-origin than POST responses —
// see backend/ikdc-sync.gs for the server side and how to verify this
// against your actual deployment. Returns:
//   'found'     — the backend has this submission; safe to mark confirmed.
//   'not_found' — the backend answered in the new contract's format and does
//                 NOT have it. This also proves the deduplicating backend is
//                 live, so re-sending is safe.
//   'unknown'   — offline, blocked, rate-limited, or a backend that doesn't
//                 speak this contract (e.g. the pre-hardening Apps Script).
async function confirmSyncStatus(idempotencyKey){
  try{
    const url = SHEET_WEBHOOK_URL + '?action=status&key=' + encodeURIComponent(idempotencyKey);
    const res = await fetchWithTimeout(url, { method:'GET' }); // defaults to mode:'cors'
    if(!res.ok) return 'unknown';
    const data = await res.json();
    if(data && data.ok === true && data.found === true) return 'found';
    if(data && data.ok === true && data.found === false) return 'not_found';
    return 'unknown';
  }catch(err){
    console.warn('IKDC status check failed, will retry later:', err);
    return 'unknown';
  }
}

// Several triggers (submit, app load, tab refocus, coming back online) can
// fire close together; one upload per entry at a time is enough.
const ikdcSyncInFlight = new Set();

async function syncOneIkdc(key){
  const entry = STATE.ikdc[key];
  if(!entry || entry.syncStatus === 'confirmed') return;
  if(!SHEET_WEBHOOK_URL) return; // backend not configured yet — entry stays saved locally
  // The backend rejects a missing/malformed HN, so sending one would just
  // fail forever. Wait until the patient adds/fixes it (the status line
  // tells them how); saveOnboard() retries as soon as they do.
  if(!isValidHn(STATE.hn)){ renderIkdcCard(); return; }
  if(ikdcSyncInFlight.has(key)) return;
  ikdcSyncInFlight.add(key);
  try{
    if(!entry.idempotencyKey) entry.idempotencyKey = genUuidV4(); // migrated pre-idempotency entry

    // Once a POST has reached the server, sending it again is only safe if
    // the backend is known to dedupe on idempotencyKey. The pre-hardening
    // Apps Script appends a row for every POST and can't answer status
    // checks, so against it a blind re-send on every app open would pile up
    // duplicate rows. Re-send only after the backend has explicitly said
    // "not found" (which only the deduplicating backend can say).
    let status = entry.posted ? await confirmSyncStatus(entry.idempotencyKey) : 'unknown';
    if(status !== 'found' && (!entry.posted || status === 'not_found')){
      try{
        await postIkdcSubmission(key, entry); // resolves only if the request reached the server
        entry.posted = true;
      }catch(err){ console.warn('IKDC submit failed, will retry later:', err); }
      status = await confirmSyncStatus(entry.idempotencyKey);
    }
    if(status === 'found') entry.syncStatus = 'confirmed';
    else if(entry.syncStatus === 'pending') entry.syncStatus = 'retrying';
    saveState();
    renderIkdcCard();
  } finally {
    ikdcSyncInFlight.delete(key);
  }
}
async function trySyncPendingIkdc(){
  for(const k in STATE.ikdc){ if(STATE.ikdc[k].syncStatus !== 'confirmed') await syncOneIkdc(k); }
}

/* ============================= RENDER: CARE ============================= */
const CARE_MEDIA_KEYS = [
  "before_surgery","heel_prop","crutches_weightbearing","brace","swelling_ice",
  "wound_care","showering","positioning_sleep","blood_clots","driving_activity",
  "smoking_nicotine","meniscus_repair","followup_visits"
];
function careMediaBlock(key, label){
  return `
    <div class="care-video" id="carevid-${key}" data-action="open-media" data-kind="care" data-key="${key}">
      <video class="care-video-el" muted preload="metadata" playsinline
        data-media-fig="carevid-${key}" data-media-key="${key}" data-media-imgclass="care-video-img" data-media-mode="remove"
        src="videos/${key}.mp4"></video>
      <div class="care-video-play-badge">▶</div>
      <div class="care-video-caption-bar">${label||''}</div>
    </div>`;
}
function renderCare(){
  const c = CONTENT[STATE.lang];
  document.getElementById('care-accordion').innerHTML = c.care.map((sec,i)=>`
    <div class="acc-item" id="acc-${i}">
      <button class="acc-head" data-action="toggle-acc" data-idx="${i}">
        <div class="acc-icon">${sec.icon}</div>
        <div class="acc-title">${sec.title}</div>
        <svg class="acc-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="acc-body">${careMediaBlock(CARE_MEDIA_KEYS[i], sec.title)}<ul>${sec.items.map(it=>`<li>${it}</li>`).join('')}</ul></div>
    </div>`).join('');
}
function toggleAcc(i){ document.getElementById('acc-'+i).classList.toggle('open'); }

/* ============================= RENDER: EXERCISES ============================= */
function renderExercisePhaseTabs(){
  const c = CONTENT[STATE.lang];
  const offset = daySinceOffset();
  const activeIdx = offset===null ? 0 : Math.min(currentPhaseIndex(offset), c.phaseNames.length-1);
  if(currentExPhase===null || currentExPhase===undefined) currentExPhase = activeIdx;
  document.getElementById('ex-phase-tabs').innerHTML = c.phaseNames.map((name,i)=>{
    if(i > activeIdx) return ''; // don't show phases the patient hasn't reached yet
    const cls = ['phase-tab'];
    if(i===currentExPhase) cls.push('active');
    if(i===activeIdx && offset!==null) cls.push('is-current');
    if(i<activeIdx) cls.push('past');
    let marker = '';
    if(i===activeIdx && offset!==null) marker = '<span class="phase-tab-dot"></span>';
    else if(i<activeIdx) marker = '<span class="phase-tab-review">✓</span>';
    return `<button class="${cls.join(' ')}" data-action="select-ex-phase" data-idx="${i}">${name}${marker}</button>`;
  }).join('');
}
function selectExPhase(i){ currentExPhase = i; renderExerciseList(); renderExercisePhaseTabs(); }

function renderExerciseList(){
  const c = CONTENT[STATE.lang];
  const R = resolveRestrictions(postopWeek());
  const offset = daySinceOffset();
  const activeIdx = offset===null ? 0 : Math.min(currentPhaseIndex(offset), c.phaseNames.length-1);
  const isViewingCurrent = currentExPhase === activeIdx;
  const exList = EXERCISE_SOURCES[currentExPhase].flatMap(src => c.exercises[src]);
  const doneSet = new Set(STATE.doneIds);

  // Progress always reflects the patient's real current phase, regardless of which
  // phase tab they're browsing — other phases are for reference only, not checkable.
  const currentExList = EXERCISE_SOURCES[activeIdx].flatMap(src => c.exercises[src]);
  const available = currentExList.filter(ex => !exerciseLockReason(ex.req, R));
  const doneCount = available.filter(e=>doneSet.has(e.id)).length;
  document.getElementById('ex-progress-fill').style.width = (available.length ? (doneCount/available.length*100) : 0)+'%';
  document.getElementById('ex-progress-label').textContent = c.progressLabel(doneCount, available.length);

  let html = `<div class="ex-phase-def"><strong>${c.phaseWeeks[currentExPhase]} · ${c.phaseTitles[currentExPhase]}</strong><br>${c.phaseDesc[currentExPhase]}</div>`;
  if(!isViewingCurrent) html += `<div class="ex-caution">ℹ️ ${c.exercisePhaseReadonly}</div>`;
  const caution = c.exerciseCaution[currentExPhase];
  if(caution) html += `<div class="ex-caution">${currentExPhase===0?'ℹ️':'⚠'} ${caution}</div>`;

  html += exList.map(ex=>{
    const lock = exerciseLockReason(ex.req, R);
    const advisory = lock ? null : exerciseAdvisory(ex.req, R);
    const checked = doneSet.has(ex.id);
    const readonly = !isViewingCurrent;
    const left = lock
      ? `<div class="ex-lock">🔒</div>`
      : `<div class="ex-check ${checked?'checked':''} ${readonly?'readonly':''}" ${readonly?'':`data-action="toggle-exercise" data-id="${ex.id}"`}><svg viewBox="0 0 24 24"><polyline points="4,13 9,18 20,6"/></svg></div>`;
    const reason = (lock || advisory) ? `<div class="ex-lock-reason">${c.lockReason[lock || advisory]}</div>` : '';
    return `
      <div class="ex-row ${lock?'locked':''}">
        ${left}
        <div class="ex-figure" id="fig-${ex.id}" data-action="open-media" data-kind="ex" data-key="${ex.id}">
          <span class="ex-figure-fallback">${EX_ICONS[ex.id] || "🖼"}</span>
          <video class="ex-figure-video" muted preload="metadata" playsinline
            data-media-fig="fig-${ex.id}" data-media-key="${ex.id}" data-media-imgclass="ex-figure-image" data-media-mode="keep"
            src="videos/${ex.id}.mp4"></video>
          <span class="ex-figure-play">▶</span>
        </div>
        <div class="ex-body" data-action="open-media" data-kind="ex" data-key="${ex.id}">
          <div class="ex-name ${checked && !lock ?'checked-text':''}">${ex.name}</div>
          <div class="ex-desc">${ex.desc}</div>
          ${reason}
        </div>
      </div>`;
  }).join('');
  document.getElementById('ex-list').innerHTML = html;
}
function toggleExercise(id){
  const idx = STATE.doneIds.indexOf(id);
  if(idx>=0) STATE.doneIds.splice(idx,1); else STATE.doneIds.push(id);
  saveState(); renderExerciseList();
}

/* ============================= RENDER: PROGRESS ============================= */
function gateCardHtml(which, title, sub, openFrom){
  const c = CONTENT[STATE.lang];
  const phaseIdx = currentPhaseIndex(daySinceOffset());
  if(phaseIdx < openFrom){
    return `<div class="gate-card"><div class="gate-title">${title}</div><div class="gate-sub">${c.gateNotYet}</div></div>`;
  }
  const g = evalGate(which);
  const verdict = g.status==='pass' ? c.gatePass : (g.status==='fail' ? c.gateFail : c.gateUnknown);
  const vCls = g.status==='pass' ? 'pass' : 'fail';
  const rows = g.items.map(i=>{
    const mark = i.ok===true ? '\u2705' : (i.ok===false ? '\u26a0\ufe0f' : '\u2013');
    const cls  = i.ok===true ? 'met' : (i.ok===false ? 'unmet' : 'unknown');
    return `<div class="crit-row ${cls}"><div class="crit-mark">${mark}</div><div class="crit-text">${c.crit[i.key]}</div></div>`;
  }).join('');
  return `<div class="gate-card ${vCls}">
    <div class="gate-title">${title}</div>
    <div class="gate-sub">${sub}</div>
    <div class="gate-verdict ${vCls}">${verdict}</div>
    ${rows}
  </div>`;
}

/* Inline SVG line chart. No charting library — keeps this a single portable file. */
function sparkSvg(series, meta){
  const W=300, H=64, PL=4, PR=4, PT=9, PB=9;
  const vals = series.map(p=>p.v);
  let lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
  if(meta){
    if(meta.target != null){ lo = Math.min(lo, meta.target); hi = Math.max(hi, meta.target); }
    if(meta.min != null) lo = Math.min(lo, meta.min);
    if(meta.max != null) hi = Math.max(hi, meta.max);
  }
  if(hi === lo){ hi = lo + 1; lo = lo - 1; }
  const n = series.length;
  const X = i => PL + (W-PL-PR) * (n===1 ? 0.5 : i/(n-1));
  const Y = v => PT + (H-PT-PB) * (1 - (v-lo)/(hi-lo));

  const pts = series.map((p,i)=> X(i).toFixed(1)+','+Y(p.v).toFixed(1));
  const area = `M ${X(0).toFixed(1)},${(H-PB).toFixed(1)} L ` + pts.join(' L ') + ` L ${X(n-1).toFixed(1)},${(H-PB).toFixed(1)} Z`;
  const target = (meta && meta.target != null)
    ? `<line class="spark-target" x1="${PL}" y1="${Y(meta.target).toFixed(1)}" x2="${W-PR}" y2="${Y(meta.target).toFixed(1)}"/>` : '';
  const dots = series.map((p,i)=>
    `<circle class="spark-pt ${i===n-1?'last':''}" cx="${X(i).toFixed(1)}" cy="${Y(p.v).toFixed(1)}" r="${i===n-1?3.6:2.4}"/>`).join('');

  return `<div class="spark">
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img">
      ${target}<path class="spark-area" d="${area}"/><polyline class="spark-line" points="${pts.join(' ')}"/>${dots}
    </svg>
    <div class="spark-dates"><span>${fmtShortDate(series[0].d)}</span><span>${fmtShortDate(series[n-1].d)}</span></div>
  </div>`;
}
function fmtShortDate(iso){
  const d = new Date(iso+'T00:00:00');
  return d.toLocaleDateString(STATE.lang==='th'?'th-TH':'en-GB', {day:'numeric', month:'short'});
}

function metricCardHtml(key){
  const c = CONTENT[STATE.lang];
  const meta = METRIC_META[key];
  const unit = (c.metricUnits && c.metricUnits[key]) || '';
  const series = metricSeries(key);
  const hint = c.metricHints[key] ? `<div class="metric-sub">${c.metricHints[key]}</div>` : '';

  let latest = `<div class="metric-latest none">${c.metricNoReadings}</div>`;
  if(series.length){
    const v = series[series.length-1].v;
    let delta = '';
    if(series.length > 1){
      const diff = v - series[series.length-2].v;
      if(diff !== 0){
        const improving = meta.better === 'up' ? diff > 0 : diff < 0;
        delta = `<span class="metric-delta ${improving?'good':'bad'}">${diff>0?'+':''}${Math.round(diff*10)/10}</span>`;
      }
    }
    latest = `<div class="metric-latest">${v}${unit}${delta}</div>`;
  }

  const chart = series.length >= 2
    ? sparkSvg(series, meta)
    : `<div class="spark-empty">${series.length ? c.metricNeedMore : c.metricNoReadings}</div>`;

  const history = series.length
    ? `<div class="metric-hist">${c.metricReadings(series.length)} · <button data-action="undo-metric" data-key="${key}">${c.metricUndo}</button></div>`
    : '';

  return `<div class="metric-card">
    <div class="metric-top"><div class="metric-name">${c.metrics[key]}</div>${latest}</div>
    ${hint}
    ${chart}
    <div class="metric-entry">
      <input type="number" inputmode="decimal" id="mi-${key}" placeholder="${c.metricPlaceholder}${unit?' ('+unit+')':''}"
             data-enter-action="add-metric" data-key="${key}">
      <button data-action="add-metric" data-key="${key}">${c.metricAdd}</button>
    </div>
    ${history}
  </div>`;
}

function flagCardHtml(){
  const c = CONTENT[STATE.lang];
  const rows = FLAG_KEYS.map(key=>{
    const v = (STATE.flags && STATE.flags[key]) || '';
    return `<div class="metric-row">
      <div class="metric-label">${c.metrics[key]}</div>
      <div class="yn-group">
        <button class="yn-btn ${v==='yes'?'on':''}" data-action="set-flag" data-key="${key}" data-value="yes">${c.yes}</button>
        <button class="yn-btn ${v==='no'?'on':''}" data-action="set-flag" data-key="${key}" data-value="no">${c.no}</button>
      </div>
    </div>`;
  }).join('');
  return `<div class="card">${rows}</div>`;
}

function renderProgress(){
  const c = CONTENT[STATE.lang];
  document.getElementById('gates-wrap').innerHTML =
      gateCardHtml("run", c.runGateTitle, c.runGateSub, 3)
    + gateCardHtml("rts", c.rtsGateTitle, c.rtsGateSub, 4);

  document.getElementById('metrics-wrap').innerHTML =
      `<p class="progress-label" style="margin-bottom:14px;">${c.metricsIntro}</p>`
    + METRIC_KEYS.map(metricCardHtml).join('')
    + flagCardHtml();
}

/* ============================= VIDEO MODAL ============================= */
function findExerciseById(id){
  for(const group of CONTENT[STATE.lang].exercises){
    const found = group.find(e=>e.id===id);
    if(found) return found;
  }
  return null;
}

/* Every media slot tries a video first (videos/<key>.mp4); if that fails, it tries a
   still image (images/<key>.jpg, then .png). If neither exists, 'keep' slots (exercises)
   just show their plain icon with no box; 'remove' slots (care topics) render nothing. */
const MEDIA_IMAGE_EXTS = ['jpg','png'];
function markMediaLoaded(figId, kind){
  const fig = document.getElementById(figId);
  if(!fig) return;
  fig.classList.add('has-media', kind === 'video' ? 'has-video' : 'has-image');
}
function tryMediaImage(fig, key, imgClass, idx, mode){
  if(idx >= MEDIA_IMAGE_EXTS.length){
    if(mode === 'remove') fig.remove();
    return;
  }
  const img = document.createElement('img');
  img.className = imgClass;
  img.onload = () => fig.classList.add('has-media', 'has-image');
  img.onerror = () => { img.remove(); tryMediaImage(fig, key, imgClass, idx+1, mode); };
  img.src = `images/${key}.${MEDIA_IMAGE_EXTS[idx]}`;
  fig.appendChild(img);
}
function mediaVideoFailed(figId, key, imgClass, mode){
  const fig = document.getElementById(figId);
  if(!fig) return;
  const video = fig.querySelector('video');
  if(video) video.remove();
  tryMediaImage(fig, key, imgClass, 0, mode);
}

function openVideoModalGeneric(videoId, title){
  document.getElementById('video-modal-title').textContent = title || '';
  const player = document.getElementById('video-modal-player');
  player.src = 'videos/' + videoId + '.mp4';
  document.getElementById('video-modal').classList.remove('hidden');
  player.play().catch(()=>{ /* autoplay blocked — patient can tap the native play control */ });
}
function closeVideoModal(){
  const player = document.getElementById('video-modal-player');
  player.pause(); player.removeAttribute('src'); player.load();
  document.getElementById('video-modal').classList.add('hidden');
}
function openImageModal(src, title){
  document.getElementById('image-modal-title').textContent = title || '';
  document.getElementById('image-modal-img').src = src;
  document.getElementById('image-modal').classList.remove('hidden');
}
function closeImageModal(){
  document.getElementById('image-modal-img').src = '';
  document.getElementById('image-modal').classList.add('hidden');
}
function maybeOpenMedia(kind, key){
  const figId = kind === 'ex' ? 'fig-'+key : 'carevid-'+key;
  const fig = document.getElementById(figId);
  if(!fig || !fig.classList.contains('has-media')) return;
  const title = kind === 'ex'
    ? (findExerciseById(key) || {}).name
    : (fig.querySelector('.care-video-caption-bar') || {}).textContent;
  if(fig.classList.contains('has-video')){
    openVideoModalGeneric(key, title || '');
  } else {
    const img = fig.querySelector('img');
    openImageModal(img ? img.src : '', title || '');
  }
}

/* ============================= RENDER: RESOURCES & SOS ============================= */
function renderResources(){
  const c = CONTENT[STATE.lang];
  const list = document.getElementById('resources-list');
  if(!c.resources || !c.resources.length){
    list.innerHTML = `<div class="resource-empty">${c.resourcesEmpty}</div>`;
    return;
  }
  list.innerHTML = c.resources.map(r=>`
    <a class="resource-card" href="${r.url}" target="_blank" rel="noopener noreferrer">
      <div class="resource-icon ${r.type==='video'?'video':''}">${r.icon}</div>
      <div style="flex:1;">
        <div class="resource-title">${r.title}</div>
        <div class="resource-desc">${r.desc}</div>
        <div class="resource-source">${r.source}</div>
      </div>
      <svg class="resource-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
    </a>`).join('');
}

function renderSOS(){
  const c = CONTENT[STATE.lang];
  let html = `<div class="info-note">ℹ️ ${c.normalNote}</div>`;
  html += `<div class="flag-section-label">${c.emergencyLabel}</div>`;
  html += c.emergencyFlags.map(f=>`<div class="flag-item"><div class="flag-dot"></div><div class="flag-text">${f}</div></div>`).join('');
  document.getElementById('flag-list').innerHTML = html;
  document.getElementById('call-btn').href = 'tel:' + CLINIC_PHONE.replace(/[^0-9+]/g,'');
  document.getElementById('call-btn-text').textContent = c.callBtnPrefix + CLINIC_PHONE;
}

/* ============================= TABS ============================= */
function switchTab(tab){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+tab).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelector('main').scrollTop = 0;
  if(tab==='exercises'){
    currentExPhase = null; // always resync to the patient's actual current phase
    renderExercisePhaseTabs(); renderExerciseList();
  }
  if(tab==='progress') renderProgress();
  if(tab==='home') maybeAutoOpenIkdc();
}
function maybeAutoOpenIkdc(){
  if(ikdcFormKey) return; // already open
  if(!document.getElementById('onboard').classList.contains('hidden')) return; // onboarding takes priority
  if(!document.getElementById('addhome-modal').classList.contains('hidden')) return;
  const due = ikdcDueTimepoint();
  if(due) openIkdcForm(due.key);
}

/* ============================= ONBOARD ============================= */
function fillSelect(id, obj, selected){
  document.getElementById(id).innerHTML = Object.keys(obj)
    .map(k=>`<option value="${k}" ${k===selected?'selected':''}>${obj[k]}</option>`).join('');
}
// A mistyped year used to sail through and left the whole app on a nonsense timeline.
const DATE_MIN_DAYS_PAST = 365*5, DATE_MAX_DAYS_AHEAD = 365;
function dateBounds(){
  const day = 86400000, now = Date.now();
  return {
    min: localISO(new Date(now - DATE_MIN_DAYS_PAST*day)),
    max: localISO(new Date(now + DATE_MAX_DAYS_AHEAD*day))
  };
}
function openOnboard(prefill){
  const c = CONTENT[STATE.lang];
  fillSelect('input-graft',      c.graftOptions,      prefill?STATE.graft:'unsure');
  fillSelect('input-meniscus',   c.meniscusOptions,   prefill?STATE.meniscus:'none');
  if(prefill){
    document.getElementById('input-surgery-date').value = STATE.surgeryDate || '';
    document.getElementById('input-hn').value = STATE.hn || '';
  }
  const b = dateBounds();
  const dateInput = document.getElementById('input-surgery-date');
  dateInput.min = b.min; dateInput.max = b.max;
  document.getElementById('ob-lang-en').classList.toggle('active', STATE.lang==='en');
  document.getElementById('ob-lang-th').classList.toggle('active', STATE.lang==='th');
  document.getElementById('consent-block').style.display = STATE.consentGiven ? 'none' : 'block';
  document.getElementById('input-consent').checked = false;
  document.getElementById('consent-validation').textContent = '';
  document.getElementById('date-validation').textContent = '';
  document.getElementById('hn-validation').textContent = '';
  document.getElementById('onboard').classList.remove('hidden');
}
function closeOnboard(){ document.getElementById('onboard').classList.add('hidden'); renderAll(); }
// Must accept exactly what backend/ikdc-sync.gs's HN_RE accepts, or uploads
// with this HN get rejected server-side forever.
const HN_PATTERN = /^[A-Za-z0-9][A-Za-z0-9/-]{0,19}$/;
function normalizeHn(raw){
  return String(raw || '')
    .trim()
    .replace(/[๐-๙]/g, ch => String(ch.charCodeAt(0) - 0x0E50)); // Thai digits -> ASCII
}
function isValidHn(hn){ return HN_PATTERN.test(hn); }

function saveOnboard(){
  const c = CONTENT[STATE.lang];
  const d = document.getElementById('input-surgery-date').value;
  document.getElementById('date-validation').textContent = '';
  document.getElementById('consent-validation').textContent = '';
  document.getElementById('hn-validation').textContent = '';
  const hn = normalizeHn(document.getElementById('input-hn').value);
  if(hn && !isValidHn(hn)){
    document.getElementById('hn-validation').textContent = c.hnFormatValidation; return;
  }
  if(!d && !STATE.surgeryDate){
    document.getElementById('date-validation').textContent = c.dateRequiredValidation; return;
  }
  if(d){
    const b = dateBounds();
    if(d < b.min || d > b.max){
      document.getElementById('date-validation').textContent = c.dateRangeValidation; return;
    }
  }
  if(!STATE.consentGiven && !document.getElementById('input-consent').checked){
    document.getElementById('consent-validation').textContent = c.consentValidation; return;
  }
  STATE.consentGiven = true;
  STATE.surgeryDate = d || STATE.surgeryDate;
  STATE.hn         = hn;
  STATE.graft      = document.getElementById('input-graft').value;
  STATE.meniscus   = document.getElementById('input-meniscus').value;
  STATE.protection = STATE.meniscus === "yes" ? "protected" : "standard";
  currentExPhase = null;
  saveState();
  closeOnboard();
  maybeShowAddHomePrompt();
  trySyncPendingIkdc(); // a newly added/corrected HN can unblock surveys waiting to upload
}

/* ============================= RENDER ALL ============================= */
function renderAll(){
  applyStaticI18n();
  renderHome();
  renderCare();
  renderExercisePhaseTabs();
  renderExerciseList();
  renderProgress();
  renderResources();
  renderSOS();
}

/* ============================= COPY DETERRENTS =============================
 * Best-effort only — blocks the casual paths (right-click/long-press menu, Ctrl/Cmd+C,
 * image drag). None of this stops view-source, browser dev tools, disabling JS, or a
 * screenshot/photo of the screen — there is no web API that can prevent those, on any
 * platform. Form fields are exempted so patients can still copy/paste their HN etc. */
function isFormField(el){
  return !!(el && el.closest && el.closest('input, textarea, select'));
}
document.addEventListener('contextmenu', e => { if(!isFormField(e.target)) e.preventDefault(); });
document.addEventListener('copy', e => { if(!isFormField(e.target)) e.preventDefault(); });
document.addEventListener('cut', e => { if(!isFormField(e.target)) e.preventDefault(); });
document.addEventListener('dragstart', e => {
  if(e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO')) e.preventDefault();
});

/* ============================= WATERMARK =============================
 * Tiles the patient's HN faintly across the app so a leaked screenshot can be
 * traced back to them. Does not and cannot stop the screenshot itself. */
function escapeXml(s){
  return String(s).replace(/[<>&'"]/g, ch => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[ch]));
}
function buildWatermarkSvg(label){
  const w = 220, h = 140;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">`
    + `<text x="10" y="${h/2}" transform="rotate(-30 ${w/2} ${h/2})" `
    + `font-family="sans-serif" font-size="14" fill="#000">${escapeXml(label)}</text></svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}
function renderWatermark(){
  const el = document.getElementById('watermark-overlay');
  if(!el) return;
  if(STATE.hn){
    const c = CONTENT[STATE.lang];
    el.style.backgroundImage = `url("${buildWatermarkSvg((c.hnPrefix||'HN: ') + STATE.hn)}")`;
    el.classList.add('active');
  } else {
    el.classList.remove('active');
    el.style.backgroundImage = '';
  }
}

/* ============================= EVENT DELEGATION ============================= */
// All interactive elements use data-action (+ data-* args) instead of inline
// onclick/onerror/etc attributes, so the page can run under a Content-Security-Policy
// without 'unsafe-inline' for script-src. Listeners are attached once, on
// document, and survive every innerHTML re-render since re-rendering never
// touches document itself — no per-element re-binding is ever needed.
const ACTIONS = {
  'set-lang':          ds => setLang(ds.lang, ds.keepOpen === 'true'),
  'open-onboard':      ds => openOnboard(ds.prefill === 'true'),
  'reset-app':         ()   => handleResetApp(),
  'switch-tab':        ds => switchTab(ds.tab),
  'save-onboard':      ()   => saveOnboard(),
  'close-addhome':     ()   => closeAddHomePrompt(),
  'accept-addhome':    ()   => acceptAddHome(),
  'submit-ikdc':       ()   => submitIkdcForm(),
  'close-ikdc':        ()   => closeIkdcForm(),
  'close-video-modal': ()   => closeVideoModal(),
  'close-image-modal': ()   => closeImageModal(),
  'open-ikdc-form':    ds => openIkdcForm(ds.key),
  'select-ikdc-option':ds => selectIkdcOption(ds.id, Number(ds.value)),
  'open-media':        ds => maybeOpenMedia(ds.kind, ds.key),
  'toggle-acc':        ds => toggleAcc(Number(ds.idx)),
  'select-ex-phase':   ds => selectExPhase(Number(ds.idx)),
  'toggle-exercise':   ds => toggleExercise(ds.id),
  'undo-metric':       ds => undoMetric(ds.key),
  'add-metric':        ds => addMetric(ds.key),
  'set-flag':          ds => setFlag(ds.key, ds.value)
};
document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const handler = ACTIONS[el.dataset.action];
  if(handler) handler(el.dataset, el);
});
document.addEventListener('keydown', e => {
  if(e.key === 'Enter' && e.target.matches('input[data-enter-action="add-metric"]')){
    addMetric(e.target.dataset.key);
  }
});
// error/loadedmetadata/loadeddata don't bubble on <video>/<img>, so delegation
// needs the capture phase to intercept them on the way down to the target.
document.addEventListener('loadedmetadata', e => {
  if(e.target.tagName === 'VIDEO' && e.target.dataset.mediaFig) markMediaLoaded(e.target.dataset.mediaFig, 'video');
}, true);
document.addEventListener('loadeddata', e => {
  if(e.target.tagName === 'VIDEO' && e.target.dataset.mediaFig) markMediaLoaded(e.target.dataset.mediaFig, 'video');
}, true);
document.addEventListener('error', e => {
  const t = e.target;
  if(t.tagName === 'VIDEO' && t.dataset.mediaFig){
    mediaVideoFailed(t.dataset.mediaFig, t.dataset.mediaKey, t.dataset.mediaImgclass, t.dataset.mediaMode);
  }
}, true);

/* ============================= INIT ============================= */
(async function init(){
  await loadState();
  renderAll();
  if(!STATE.surgeryDate){ openOnboard(false); }
  maybeAutoOpenIkdc();
  trySyncPendingIkdc();
})();
