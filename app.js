/* =====================================================
   EcoQuest India — app.js
   ===================================================== */

// =====================================================
// DATA: ALL INDIA STATES & CITIES
// =====================================================
const INDIA_STATES_CITIES = {
  "Andhra Pradesh":    ["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Rajamahendravaram","Tirupati","Kadapa","Kakinada","Eluru"],
  "Arunachal Pradesh": ["Itanagar","Naharlagun","Pasighat","Tezpur","Ziro"],
  "Assam":             ["Guwahati","Silchar","Dibrugarh","Jorhat","Nagaon","Tinsukia","Tezpur"],
  "Bihar":             ["Patna","Gaya","Bhagalpur","Muzaffarpur","Purnia","Darbhanga","Arrah","Begusarai"],
  "Chhattisgarh":      ["Raipur","Bhilai","Bilaspur","Korba","Durg","Rajnandgaon"],
  "Delhi":             ["New Delhi","Dwarka","Rohini","Saket","Lajpat Nagar","Connaught Place","Noida Ext.","Janakpuri"],
  "Goa":               ["Panaji","Margao","Vasco da Gama","Mapusa","Ponda"],
  "Gujarat":           ["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Gandhinagar","Anand","Mehsana"],
  "Haryana":           ["Faridabad","Gurugram","Panipat","Ambala","Yamunanagar","Rohtak","Hisar","Karnal"],
  "Himachal Pradesh":  ["Shimla","Dharamsala","Solan","Mandi","Palampur","Baddi"],
  "Jharkhand":         ["Ranchi","Jamshedpur","Dhanbad","Bokaro","Deoghar","Phusro"],
  "Karnataka":         ["Bengaluru","Mysuru","Hubli-Dharwad","Mangaluru","Belagavi","Kalaburagi","Shivamogga","Tumkur","Davanagere","Vijayapura"],
  "Kerala":            ["Thiruvananthapuram","Kochi","Kozhikode","Thrissur","Kollam","Palakkad","Alappuzha","Malappuram","Kottayam","Kannur"],
  "Madhya Pradesh":    ["Bhopal","Indore","Jabalpur","Gwalior","Ujjain","Sagar","Dewas","Satna","Ratlam"],
  "Maharashtra":       ["Mumbai","Pune","Nagpur","Nashik","Thane","Aurangabad","Solapur","Amravati","Navi Mumbai","Kolhapur","Vasai-Virar"],
  "Manipur":           ["Imphal","Thoubal","Bishnupur","Ukhrul"],
  "Meghalaya":         ["Shillong","Tura","Jowai"],
  "Mizoram":           ["Aizawl","Lunglei","Champhai"],
  "Nagaland":          ["Kohima","Dimapur","Mokokchung"],
  "Odisha":            ["Bhubaneswar","Cuttack","Berhampur","Sambalpur","Rourkela","Puri","Brahmapur"],
  "Punjab":            ["Ludhiana","Amritsar","Jalandhar","Patiala","Bathinda","Hoshiarpur","Mohali"],
  "Rajasthan":         ["Jaipur","Jodhpur","Kota","Bikaner","Ajmer","Udaipur","Alwar","Bharatpur","Sikar"],
  "Sikkim":            ["Gangtok","Namchi","Gyalshing"],
  "Tamil Nadu":        ["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem","Tirunelveli","Erode","Vellore","Tiruppur","Thoothukudi","Dindigul"],
  "Telangana":         ["Hyderabad","Warangal","Nizamabad","Karimnagar","Khammam","Ramagundam","Mahbubnagar"],
  "Tripura":           ["Agartala","Dharmanagar","Udaipur","Kailashahar"],
  "Uttar Pradesh":     ["Lucknow","Kanpur","Varanasi","Agra","Prayagraj","Ghaziabad","Meerut","Noida","Bareilly","Aligarh","Moradabad","Saharanpur","Gorakhpur"],
  "Uttarakhand":       ["Dehradun","Haridwar","Roorkee","Rishikesh","Haldwani","Nainital"],
  "West Bengal":       ["Kolkata","Howrah","Durgapur","Asansol","Siliguri","Bardhaman","Malda","Kharagpur"],
  "Andaman & Nicobar": ["Port Blair","Diglipur","Car Nicobar"],
  "Chandigarh":        ["Chandigarh"],
  "Jammu & Kashmir":   ["Srinagar","Jammu","Leh","Anantnag","Baramulla","Udhampur"],
  "Ladakh":            ["Leh","Kargil"],
  "Lakshadweep":       ["Kavaratti","Agatti"],
  "Puducherry":        ["Puducherry","Karaikal","Mahe"]
};

// =====================================================
// DATA: ECO METRICS PER CITY (from Indian datasets)
// =====================================================
const ECO_DATA = {
  "Mumbai":             { aqi: 148, aqiCat: "Moderate",     temp: 32, humidity: 78, greenCover: 12, waterLevel: 68, rivers: "Mithi, Ulhas",                  pollution: 62 },
  "Delhi":              { aqi: 312, aqiCat: "Very Poor",    temp: 38, humidity: 45, greenCover: 20, waterLevel: 34, rivers: "Yamuna",                         pollution: 88 },
  "New Delhi":          { aqi: 295, aqiCat: "Very Poor",    temp: 37, humidity: 46, greenCover: 21, waterLevel: 33, rivers: "Yamuna",                         pollution: 86 },
  "Bengaluru":          { aqi: 92,  aqiCat: "Satisfactory", temp: 27, humidity: 65, greenCover: 28, waterLevel: 55, rivers: "Arkavathi, Vrishabhavathi",      pollution: 42 },
  "Chennai":            { aqi: 76,  aqiCat: "Good",         temp: 34, humidity: 80, greenCover: 15, waterLevel: 72, rivers: "Adyar, Cooum, Kosasthalaiyar",   pollution: 38 },
  "Coimbatore":         { aqi: 58,  aqiCat: "Good",         temp: 28, humidity: 70, greenCover: 32, waterLevel: 61, rivers: "Noyyal, Bhavani",                pollution: 28 },
  "Hyderabad":          { aqi: 118, aqiCat: "Moderate",     temp: 35, humidity: 55, greenCover: 22, waterLevel: 48, rivers: "Musi",                           pollution: 52 },
  "Kolkata":            { aqi: 165, aqiCat: "Unhealthy",    temp: 33, humidity: 82, greenCover: 10, waterLevel: 78, rivers: "Hooghly (Ganga)",                pollution: 70 },
  "Ahmedabad":          { aqi: 198, aqiCat: "Poor",         temp: 41, humidity: 35, greenCover: 8,  waterLevel: 30, rivers: "Sabarmati",                      pollution: 74 },
  "Pune":               { aqi: 89,  aqiCat: "Satisfactory", temp: 30, humidity: 60, greenCover: 25, waterLevel: 58, rivers: "Mutha, Mula",                    pollution: 40 },
  "Jaipur":             { aqi: 182, aqiCat: "Poor",         temp: 40, humidity: 28, greenCover: 6,  waterLevel: 22, rivers: "Dhund, Banganga",                pollution: 76 },
  "Lucknow":            { aqi: 215, aqiCat: "Poor",         temp: 36, humidity: 52, greenCover: 14, waterLevel: 42, rivers: "Gomti",                          pollution: 80 },
  "Patna":              { aqi: 242, aqiCat: "Very Poor",    temp: 35, humidity: 68, greenCover: 9,  waterLevel: 85, rivers: "Ganga",                          pollution: 82 },
  "Shimla":             { aqi: 32,  aqiCat: "Good",         temp: 18, humidity: 72, greenCover: 68, waterLevel: 70, rivers: "Giri, Pabbar",                   pollution: 14 },
  "Guwahati":           { aqi: 88,  aqiCat: "Satisfactory", temp: 29, humidity: 78, greenCover: 42, waterLevel: 88, rivers: "Brahmaputra",                    pollution: 35 },
  "Bhubaneswar":        { aqi: 95,  aqiCat: "Satisfactory", temp: 32, humidity: 75, greenCover: 30, waterLevel: 65, rivers: "Mahanadi, Daya",                 pollution: 38 },
  "Thiruvananthapuram": { aqi: 45,  aqiCat: "Good",         temp: 31, humidity: 82, greenCover: 48, waterLevel: 80, rivers: "Neyyar, Karamana",               pollution: 22 },
  "Kochi":              { aqi: 62,  aqiCat: "Good",         temp: 30, humidity: 85, greenCover: 38, waterLevel: 82, rivers: "Periyar, Muvattupuzha",          pollution: 28 },
  "Varanasi":           { aqi: 268, aqiCat: "Very Poor",    temp: 36, humidity: 60, greenCover: 8,  waterLevel: 72, rivers: "Ganga",                          pollution: 85 },
  "Kanpur":             { aqi: 285, aqiCat: "Very Poor",    temp: 37, humidity: 55, greenCover: 7,  waterLevel: 38, rivers: "Ganga",                          pollution: 88 },
  "default":            { aqi: 120, aqiCat: "Moderate",     temp: 30, humidity: 65, greenCover: 20, waterLevel: 55, rivers: "Local river",                    pollution: 55 }
};

// =====================================================
// DATA: QUIZ QUESTIONS (6 CATEGORIES)
// =====================================================
const QUIZ_DATA = {
  "Air Quality": {
    icon: "💨", color: "#38b6ff", xp: 50,
    questions: [
      { q: "What is the 'Good' AQI range according to Indian CPCB standards?",              opts: ["0-50","51-100","100-200","200-300"],               ans: 0 },
      { q: "Which Indian city is known as the most polluted city in India as per recent data?", opts: ["Mumbai","Delhi","Kanpur","Patna"],              ans: 1 },
      { q: "PM2.5 refers to particles smaller than how many micrometers?",                  opts: ["10","2.5","1","0.5"],                             ans: 1 },
      { q: "Which gas is the main component of smog in Indian cities?",                     opts: ["CO2","NO2","O3 (Ozone)","SO2"],                   ans: 2 },
      { q: "The National Clean Air Programme (NCAP) was launched by which ministry?",       opts: ["MoEF","CPCB","MoHFW","MoES"],                    ans: 0 }
    ]
  },
  "Water Bodies": {
    icon: "💧", color: "#1db954", xp: 50,
    questions: [
      { q: "The Ganga river originates from which glacier in Uttarakhand?",                 opts: ["Siachen","Gangotri","Zemu","Kedarnath"],          ans: 1 },
      { q: "Which Indian state has the highest freshwater lake area?",                      opts: ["Kerala","Assam","J&K","Odisha"],                  ans: 2 },
      { q: "What percentage of India's water usage is for agriculture?",                    opts: ["40%","60%","80%","90%"],                          ans: 2 },
      { q: "The Brahmaputra river is also known as which name in Tibet?",                   opts: ["Tsangpo","Lohit","Dibang","Kameng"],              ans: 0 },
      { q: "Which river is considered the most polluted in Maharashtra?",                   opts: ["Godavari","Krishna","Mithi","Narmada"],           ans: 2 }
    ]
  },
  "Climate Change": {
    icon: "🌡️", color: "#f39c12", xp: 60,
    questions: [
      { q: "India's NDC target aims to achieve what % of energy from non-fossil sources by 2030?", opts: ["30%","40%","50%","60%"],                  ans: 2 },
      { q: "Which Indian state has the largest installed solar energy capacity?",           opts: ["Maharashtra","Rajasthan","Gujarat","Tamil Nadu"],  ans: 1 },
      { q: "By how many cm has sea level in the Bay of Bengal risen per decade?",           opts: ["1.06-1.75 cm","3-4 cm","5-6 cm","0.5 cm"],       ans: 0 },
      { q: "The Western Ghats is classified as one of how many global biodiversity hotspots?", opts: ["5","25","36","50"],                           ans: 2 },
      { q: "Operation Green Ganga Mission (NGGRP) was launched in which year?",             opts: ["2010","2014","2015","2019"],                      ans: 2 }
    ]
  },
  "Forests & Wildlife": {
    icon: "🌳", color: "#8B5E3C", xp: 55,
    questions: [
      { q: "India's forest cover is approximately what % of total geographical area?",      opts: ["10%","21%","33%","45%"],                          ans: 1 },
      { q: "Which state has the highest forest cover in India?",                            opts: ["Madhya Pradesh","Assam","Arunachal Pradesh","Chhattisgarh"], ans: 2 },
      { q: "Project Tiger was launched in which year?",                                     opts: ["1965","1973","1980","1985"],                      ans: 1 },
      { q: "India's Bengal Tiger population as per 2022 census is approximately?",          opts: ["1500","2100","3167","4000"],                      ans: 2 },
      { q: "Which act protects India's forests and wildlife?",                              opts: ["Forest Act 1927","Wildlife Protection Act 1972","Environment Act 1986","Both B and C"], ans: 3 }
    ]
  },
  "Waste & Recycling": {
    icon: "♻️", color: "#8e44ad", xp: 45,
    questions: [
      { q: "India generates approximately how many million tonnes of solid waste per year?", opts: ["10 MT","62 MT","150 MT","300 MT"],               ans: 1 },
      { q: "The Swachh Bharat Mission was launched in which year?",                         opts: ["2010","2012","2014","2016"],                      ans: 2 },
      { q: "E-waste in India is primarily generated by which sector?",                      opts: ["Agriculture","IT & Telecom","Construction","Textiles"], ans: 1 },
      { q: "Plastic Waste Management Rules in India were amended in which year?",           opts: ["2011","2016","2018","2022"],                      ans: 3 },
      { q: "Which city achieved India's first 100% door-to-door garbage collection?",       opts: ["Pune","Surat","Indore","Bengaluru"],              ans: 2 }
    ]
  },
  "Renewable Energy": {
    icon: "☀️", color: "#FFD700", xp: 55,
    questions: [
      { q: "India's renewable energy target by 2030 is how many GW?",                      opts: ["175 GW","350 GW","500 GW","800 GW"],              ans: 2 },
      { q: "As of 2024, which is India's largest solar power plant?",                       opts: ["Bhadla Solar Park","Pavagada Solar Park","Kurnool Ultra Mega","Rewa Solar Project"], ans: 0 },
      { q: "India ranks how much globally in wind energy capacity?",                        opts: ["1st","3rd","4th","7th"],                          ans: 2 },
      { q: "International Solar Alliance (ISA) HQ is in which Indian city?",               opts: ["New Delhi","Gurugram","Bengaluru","Mumbai"],       ans: 1 },
      { q: "PM KUSUM scheme is for providing solar power to which sector?",                opts: ["Industries","Farmers","Schools","Hospitals"],      ans: 1 }
    ]
  }
};

// =====================================================
// DATA: LEADERBOARD
// =====================================================
const LEADERBOARD_DATA = {
  global: [
    { name: "Priya Sharma",  city: "Bengaluru", state: "Karnataka",    xp: 2840, level: 9, class: "Class 10" },
    { name: "Arjun Mehta",   city: "Mumbai",    state: "Maharashtra",  xp: 2625, level: 8, class: "Class 11" },
    { name: "Ananya Singh",  city: "Delhi",     state: "Delhi",        xp: 2480, level: 8, class: "Class 9"  },
    { name: "Rohan Verma",   city: "Chennai",   state: "Tamil Nadu",   xp: 2310, level: 7, class: "Class 10" },
    { name: "Kavya Nair",    city: "Kochi",     state: "Kerala",       xp: 2195, level: 7, class: "Class 11" },
    { name: "Vikram Patel",  city: "Ahmedabad", state: "Gujarat",      xp: 2050, level: 7, class: "Class 12" },
    { name: "Sita Reddy",    city: "Hyderabad", state: "Telangana",    xp: 1980, level: 6, class: "Class 10" },
    { name: "Dev Rao",       city: "Pune",      state: "Maharashtra",  xp: 1845, level: 6, class: "Class 9"  },
    { name: "Meera Iyer",    city: "Bengaluru", state: "Karnataka",    xp: 1720, level: 6, class: "Class 11" },
    { name: "Nikhil Joshi",  city: "Jaipur",    state: "Rajasthan",    xp: 1665, level: 5, class: "Class 8"  },
  ]
};

// =====================================================
// DATA: DAILY TASKS
// =====================================================
const DAILY_TASKS = [
  { icon: "🌳", title: "Plant a Virtual Tree",   desc: "Learn about a tree native to your state",       xp: 20 },
  { icon: "💧", title: "Save Water Challenge",    desc: "Track your water usage for 1 day",             xp: 25 },
  { icon: "♻️", title: "Sort Your Waste",         desc: "Separate dry/wet waste at home",               xp: 30 },
  { icon: "🚴", title: "Green Commute Day",       desc: "Walk or cycle instead of vehicle",             xp: 40 },
  { icon: "📰", title: "Read Eco News",           desc: "Read 1 Indian environmental news article",     xp: 15 },
  { icon: "🌞", title: "Solar Awareness",         desc: "Find 3 solar panels in your area",             xp: 20 },
];

// =====================================================
// DATA: TEACHER — STUDENT LIST
// =====================================================
const TEACHER_STUDENTS = [
  { name: "Aryan Kumar",  xp: 520, tasks: 18, quizzes: 12, streak: 9, progress: 84 },
  { name: "Priya Devi",   xp: 490, tasks: 16, quizzes: 11, streak: 7, progress: 78 },
  { name: "Rohit Sharma", xp: 445, tasks: 14, quizzes: 10, streak: 6, progress: 72 },
  { name: "Sneha Patel",  xp: 410, tasks: 13, quizzes: 9,  streak: 5, progress: 65 },
  { name: "Karan Joshi",  xp: 380, tasks: 12, quizzes: 8,  streak: 4, progress: 60 },
  { name: "Divya Iyer",   xp: 345, tasks: 11, quizzes: 7,  streak: 4, progress: 55 },
  { name: "Aditya Verma", xp: 310, tasks: 10, quizzes: 6,  streak: 3, progress: 50 },
  { name: "Pooja Nair",   xp: 280, tasks: 9,  quizzes: 5,  streak: 2, progress: 42 },
  { name: "Raj Mehta",    xp: 245, tasks: 8,  quizzes: 4,  streak: 2, progress: 38 },
  { name: "Anita Singh",  xp: 210, tasks: 7,  quizzes: 3,  streak: 1, progress: 32 },
  { name: "Suresh Rao",   xp: 185, tasks: 6,  quizzes: 2,  streak: 1, progress: 28 },
  { name: "Kavitha K",    xp: 150, tasks: 5,  quizzes: 2,  streak: 0, progress: 22 },
];

// =====================================================
// DATA: ACHIEVEMENTS
// =====================================================
const ACHIEVEMENTS = [
  { icon: "🌱", name: "First Step",     desc: "Complete first task" },
  { icon: "🔥", name: "On Fire",        desc: "7-day streak" },
  { icon: "🧠", name: "Quiz Pro",       desc: "5 quizzes done" },
  { icon: "💧", name: "Water Guardian", desc: "Save Water tasks" },
  { icon: "🌳", name: "Tree Hugger",    desc: "Plant 5 virtual trees" },
  { icon: "♻️", name: "Recycler",       desc: "3 waste tasks" },
  { icon: "⚡", name: "500 XP Club",    desc: "Earn 500 XP",     locked: true },
  { icon: "🏆", name: "Top 10",         desc: "City top 10",     locked: true },
  { icon: "🌟", name: "Eco Star",       desc: "100 tasks done",  locked: true },
];

// =====================================================
// APP STATE
// =====================================================
let currentUser    = null;
let generatedOTP   = null;
let currentQuizCat = null;
let currentQ       = 0;
let quizScore      = 0;
let tasksDone      = [];
let currentPage    = 'landing-page';
let pageHistory    = [];
let selectedAvatar    = '🌱';
let selectedInterests = ['💨 Air Quality'];

// =====================================================
// PAGE NAVIGATION
// =====================================================
function showPage(pageId, tab) {
  pageHistory.push(currentPage);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentPage = pageId;
  if (tab && pageId === 'auth-page') switchAuthTab(tab);
}

function goBack() {
  if (pageHistory.length > 0) {
    const prev = pageHistory.pop();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(prev).classList.add('active');
    currentPage = prev;
  }
}

// =====================================================
// TOAST NOTIFICATION
// =====================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// =====================================================
// AUTH — STUDENT OTP LOGIN
// =====================================================
function switchAuthTab(tab) {
  document.getElementById('auth-student').style.display = tab === 'student' ? 'block' : 'none';
  document.getElementById('auth-teacher').style.display = tab === 'teacher' ? 'block' : 'none';
  document.getElementById('tab-student').classList.toggle('active', tab === 'student');
  document.getElementById('tab-teacher').classList.toggle('active', tab === 'teacher');
}

function sendOTP() {
  const phone = document.getElementById('student-phone').value.trim();
  if (phone.length < 10) {
    showAlert('student-alert', 'Please enter a valid mobile number', 'error');
    return;
  }
  // Generate 6-digit OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  // Show OTP input and verify button
  document.getElementById('otp-group').style.display = 'block';
  document.getElementById('verify-btn-wrap').style.display = 'block';
  document.getElementById('send-otp-btn').disabled = true;
  document.getElementById('send-otp-btn').textContent = '✓ Sent';
  document.getElementById('otp-status').textContent = `✅ OTP sent! (Demo OTP: ${generatedOTP})`;
  showAlert('student-alert', `OTP sent to ${phone}`, 'success');

  // 30-second countdown before resend
  let secs = 30;
  const iv = setInterval(() => {
    secs--;
    if (secs <= 0) {
      clearInterval(iv);
      document.getElementById('send-otp-btn').disabled = false;
      document.getElementById('send-otp-btn').textContent = 'Resend';
    } else {
      document.getElementById('send-otp-btn').textContent = `Resend (${secs}s)`;
    }
  }, 1000);
}

function verifyOTP() {
  const entered = document.getElementById('otp-input').value.trim();
  const phone   = document.getElementById('student-phone').value.trim();

  if (!entered || entered.length < 6) {
    showAlert('student-alert', 'Enter the 6-digit OTP', 'error');
    return;
  }
  if (entered !== generatedOTP) {
    showAlert('student-alert', '❌ Incorrect OTP. Try again.', 'error');
    return;
  }

  // OTP verified — create user session and go to onboarding
  currentUser = { type: 'student', phone, name: '', school: '', cls: '', age: '', state: '', city: '', avatar: '🌱', interests: [] };
  showAlert('student-alert', '✅ Phone verified! Setting up your profile...', 'success');

  setTimeout(() => {
    showPage('onboarding-page');
    populateOnboardingStates();
    setObStep(1);
  }, 1000);
}

// =====================================================
// AUTH — TEACHER LOGIN
// =====================================================
function teacherLogin() {
  const name   = document.getElementById('teacher-name').value.trim();
  const school = document.getElementById('teacher-school').value.trim();
  const code   = document.getElementById('teacher-code').value.trim();

  if (!name || !school) {
    showAlert('teacher-alert', 'Please fill all fields', 'error');
    return;
  }
  if (code !== 'ECO2024') {
    showAlert('teacher-alert', '❌ Invalid Teacher Code. Use: ECO2024', 'error');
    return;
  }

  currentUser = { type: 'teacher', name, school };
  showAlert('teacher-alert', '✅ Access Granted! Loading dashboard...', 'success');
  setTimeout(() => loadTeacherApp(), 1200);
}

function showAlert(id, msg, type) {
  const el = document.getElementById(id);
  el.innerHTML = `<div class="alert alert-${type === 'success' ? 'success' : 'error'}">${msg}</div>`;
  setTimeout(() => { el.innerHTML = ''; }, 4000);
}

function logout() {
  currentUser  = null;
  pageHistory  = [];
  tasksDone    = [];
  showPage('landing-page');
}

// =====================================================
// ONBOARDING — 3-STEP FLOW
// =====================================================
function populateOnboardingStates() {
  const sel = document.getElementById('ob-state');
  if (!sel) return;
  sel.innerHTML = '<option value="">Select State</option>';
  Object.keys(INDIA_STATES_CITIES).sort().forEach(s => {
    const o = document.createElement('option');
    o.value = s;
    o.textContent = s;
    sel.appendChild(o);
  });
}

function showObEcoPreview() {
  const city = document.getElementById('ob-city').value;
  if (!city) {
    document.getElementById('ob-eco-preview').style.display = 'none';
    return;
  }
  const d = ECO_DATA[city] || ECO_DATA['default'];
  const aqiColor = d.aqi < 100 ? '#1db954' : d.aqi < 200 ? '#f39c12' : '#e74c3c';
  document.getElementById('ob-eco-mini').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center">
      <div>
        <div style="font-size:1.2rem;font-weight:800;color:${aqiColor}">${d.aqi}</div>
        <div style="font-size:0.72rem;color:#6b8f71">AQI</div>
      </div>
      <div>
        <div style="font-size:1.2rem;font-weight:800;color:#38b6ff">${d.temp}°C</div>
        <div style="font-size:0.72rem;color:#6b8f71">Temp</div>
      </div>
      <div>
        <div style="font-size:1.2rem;font-weight:800;color:#1db954">${d.greenCover}%</div>
        <div style="font-size:0.72rem;color:#6b8f71">Green Cover</div>
      </div>
    </div>`;
  document.getElementById('ob-eco-preview').style.display = 'block';
}

function setObStep(n) {
  [1, 2, 3].forEach(i => {
    document.getElementById('ob-dot-' + i).classList.toggle('active', i <= n);
    const card = document.getElementById('ob-step-' + i);
    if (card) card.style.display = i === n ? 'block' : 'none';
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function obNext(step) {
  if (step === 1) {
    const name   = document.getElementById('ob-name').value.trim();
    const school = document.getElementById('ob-school').value.trim();
    const cls    = document.getElementById('ob-class').value;
    const age    = document.getElementById('ob-age').value.trim();

    if (!name)   { showAlert('ob1-alert', '⚠️ Please enter your name',   'error'); return; }
    if (!school) { showAlert('ob1-alert', '⚠️ Please enter your school', 'error'); return; }
    if (!cls)    { showAlert('ob1-alert', '⚠️ Please select your class', 'error'); return; }

    currentUser.name   = name;
    currentUser.school = school;
    currentUser.cls    = cls;
    currentUser.age    = age;
    setObStep(2);

  } else if (step === 2) {
    const state = document.getElementById('ob-state').value;
    const city  = document.getElementById('ob-city').value;

    if (!state) { showAlert('ob2-alert', '⚠️ Please select your state', 'error'); return; }
    if (!city)  { showAlert('ob2-alert', '⚠️ Please select your city',  'error'); return; }

    currentUser.state = state;
    currentUser.city  = city;
    setObStep(3);
  }
}

function obBack(step) {
  setObStep(step - 1);
}

function selectAvatar(el) {
  document.querySelectorAll('.av-opt').forEach(a => a.classList.remove('selected'));
  el.classList.add('selected');
  selectedAvatar = el.dataset.av;
}

function toggleInterest(el) {
  const already = el.classList.contains('selected');
  const count   = document.querySelectorAll('.int-opt.selected').length;
  if (!already && count >= 3) { showToast('Max 3 interests allowed!'); return; }
  el.classList.toggle('selected', !already);
  selectedInterests = Array.from(document.querySelectorAll('.int-opt.selected')).map(e => e.textContent.trim());
}

function finishOnboarding() {
  currentUser.avatar    = selectedAvatar;
  currentUser.interests = selectedInterests;
  launchConfetti();
  setTimeout(() => loadStudentApp(), 700);
}

function launchConfetti() {
  const colors = ['#1db954','#FFD700','#38b6ff','#f39c12','#8e44ad','#e74c3c'];
  for (let i = 0; i < 32; i++) {
    const dot = document.createElement('div');
    dot.className = 'confetti-dot';
    dot.style.cssText = `
      left: ${20 + Math.random() * 60}%;
      top:  ${20 + Math.random() * 40}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-delay:    ${Math.random() * 0.4}s;
      animation-duration: ${0.6 + Math.random() * 0.5}s;
      width:  ${6 + Math.random() * 10}px;
      height: ${6 + Math.random() * 10}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1500);
  }
}

// =====================================================
// STUDENT APP — LOAD
// =====================================================
function loadStudentApp() {
  showPage('app-page');
  const firstName = currentUser.name ? currentUser.name.split(' ')[0] : 'Eco Hero';

  document.getElementById('welcome-name').textContent  = firstName;
  document.getElementById('topbar-user').textContent   = `${currentUser.avatar || '🌱'} ${firstName}`;
  document.getElementById('profile-name').textContent  = currentUser.name || 'Eco Hero';
  document.getElementById('profile-phone').textContent = `📱 ${currentUser.phone}`;

  const profAvEl = document.querySelector('.profile-avatar');
  if (profAvEl) profAvEl.textContent = currentUser.avatar || '🌿';

  // Populate state dropdowns
  populateStateSelects();

  // Pre-select user's state & city
  if (currentUser.state) {
    setTimeout(() => {
      const lbState   = document.getElementById('lb-state');
      const dataState = document.getElementById('data-state');

      if (lbState) {
        lbState.value = currentUser.state;
        updateCities('lb-city', currentUser.state);
        setTimeout(() => {
          const lbCity = document.getElementById('lb-city');
          if (lbCity && currentUser.city) lbCity.value = currentUser.city;
          updateLeaderboard();
        }, 100);
      }

      if (dataState) {
        dataState.value = currentUser.state;
        updateCities('data-city', currentUser.state);
        setTimeout(() => {
          const dc = document.getElementById('data-city');
          if (dc && currentUser.city) { dc.value = currentUser.city; updateEcoData(); }
        }, 100);
      }
    }, 200);
  }

  renderDailyTasks();
  renderQuizCategories();
  renderAchievements();

  // Welcome toast + bonus XP
  showToast(`🎉 Welcome ${firstName}! +100 XP bonus added!`);
  setTimeout(() => {
    document.getElementById('stat-xp').textContent    = '440';
    document.getElementById('xp-current').textContent = '440';
    document.getElementById('xp-fill').style.width    = '88%';
  }, 500);
}

// =====================================================
// STUDENT APP — SECTION SWITCH
// =====================================================
function switchSection(name, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('sec-' + name).classList.add('active');
  btn.classList.add('active');
  if (name === 'leaderboard') updateLeaderboard();
}

// =====================================================
// STATE / CITY DROPDOWNS
// =====================================================
function populateStateSelects() {
  const selects = ['lb-state', 'data-state'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const def = el.options[0];
    el.innerHTML = '';
    el.appendChild(def);
    Object.keys(INDIA_STATES_CITIES).sort().forEach(state => {
      const o = document.createElement('option');
      o.value = state;
      o.textContent = state;
      el.appendChild(o);
    });
  });
}

function updateCities(targetId, state) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = '<option value="">All Cities</option>';
  if (state && INDIA_STATES_CITIES[state]) {
    INDIA_STATES_CITIES[state].forEach(city => {
      const o = document.createElement('option');
      o.value = city;
      o.textContent = city;
      el.appendChild(o);
    });
  }
}

// =====================================================
// DAILY TASKS
// =====================================================
function renderDailyTasks() {
  const c = document.getElementById('daily-tasks');
  c.innerHTML = '';
  DAILY_TASKS.forEach((t, i) => {
    const done = tasksDone.includes(i);
    c.innerHTML += `
      <div class="task-card ${done ? 'done' : ''}" onclick="completeTask(${i})">
        <div class="task-icon">${t.icon}</div>
        <div class="task-info"><h4>${t.title}</h4><p>${t.desc}</p></div>
        <div class="task-xp">+${t.xp} XP</div>
        <div class="task-check">${done ? '✓' : ''}</div>
      </div>`;
  });
}

function completeTask(i) {
  if (tasksDone.includes(i)) return;
  tasksDone.push(i);
  const xpEl     = document.getElementById('stat-xp');
  const tasksEl  = document.getElementById('stat-tasks');
  const currentXP = parseInt(xpEl.textContent) + DAILY_TASKS[i].xp;
  xpEl.textContent = currentXP;
  document.getElementById('xp-current').textContent = currentXP;
  document.getElementById('xp-fill').style.width = Math.min(100, (currentXP / 500) * 100) + '%';
  tasksEl.textContent = parseInt(tasksEl.textContent) + 1;
  showToast(`✅ +${DAILY_TASKS[i].xp} XP! Task completed!`);
  renderDailyTasks();
}

// =====================================================
// QUIZ
// =====================================================
function renderQuizCategories() {
  const c = document.getElementById('quiz-cats');
  c.innerHTML = '';
  Object.entries(QUIZ_DATA).forEach(([cat, data]) => {
    c.innerHTML += `
      <div class="quiz-cat" onclick="startQuiz('${cat}')">
        <span class="qi">${data.icon}</span>
        <h3>${cat}</h3>
        <div class="ql">${data.questions.length} Questions</div>
        <div class="qxp">+${data.xp} XP</div>
      </div>`;
  });
}

function startQuiz(cat) {
  currentQuizCat = cat;
  currentQ       = 0;
  quizScore      = 0;
  document.getElementById('quiz-home-view').style.display  = 'none';
  document.getElementById('active-quiz').style.display     = 'block';
  document.getElementById('quiz-result-view').style.display = 'none';
  renderQuestion();
}

function renderQuestion() {
  const quiz  = QUIZ_DATA[currentQuizCat];
  const q     = quiz.questions[currentQ];
  const total = quiz.questions.length;

  document.getElementById('q-num').textContent         = `Q ${currentQ + 1}/${total}`;
  document.getElementById('q-prog').style.width        = `${((currentQ + 1) / total) * 100}%`;
  document.getElementById('q-score-live').textContent  = `Score: ${quizScore}`;
  document.getElementById('q-text').textContent        = q.q;
  document.getElementById('next-q-btn').style.display  = 'none';

  const opts = document.getElementById('q-options');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    opts.innerHTML += `<div class="quiz-opt" onclick="selectAnswer(${i})">${opt}</div>`;
  });
}

function selectAnswer(idx) {
  const quiz = QUIZ_DATA[currentQuizCat];
  const q    = quiz.questions[currentQ];
  const opts = document.querySelectorAll('.quiz-opt');

  opts.forEach(o => o.classList.add('disabled'));
  opts[q.ans].classList.add('correct');
  if (idx !== q.ans) opts[idx].classList.add('wrong');
  else quizScore++;

  document.getElementById('q-score-live').textContent = `Score: ${quizScore}`;
  document.getElementById('next-q-btn').style.display = 'block';

  if (currentQ === quiz.questions.length - 1) {
    document.getElementById('next-q-btn').textContent = 'See Results 🎉';
  }
}

function nextQuestion() {
  const quiz = QUIZ_DATA[currentQuizCat];
  if (currentQ < quiz.questions.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const quiz   = QUIZ_DATA[currentQuizCat];
  const total  = quiz.questions.length;
  const earned = Math.round((quizScore / total) * quiz.xp);

  document.getElementById('active-quiz').style.display      = 'none';
  document.getElementById('quiz-result-view').style.display = 'block';
  document.getElementById('result-score').textContent       = `${quizScore}/${total}`;

  const pct = (quizScore / total) * 100;
  let msg, sub;
  if      (pct >= 80) { msg = '🌟 Outstanding!';  sub = `Perfect score! You earned ${earned} XP!`; }
  else if (pct >= 60) { msg = '🎉 Great Job!';     sub = `Good work! You earned ${earned} XP!`; }
  else if (pct >= 40) { msg = '👍 Not Bad!';       sub = `Keep practising! You earned ${earned} XP!`; }
  else                { msg = '💪 Keep Trying!';   sub = `Study more and try again! You earned ${earned} XP.`; }

  document.getElementById('result-msg').textContent = msg;
  document.getElementById('result-sub').textContent = sub;

  // Update XP counter
  const xpEl      = document.getElementById('stat-xp');
  const currentXP = parseInt(xpEl.textContent) + earned;
  xpEl.textContent = currentXP;
  document.getElementById('xp-current').textContent = currentXP;
  document.getElementById('xp-fill').style.width = Math.min(100, (currentXP / 500) * 100) + '%';

  const qEl = document.getElementById('stat-quizzes');
  qEl.textContent = parseInt(qEl.textContent) + 1;

  showToast(`🧠 +${earned} XP from quiz!`);
}

function retryQuiz()    { startQuiz(currentQuizCat); }

function backToQuizHome() {
  document.getElementById('quiz-home-view').style.display  = 'block';
  document.getElementById('active-quiz').style.display     = 'none';
  document.getElementById('quiz-result-view').style.display = 'none';
}

// =====================================================
// LEADERBOARD
// =====================================================
function updateLeaderboard() {
  const state = document.getElementById('lb-state')?.value || '';
  const city  = document.getElementById('lb-city')?.value  || '';
  let data    = [...LEADERBOARD_DATA.global];

  // Inject current user
  if (currentUser) {
    data.push({
      name:  currentUser.name + ' (You)',
      city:  city  || 'Your City',
      state: state || 'Your State',
      xp:    parseInt(document.getElementById('stat-xp')?.textContent || 440),
      level: 4,
      class: currentUser.cls || 'Class 10'
    });
  }

  if (state) data = data.filter(d => d.state === state || d.name.includes('(You)'));
  if (city)  data = data.filter(d => d.city  === city  || d.name.includes('(You)'));
  data.sort((a, b) => b.xp - a.xp);

  const list = document.getElementById('lb-list');
  if (!list) return;

  if (data.length === 0) {
    list.innerHTML = '<div class="empty-state"><span class="ei">🏆</span><p>No students in this area yet. Be the first!</p></div>';
    return;
  }

  const colors = ['#2c7be5','#e74c3c','#f39c12','#8e44ad','#1db954','#e91e8c','#00bcd4','#ff5722','#607d8b','#795548'];
  const medals = ['🥇','🥈','🥉'];

  list.innerHTML = data.slice(0, 12).map((s, i) => {
    const cls      = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const initials = s.name.split(' ').map(x => x[0]).join('').slice(0, 2);
    return `
      <div class="lb-item ${cls}">
        <div class="lb-rank">${i < 3 ? medals[i] : '#' + (i + 1)}</div>
        <div class="lb-avatar" style="background:${colors[i % colors.length]}">${initials}</div>
        <div class="lb-info">
          <h4>${s.name}</h4>
          <p>📍 ${s.city}${s.state ? ', ' + s.state.substring(0, 12) : ''} • ${s.class}</p>
        </div>
        <div class="lb-xp">⚡${s.xp}</div>
      </div>`;
  }).join('');
}

// =====================================================
// ECO DATA
// =====================================================
function renderEcoData() {
  document.getElementById('eco-data-display').innerHTML =
    '<div class="empty-state"><span class="ei">🌍</span><p>Select a state and city to view real eco data</p></div>';
}

function updateEcoData() {
  const state   = document.getElementById('data-state')?.value;
  const city    = document.getElementById('data-city')?.value;
  const display = document.getElementById('eco-data-display');

  if (!state || !city) { renderEcoData(); return; }

  const d = ECO_DATA[city] || ECO_DATA['default'];
  const aqiClass       = d.aqi < 100 ? 'aqi-good' : d.aqi < 200 ? 'aqi-mod' : 'aqi-poor';
  const pollutionColor = d.pollution < 40 ? '#1db954' : d.pollution < 70 ? '#f39c12' : '#e74c3c';
  const greenColor     = d.greenCover > 30 ? '#1db954' : d.greenCover > 15 ? '#f39c12' : '#e74c3c';

  display.innerHTML = `
    <div class="city-card">
      <h3>📍 ${city}, ${state}</h3>
      <div class="eco-metrics">
        <div class="eco-metric">
          <div class="em-val ${aqiClass}">${d.aqi}</div>
          <div class="em-label">AQI (${d.aqiCat})</div>
          <div class="meter-bar"><div class="meter-fill" style="width:${Math.min(100,(d.aqi/500)*100)}%;background:${d.aqi<100?'#1db954':d.aqi<200?'#f39c12':'#e74c3c'}"></div></div>
        </div>
        <div class="eco-metric">
          <div class="em-val" style="color:#38b6ff">${d.temp}°C</div>
          <div class="em-label">Temperature</div>
          <div class="meter-bar"><div class="meter-fill" style="width:${(d.temp/50)*100}%;background:#38b6ff"></div></div>
        </div>
        <div class="eco-metric">
          <div class="em-val" style="color:#8e44ad">${d.humidity}%</div>
          <div class="em-label">Humidity</div>
          <div class="meter-bar"><div class="meter-fill" style="width:${d.humidity}%;background:#8e44ad"></div></div>
        </div>
        <div class="eco-metric">
          <div class="em-val" style="color:${greenColor}">${d.greenCover}%</div>
          <div class="em-label">Green Cover</div>
          <div class="meter-bar"><div class="meter-fill" style="width:${d.greenCover}%;background:${greenColor}"></div></div>
        </div>
        <div class="eco-metric">
          <div class="em-val" style="color:#38b6ff">${d.waterLevel}%</div>
          <div class="em-label">Water Availability</div>
          <div class="meter-bar"><div class="meter-fill" style="width:${d.waterLevel}%;background:#38b6ff"></div></div>
        </div>
        <div class="eco-metric">
          <div class="em-val" style="color:${pollutionColor}">${d.pollution}%</div>
          <div class="em-label">Pollution Index</div>
          <div class="meter-bar"><div class="meter-fill" style="width:${d.pollution}%;background:${pollutionColor}"></div></div>
        </div>
      </div>
      <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);font-size:0.85rem;color:var(--muted)">
        🏞️ Major Water Bodies: <strong>${d.rivers}</strong>
      </div>
    </div>
    <div class="city-card">
      <h3>🌿 Eco Score for ${city}</h3>
      <div style="display:flex;align-items:center;gap:16px;padding:8px 0">
        <div style="font-size:3rem;font-weight:800;font-family:'Baloo 2',cursive;color:${d.aqi < 100 ? 'var(--green)' : d.aqi < 200 ? 'var(--orange)' : 'var(--red)'}">
          ${d.aqi < 100 ? 'A' : d.aqi < 200 ? 'B' : d.aqi < 300 ? 'C' : 'D'}
        </div>
        <div>
          <div style="font-weight:700;font-size:1rem">${d.aqi < 100 ? '✅ Eco Friendly City' : d.aqi < 200 ? '⚠️ Needs Improvement' : '❌ High Pollution Alert'}</div>
          <div style="font-size:0.82rem;color:var(--muted);margin-top:4px">
            ${d.aqi < 100 ? 'Great air quality! Keep protecting nature.' : d.aqi < 200 ? 'Moderate pollution. Reduce vehicle usage.' : 'Critical levels. Plant trees, avoid burning.'}
          </div>
        </div>
      </div>
    </div>
    <div class="city-card">
      <h3>💡 Eco Tips for ${city}</h3>
      <div style="font-size:0.88rem;color:var(--text);line-height:1.7">
        ${d.aqi > 150      ? '• 😷 Wear N95 masks on high AQI days<br>'                  : ''}
        ${d.greenCover < 15 ? '• 🌳 Participate in local tree plantation drives<br>'      : ''}
        ${d.waterLevel < 50 ? '• 💧 Practice rainwater harvesting at home<br>'            : ''}
        • ♻️ Segregate waste at home — wet &amp; dry<br>
        • 🚴 Use public transport or cycle for short trips<br>
        • ☀️ Support solar energy adoption in your area
      </div>
    </div>`;
}

// =====================================================
// ACHIEVEMENTS
// =====================================================
function renderAchievements() {
  const c = document.getElementById('achievements-grid');
  c.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="ach-card ${a.locked ? 'locked' : ''}">
      <span class="ai">${a.icon}</span>
      <h4>${a.name}</h4>
    </div>`).join('');
}

// =====================================================
// TEACHER DASHBOARD — LOAD
// =====================================================
function loadTeacherApp() {
  showPage('teacher-page');
  document.getElementById('teacher-topbar-user').textContent = `👩‍🏫 ${currentUser.name.split(' ')[0]}`;
  renderWeeklyChart();
  renderXPChart();
  renderStudentTable();
  renderActivityFeed();
}

function renderWeeklyChart() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const vals = [18, 25, 22, 30, 28, 15, 12];
  const maxV = Math.max(...vals);
  const c    = document.getElementById('weekly-chart');
  c.innerHTML = days.map((d, i) => {
    const h     = Math.round((vals[i] / maxV) * 130);
    const color = `hsl(${130 + i * 15}, 60%, 45%)`;
    return `
      <div class="bar-col">
        <div class="bar-val">${vals[i]}</div>
        <div class="bar" style="height:${h}px;background:linear-gradient(180deg,${color},${color}88)"></div>
        <div class="bar-label">${d}</div>
      </div>`;
  }).join('');
}

function renderXPChart() {
  const students = TEACHER_STUDENTS.slice(0, 8);
  const maxXP    = Math.max(...students.map(s => s.xp));
  const colors   = ['#1db954','#38b6ff','#f39c12','#8e44ad','#e74c3c','#00bcd4','#ff5722','#607d8b'];
  const c        = document.getElementById('xp-chart');
  c.innerHTML = students.map((s, i) => {
    const h    = Math.round((s.xp / maxXP) * 130);
    const name = s.name.split(' ')[0];
    return `
      <div class="bar-col">
        <div class="bar-val">${s.xp}</div>
        <div class="bar" style="height:${h}px;background:linear-gradient(180deg,${colors[i]},${colors[i]}88)"></div>
        <div class="bar-label">${name}</div>
      </div>`;
  }).join('');
}

function renderStudentTable() {
  const tbody = document.getElementById('student-tbody');
  tbody.innerHTML = TEACHER_STUDENTS.map((s, i) => {
    const status    = s.progress >= 70 ? 'tag-green' : s.progress >= 40 ? 'tag-orange' : 'tag-red';
    const statusTxt = s.progress >= 70 ? 'Active'    : s.progress >= 40 ? 'Moderate'   : 'Needs Help';
    return `
      <tr>
        <td><strong>${i + 1}</strong></td>
        <td><strong>${s.name}</strong></td>
        <td><strong style="color:var(--green)">⚡${s.xp}</strong></td>
        <td>${s.tasks}</td>
        <td>${s.quizzes}</td>
        <td>${s.streak > 0 ? '🔥' + s.streak + 'd' : '—'}</td>
        <td>
          <div class="progress-mini"><div class="progress-mini-fill" style="width:${s.progress}%"></div></div>
          <div style="font-size:0.72rem;color:var(--muted);margin-top:3px">${s.progress}%</div>
        </td>
        <td><span class="tag ${status}">${statusTxt}</span></td>
      </tr>`;
  }).join('');
}

function renderActivityFeed() {
  const activities = [
    { icon: '🧠', color: '#e8f4ff', student: 'Aryan Kumar',  action: 'completed Air Quality Quiz',          score: '+50 XP',  time: '2 min ago'  },
    { icon: '✅', color: '#d4f5e1', student: 'Priya Devi',   action: 'finished "Save Water Challenge"',     score: '+25 XP',  time: '8 min ago'  },
    { icon: '🔥', color: '#fff3e0', student: 'Rohit Sharma', action: 'hit a 6-day streak!',                 score: '+10 XP',  time: '15 min ago' },
    { icon: '🏆', color: '#fff9e0', student: 'Sneha Patel',  action: 'entered City Top 10',                 score: 'Rank #9', time: '32 min ago' },
    { icon: '🌳', color: '#d4f5e1', student: 'Karan Joshi',  action: 'completed Forests & Wildlife Quiz',   score: '+45 XP',  time: '1 hr ago'   },
    { icon: '📊', color: '#fde8e8', student: 'Divya Iyer',   action: 'needs attention — 3 days inactive',   score: '⚠️ Alert', time: '1 day ago'  },
  ];
  document.getElementById('activity-feed-list').innerHTML = activities.map(a => `
    <div class="feed-item">
      <div class="feed-dot" style="background:${a.color}">${a.icon}</div>
      <div class="feed-info">
        <h4><strong>${a.student}</strong> ${a.action}</h4>
        <p>${a.score} &nbsp;•&nbsp; ${a.time}</p>
      </div>
    </div>`).join('');
}

// =====================================================
// INIT
// =====================================================
window.addEventListener('DOMContentLoaded', () => {
  // App is ready — waiting for user interaction
});
