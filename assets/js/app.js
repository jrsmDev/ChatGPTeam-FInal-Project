
const MATCHES=[
  {id:'m1',role:'Frontend Developer Intern',company:'GCash',distanceKm:27,angle:35,location:'BGC, Taguig',lat:14.5509,lng:121.0503,overall:92,skill:90,geo:72,program:'Technology & Data',skills:['React','JavaScript','Git','Figma']},
  {id:'m2',role:'UI/UX Design Intern',company:'Accenture',distanceKm:32,angle:150,location:'Mandaluyong',lat:14.5895,lng:121.0350,overall:88,skill:86,geo:70,program:'Arts & Design',skills:['Figma','Prototyping','User Research','Communication']},
  {id:'m3',role:'AI/ML Engineering Intern',company:'IBM Philippines',distanceKm:45,angle:95,location:'Quezon City',lat:14.6518,lng:121.0685,overall:87,skill:85,geo:62,program:'Technology & Data',skills:['Python','PyTorch','Data Analysis','Communication']},
  {id:'m4',role:'Backend Developer Intern',company:'UnionBank',distanceKm:32,angle:120,location:'Ortigas, Pasig',lat:14.5893,lng:121.0635,overall:83,skill:84,geo:70,program:'Technology & Data',skills:['Java','Spring Boot','SQL','Git']},
  {id:'m5',role:'IT Support Intern',company:'SM Prime',distanceKm:1.2,angle:260,location:'Dasmariñas',lat:14.3228,lng:120.9425,overall:81,skill:78,geo:95,program:'Technology & Data',skills:['Networking','Troubleshooting','Documentation']},
  {id:'m6',role:'Data Analyst Intern',company:'Maya Bank',distanceKm:27,angle:60,location:'BGC, Taguig',lat:14.5540,lng:121.0450,overall:80,skill:82,geo:72,program:'Technology & Data',skills:['SQL','Python','Power BI','Communication']},
  {id:'m7',role:'Cybersecurity Intern',company:'Globe Telecom',distanceKm:28,angle:80,location:'BGC, Taguig',lat:14.5545,lng:121.0550,overall:79,skill:76,geo:72,program:'Technology & Data',skills:['Networking','Linux','Security Fundamentals']},
  {id:'m8',role:'Customer Experience Intern',company:'Concentrix',distanceKm:14,angle:200,location:'Alabang, Muntinlupa',lat:14.4156,lng:121.0403,overall:74,skill:72,geo:84,program:'Marketing & Communications',skills:['Communication','CRM Tools','MS Excel']},
  {id:'m9',role:'Digital Marketing Intern',company:'Pilmico Foods',distanceKm:14,angle:205,location:'Alabang, Muntinlupa',lat:14.4180,lng:121.0408,overall:86,skill:88,geo:84,program:'Marketing & Communications',skills:['Content Writing','Social Media','Communication','MS Excel']},
  {id:'m10',role:'Accounting Intern',company:'Metro Retail Group',distanceKm:31,angle:60,location:'Makati',lat:14.5540,lng:121.0240,overall:84,skill:86,geo:70,program:'Business & Finance',skills:['Bookkeeping','Excel','Attention to Detail','Communication']},
  {id:'m11',role:'Human Resources Intern',company:'Robinsons Land',distanceKm:32,angle:120,location:'Ortigas, Pasig',lat:14.5870,lng:121.0610,overall:82,skill:84,geo:70,program:'Business & Finance',skills:['Recruitment','Communication','Documentation','MS Excel']},
  {id:'m12',role:'Learning Support Intern',company:'BrightSteps Learning Center',distanceKm:2,angle:250,location:'Dasmariñas',lat:14.3350,lng:120.9400,overall:85,skill:87,geo:94,program:'Education & Social Sciences',skills:['Lesson Planning','Communication','Patience','Documentation']},
  {id:'m13',role:'Civil Engineering Intern',company:'Cavite BuildWorks',distanceKm:4,angle:240,location:'Dasmariñas',lat:14.3560,lng:120.9500,overall:83,skill:85,geo:91,program:'Engineering & Built Environment',skills:['AutoCAD','Site Safety','Technical Drawing','Documentation']},
  {id:'m14',role:'Community Health Intern',company:'Cavite Community Care',distanceKm:3,angle:270,location:'Dasmariñas',lat:14.3050,lng:120.9550,overall:81,skill:83,geo:93,program:'Health & Life Sciences',skills:['Health Education','Communication','First Aid','Documentation']},
  {id:'m15',role:'Hospitality Operations Intern',company:'Tagaytay Highlands',distanceKm:23,angle:220,location:'Tagaytay',lat:14.1150,lng:120.9620,overall:80,skill:82,geo:78,program:'Hospitality & Tourism',skills:['Guest Services','Communication','Event Support','MS Excel']},
  {id:'m16',role:'Graphic Design Intern',company:'Southpoint Creative Studio',distanceKm:15,angle:195,location:'Alabang, Muntinlupa',lat:14.4200,lng:121.0350,overall:82,skill:84,geo:84,program:'Arts & Design',skills:['Graphic Design','Illustration','Communication','Figma']},
  {id:'m17',role:'Legal Research Intern',company:'Community Legal Aid Network',distanceKm:31,angle:75,location:'Makati',lat:14.5590,lng:121.0190,overall:84,skill:86,geo:70,program:'Law & Public Service',skills:['Legal Research','Writing','Communication','Documentation']},
  {id:'m18',role:'Environmental Field Intern',company:'Cavite GreenWorks',distanceKm:6,angle:225,location:'General Trias',lat:14.3250,lng:120.9100,overall:82,skill:84,geo:90,program:'Agriculture & Environment',skills:['Field Research','Sustainability','Data Collection','Documentation']},
  {id:'m19',role:'Laboratory Research Intern',company:'South Luzon Science Center',distanceKm:5,angle:250,location:'Dasmariñas',lat:14.3420,lng:120.9650,overall:85,skill:87,geo:91,program:'Science & Research',skills:['Research Methods','Data Collection','Laboratory Safety','Documentation']},
  {id:'m20',role:'Sports Development Intern',company:'Cavite Youth Sports Council',distanceKm:4,angle:265,location:'Dasmariñas',lat:14.3100,lng:120.9300,overall:79,skill:81,geo:92,program:'Sports & Recreation',skills:['Coaching Support','Event Planning','Communication','First Aid']},
  {id:'m21',role:'Community Programs Intern',company:'OpenHands Foundation',distanceKm:8,angle:245,location:'General Trias',lat:14.3300,lng:120.9000,overall:80,skill:82,geo:88,program:'Law & Public Service',skills:['Community Outreach','Writing','Communication','Event Support']}
];
const PROGRAMS_BY_DEPARTMENT={
  'Engineering, Computing & IT':['Computer Engineering','Information Technology','Software Engineering','Cybersecurity','Computer Science','Information Systems','Data Science','Artificial Intelligence','Computer Networking','Information Technology Education','Game Development','Web Development','Digital Forensics','Multimedia Computing','Civil Engineering','Mechanical Engineering','Electrical Engineering','Electronics Engineering','Chemical Engineering','Industrial Engineering','Architecture','Landscape Architecture','Construction Management','Environmental Engineering','Geodetic Engineering','Mining Engineering','Sanitary Engineering','Urban and Regional Planning'],
  'Business & Finance':['Accountancy','Accounting Information Systems','Business Administration','Financial Management','Banking and Finance','Economics','Human Resource Management','Operations Management','Entrepreneurship','Management Accounting','Supply Chain Management','Business Analytics','Office Administration','Marketing Management'],
  'Marketing & Communications':['Marketing Management','Digital Marketing','Advertising','Public Relations','Communication','Broadcast Communication','Journalism','Development Communication','Multimedia Arts','Media Studies','Organizational Communication','Content Production'],
  'Education & Social Sciences':['Elementary Education','Secondary Education','Early Childhood Education','Special Needs Education','Physical Education','Psychology','Sociology','Social Work','Political Science','History','English Language Studies','Guidance and Counseling','Community Development'],
  'Health & Life Sciences':['Nursing','Medical Technology','Medical Laboratory Science','Pharmacy','Physical Therapy','Occupational Therapy','Public Health','Nutrition and Dietetics','Midwifery','Radiologic Technology','Respiratory Therapy','Biology','Biochemistry','Veterinary Medicine'],
  'Hospitality & Tourism':['Hospitality Management','Tourism Management','Hotel and Restaurant Management','Culinary Arts','Food Technology','Travel Management','Event Management','Cruise Line Operations','Restaurant Management','Tourism Development'],
  'Arts & Design':['Multimedia Arts','Graphic Design','Fine Arts','Visual Communication','Industrial Design','Interior Design','Fashion Design','Animation','Photography','Creative Writing','Music','Theater Arts','Film and Audio-Visual Production'],
  'Law & Public Service':['Legal Management','Political Science','Criminology','Public Administration','Public Safety','Community Development','International Studies','Customs Administration','Paralegal Studies','Peace and Development','Social Work','Local Governance'],
  'Agriculture & Environment':['Agriculture','Agricultural Engineering','Agribusiness','Forestry','Environmental Science','Environmental Planning','Fisheries','Aquaculture','Animal Science','Crop Science','Horticulture','Food Technology','Natural Resources Management'],
  'Science & Research':['Biology','Chemistry','Physics','Applied Mathematics','Statistics','Data Science','Biotechnology','Microbiology','Geology','Environmental Science','Marine Biology','Forensic Science','Science Education'],
  'Sports & Recreation':['Sports Science','Exercise and Sports Science','Physical Education','Sports Management','Recreation Management','Coaching','Athletic Training','Fitness and Wellness']
};
const PROGRAM_FIELDS=Object.keys(PROGRAMS_BY_DEPARTMENT);
const FIELDS_BY_DEPARTMENT={
  'Engineering, Computing & IT':['Technology & Data','Engineering & Built Environment'],
  'Business & Finance':['Business & Finance'],
  'Marketing & Communications':['Marketing & Communications'],
  'Education & Social Sciences':['Education & Social Sciences'],
  'Health & Life Sciences':['Health & Life Sciences'],
  'Hospitality & Tourism':['Hospitality & Tourism'],
  'Arts & Design':['Arts & Design'],
  'Law & Public Service':['Law & Public Service'],
  'Agriculture & Environment':['Agriculture & Environment'],
  'Science & Research':['Science & Research'],
  'Sports & Recreation':['Sports & Recreation']
};
const MATCH_ELIGIBLE_PROGRAMS={
  m1:['Information Technology','Computer Science','Software Engineering','Computer Engineering','Information Systems','Web Development'],
  m2:['Multimedia Arts','Graphic Design','Visual Communication','Fine Arts','Industrial Design','Interior Design'],
  m3:['Computer Science','Data Science','Artificial Intelligence','Information Technology','Computer Engineering','Statistics','Applied Mathematics'],
  m4:['Information Technology','Computer Science','Software Engineering','Computer Engineering','Information Systems'],
  m5:['Information Technology','Computer Engineering','Computer Networking','Information Systems','Cybersecurity'],
  m6:['Data Science','Information Technology','Computer Science','Business Analytics','Statistics','Financial Management'],
  m7:['Cybersecurity','Information Technology','Computer Science','Computer Engineering','Computer Networking','Digital Forensics'],
  m8:['Marketing Management','Communication','Business Administration','Psychology','Public Relations'],
  m9:['Marketing Management','Digital Marketing','Advertising','Communication','Public Relations','Multimedia Arts','Business Administration'],
  m10:['Accountancy','Accounting Information Systems','Management Accounting','Financial Management','Banking and Finance'],
  m11:['Human Resource Management','Business Administration','Psychology','Management Accounting'],
  m12:['Elementary Education','Secondary Education','Early Childhood Education','Special Needs Education','Psychology','Guidance and Counseling'],
  m13:['Civil Engineering','Architecture','Construction Management','Geodetic Engineering','Urban and Regional Planning'],
  m14:['Nursing','Medical Technology','Medical Laboratory Science','Public Health','Biology','Midwifery','Nutrition and Dietetics'],
  m15:['Hospitality Management','Tourism Management','Hotel and Restaurant Management','Culinary Arts','Event Management','Travel Management'],
  m16:['Graphic Design','Multimedia Arts','Fine Arts','Visual Communication','Animation','Photography','Film and Audio-Visual Production'],
  m17:['Legal Management','Political Science','Criminology','Public Administration','Paralegal Studies','International Studies'],
  m18:['Agriculture','Agribusiness','Environmental Science','Forestry','Agricultural Engineering','Natural Resources Management','Crop Science','Horticulture'],
  m19:['Biology','Chemistry','Physics','Biotechnology','Microbiology','Medical Technology','Medical Laboratory Science','Forensic Science','Science Education'],
  m20:['Sports Science','Exercise and Sports Science','Physical Education','Sports Management','Recreation Management','Coaching','Athletic Training'],
  m21:['Social Work','Community Development','Public Administration','Political Science','Sociology','Development Communication','International Studies']
};
const COMMUNITY_PROFILES={
  'Maria Lopez':{initials:'ML',kind:'Student',headline:'Information Technology student · Recent intern',description:'Recently completed an OJT placement at GCash and shares practical lessons from her internship experience.',organization:'Student · Seeking opportunities to share and learn',skills:['Information Technology','Web Development','OJT Experience']},
  'Prof. Ramon Cruz':{initials:'RC',kind:'School coordinator',headline:'School OJT Coordinator',description:'Supports students with OJT requirements, placement forms, and internship preparation.',organization:'School Coordinator · Student placement support',skills:['OJT Coordination','Student Advising','Placement Support']},
  'Paolo Garcia':{initials:'PG',kind:'Student',headline:'Information Technology student · Finding an internship',description:'Looking for a frontend development internship and connecting with other students preparing for interviews.',organization:'Student · Finding an internship',skills:['Frontend Development','JavaScript','Interview Preparation']},
  'Kyla Mendoza':{initials:'KM',kind:'Student',headline:'Accountancy student · Internship candidate',description:'Building practical experience in accounting and supporting fellow students in their internship search.',organization:'Student · Exploring internship opportunities',skills:['Accountancy','Bookkeeping','Excel']},
  'GCash':{initials:'GC',kind:'Employer',headline:'Hiring team · Financial technology',description:'Company account sharing internship opportunities across frontend development, data, and AI.',organization:'Employer · Internship hiring team',skills:['Technology','Data','Internship Hiring']}
};
let filters={dist:35,match:70,skill:'any',program:'any',course:'any'};
let applications=[
  {matchId:'m1',company:'GCash',role:'Frontend Developer Intern',status:'review',label:'Under review',date:'Oct 3'},
  {company:'Accenture',role:'UI/UX Design Intern',status:'interview',label:'Interview',date:'Oct 1'},
  {matchId:'m5',company:'SM Prime',role:'IT Support Intern',status:'interview',label:'Interview',date:'Sept 29'}
];
let saved=new Set(), currentMatchId=null;
const OJT_REQUIRED=400;let pendingHours=8, approvedHours=120;const remainingHours=()=>Math.max(0,OJT_REQUIRED-approvedHours-pendingHours);
let selectedRole=null, selectedPurpose=null;

const PURPOSE_OPTIONS={
  student:{
    title:'What are you looking for?',
    subtitle:'Tell us your goal so we can match you with the right opportunities.',
    badgeIcon:'school', badgeText:'Student',
    options:[
      {id:'find-internship',icon:'work',title:'Finding an Internship',desc:'Browse and apply for internship openings near you'},
      {id:'ojt-placement',icon:'assignment',title:'OJT Placement',desc:'Find an on-the-job training slot for your program requirements'},
      {id:'explore-opportunities',icon:'explore',title:'Exploring Opportunities',desc:"Just browsing — see what's out there and build your profile"},
      {id:'skill-building',icon:'psychology',title:'Skill Building & Growth',desc:'Find roles that match and grow your current skill set'}
    ]
  },
  employer:{
    title:'What do you need?',
    subtitle:'Tell us your goal so we can connect you with the right candidates.',
    badgeIcon:'business', badgeText:'Employer',
    options:[
      {id:'find-interns',icon:'person_search',title:'Finding Interns',desc:'Search for skilled student interns to join your team'},
      {id:'post-openings',icon:'post_add',title:'Posting Internship Openings',desc:'Create and publish internship listings for your company'},
      {id:'manage-interns',icon:'groups',title:'Managing Current Interns',desc:'Track hours, approve tasks, and oversee your active interns'},
      {id:'partner-schools',icon:'handshake',title:'Partnering with Schools',desc:'Build partnerships with universities for a steady intern pipeline'}
    ]
  },
  school:{
    title:"What's your focus?",
    subtitle:'Let us know your priorities so we can tailor your coordinator tools.',
    badgeIcon:'account_balance', badgeText:'School Coordinator',
    options:[
      {id:'manage-placements',icon:'assignment_ind',title:'Managing Student Placements',desc:'Oversee and approve student OJT/internship placements'},
      {id:'track-progress',icon:'trending_up',title:'Tracking OJT Progress',desc:'Monitor student hours, supervisor approvals, and completion rates'},
      {id:'company-partners',icon:'corporate_fare',title:'Company Partnerships',desc:'Find and manage company partners for student placements'},
      {id:'compliance',icon:'verified',title:'Compliance & Endorsements',desc:'Handle endorsement letters, MOAs, and regulatory requirements'}
    ]
  }
};

function selectRole(role,el){
  selectedRole=role;
  document.querySelectorAll('.role-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('roleNextBtn').disabled=false;
  renderPurposeOptions();
}

function renderPurposeOptions(){
  const cfg=PURPOSE_OPTIONS[selectedRole]; if(!cfg) return;
  document.querySelector('#purposeBadge .material-icons-outlined').textContent=cfg.badgeIcon;
  document.getElementById('purposeBadgeText').textContent=cfg.badgeText;
  document.getElementById('purposeTitle').textContent=cfg.title;
  document.getElementById('purposeSubtitle').textContent=cfg.subtitle;
  const grid=document.getElementById('purposeGrid');
  grid.innerHTML=cfg.options.map(opt=>`
    <div class="purpose-card" data-purpose="${opt.id}" onclick="selectPurpose('${opt.id}','${opt.title.replace(/'/g,"\\'")}',this)">
      <div class="purpose-icon"><span class="material-icons-outlined">${opt.icon}</span></div>
      <div class="purpose-info"><h3>${opt.title}</h3><p>${opt.desc}</p></div>
      <div class="purpose-check"><span class="material-icons-outlined">check</span></div>
    </div>`).join('');
  selectedPurpose=null;
  document.getElementById('purposeNextBtn').disabled=true;
}

function selectPurpose(id,title,el){
  selectedPurpose={id,title};
  document.querySelectorAll('.purpose-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('purposeNextBtn').disabled=false;
}

function finishOnboarding(){
  const cfg=PURPOSE_OPTIONS[selectedRole];
  if(cfg&&selectedPurpose){
    document.getElementById('dashRoleText').textContent=cfg.badgeText+' \u2022 '+selectedPurpose.title;
    document.querySelector('#dashRoleBadge .material-icons-outlined').textContent=cfg.badgeIcon;
  }
  updateDashboardForRole();
  showScreen('dashboard');
}

function updateDashboardForRole(){
  const el=document.getElementById('dashStats');
  if(selectedRole==='employer'){
    el.innerHTML='<div class="stat-card"><span class="stat-value">24</span><span class="stat-label">Applicants Received</span></div><div class="stat-card"><span class="stat-value">5</span><span class="stat-label">Active Openings</span></div><div class="stat-card"><span class="stat-value">8</span><span class="stat-label">Current Interns</span></div><div class="stat-card"><span class="stat-value">3</span><span class="stat-label">Partner Schools</span></div>';
  } else if(selectedRole==='school'){
    el.innerHTML='<div class="stat-card"><span class="stat-value">156</span><span class="stat-label">Students Placed</span></div><div class="stat-card"><span class="stat-value">42</span><span class="stat-label">Pending Placements</span></div><div class="stat-card"><span class="stat-value">18</span><span class="stat-label">Partner Companies</span></div><div class="stat-card"><span class="stat-value">94%</span><span class="stat-label">Completion Rate</span></div>';
  } else {
    el.innerHTML='<div class="stat-card"><span class="stat-value">87%</span><span class="stat-label">Average Skill Match</span></div><div class="stat-card"><span class="stat-value">12</span><span class="stat-label">Nearby Matches</span></div><div class="stat-card"><span class="stat-value" id="dashHours">400</span><span class="stat-label">Required OJT Hours</span></div><div class="stat-card"><span class="stat-value" id="dashApps">30</span><span class="stat-label">Applications Submitted</span></div>';
  }
}

function recCardHTML(m,idx){
  const skills=m.skills.slice(0,3).map(skill=>'<span class="chip">'+skill+'</span>').join('');
  return '<div class="rec-card" onclick="openDetails(\''+m.id+'\')"><div class="rec-top"><h3>'+m.role+'</h3><span class="rec-score">'+m.overall+'% match</span></div><p class="rec-meta">'+m.company+' \u2022 '+m.distanceKm+' km away</p><span class="program-tag">'+m.program+'</span><div class="rec-skills-list">'+skills+'</div><button class="rec-link" onclick="event.stopPropagation();openDetails(\''+m.id+'\')">View details</button></div>';
}
function renderDashList(){
  const top=getRecommendedMatches();
  document.getElementById('dashList').innerHTML=top.map((m,i)=>recCardHTML(m,i)).join('');
}
function getRecommendedMatches(limit=3){
  const sorted=[...MATCHES].sort((a,b)=>b.overall-a.overall);
  const diverse=[];
  const usedPrograms=new Set();
  sorted.forEach(match=>{
    if(diverse.length<limit&&!usedPrograms.has(match.program)){
      diverse.push(match);
      usedPrograms.add(match.program);
    }
  });
  if(diverse.length<limit) sorted.forEach(match=>{if(diverse.length<limit&&!diverse.includes(match)) diverse.push(match)});
  return diverse;
}

function matchCardHTML(m){
  return '<div class="match-card" onclick="openDetails(\''+m.id+'\')"><div class="card-top"><div><h3>'+m.role+'</h3><p class="meta">'+m.company+' \u2022 '+m.distanceKm+' km</p><span class="program-tag">'+m.program+'</span></div><span class="pct">'+m.overall+'%</span></div><button class="view-link" onclick="openDetails(\''+m.id+'\')">View details</button></div>';
}
function initSkillFilter(){
  const skills=[...new Set(MATCHES.flatMap(m=>m.skills))].sort();
  ['skillFilter','mapSkillFilter','fullmapSkillFilter'].forEach(id=>{
    const sel=document.getElementById(id);
    skills.forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;sel.appendChild(o)});
  });
  ['programFilter','mapProgramFilter','fullmapProgramFilter'].forEach(id=>{
    const sel=document.getElementById(id);
    sel.options[0].textContent='Any department';
    PROGRAM_FIELDS.forEach(program=>{const o=document.createElement('option');o.value=program;o.textContent=program;sel.appendChild(o)});
  });
  syncProgramFilters();
}
function updateProgramFilter(value){
  filters.program=PROGRAM_FIELDS.includes(value)?value:'any';
  filters.course='any';
  syncProgramFilters();
  saveState();
  applyFilters();
}
function updateCourseFilter(value){
  const options=PROGRAMS_BY_DEPARTMENT[filters.program]||[];
  filters.course=value==='any'||options.includes(value)?value:'any';
  syncProgramFilters();
  saveState();
  applyFilters();
}
function syncProgramFilters(){
  ['programFilter','mapProgramFilter','fullmapProgramFilter'].forEach(id=>{
    const select=document.getElementById(id);
    if(select) select.value=filters.program;
  });
  const programs=PROGRAMS_BY_DEPARTMENT[filters.program]||[];
  ['courseFilter','mapCourseFilter','fullmapCourseFilter'].forEach(id=>{
    const select=document.getElementById(id);
    if(!select)return;
    select.replaceChildren();
    if(!programs.length){
      const option=document.createElement('option');
      option.value='any';
      option.textContent='Choose department';
      select.appendChild(option);
      select.disabled=true;
      return;
    }
    const any=document.createElement('option');
    any.value='any';
    any.textContent='Any program';
    select.appendChild(any);
    programs.forEach(program=>{
      const option=document.createElement('option');
      option.value=program;
      option.textContent=program;
      select.appendChild(option);
    });
    select.disabled=false;
    select.value=programs.includes(filters.course)?filters.course:'any';
  });
}
function updateSkillFilter(value){
  filters.skill=value;
  ['skillFilter','mapSkillFilter','fullmapSkillFilter'].forEach(id=>{
    const select=document.getElementById(id);
    if(select) select.value=value;
  });
  saveState();
  applyFilters();
}
function setFilter(group,val,btn){
  filters[group]=val;
  document.querySelectorAll('.chip-btn[data-group="'+group+'"]').forEach(b=>b.classList.toggle('active',Number(b.dataset.value)===Number(val)));
  if(group==='dist'){
    mapRefit=true;
    const r=document.getElementById('distanceRange');
    if(r) r.value=(val===999?50:val);
    const rv=document.getElementById('rangeValue');
    if(rv) rv.textContent=(val===999?'50+':val)+' km';
  }
  saveState();
  applyFilters();
}
function toggleMapFilters(button){
  const panel=document.getElementById('mapFilterPanel');
  const open=panel.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
}
function toggleFullMapFilters(button){
  const panel=document.getElementById('fullmapFilterPanel');
  if(!panel||!button) return;
  const open=panel.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
}

/* ═══ Real Location Engine (Leaflet + OpenStreetMap + Geolocation) ═══ */
let userLocation={lat:14.3294,lng:120.9366,label:'Dasmariñas, Cavite'};
let miniMap=null,fullMap=null,miniLayer=null,fullLayer=null,miniRadius=null,fullRadius=null,miniUser=null,fullUser=null,mapsReady=false,locating=false,mapRefit=true;
function haversineKm(a,b,c,d){
  const R=6371,t=Math.PI/180;
  const h=Math.sin((c-a)*t/2)**2+Math.cos(a*t)*Math.cos(c*t)*Math.sin((d-b)*t/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}
function recalcDistances(){
  MATCHES.forEach(m=>{
    if(m.lat!=null&&m.lng!=null){
      m.distanceKm=Math.round(haversineKm(userLocation.lat,userLocation.lng,m.lat,m.lng)*10)/10;
    }
  });
}
function compactLocationLabel(label){
  const parts=String(label).split(',').map(part=>part.trim()).filter(Boolean);
  const compact=parts.length>2?parts.slice(0,2).join(', '):parts.join(', ');
  return compact.length>30?parts[0].slice(0,30):compact;
}
function pinIcon(m){
  const sel=m.id===selectedMapId?' sel':'';
  return L.divIcon({className:'leaf-pin-wrap',html:'<div class="leaf-pin'+sel+'">'+m.overall+'%</div>',iconSize:[38,38],iconAnchor:[19,36],popupAnchor:[0,-34]});
}
function popupHTML(m){
  return '<b>'+m.role+'</b><br>'+m.company+' &bull; '+m.distanceKm+' km away<br><button onclick="openMapMatchDetails(\''+m.id+'\')" style="margin-top:6px;padding:6px 12px;border:0;border-radius:8px;background:#2D5A3D;color:#fff;font-weight:600;cursor:pointer">View details</button>';
}
function initLocationMaps(){
  if(typeof L==='undefined'){
    const w=document.getElementById('mapWrap');
    if(w) w.insertAdjacentHTML('beforeend','<p class="sub" style="position:absolute;z-index:600;left:12px;top:56px;background:#fff;padding:6px 10px;border-radius:8px">Map needs internet (tiles via OpenStreetMap).</p>');
    return;
  }
  recalcDistances();
  const tiles='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const attr='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  miniMap=L.map('realMap',{zoomControl:false,scrollWheelZoom:false}).setView([userLocation.lat,userLocation.lng],13);
  L.tileLayer(tiles,{maxZoom:19,attribution:attr}).addTo(miniMap);
  miniMap.on('click',()=>{
    const panel=document.getElementById('mapFilterPanel');
    const button=document.querySelector('.map-filter-button[aria-label="Show match filters"]');
    if(panel) panel.classList.remove('open');
    if(button) button.setAttribute('aria-expanded','false');
  });
  fullMap=L.map('fullRealMap',{zoomControl:false}).setView([userLocation.lat,userLocation.lng],13);
  L.tileLayer(tiles,{maxZoom:19,attribution:attr}).addTo(fullMap);
  fullMap.on('zoomend moveend',()=>{
    const z=fullMap.getZoom();
    const el=document.getElementById('fullmapZoomLabel');
    if(el) el.textContent='z'+z;
  });
  mapsReady=true;
  updateMapMarkers(getFiltered());
  applyFilters();
}
function updateMapMarkers(list){
  if(!mapsReady||typeof L==='undefined') return;
  recalcDistances();
  if(!list.some(x=>x.id===selectedMapId)) selectedMapId=list[0]?list[0].id:null;
  [miniLayer,fullLayer,miniRadius,fullRadius,miniUser,fullUser].forEach(l=>{if(l){try{l.remove()}catch(e){}}});
  miniLayer=L.layerGroup().addTo(miniMap);
  fullLayer=L.layerGroup().addTo(fullMap);
  const rad=Math.min(filters.dist===999?50:filters.dist,50)*1000;
  miniRadius=L.circle([userLocation.lat,userLocation.lng],{radius:rad,color:'#2D5A3D',weight:1,dashArray:'5 5',fillOpacity:0.04}).addTo(miniMap);
  fullRadius=L.circle([userLocation.lat,userLocation.lng],{radius:rad,color:'#2D5A3D',weight:1,dashArray:'5 5',fillOpacity:0.04}).addTo(fullMap);
  miniUser=L.circleMarker([userLocation.lat,userLocation.lng],{radius:8,color:'#fff',weight:3,fillColor:'#1E3F2A',fillOpacity:1}).addTo(miniMap).bindTooltip('You',{permanent:false});
  fullUser=L.circleMarker([userLocation.lat,userLocation.lng],{radius:9,color:'#fff',weight:3,fillColor:'#1E3F2A',fillOpacity:1}).addTo(fullMap).bindTooltip('You',{permanent:false});
  list.forEach(m=>{
    if(m.lat==null||m.lng==null) return;
    const mk=L.marker([m.lat,m.lng],{icon:pinIcon(m),title:m.role+' — '+m.company}).bindPopup(popupHTML(m));
    mk.on('click',()=>selectMatch(m.id));
    mk.addTo(miniLayer);
    const fm=L.marker([m.lat,m.lng],{icon:pinIcon(m),title:m.role+' — '+m.company}).bindPopup(popupHTML(m));
    fm.on('click',()=>selectMatch(m.id));
    fm.addTo(fullLayer);
  });
  if(mapRefit){
    miniMap.setView([userLocation.lat,userLocation.lng],miniMap.getZoom());
    fullMap.setView([userLocation.lat,userLocation.lng],fullMap.getZoom());
  }
  if(mapRefit){
    mapRefit=false;
    try{
      miniMap.fitBounds(miniRadius.getBounds(),{padding:[16,16]});
      fullMap.fitBounds(fullRadius.getBounds(),{padding:[24,24]});
    }catch(e){}
  }
  const c=document.getElementById('mapCoords');
  if(c) c.textContent=userLocation.label+' • '+userLocation.lat.toFixed(4)+', '+userLocation.lng.toFixed(4);
  const locationLabel=document.getElementById('mapLocationLabel');
  if(locationLabel) locationLabel.textContent=userLocation.label+' · '+(filters.dist===999?'50+':filters.dist)+' km';
  document.querySelectorAll('.user-location').forEach(el=>{
    if(el.textContent.includes('Dasmariñas')||el.dataset.live){
      el.dataset.live='1';
      el.innerHTML='<span class="material-icons-outlined">location_on</span>'+escapeHTML(userLocation.label);
    }
  });
  try{updateDashMap()}catch(e){}
}
async function searchLocation(prefix=''){
  const input=document.getElementById(prefix?prefix:'locationSearch');
  const suffix=prefix==='fullmapLocationSearch'?'fullmap':'';
  const status=document.getElementById(suffix?suffix+'LocationSearchStatus':'locationSearchStatus');
  const button=document.getElementById(suffix?suffix+'LocationSearchButton':'locationSearchButton');
  const query=input.value.trim();
  if(!query){status.textContent='Enter a city, barangay, or landmark to search.';input.focus();return}
  button.disabled=true;
  status.textContent='Searching for '+query+'…';
  try{
    const url='https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q='+encodeURIComponent(query);
    const response=await fetch(url,{headers:{Accept:'application/json'}});
    if(!response.ok) throw new Error('Location search is temporarily unavailable.');
    const results=await response.json();
    if(!results.length){status.textContent='No location found. Try a nearby city or landmark.';return}
    const result=results[0],lat=Number(result.lat),lng=Number(result.lon);
    if(!Number.isFinite(lat)||!Number.isFinite(lng)) throw new Error('The location result was invalid.');
    const label=compactLocationLabel(result.name||result.display_name||query);
    userLocation={lat,lng,label};
    mapRefit=true;
    recalcDistances();
    syncMapControls();
    applyFilters();
    saveState();
    if(miniMap) miniMap.setView([lat,lng],miniMap.getZoom());
    if(fullMap) fullMap.setView([lat,lng],fullMap.getZoom());
    status.textContent='Showing internships near '+label+'.';
  }catch(error){
    status.textContent=error instanceof Error?error.message:'Could not search for that location.';
  }finally{
    button.disabled=false;
  }
}
function syncMapControls(){
  const radius=filters.dist===999?50:filters.dist;
  const range=document.getElementById('distanceRange');
  if(range){
    range.value=String(radius);
    range.style.setProperty('--range-progress',(((radius-1)/49)*100)+'%');
  }
  const rangeLabel=document.getElementById('rangeValue');
  if(rangeLabel) rangeLabel.textContent=(filters.dist===999?'50+':filters.dist)+' km';
  const fullRange=document.getElementById('fullmapDistanceRange');
  if(fullRange){
    fullRange.value=String(radius);
    fullRange.style.setProperty('--range-progress',(((radius-1)/49)*100)+'%');
  }
  const fullRangeLabel=document.getElementById('fullmapRangeValue');
  if(fullRangeLabel) fullRangeLabel.textContent=(filters.dist===999?'50+':filters.dist)+' km';
  document.querySelectorAll('.chip-btn[data-group="dist"]').forEach(button=>{
    button.classList.toggle('active',Number(button.dataset.value)===Number(filters.dist));
  });
  document.querySelectorAll('.chip-btn[data-group="match"]').forEach(button=>{
    button.classList.toggle('active',Number(button.dataset.value)===Number(filters.match));
  });
  ['skillFilter','mapSkillFilter','fullmapSkillFilter'].forEach(id=>{
    const select=document.getElementById(id);
    if(select) select.value=filters.skill;
  });
  syncProgramFilters();
  const locationLabel=document.getElementById('mapLocationLabel');
  if(locationLabel) locationLabel.textContent=userLocation.label+' · '+(filters.dist===999?'50+':filters.dist)+' km';
}
function useMyLocation(){
  if(!navigator.geolocation){showToast('Geolocation not supported on this device','error');return}
  if(locating) return;
  locating=true;
  showToast('Getting your location…','info');
  navigator.geolocation.getCurrentPosition(async pos=>{
    locating=false;
    userLocation={lat:pos.coords.latitude,lng:pos.coords.longitude,label:'Your location'};
    mapRefit=true;
    reverseGeocode();
    if(mapsReady){
      miniMap.setView([userLocation.lat,userLocation.lng],14);
      fullMap.setView([userLocation.lat,userLocation.lng],14);
    }
    syncMapControls();
    applyFilters();
    saveState();
    showToast('Location updated','success');
  },err=>{
    locating=false;
    showToast('Could not get location — using Dasmariñas default','warning');
  },{enableHighAccuracy:true,timeout:10000,maximumAge:60000});
}
async function reverseGeocode(){
  try{
    const r=await fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat='+userLocation.lat+'&lon='+userLocation.lng);
    const j=await r.json();
    if(j&&j.display_name){
      const parts=(j.display_name||'').split(',').slice(0,2).join(',');
      userLocation.label=parts||'Your location';
      const c=document.getElementById('mapCoords');
      if(c) c.textContent=userLocation.label;
      syncMapControls();
      saveState();
    }
  }catch(e){}
}
/* legacy zoom hooks → Leaflet */
function zoomMap(d){if(miniMap) miniMap.zoomIn()}
function resetZoom(){if(miniMap) miniMap.setView([userLocation.lat,userLocation.lng],13)}
/* ═══ Full-Screen Map (Leaflet) ═══ */
function openFullMap(preserveView=false){
  internLinkApp.overlays.setOpen('fullmapOverlay',true);
  const panel=document.getElementById('fullmapFilterPanel');
  const filterButton=document.querySelector('.fullmap-filter-toggle');
  if(panel) panel.classList.remove('open');
  if(filterButton) filterButton.setAttribute('aria-expanded','false');
  syncMapControls();
  requestAnimationFrame(()=>{
    if(fullMap){
      fullMap.invalidateSize();
      updateMapMarkers(getFiltered());
      if(fullRadius&&!preserveView) fullMap.fitBounds(fullRadius.getBounds(),{padding:[24,24]});
      document.getElementById('fullmapCount').textContent=getFiltered().length+' matches';
    }
  });
}
function closeFullMap(){internLinkApp.overlays.setOpen('fullmapOverlay',false)}
function returnFromDetails(){
  const returnToMap=returnToFullMap;
  const mapCenter=returnToMap&&fullMap?fullMap.getCenter():null;
  const mapZoom=returnToMap&&fullMap?fullMap.getZoom():null;
  returnToFullMap=false;
  showScreen(detailsFrom||'matches');
  if(returnToMap) requestAnimationFrame(()=>{
    openFullMap(true);
    requestAnimationFrame(()=>{
      if(fullMap&&mapCenter&&mapZoom!=null) fullMap.setView(mapCenter,mapZoom);
    });
  });
}
function renderFullMap(){updateMapMarkers(getFiltered())}
function fullmapZoomIn(){if(fullMap) fullMap.zoomIn()}
function fullmapZoomOut(){if(fullMap) fullMap.zoomOut()}
function fullmapReset(){if(fullMap) fullMap.setView([userLocation.lat,userLocation.lng],13)}

/* ═══ Distance Range Slider ═══ */
function updateDistanceRange(val){
  filters.dist=Number(val);
  mapRefit=true;
  syncMapControls();
  document.querySelectorAll('.chip-btn[data-group="dist"]').forEach(b=>b.classList.toggle('active',Number(b.dataset.value)===Number(val)));
  saveState();
  applyFilters();
}
function setView(view,btn){
  document.querySelectorAll('.toggle-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.getElementById('matchListView').classList.toggle('hidden',view!=='list');
  document.getElementById('matchMapView').classList.toggle('hidden',view!=='map');
  document.getElementById('screen-matches').classList.toggle('map-mode',view==='map');
  applyFilters();
}
function getFiltered(){
  const q=(document.getElementById('searchInput')?.value||'').toLowerCase();
  const departmentFields=FIELDS_BY_DEPARTMENT[filters.program]||[];
  return MATCHES.filter(m=>m.distanceKm<=filters.dist&&m.overall>=filters.match&&(filters.program==='any'||departmentFields.includes(m.program))&&(filters.course==='any'||(MATCH_ELIGIBLE_PROGRAMS[m.id]||[]).includes(filters.course))&&(filters.skill==='any'||m.skills.includes(filters.skill))&&([m.role,m.company,m.program,...(MATCH_ELIGIBLE_PROGRAMS[m.id]||[]),...m.skills].join(' ').toLowerCase().includes(q)));
}
function applyFilters(){
  const list=getFiltered();
  if(!list.some(m=>m.id===selectedMapId)) selectedMapId=[...list].sort((a,b)=>b.overall-a.overall)[0]?.id||null;
  const searchInput=document.getElementById('searchInput');
  ['mapSearchInput','fullmapSearchInput'].forEach(id=>{
    const input=document.getElementById(id);
    if(input&&searchInput&&input.value!==searchInput.value) input.value=searchInput.value;
  });
  document.getElementById('matchList').innerHTML=list.length?list.map(matchCardHTML).join(''):'<p class="sub">No matches — try widening your filters.</p>';
  document.getElementById('listingsTitle').textContent='Listings ('+list.length+')';
  document.getElementById('mapListingsTitle').textContent=selectedMapId?'Selected internship':'No selected internship';
  syncMapControls();
  document.getElementById('mapCount').textContent=list.length+' '+(list.length===1?'match':'matches')+' nearby';
  renderSelectedMapMatch();
  renderMap(list);
  const fullCount=document.getElementById('fullmapCount');
  if(fullCount) fullCount.textContent=list.length+' '+(list.length===1?'match':'matches');
}
function selectedMapMatchHTML(m,isSelected=true){
  if(!m) return '<p class="sub map-empty-selection">No nearby matches. Try widening your filters.</p>';
  return `<article class="map-match-card${isSelected?' selected':''}" data-id="${m.id}" onclick="openMapMatchDetails('${m.id}')">
    <div class="map-card-score">${m.overall}%</div>
    <div class="map-card-content">
      <h3>${escapeHTML(m.role)}</h3>
      <p>${escapeHTML(m.company)} · ${m.distanceKm} km away</p>
      <span class="program-tag">${escapeHTML(m.program)}</span>
      <div class="map-card-actions">
        <button class="map-card-details" onclick="event.stopPropagation();openMapMatchDetails('${m.id}')">View details</button>
        <button class="map-card-save ${saved.has(m.id)?'saved':''}" aria-label="${saved.has(m.id)?'Remove saved match':'Save match'}" onclick="event.stopPropagation();toggleSaveFor('${m.id}',this)"><span class="material-icons-outlined">${saved.has(m.id)?'bookmark':'bookmark_border'}</span></button>
      </div>
    </div>
  </article>`;
}
function renderSelectedMapMatch(){
  const matches=getFiltered();
  const match=matches.find(m=>m.id===selectedMapId)||null;
  const markup=selectedMapMatchHTML(match);
  const card=document.getElementById('mapMatchCarousel');
  const fullCard=document.getElementById('fullmapSelectedCard');
  if(card) card.innerHTML=markup;
  if(fullCard){
    fullCard.innerHTML=matches.length?matches.map(m=>selectedMapMatchHTML(m,m.id===selectedMapId)).join(''):'<p class="sub map-empty-selection">No nearby matches. Try widening your filters.</p>';
    if(!fullCard.dataset.carouselBound){
      fullCard.addEventListener('scroll',()=>{
        clearTimeout(mapCarouselScrollTimer);
        mapCarouselScrollTimer=setTimeout(()=>{
          const center=fullCard.getBoundingClientRect().top+fullCard.clientHeight/2;
          const active=[...fullCard.querySelectorAll('.map-match-card')].reduce((best,item)=>{
            const rect=item.getBoundingClientRect();
            return !best||Math.abs(rect.top+rect.height/2-center)<Math.abs(best.rect.top+best.rect.height/2-center)?{item,rect}:best;
          },null);
          if(active&&active.item.dataset.id!==selectedMapId) selectMatch(active.item.dataset.id);
        },100);
      },{passive:true});
      fullCard.dataset.carouselBound='true';
    }
    const selectedCard=fullCard.querySelector(`.map-match-card[data-id="${selectedMapId}"]`);
    if(selectedCard) fullCard.scrollTop=selectedCard.offsetTop;
  }
  const title=document.getElementById('mapListingsTitle');
  if(title) title.textContent=match?'Selected internship':'No selected internship';
}
function openMapMatchDetails(id){
  const overlay=document.getElementById('fullmapOverlay');
  const fromExpandedMap=!!overlay?.classList.contains('open');
  if(selectedMapId!==id&&getFiltered().some(match=>match.id===id)){
    selectedMapId=id;
    renderSelectedMapMatch();
    updateMapMarkers(getFiltered());
  }
  if(fromExpandedMap) closeFullMap();
  openDetails(id);
  returnToFullMap=fromExpandedMap;
  const back=document.getElementById('detailsBackButton');
  if(back) back.innerHTML='<span class="material-icons-outlined">arrow_back</span> '+(fromExpandedMap?'Back to map':'Back');
}
function toggleSaveFor(id,button){
  if(saved.has(id)) saved.delete(id); else saved.add(id);
  const isSaved=saved.has(id);
  button.classList.toggle('saved',isSaved);
  button.setAttribute('aria-label',isSaved?'Remove saved match':'Save match');
  button.querySelector('.material-icons-outlined').textContent=isSaved?'bookmark':'bookmark_border';
  saveState();
}
function renderMap(list){
  if(!mapsReady){initLocationMaps();return}
  try{miniMap.invalidateSize()}catch(e){}
  updateMapMarkers(list);
}

function renderApplications(){
  document.getElementById('appList').innerHTML=applications.map(a=>
    '<div class="app-card"><div class="card-top"><div><h3>'+a.role+'</h3><p class="meta">'+a.date+'</p></div><span class="badge '+a.status+'">'+a.label+'</span></div></div>'
  ).join('');
}
function openDetails(id){
  const m=MATCHES.find(x=>x.id===id);currentMatchId=id;
  document.getElementById('detTitle').textContent=m.role;
  document.getElementById('detMeta').textContent=m.company+' \u2022 '+m.distanceKm+' km away \u2022 '+m.program;
  document.getElementById('detSkillPct').textContent=m.skill+'%';
  document.getElementById('detGeoPct').textContent=m.geo+'%';
  document.getElementById('detOverallPct').textContent=m.overall+'%';
  document.getElementById('detSkillBar').style.width=m.skill+'%';
  document.getElementById('detGeoBar').style.width=m.geo+'%';
  document.getElementById('detOverallBar').style.width=m.overall+'%';
  document.getElementById('detSkills').innerHTML=m.skills.map(s=>'<span class="chip">'+s+'</span>').join('');
  document.getElementById('detOjt').textContent='8 hours/day \u2022 School endorsement required. Location: '+m.location;
  const already=applications.some(a=>a.role.startsWith(m.role.split(' Intern')[0]));
  const ab=document.getElementById('applyBtn');ab.textContent=already?'Applied \u2713':'Apply now';ab.disabled=already;
  document.getElementById('saveBtn').textContent=saved.has(id)?'Saved \u2713':'Save for later';
  showScreen('details');
}
function applyToCurrent(){
  const m=MATCHES.find(x=>x.id===currentMatchId);
  if(!m||applications.some(a=>a.matchId===m.id)) return;
  applications.unshift({matchId:m.id,company:m.company,role:m.role,status:'submitted',label:'Submitted',date:todayLabel()});
  renderApplications();showScreen('applications');
}
function toggleSave(){
  if(saved.has(currentMatchId)) saved.delete(currentMatchId); else saved.add(currentMatchId);
  document.getElementById('saveBtn').textContent=saved.has(currentMatchId)?'Saved \u2713':'Save for later';
}

const messageThreads=[
  {name:'GCash',preview:'Thanks for applying — we’d love to set up a quick intro call.',time:'2m',unread:1,initials:'GC'},
  {name:'IBM Philippines',preview:'Your profile matches the AI/ML internship brief. Can you share your portfolio?',time:'1h',unread:0,initials:'IB'},
  {name:'SM Prime',preview:'We’ve reviewed your application and would like to schedule an interview.',time:'Yesterday',unread:0,initials:'SM'}
];
function renderMessages(){
  const box=document.getElementById('messageList');
  if(!box) return;
  box.innerHTML=messageThreads.map(t=>`
    <div class="message-card ${t.unread?'unread':''}">
      <div class="message-avatar">${t.initials}</div>
      <div class="message-content">
        <div class="message-top"><strong>${t.name}</strong><span class="message-time">${t.time}</span></div>
        <div class="message-preview">${t.preview}</div>
      </div>
      ${t.unread?'<div class="message-pill">'+t.unread+'</div>':''}
    </div>
  `).join('');
}

const noNavScreens=new Set(['onboarding','loginOptions','login','roleSelect','purposeSelect','details','chat','notifications','settings','feed','editProfile','ojtLog','communityProfile']);
let internLinkApp;
function showScreen(name){return internLinkApp.screens.show(name)}

/* ═══ Toast Notification System ═══ */
function showToast(message, type='success', duration=2800) {
  const container = document.getElementById('toastContainer');
  const icons = {success:'check_circle',info:'info',warning:'warning',error:'error'};
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<span class="material-icons-outlined">' + (icons[type]||'info') + '</span>' + message;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('hiding'); }, duration);
  setTimeout(() => { toast.remove(); }, duration + 350);
}

/* ═══ Multi-Slide Onboarding ═══ */
let currentSlide = 0;
const totalSlides = 3;

function goToSlide(idx) {
  const slides = document.querySelectorAll('.onboarding-slide');
  const dots = document.querySelectorAll('#onboardingDots .dot');
  slides.forEach((s, i) => {
    s.classList.remove('active', 'prev');
    if (i < idx) s.classList.add('prev');
    else if (i === idx) s.classList.add('active');
  });
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  currentSlide = idx;
  document.getElementById('screen-onboarding').dataset.slide = String(idx);
  const btn = document.getElementById('onboardingBtn');
  btn.innerHTML = 'Get started <span class="material-icons-outlined" aria-hidden="true">arrow_forward</span>';
}

function onboardingNext() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  } else {
    showScreen('loginOptions');
  }
}

/* ═══ Animated Counter ═══ */
function animateCounter(el, target, suffix='', duration=800) {
  const isPercent = suffix === '%';
  const start = 0;
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ═══ OJT Progress Ring ═══ */
function animateProgressRing() {
  const total = OJT_REQUIRED;
  const approved = Math.min(total,Math.max(0,approvedHours));
  const pct = Math.round((approved / total) * 100);
  const circumference = 2 * Math.PI * 42; // r=42
  const offset = circumference - (pct / 100) * circumference;

  const ring = document.getElementById('ojtRingFill');
  const pctEl = document.getElementById('ojtRingPct');
  if (ring) {
    ring.setAttribute('aria-valuenow',String(approved));
    setTimeout(() => {
      ring.style.strokeDashoffset = offset;
    }, 200);
  }
  if (pctEl) animateCounter(pctEl, pct, '%', 1000);

  const ra = document.getElementById('ringApproved');
  const rp = document.getElementById('ringPending');
  const rr = document.getElementById('ringRemaining');
  if (ra) ra.textContent = approvedHours + 'h';
  if (rp) rp.textContent = pendingHours + 'h';
  if (rr) rr.textContent = remainingHours() + 'h';
}

/* ═══ Dashboard Animation ═══ */
function animateDashboard() {
  animateProgressRing();
  // Animate stat card values
  document.querySelectorAll('#dashStats .stat-value').forEach(el => {
    const text = el.textContent;
    const num = parseInt(text);
    if (!isNaN(num)) {
      const suffix = text.replace(String(num), '');
      animateCounter(el, num, suffix, 700);
    }
  });
}

/* ═══ localStorage Persistence ═══ */
function saveState() {
  try {
    const state = {
      selectedRole, selectedPurpose,
      applications, saved: [...saved], followed: [...followed],
      pendingHours, approvedHours, ojtLogs, filters, userLocation
    };
    localStorage.setItem('internlink_state_v2', JSON.stringify(state));
  } catch(e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem('internlink_state_v2');
    if (!raw) return false;
    const state = JSON.parse(raw);
    if (state.selectedRole) selectedRole = state.selectedRole;
    if (state.selectedPurpose) selectedPurpose = state.selectedPurpose;
    if (state.applications) applications = state.applications;
    if (state.saved) saved = new Set(state.saved);
    if (state.followed) followed = new Set(state.followed);
    restoreFeed();
    if (state.pendingHours != null) pendingHours = state.pendingHours;
    if (state.approvedHours != null) approvedHours = state.approvedHours;
    if (Array.isArray(state.ojtLogs)) ojtLogs = state.ojtLogs;
    if(state.filters&&Number.isFinite(Number(state.filters.dist))){
      filters={...filters,...state.filters,dist:Number(state.filters.dist),match:Number(state.filters.match??filters.match)};
      if(!PROGRAM_FIELDS.includes(filters.program)){
        const previousDepartment=Object.keys(FIELDS_BY_DEPARTMENT).find(department=>FIELDS_BY_DEPARTMENT[department].includes(filters.program));
        filters.program=previousDepartment||'any';
      }
      if(!(PROGRAMS_BY_DEPARTMENT[filters.program]||[]).includes(filters.course)) filters.course='any';
    }
    if(state.userLocation&&Number.isFinite(Number(state.userLocation.lat))&&Number.isFinite(Number(state.userLocation.lng))){
      userLocation={lat:Number(state.userLocation.lat),lng:Number(state.userLocation.lng),label:compactLocationLabel(state.userLocation.label||'Saved location')};
      recalcDistances();
      mapRefit=true;
    }
    
    return !!state.selectedRole;
  } catch(e) { return false; }
}

// Patch applyToCurrent to use toast + save state
const _origApply = applyToCurrent;
applyToCurrent = function() {
  const m=MATCHES.find(x=>x.id===currentMatchId);
  if(!m||applications.some(a=>a.matchId===m.id)) return;
  applications.unshift({matchId:m.id,company:m.company,role:m.role,status:'submitted',label:'Submitted',date:todayLabel()});
  renderApplications();
  showToast('Application submitted to ' + m.company + '!', 'success');
  saveState();
  showScreen('applications');
};

// Patch toggleSave to use toast
const _origToggleSave = toggleSave;
toggleSave = function() {
  if(saved.has(currentMatchId)) { saved.delete(currentMatchId); showToast('Removed from saved', 'info'); }
  else { saved.add(currentMatchId); showToast('Saved for later', 'success'); }
  document.getElementById('saveBtn').textContent=saved.has(currentMatchId)?'Saved \u2713':'Save for later';
  saveState();
};

// Patch finishOnboarding to save
const _origFinish = finishOnboarding;
finishOnboarding = function() {
  const cfg=PURPOSE_OPTIONS[selectedRole];
  if(cfg&&selectedPurpose){
    document.getElementById('dashRoleText').textContent=cfg.badgeText+' \u2022 '+selectedPurpose.title;
    document.querySelector('#dashRoleBadge .material-icons-outlined').textContent=cfg.badgeIcon;
  }
  updateDashboardForRole();
  saveState();
  showScreen('dashboard');
  setTimeout(() => showToast('Welcome to InternLink! 🎉', 'success'), 600);
};

// Replace edit profile alert with toast
document.querySelector('#screen-profile .btn-secondary')?.addEventListener('click', function(e) {
  e.preventDefault();
  showToast('Profile editor coming soon!', 'info');
});

/* ═══ v2 improvements ═══ */
const MY_SKILLS=['HTML / CSS','JavaScript','Git','UI / UX','Database'];
const todayLabel=()=>new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'});
let selectedMapId=null,msgQuery='',detailsFrom='matches',returnToFullMap=false,mapCarouselScrollTimer=null;
const ROLE_VIEW={student:{name:'Juan Dela Cruz',ini:'JD',list:'Recommended'},employer:{name:'Ana Reyes',ini:'AR',list:'Top applicants'},school:{name:'Prof. Ramon Cruz',ini:'RC',list:'Needs your review'}};
const ROLE_LISTS={
  employer:[{n:'Maria Lopez',sub:'BS Computer Science \u2022 4th year',tag:'94% match',chips:['Python','SQL','Git']},{n:'Paolo Garcia',sub:'BS Information Technology \u2022 3rd year',tag:'89% match',chips:['JavaScript','UI / UX']},{n:'Kyla Mendoza',sub:'BS Accountancy \u2022 3rd year',tag:'84% match',chips:['Bookkeeping','Excel']},{n:'Rica Valdez',sub:'Bachelor of Secondary Education \u2022 4th year',tag:'82% match',chips:['Lesson Planning','Communication']},{n:'Mark Bautista',sub:'BS Civil Engineering \u2022 3rd year',tag:'80% match',chips:['AutoCAD','Technical Drawing']}],
  school:[{n:'Endorsement letter',sub:'Rica Valdez \u2022 SM Prime',tag:'Pending',chips:['Awaiting signature']},{n:'Hours approval',sub:'Mark Bautista \u2022 GCash',tag:'8h',chips:['Week 5 log']},{n:'New MOA',sub:'Accenture \u2022 partnership request',tag:'New',chips:['Review terms']}]
};
renderDashList=function(){
  const role=selectedRole||'student',box=document.getElementById('dashList');
  document.getElementById('dashListTitle').textContent=ROLE_VIEW[role].list;
  if(role==='student'){box.innerHTML=getRecommendedMatches().map(recCardHTML).join('');return}
  box.innerHTML=ROLE_LISTS[role].map(r=>'<div class="rec-card" onclick="handleRoleCardAction(\''+r.n.toLowerCase().split(' ')[0]+'\')"><div class="rec-top"><h3>'+r.n+'</h3><span class="rec-score">'+r.tag+'</span></div><p class="rec-meta">'+r.sub+'</p><div class="rec-skills-list">'+r.chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div></div>').join('');
};
const _udr=updateDashboardForRole;
updateDashboardForRole=function(){
  _udr();
  const role=selectedRole||'student',v=ROLE_VIEW[role];
  if(role==='student'){
    const s=document.querySelectorAll('#dashStats .stat-value');
    s[0].textContent=Math.round(MATCHES.reduce((t,m)=>t+m.overall,0)/MATCHES.length)+'%';
    s[1].textContent=getFiltered().length;s[2].textContent=OJT_REQUIRED;s[3].textContent=applications.length;
  }
  document.querySelectorAll('.student-only').forEach(e=>e.classList.toggle('hidden',role!=='student'));
  document.getElementById('dashName').textContent=v.name;
  renderDashList();
};

function selectMatch(id){
  if(!getFiltered().some(m=>m.id===id)) return;
  selectedMapId=id;
  renderSelectedMapMatch();
  updateMapMarkers(getFiltered());
}
window.addEventListener('resize',()=>{if(document.getElementById('screen-matches').classList.contains('active')) renderMap(getFiltered())});

openDetails=function(id){
  returnToFullMap=false;
  const m=MATCHES.find(x=>x.id===id);currentMatchId=id;
  const cur=document.querySelector('.screen.active');
  if(cur&&cur.id!=='screen-details') detailsFrom=cur.id.replace('screen-','');
  const $=i=>document.getElementById(i);
  $('detTitle').textContent=m.role;
  $('detMeta').textContent=m.company+' \u2022 '+m.distanceKm+' km away \u2022 '+m.program;
  $('detSkillPct').textContent=m.skill+'%';$('detGeoPct').textContent=m.geo+'%';$('detOverallPct').textContent=m.overall+'%';
  const bars=[['detSkillBar',m.skill],['detGeoBar',m.geo],['detOverallBar',m.overall]];
  bars.forEach(b=>$(b[0]).style.width='0%');
  setTimeout(()=>bars.forEach(b=>$(b[0]).style.width=b[1]+'%'),80);
  const have=m.skills.filter(x=>MY_SKILLS.includes(x)).length;
  $('detFit').textContent='You have '+have+' of '+m.skills.length+'. Dashed skills are gaps to build.';
  $('detSkills').innerHTML=m.skills.map(x=>MY_SKILLS.includes(x)?'<span class="chip have">\u2713 '+x+'</span>':'<span class="chip gap">'+x+'</span>').join('');
  $('detOjt').textContent='8 hours/day \u2022 School endorsement required. Location: '+m.location;
  const already=applications.some(a=>a.matchId===id),ab=$('applyBtn');
  ab.textContent=already?'Applied \u2713':'Apply now';ab.disabled=already;
  $('saveBtn').textContent=saved.has(id)?'Saved \u2713':'Save for later';
  const back=$('detailsBackButton');
  if(back) back.innerHTML='<span class="material-icons-outlined">arrow_back</span> Back';
  showScreen('details');
};

const STAGES=['Submitted','Reviewed','Interview','Accepted'],STAGE_N={submitted:1,review:2,interview:3,accepted:4};
renderApplications=function(){
  const box=document.getElementById('appList');
  if(!applications.length){box.innerHTML='<div class="empty-state"><div class="empty-state-icon"><span class="material-icons-outlined">work_outline</span></div><h3>No applications yet</h3><p>Apply to a match and track every stage here.</p><button class="btn-primary" onclick="showScreen(\'matches\')">Browse matches</button></div>';return}
  box.innerHTML=applications.map(a=>{
    const n=STAGE_N[a.status]||1;
    return '<div class="app-card"'+(a.matchId?' onclick="openDetails(\''+a.matchId+'\')"':'')+'><div class="card-top"><div><h3>'+a.role+'</h3><p class="meta">'+(a.company?a.company+' \u2022 ':'')+'Applied '+a.date+'</p></div><span class="badge '+a.status+'">'+a.label+'</span></div><div class="track">'+STAGES.map((s,i)=>'<i class="'+(i<n?'on':'')+'"></i>').join('')+'</div><div class="track-labels">'+STAGES.map((s,i)=>'<span class="'+(i===n-1?'on':'')+'">'+s+'</span>').join('')+'</div></div>';
  }).join('');
};

renderMessages=function(){
  const box=document.getElementById('messageList');if(!box) return;
  if(!box.dataset.chatHandlersBound){
    box.addEventListener('click',event=>{
      const card=event.target.closest('[data-chat-name]');
      if(card) readThread(card.dataset.chatName);
    });
    box.addEventListener('keydown',event=>{
      const card=event.target.closest('[data-chat-name]');
      if(card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();readThread(card.dataset.chatName)}
    });
    box.dataset.chatHandlersBound='true';
  }
  const list=messageThreads.filter(t=>!msgQuery||(t.name+' '+t.preview).toLowerCase().includes(msgQuery));
  box.innerHTML=list.length?list.map(t=>'<div class="message-card'+(t.unread?' unread':'')+'" data-chat-name="'+escapeHTML(t.name)+'" role="button" tabindex="0"><div class="message-avatar">'+escapeHTML(t.initials)+'</div><div class="message-content"><div class="message-top"><strong>'+escapeHTML(t.name)+'</strong><span class="message-time">'+escapeHTML(t.time)+'</span></div><div class="message-preview">'+escapeHTML(t.preview)+'</div></div>'+(t.unread?'<div class="message-pill">'+escapeHTML(String(t.unread))+'</div>':'')+'</div>').join(''):'<p class="sub">No chats match your search.</p>';
};
function readThread(name){const t=messageThreads.find(x=>x.name===name);if(t)t.unread=0;renderMessages();openChat(name)}

function onPostInput(t){document.getElementById('postBtn').disabled=!t.value.trim();document.getElementById('postCount').textContent=t.value.length+' / 280'}
let pendingPhotoUrl=null;
function submitPost(){
  const t=document.getElementById('postText');
  const text=t.value.trim();
  if(!text) return;
  const me=currentUser();
  POSTS.unshift({name:me.name,ini:me.ini,time:'Just now',text:text,likes:0,comments:0,liked:false,thread:[],img:pendingPhotoUrl});
  persistFeed();
  t.value='';onPostInput(t);clearPendingPhoto();
  renderFeed();renderDashCommunity();
  showScreen('feed');
  showToast('Posted to your network','success');
}
function clearPendingPhoto(){
  if(pendingPhotoUrl){try{URL.revokeObjectURL(pendingPhotoUrl)}catch(e){}}
  pendingPhotoUrl=null;
  const box=document.getElementById('postPhotoPreview');
  if(box) box.innerHTML='';
}

function setAuthMode(m){
  return internLinkApp.auth.setMode(m);
}
function signOut(){try{localStorage.removeItem('internlink_state_v2')}catch(e){}location.reload()}

/* ═══ XSS Protection ═══ */
function escapeHTML(str){const d=document.createElement('div');d.textContent=str;return d.innerHTML}

/* ═══ Modal System ═══ */
function openModal(id){internLinkApp.overlays.setOpen(id,true)}
function closeModal(id){internLinkApp.overlays.setOpen(id,false)}
function submitForgotPassword(){const input=document.getElementById('forgotEmail');if(!input.checkValidity()){input.reportValidity();return}closeModal('forgotModal');showToast('Prototype demo — no password reset email was sent.','info')}

/* ═══ Chat System ═══ */
const CHAT_HISTORY={
  'GCash':[
    {from:'them',text:'Hi Juan! Thanks for applying to the Frontend Developer Intern role.',time:'10:30 AM'},
    {from:'them',text:'We reviewed your profile and would love to set up a quick intro call.',time:'10:31 AM'},
    {from:'me',text:'Hello! Thank you for reaching out. I am very interested in this opportunity.',time:'10:35 AM'},
    {from:'them',text:'Great! How about Thursday at 2 PM for a 15-minute call?',time:'10:36 AM'}
  ],
  'IBM Philippines':[
    {from:'them',text:'Your profile matches the AI/ML internship brief. Can you share your portfolio?',time:'9:15 AM'},
    {from:'me',text:'Yes! I have a GitHub with several projects. Sending it over now.',time:'9:20 AM'}
  ],
  'SM Prime':[
    {from:'them',text:'We have reviewed your application and would like to schedule an interview.',time:'Yesterday'},
    {from:'them',text:'Are you available next week? We have slots on Tuesday and Wednesday.',time:'Yesterday'}
  ]
};
let currentChat=null,chatReturnScreen='messages';
function openChat(name,returnScreen='messages'){
  currentChat=name;
  chatReturnScreen=returnScreen;
  const profile=communityProfileFor(name);
  let thread=messageThreads.find(t=>t.name===name);
  if(!thread){
    thread={name,preview:'Start a conversation',time:'Now',unread:0,initials:profile.initials};
    messageThreads.unshift(thread);
  }
  document.getElementById('chatName').textContent=name;
  document.getElementById('chatAvatar').textContent=thread.initials||profile.initials;
  document.getElementById('chatStatus').textContent=profile.organization;
  const msgs=CHAT_HISTORY[name]||[];
  const box=document.getElementById('chatMessages');
  document.getElementById('chatInput').value='';
  box.innerHTML=msgs.map(m=>'<div class="chat-bubble '+m.from+'">'+escapeHTML(m.text)+'<span class="time">'+m.time+'</span></div>').join('');
  box.scrollTop=box.scrollHeight;
  if(thread)thread.unread=0;
  showScreen('chat');
}
function closeChat(){showScreen(chatReturnScreen)}
function sendChatMessage(){
  const input=document.getElementById('chatInput');
  const text=input.value.trim();
  if(!text||!currentChat)return;
  const recipient=currentChat;
  const now=new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true});
  if(!CHAT_HISTORY[recipient])CHAT_HISTORY[recipient]=[];
  CHAT_HISTORY[recipient].push({from:'me',text:text,time:now});
  const thread=messageThreads.find(item=>item.name===recipient);
  if(thread){thread.preview=text;thread.time='Now'}
  const box=document.getElementById('chatMessages');
  box.insertAdjacentHTML('beforeend','<div class="chat-bubble me">'+escapeHTML(text)+'<span class="time">'+now+'</span></div>');
  box.scrollTop=box.scrollHeight;
  input.value='';
  setTimeout(()=>{
    const replies=['Thanks for the update! We will get back to you shortly.','Sounds good! Let me check with the team.','Perfect, we will send the details soon.','Great, looking forward to it!'];
    const reply=replies[Math.floor(Math.random()*replies.length)];
    CHAT_HISTORY[recipient].push({from:'them',text:reply,time:now});
    if(currentChat===recipient&&document.getElementById('screen-chat').classList.contains('active')){
      box.insertAdjacentHTML('beforeend','<div class="chat-bubble them">'+reply+'<span class="time">'+now+'</span></div>');
      box.scrollTop=box.scrollHeight;
    }
    const activeThread=messageThreads.find(item=>item.name===recipient);
    if(activeThread){activeThread.preview=reply;activeThread.time='Now'}
  },1200+Math.random()*1500);
}

/* ═══ Notifications ═══ */
const NOTIFICATIONS=[
  {icon:'work',color:'green',title:'New match found',desc:'GCash — Frontend Developer Intern (92% match)',time:'2m',unread:true},
  {icon:'mail',color:'blue',title:'Application update',desc:'SM Prime moved your application to Interview stage',time:'1h',unread:true},
  {icon:'event',color:'orange',title:'OJT deadline approaching',desc:'45 days remaining to complete your 400 hours',time:'3h',unread:false},
  {icon:'thumb_up',color:'green',title:'Profile viewed',desc:'IBM Philippines viewed your profile',time:'Yesterday',unread:false},
  {icon:'description',color:'blue',title:'Endorsement ready',desc:'Your school endorsement letter is ready for download',time:'2d',unread:false}
];
function renderNotifications(){
  document.getElementById('notifList').innerHTML=NOTIFICATIONS.map(n=>'<div class="notif-card'+(n.unread?' unread':'')+'"><div class="notif-icon '+n.color+'"><span class="material-icons-outlined">'+n.icon+'</span></div><div class="notif-content"><h4>'+n.title+'</h4><p>'+n.desc+'</p></div><span class="notif-time">'+n.time+'</span></div>').join('');
}

/* ═══ Post Feed ═══ */
const POSTS=[
  {name:'Maria Lopez',ini:'ML',time:'2h ago',text:'Just finished my OJT at GCash! 400 hours complete. Thank you InternLink for the match!',likes:24,comments:5,liked:false,thread:[{by:'Paolo Garcia',ini:'PG',text:'Congrats! Which team were you on?',time:'1h ago'},{by:'Maria Lopez',ini:'ML',text:'Web platform team — learned so much about React!',time:'45m ago'}]},
  {name:'Prof. Ramon Cruz',ini:'RC',time:'5h ago',text:'Reminder: All 3rd year IT students must submit their OJT placement forms by Friday. See me if you need help finding a placement.',likes:18,comments:3,liked:false,thread:[]},
  {name:'Paolo Garcia',ini:'PG',time:'1d ago',text:'Anyone have tips for a frontend developer interview? I have one coming up at IBM Philippines next week!',likes:12,comments:8,liked:true,thread:[{by:'Kyla Mendoza',ini:'KM',text:'Review your portfolio pieces and practice explaining your code out loud. Good luck!',time:'20h ago'}]},
  {name:'GCash',ini:'GC',time:'2d ago',text:'We are hiring 5 more interns for 2026! Frontend, data, and AI roles across BGC and Ortigas. Apply through InternLink.',likes:45,comments:12,liked:false,thread:[]}
];
let followed=new Set(),openThreads=new Set();
function currentUser(){
  const name=(document.getElementById('dashName').textContent||'You').trim();
  const ini=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()||'YO';
  return {name,ini};
}
let communityProfileFrom='feed';
function communityProfileFor(name){
  if(name===currentUser().name){
    const role=selectedRole||'student';
    const roleInfo={
      student:{kind:'Student',headline:'Student · Finding an internship',description:'Looking for internship and OJT opportunities that fit my course, skills, and career goals.',organization:'Student · Finding an internship'},
      employer:{kind:'Employer',headline:'Employer · Hiring team',description:'Connecting students with internship opportunities and helping them gain practical, career-building experience.',organization:'Employer · Hiring internships'},
      school:{kind:'School coordinator',headline:'School Coordinator · OJT support',description:'Supporting students with OJT requirements, internship placements, and connections with employers.',organization:'School Coordinator · Student placement support'}
    }[role];
    return {name,initials:currentUser().ini,...roleInfo,skills:MY_SKILLS};
  }
  return COMMUNITY_PROFILES[name]?{...COMMUNITY_PROFILES[name],name}:{name,initials:name.split(' ').map(part=>part[0]).join('').slice(0,2).toUpperCase(),kind:'Community member',headline:'InternLink community member',description:'A member of the InternLink community. Their profile details have not been added in this prototype.',organization:'Community member',skills:[]};
}
function openCommunityProfile(name,from='feed'){
  const profile=communityProfileFor(name);
  communityProfileFrom=from;
  const isSelf=profile.name===currentUser().name;
  const skills=profile.skills.length?profile.skills.map(skill=>'<span class="chip">'+escapeHTML(skill)+'</span>').join(''):'<p class="sub">No skills listed yet.</p>';
  const content=document.getElementById('communityProfileContent');
  content.innerHTML=
    '<div class="community-profile-head"><div class="community-profile-avatar">'+escapeHTML(profile.initials)+'</div><div class="community-profile-identity"><h2>'+escapeHTML(profile.name)+'</h2><span class="community-role-badge">'+escapeHTML(profile.kind)+'</span><p>'+escapeHTML(profile.headline)+'</p></div></div>'+
    '<section class="community-profile-section"><h3>About</h3><p>'+escapeHTML(profile.description)+'</p></section>'+
    '<section class="community-profile-section"><h3>Profile</h3><p>'+escapeHTML(profile.organization)+'</p></section>'+
    '<section class="community-profile-section"><h3>Skills & interests</h3><div class="community-profile-skills">'+skills+'</div></section>'+
    '<div class="community-profile-actions">'+(isSelf?'<button class="btn-primary" type="button" data-profile-action="self">View my profile</button>':'<button class="btn-primary" type="button" data-profile-action="message" data-profile-name="'+escapeHTML(profile.name)+'"><span class="material-icons-outlined">chat</span> Message</button><button class="btn-secondary community-follow-action'+(followed.has(profile.name)?' following':'')+'" type="button" data-profile-action="follow" data-profile-name="'+escapeHTML(profile.name)+'">'+(followed.has(profile.name)?'Following':'Follow')+'</button>')+'</div>';
  if(!content.dataset.profileActionsBound){
    content.addEventListener('click',event=>{
      const button=event.target.closest('[data-profile-action]');
      if(!button) return;
      const action=button.dataset.profileAction;
      if(action==='self'){showScreen('profile');return}
      const member=button.dataset.profileName;
      if(action==='message'){messageCommunityMember(member);return}
      if(action==='follow'){
        toggleFollow(member);
        const isFollowing=followed.has(member);
        button.textContent=isFollowing?'Following':'Follow';
        button.classList.toggle('following',isFollowing);
      }
    });
    content.dataset.profileActionsBound='true';
  }
  showScreen('communityProfile');
}
function closeCommunityProfile(){showScreen(communityProfileFrom)}
function messageCommunityMember(name){
  openChat(name,'communityProfile');
}
function commentRowHTML(c){
  const ini=c.ini||c.by.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return '<div class="comment-row"><button class="comment-avatar community-profile-trigger" type="button" data-community-profile="'+escapeHTML(c.by)+'" aria-label="View '+escapeHTML(c.by)+' profile">'+escapeHTML(ini)+'</button><div class="comment-body"><button class="comment-author community-profile-trigger" type="button" data-community-profile="'+escapeHTML(c.by)+'">'+escapeHTML(c.by)+'</button><p>'+escapeHTML(c.text)+'</p><span>'+escapeHTML(c.time)+'</span></div></div>';
}
function bindCommunityProfileLinks(container){
  if(!container||container.dataset.profileLinksBound) return;
  container.addEventListener('click',event=>{
    const trigger=event.target.closest('[data-community-profile]');
    if(!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    openCommunityProfile(trigger.dataset.communityProfile,container.closest('#screen-dashboard')?'dashboard':container.closest('#screen-post')?'post':'feed');
  },true);
  container.dataset.profileLinksBound='true';
}
function communityAuthorHTML(name,ini){
  return '<button class="community-author community-profile-trigger" type="button" data-community-profile="'+escapeHTML(name)+'" aria-label="View '+escapeHTML(name)+' profile"><span class="message-avatar">'+escapeHTML(ini)+'</span><span class="feed-who"><strong>'+escapeHTML(name)+'</strong><span>View profile</span></span></button>';
}
function feedCardHTML(p,i){
  const following=followed.has(p.name);
  const open=openThreads.has(i);
  const thread=(p.thread||[]).map(commentRowHTML).join('');
  return '<div class="feed-card">'
  +'<div class="feed-card-header">'+communityAuthorHTML(p.name,p.ini)+'<p class="feed-post-time">'+escapeHTML(p.time)+'</p>'
  +'<button class="follow-btn'+(following?' following':'')+'" onclick="toggleFollow(\''+p.name.replace(/'/g,"\\'")+'\')" aria-label="'+(following?'Unfollow ':'Follow ')+escapeHTML(p.name)+'">'+(following?'✓ Following':'+ Follow')+'</button></div>'
  +'<div class="feed-card-body">'+escapeHTML(p.text)+'</div>'
  +(p.img?'<img class="feed-card-image" src="'+p.img+'" alt="Post attachment">':'')
  +'<div class="feed-stats"><span id="lcount-'+i+'">'+p.likes+' likes</span><span id="ccount-'+i+'">'+p.comments+' comments</span></div>'
  +'<div class="feed-card-actions">'
  +'<button class="feed-action'+(p.liked?' liked':'')+'" onclick="toggleLike('+i+')"><span class="material-icons-outlined">'+(p.liked?'favorite':'favorite_border')+'</span>Like</button>'
  +'<button class="feed-action" onclick="toggleComments('+i+')" aria-expanded="'+open+'"><span class="material-icons-outlined">chat_bubble_outline</span>Comment</button>'
  +'<button class="feed-action" onclick="sharePost('+i+')"><span class="material-icons-outlined">share</span>Share</button>'
  +'</div>'
  +'<div class="comment-thread'+(open?' open':'')+'" id="cthread-'+i+'"><div class="comment-list" id="clist-'+i+'">'+thread+'</div>'
  +'<div class="comment-input-row"><input id="cinput-'+i+'" placeholder="Write a comment…" aria-label="Write a comment" onkeydown="if(event.key===\'Enter\')postComment('+i+')"><button onclick="postComment('+i+')" aria-label="Post comment"><span class="material-icons-outlined">send</span></button></div></div>'
  +'</div>';
}
function renderFeed(){
  const box=document.getElementById('feedList');
  if(!box) return;
  box.innerHTML=POSTS.map(feedCardHTML).join('');
  bindCommunityProfileLinks(box);
}
function toggleLike(i){
  if(!POSTS[i]) return;
  POSTS[i].liked=!POSTS[i].liked;POSTS[i].likes+=POSTS[i].liked?1:-1;
  persistFeed();renderFeed();renderDashCommunity();renderPostCommunity();
}
function toggleFollow(name){
  if(followed.has(name)){followed.delete(name);showToast('Unfollowed '+name,'info')}
  else{followed.add(name);showToast('Following '+name+' — you will see their updates first','success')}
  saveState();renderFeed();renderDashCommunity();renderPostCommunity();
}
function toggleComments(i){
  const el=document.getElementById('cthread-'+i);
  if(!el) return;
  if(openThreads.has(i)){openThreads.delete(i);el.classList.remove('open')}
  else{openThreads.add(i);el.classList.add('open');const inp=document.getElementById('cinput-'+i);if(inp) inp.focus()}
}
function postComment(i){
  const input=document.getElementById('cinput-'+i);
  if(!input) return;
  const text=(input.value||'').trim();
  if(!text){input.focus();return}
  const me=currentUser();
  POSTS[i].thread=POSTS[i].thread||[];
  POSTS[i].thread.push({by:me.name,ini:me.ini,text:text,time:'Just now'});
  POSTS[i].comments+=1;
  const list=document.getElementById('clist-'+i);
  if(list) list.insertAdjacentHTML('beforeend',commentRowHTML({by:me.name,ini:me.ini,text:text,time:'Just now'}));
  input.value='';
  const cc=document.getElementById('ccount-'+i);
  if(cc) cc.textContent=POSTS[i].comments+' comments';
  persistFeed();renderDashCommunity();renderPostCommunity();
}
function sharePost(i){
  const p=POSTS[i];
  if(!p) return;
  const text=p.name+': '+p.text;
  const done=()=>showToast('Post copied to clipboard','success');
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done))}
  else fallbackCopy(text,done);
}
function fallbackCopy(text,done){
  try{
    const t=document.createElement('textarea');
    t.value=text;t.setAttribute('readonly','');
    t.style.position='absolute';t.style.left='-9999px';
    document.body.appendChild(t);t.select();
    document.execCommand('copy');t.remove();done();
  }catch(e){showToast('Sharing is unavailable right now','error')}
}
function communityPreviewHTML(p){
  const i=POSTS.indexOf(p);
  const snippet=p.text.length>90?p.text.slice(0,90)+'…':p.text;
  return '<div class="dash-community-card" onclick="showScreen(\'feed\')" role="button" tabindex="0" aria-label="Open community feed" onkeydown="if(event.key===\'Enter\')showScreen(\'feed\')">'+communityAuthorHTML(p.name,p.ini)+'<div class="dash-community-body"><p>'+escapeHTML(snippet)+'</p><span>'+p.likes+' likes • '+p.comments+' comments</span></div><button class="feed-action'+(p.liked?' liked':'')+'" onclick="event.stopPropagation();toggleLike('+i+')" aria-label="Like post"><span class="material-icons-outlined">'+(p.liked?'favorite':'favorite_border')+'</span></button></div>';
}
function renderDashCommunity(){
  const box=document.getElementById('dashCommunity');
  if(!box) return;
  box.innerHTML=POSTS.slice(0,2).map(communityPreviewHTML).join('');
  bindCommunityProfileLinks(box);
}
function renderPostCommunity(){
  const box=document.getElementById('postCommunity');
  if(!box) return;
  box.innerHTML=POSTS.slice(0,3).map(communityPreviewHTML).join('');
  bindCommunityProfileLinks(box);
}
function persistFeed(){
  try{localStorage.setItem('internlink_feed_v1',JSON.stringify(POSTS.map(p=>({name:p.name,ini:p.ini,time:p.time,text:p.text,likes:p.likes,comments:p.comments,liked:p.liked,thread:p.thread||[]}))))}catch(e){}
}
function restoreFeed(){
  try{
    const raw=localStorage.getItem('internlink_feed_v1');
    if(!raw) return false;
    const arr=JSON.parse(raw);
    if(!Array.isArray(arr)||!arr.length) return false;
    POSTS.length=0;
    arr.forEach(p=>POSTS.push({likes:0,comments:0,liked:false,thread:[],time:'Just now',...p,img:null}));
    return true;
  }catch(e){return false}
}

/* ═══ Edit Profile ═══ */
function openEditProfile(){showScreen('editProfile')}
function saveProfile(){
  const name=document.getElementById('editName').value.trim();
  if(!name){showToast('Name is required','error');return}
  document.getElementById('dashName').textContent=name;
  const ini=name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
  document.querySelector('#screen-profile .avatar').textContent=ini;
  document.querySelector('#screen-profile h3').textContent=name;
  const skills=document.getElementById('editSkills').value.split(',').map(s=>s.trim()).filter(Boolean);
  document.querySelector('#screen-profile .mb-16').innerHTML=skills.map(s=>'<span class="chip">'+escapeHTML(s)+'</span>').join('');
  showToast('Profile updated!','success');
  showScreen('profile');
}

/* ═══ Document Upload ═══ */
function handleDocUpload(type){
  const input=document.createElement('input');
  input.type='file';
  input.accept='.pdf,.doc,.docx,.png,.jpg,.jpeg';
  input.onchange=function(){
    if(this.files&&this.files[0]){
      const f=this.files[0];
      showToast(f.name+' uploaded!','success');
    }
  };
  input.click();
}

/* ═══ OJT Hour Logging ═══ */
let ojtLogs=[
  {date:'Oct 5',hours:8,status:'approved'},
  {date:'Oct 4',hours:8,status:'approved'},
  {date:'Oct 3',hours:8,status:'pending'}
];
function renderOjtLogs(){
  const box=document.getElementById('ojtLogList');
  if(!box)return;
  box.innerHTML=ojtLogs.map(l=>'<div class="ojt-log-card"><h4>'+l.date+'</h4><p>'+l.hours+' hours — '+l.status+'</p></div>').join('');
  const balance=document.getElementById('ojtLogBalance');
  if(balance) balance.textContent=remainingHours()+' unlogged hours remaining. Pending hours count toward this balance.';
  const input=document.getElementById('ojtHoursInput');
  if(input) input.max=String(Math.min(24,remainingHours()));
}
function logOjtHours(){
  const input=document.getElementById('ojtHoursInput');
  const h=Number(input.value),balance=remainingHours();
  if(!Number.isInteger(h)||h<1||h>24){showToast('Enter a whole number of hours between 1 and 24','error');return}
  if(balance===0){showToast('You have no unlogged OJT hours remaining','info');return}
  if(h>balance){showToast('You can log up to '+balance+' unlogged hours','error');return}
  const today=new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'});
  ojtLogs.unshift({date:today,hours:h,status:'pending'});
  pendingHours+=h;
  input.value='';
  renderOjtLogs();
  saveState();
  animateProgressRing();
  showToast(h+' hours logged for approval','success');
}

/* ═══ Photo Upload for Posts ═══ */
function handlePhotoUpload(){
  const input=document.createElement('input');
  input.type='file';
  input.accept='image/*';
  input.onchange=function(){
    if(this.files&&this.files[0]){
      clearPendingPhoto();
      try{pendingPhotoUrl=URL.createObjectURL(this.files[0])}catch(e){pendingPhotoUrl=null}
      const box=document.getElementById('postPhotoPreview');
      if(box) box.innerHTML='<div class="post-photo-chip"><span class="material-icons-outlined">photo_camera</span><span>'+escapeHTML(this.files[0].name)+'</span><button onclick="clearPendingPhoto()" aria-label="Remove photo"><span class="material-icons-outlined">close</span></button></div>';
      showToast('Photo attached!','success');
    }
  };
  input.click();
}

/* ═══ Employer/School Card Actions ═══ */
function handleRoleCardAction(type){
  if(type==='view')showToast('Opening applicant details...','info');
  else if(type==='endorse')showToast('Endorsement letter sent!','success');
  else if(type==='approve')showToast('Hours approved!','success');
  else if(type==='review')showToast('Opening MOA document...','info');
  else showToast('Action completed','success');
}

class ScreenManager{
  show(name){
    const screen=document.getElementById('screen-'+name);
    if(!screen) throw new Error('Unknown screen: '+name);
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    screen.classList.add('active');
    document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.nav===name));
    document.getElementById('phone').classList.toggle('no-nav',noNavScreens.has(name));
    document.querySelector('.screens').scrollTop=0;
    const statusbar=document.getElementById('statusbar');
    if(name==='onboarding'||name==='loginOptions'){statusbar.classList.add('light');statusbar.classList.remove('dark')}
    else{statusbar.classList.remove('light');statusbar.classList.add('dark')}
    if(name==='dashboard'){updateDashboardForRole();animateDashboard();renderDashCommunity();requestAnimationFrame(()=>{try{initDashMap();updateDashMap()}catch(e){}})}
    if(name==='matches'){
      mapRefit=true;
      requestAnimationFrame(()=>{renderMap(getFiltered());try{if(miniMap){miniMap.invalidateSize();miniMap.setView([userLocation.lat,userLocation.lng],miniMap.getZoom())}}catch(e){}});
    }
    if(name==='applications') renderApplications();
    if(name==='messages') renderMessages();
    if(name==='notifications') renderNotifications();
    if(name==='feed') renderFeed();
    if(name==='post') renderPostCommunity();
    if(name==='ojtLog') renderOjtLogs();
  }
}

class AuthController{
  constructor(){
    this.method='email';
    this.mode='login';
  }

  setMode(mode){
    const isSignup=mode==='signup';
    this.mode=isSignup?'signup':'login';
    this.method=mode==='phone'?'phone':'email';
    const contactInput=document.getElementById('loginEmail');
    const contactLabel=document.querySelector('label[for="loginEmail"]');
    const isPhone=this.method==='phone';
    contactLabel.textContent=isPhone?'Phone number':'Email address';
    contactInput.type=isPhone?'tel':'email';
    contactInput.autocomplete=isPhone?'tel':'email';
    contactInput.placeholder=isPhone?'+63 9XX XXX XXXX':'you@school.edu.ph';
    document.getElementById('loginTitle').textContent=isSignup?'Create your account':isPhone?'Continue with your phone':'Welcome back';
    document.getElementById('loginDesc').textContent=isSignup?'Tell us a bit about yourself. It takes about a minute.':isPhone?'Enter your phone number and password to continue.':'Sign in to continue your internship journey.';
    document.getElementById('loginSubmit').textContent=isSignup?'Create account':isPhone?'Continue':'Log in';
    internLinkApp.screens.show('login');
  }

  continueWithCredentials(contact,password){
    if(this.method==='phone'){
      const digits=contact.replace(/\D/g,'');
      if(digits.length<10||digits.length>15){showToast('Please enter a valid phone number','error');return}
    }else if(!contact||!contact.includes('@')){
      showToast('Please enter a valid email','error');return;
    }
    if(!password||password.length<6){showToast('Password must be at least 6 characters','error');return}
    showToast(this.mode==='signup'?'Demo only — no account was created.':'Demo sign-in — no credentials were sent.','info');
    showScreen('roleSelect');
  }
}

class OverlayController{
  setOpen(id,isOpen){
    const overlay=document.getElementById(id);
    if(!overlay) throw new Error('Unknown overlay: '+id);
    overlay.classList.toggle('open',isOpen);
    overlay.inert=!isOpen;
    overlay.setAttribute('aria-hidden',String(!isOpen));
  }
}

class InternLinkApp{
  constructor(){
    this.screens=new ScreenManager();
    this.auth=new AuthController();
    this.overlays=new OverlayController();
  }

  init(){
    try{
      if(localStorage.getItem('internlink_theme')==='dark'){
        document.getElementById('phone').classList.add('dark');
        const sw=document.getElementById('profileThemeSwitch');
        if(sw) sw.classList.add('on');
      }
    }catch(e){}
    document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();internLinkApp.auth.continueWithCredentials(document.getElementById('loginEmail').value.trim(),document.getElementById('loginPass').value)});
    document.querySelectorAll('.navbtn').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.nav)));
    initSkillFilter();renderDashList();applyFilters();renderApplications();renderMessages();renderNotifications();renderFeed();renderOjtLogs();
    setView('map',document.querySelector('.toggle-btn[data-view="map"]'));

    const hasState=loadState();
    syncMapControls();
    applyFilters();
    renderFeed();renderDashCommunity();
    if(hasState&&selectedRole){
      const cfg=PURPOSE_OPTIONS[selectedRole];
      if(cfg&&selectedPurpose){
        document.getElementById('dashRoleText').textContent=cfg.badgeText+' \u2022 '+selectedPurpose.title;
        document.querySelector('#dashRoleBadge .material-icons-outlined').textContent=cfg.badgeIcon;
      }
      updateDashboardForRole();
      renderApplications();
      showScreen('dashboard');
    }else{
      showScreen('onboarding');
    }
  }
}

/* ═══ Theme (dark mode) ═══ */
function toggleTheme(){
  const phone=document.getElementById('phone');
  const dark=phone.classList.toggle('dark');
  const sw=document.getElementById('profileThemeSwitch');
  if(sw) sw.classList.toggle('on',dark);
  try{localStorage.setItem('internlink_theme',dark?'dark':'light')}catch(e){}
  showToast(dark?'Dark mode on':'Light mode on','info');
}

/* ═══ Dashboard proximity mini-map ═══ */
let dashMap=null,dashLayer=null,dashReady=false;
function initDashMap(){
  if(dashReady||typeof L==='undefined') return;
  const el=document.getElementById('dashMap');
  if(!el) return;
  dashMap=L.map('dashMap',{zoomControl:false,attributionControl:true,dragging:false,scrollWheelZoom:false,doubleClickZoom:false,boxZoom:false,keyboard:false,tap:true});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(dashMap);
  try{dashMap.attributionControl.setPrefix(false)}catch(e){}
  dashReady=true;
  updateDashMap();
}
function updateDashMap(){
  if(!dashReady||typeof L==='undefined'||!dashMap) return;
  try{recalcDistances()}catch(e){}
  if(dashLayer){try{dashLayer.remove()}catch(e){}dashLayer=null}
  dashLayer=L.layerGroup().addTo(dashMap);
  L.circleMarker([userLocation.lat,userLocation.lng],{radius:7,color:'#fff',weight:3,fillColor:'#1E3F2A',fillOpacity:1}).addTo(dashLayer);
  const top=[...MATCHES].sort((a,b)=>b.overall-a.overall).slice(0,3);
  const pts=[[userLocation.lat,userLocation.lng]];
  top.forEach(m=>{
    if(m.lat==null||m.lng==null) return;
    pts.push([m.lat,m.lng]);
    L.marker([m.lat,m.lng],{icon:pinIcon(m),title:m.role+' — '+m.company,interactive:false}).addTo(dashLayer);
  });
  try{
    dashMap.invalidateSize();
    dashMap.fitBounds(pts,{padding:[28,28]});
    if(dashMap.getZoom()>14) dashMap.setZoom(14);
  }catch(e){try{dashMap.setView([userLocation.lat,userLocation.lng],12)}catch(_){}}
}

internLinkApp=new InternLinkApp();
internLinkApp.init();
